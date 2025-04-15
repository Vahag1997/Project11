import { createServerDataClient } from "./supabaseData";
import { createClient } from "./client";
import { getUserSession } from "../../src/app/(auth)/actions";
export const fetchCache = 'force-cache';
export const dynamic = 'force-dynamic';


export async function getBrands() {
  const supabase = createServerDataClient();
  const { data: brands, error } = await supabase
    .from("brands")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching brands:", error);
    return [];
  }

  return brands;
}

export async function getPerfumes({
  gender,
  brand,
  minPrice,
  maxPrice,
  sale,
  note,
  page = 1,
  perPage = 12,
  sort,
}) {
  const supabase = createServerDataClient();

  let query = supabase.from("perfumes").select(
    `
            id, name, description, brand, gender, discount, created_at,
            product_images (image_url, image_type),
            product_accords!inner(accord_name)
        `,
    { count: "exact" }
  );

  if (note) {
    query = query.ilike("product_accords.accord_name", `%${note}%`);
  }

  switch (sort) {
    case "price-asc":
      query = query.order("price", { ascending: true });
      break;
    case "price-desc":
      query = query.order("price", { ascending: false });
      break;
    case "new-arrivals":
      query = query.order("created_at", { ascending: false });
      break;
    case "all-sale":
      query = query.order("discount", { ascending: false });
      break;
    default:
      query = query.order("created_at", { ascending: false });
      break;
  }

  if (gender) query = query.eq("gender", gender);
  if (brand) query = query.ilike("brand", `%${brand}%`);
  if (minPrice) query = query.gte("price", minPrice);
  if (maxPrice) query = query.lte("price", maxPrice);
  if (sale) {
    const discountValue = parseFloat(sale.replace("%", ""));
    query = query.gte("discount", discountValue);
  }

  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  const { data, error, count } = await query.range(from, to);

  if (error) {
    console.error("Error fetching perfumes:", error.message);
    return { data: [], total: 0 };
  }

  const { status, user } = await getUserSession();
  let wishlistIds = [];
  if (status === "success" && user) {
    wishlistIds = await getUserWishlistProductIds();
  }

  const enriched = (data || []).map((product) => ({
    ...product,
    in_wishlist: wishlistIds.includes(product.id),
  }));

  return { data: enriched, total: count };
}

export async function getBestSellers() {
  const supabase = createServerDataClient();
  const { data: perfumes, error } = await supabase
    .from("perfumes")
    .select(
      `
        id, name, description, brand, gender, discount, created_at,
        product_images (image_url, image_type)
      `
    )
    .order("created_at", { ascending: false }) // Change sorting as needed
    .limit(9);
console.log(perfumes,"perfume");

  if (error) {
    console.error("Error fetching best sellers:", error);
    return [];
  }
  return perfumes;
}

export async function getNewArrivals() {
  const supabase = createServerDataClient();
  const { data: perfumes, error } = await supabase
    .from("perfumes")
    .select(
      `
        id, name, description, brand, gender, discount, created_at,
        product_images (image_url, image_type)
      `
    )
    .order("created_at", { ascending: false })
    .limit(9);

  if (error) {
    console.error("Error fetching new arrivals:", error);
    return [];
  }
  return perfumes;
}

export async function getOnSale() {
  const supabase = createServerDataClient();
  const { data: perfumes, error } = await supabase
    .from("perfumes")
    .select(
      `
        id, name, description, brand, gender, discount, created_at,
        product_images (image_url, image_type)
      `
    )
    .gt("discount", 0) // Only fetch products that have a discount
    .order("discount", { ascending: false }) // Sort by highest discount
    .limit(9);

  if (error) {
    console.error("Error fetching on-sale products:", error);
    return [];
  }
  return perfumes;
}

export async function getSimilarProducts(productId) {
  const supabase = createServerDataClient();

  const { data, error } = await supabase.rpc("get_similar_products", {
    _product_id: productId,
  });

  if (error) {
    console.error("Error fetching similar products:", error);
    return [];
  }

  return data;
}

export async function getOtherBrandProducts(brand, excludeProductId) {
  const supabase = createServerDataClient();

  const { data: otherProducts, error } = await supabase
    .from("perfumes")
    .select(
      `
          id, name, description, brand, gender, discount, created_at,
          product_images (image_url, image_type)
      `
    )
    .eq("brand", brand)
    .neq("id", excludeProductId)
    .limit(9);

  if (error) {
    console.error("Error fetching other brand products:", error);
    return [];
  }

  return otherProducts;
}

export async function getPerfumeById(productId) {
  const supabase = createServerDataClient();

  const { data, error } = await supabase
    .from("perfumes")
    .select(
      `
            id, name, description, brand, gender, discount, created_at, updated_at,
            product_images (image_url, image_type),
            product_accords!product_id (accord_name, intensity, color),
            product_sizes (size, price),
            product_reviews (rating, comment, created_at)
        `
    )
    .eq("id", productId)
    .order("intensity", { ascending: false, foreignTable: "product_accords" })
    .single();

  if (error) {
    console.error("Error fetching product:", error.message);
    return null;
  }

  return data;
}

export async function getProductVotes(productId) {
  const supabase = createServerDataClient();

  const { data, error } = await supabase
    .from("product_votes")
    .select("category, option_key, votes_count")
    .eq("product_id", productId);

  if (error) {
    console.error("Error fetching votes:", error.message);
    return [];
  }

  return data;
}

export async function updateProductVote(productId, category, optionKey) {
  const supabase = createClient(); // ✅ Use client-side Supabase

  // 🔹 Check if the vote already exists
  const { data: existingVote, error: fetchError } = await supabase
    .from("product_votes")
    .select("votes_count")
    .eq("product_id", productId)
    .eq("category", category)
    .eq("option_key", optionKey)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    // Ignore "no rows found" error
    console.error("Error fetching vote:", fetchError.message);
    return null;
  }

  if (existingVote) {
    // ✅ If vote exists, update it
    const { data, error } = await supabase
      .from("product_votes")
      .update({ votes_count: existingVote.votes_count + 1 })
      .eq("product_id", productId)
      .eq("category", category)
      .eq("option_key", optionKey)
      .select();

    if (error) {
      console.error("Error updating vote:", error.message);
      return null;
    }
    return data;
  } else {
    // ✅ If vote doesn't exist, insert a new one
    const { data, error } = await supabase
      .from("product_votes")
      .insert([
        {
          product_id: productId,
          category,
          option_key: optionKey,
          votes_count: 1,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting vote:", error.message);
      return null;
    }
    return data;
  }
}

export async function getBlogs() {
  const supabase = createServerDataClient();

  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("id, title, slug, excerpt, cover_image, author, created_at, views")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }

  return blogs;
}

export async function getBlogBySlug(slug) {
  const supabase = createServerDataClient();

  const { data: blog, error } = await supabase
    .from("blogs")
    .select(
      `
            id, title, slug, cover_image, author, created_at, views,
            blog_sections (content, image)
        `
    )
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching blog:", error);
    return null;
  }

  // ✅ Map sections directly without sanitization
  blog.sections = blog.blog_sections.map((section) => ({
    content: section.content,
    image: section.image,
  }));

  return blog;
}

export async function incrementBlogViews(slug) {
  const supabase = createClient();

  const { error } = await supabase.rpc("increment_blog_views", {
    blog_slug: slug,
  });

  if (error) {
    console.error("Error updating blog views:", error);
  }
}

export async function getUserWishlist() {
  const supabase = createServerDataClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    throw new Error("User not authenticated");
  }

  const { data: wishlist, error: wishlistError } = await supabase
    .from("wishlist")
    .select("product_id")
    .eq("user_id", user.id);

  if (wishlistError) {
    console.error("Supabase error (wishlist fetch):", wishlistError);
    throw wishlistError;
  }

  const productIds = wishlist?.map((item) => item.product_id) || [];
  if (productIds.length === 0) return [];

  const { data: perfumes, error: perfumesError } = await supabase
    .from("perfumes")
    .select(`
      id,
      name,
      description,
      brand,
      discount,
      product_images!inner (
        image_url,
        image_type
      )
    `)
    .in("id", productIds)
    .filter("product_images.image_type", "eq", "primary");

  if (perfumesError) {
    console.error("Supabase error (perfume lookup):", perfumesError);
    throw perfumesError;
  }

  return (perfumes || []).map((p) => ({
    ...p,
    in_wishlist: true,
  }));
}


export async function addToWishlist(productId) {
  const supabase = createServerDataClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    throw new Error("User not authenticated");
  }

  const { data, error } = await supabase
    .from("wishlist")
    .insert({
      user_id: user.id,
      product_id: productId,
    })
    .select();

  if (error) {
    console.error("Error adding to wishlist:", error);
    throw error;
  }

  return data;
}


export async function removeFromWishlist(productId) {
  const supabase = createServerDataClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", productId);

  if (error) {
    console.error("Error removing from wishlist:", error);
    throw error;
  }

  return { success: true };
}

export async function getUserWishlistProductIds() {
  const supabase = createServerDataClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    return [];
  }

  const { data, error } = await supabase
    .from("wishlist")
    .select("product_id")
    .eq("user_id", user.id);

  if (error) {
    console.error("Error fetching wishlist product IDs:", error);
    return [];
  }

  return data.map((item) => item.product_id);
}

export async function getUserCardItems() {
  const supabase =  createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("card")
    .select("*")
    .eq("user_id", user.id)
    .order("added_at", { ascending: false });

  if (error) throw error;

  return data;
}


export async function addToCard({ productId, size, price, brand, image, name }) {
  const supabase =  createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) throw new Error("Not authenticated");

  const { data: existing } = await supabase
    .from("card")
    .select("id, quantity")
    .eq("user_id", user.id)
    .eq("product_id", productId)
    .eq("size", size)
    .single();

  if (existing) {
    const { error } = await supabase
      .from("card")
      .update({ quantity: existing.quantity + 1 })
      .eq("id", existing.id);

    if (error) throw error;
  } else {
    const { error } = await supabase.from("card").insert({
      user_id: user.id,
      product_id: productId,
      size,
      price,
      brand,
      image,
      name,
      quantity: 1,
    });

    if (error) throw error;
  }
}

export async function removeFromCard(productId, size) {
  const supabase = createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) throw new Error("User not authenticated");

  const { error } = await supabase
    .from("card")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", productId)
    .eq("size", size);

  if (error) throw error;
}

export async function updateCardQuantity(productId, size, quantity) {
  const supabase = await createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("card")
    .update({ quantity })
    .eq("user_id", user.id)
    .eq("product_id", productId)
    .eq("size", size);

  if (error) {
    console.error("Failed to update cart quantity", error);
    throw error;
  }

  return { success: true };
}

export async function placeOrder(form, cartItems,totalPrice) {
  const supabase = createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    throw new Error("User not authenticated");
  }

  const { name, surname, phone, city, address, description } = form;

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      user_id: user.id,
      name,
      surname,
      phone,
      city,
      address,
      description,
      total_price: totalPrice,
    })
    .select()
    .single();

  if (orderError) throw orderError;

  const itemsPayload = cartItems.map((item) => ({
    order_id: order.id,
    product_id: item.product_id,
    size: item.size,
    quantity: item.quantity,
    price: item.price,
  }));

  const { error: orderItemsError } = await supabase
    .from("order_items")
    .insert(itemsPayload);

  if (orderItemsError) throw orderItemsError;

  // Clear cart after placing the order
  await supabase
    .from("card")
    .delete()
    .eq("user_id", user.id);

  return order;
}

export async function getUserOrdersWithItems() {
  const supabase = createClient();
  const { status, user } = await getUserSession();

  if (status !== 'success' || !user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('orders')
    .select(`
      id,
      created_at,
      total_price,
      order_items (
        id,
        product_id,
        size,
        quantity,
        price,
        perfumes (
          name,
          brand,
          product_images (
            image_url,
            image_type
          )
        )
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}