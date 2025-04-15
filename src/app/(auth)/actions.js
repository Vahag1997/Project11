"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import { headers } from "next/headers";
import { revalidateTag } from "next/cache";

export async function login(formData) {
  const supabase = await createClient();

  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error, data } = await supabase.auth.signInWithPassword(credentials);

  if (error) {
    return {
      status: error?.message,
      user: null,
    };
  }

  const { data: existingUser } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("email", credentials?.email)
    .limit(1)
    .single();

  if (!existingUser) {
    const { error: insertError } = await supabase.from("user_profiles").insert({
      email: data?.user?.email,
      username: data?.user?.user_metadata?.username,
    });

    if (insertError) {
      return {
        status: 500,
        error: insertError?.message,
        user: null,
      };
    }
  }

  revalidatePath("/", "layout");
  return {
    status: "success",
    user: data?.user,
  };
}

export async function signUp(formData) {
  const supabase = await createClient();

  const credentials = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error, data } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        username: credentials.username,
      },
    },
  });

  if (error) {
    return {
      status: error?.message,
      user: null,
    };
  } else if (data?.user?.identities?.length === 0) {
    return {
      status: "User with this email already exists, please login",
      user: null,
    };
  }

  revalidatePath("/", "layout");
  return {
    status: "success",
    user: data?.user,
  };
}

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function getUserSession() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return { status: "success", user: data?.user };
}

export async function forgotPassword(formData) {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  const { error } = await supabase.auth.resetPasswordForEmail(
    formData.get("email"),
    {
      redirectTo: `${origin}/reset-password`,
    }
  );

  if (error) {
    return { status: error.message };
  }

  return { status: "success" };
}

export async function resetPassword(formData, code) {
  const supabase = await createClient();
  const { error: CodeError } = await supabase.auth.exchangeCodeForSession(code);

  if (CodeError) {
    return { status: CodeError.message };
  }

  const { error } = await supabase.auth.updateUser({
    password: formData.get("password"),
  });

  if (error) {
    return { status: error.message };
  }

  return { status: "success" };
}

export async function loginWithGoogle() {
  const supabase = await createClient();
  const origin = (await headers()).get("origin"); // Get current site URL

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`, // Redirect user to our callback route
    },
  });

  if (error) {
    console.error("Google Auth Error:", error.message);
    return { status: "error", message: error.message };
  }

  return { status: "redirect", url: data.url };
}

export async function loginWithFacebook() {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error("Facebook Auth Error:", error.message);
    return { status: "error", message: error.message };
  }

  return { status: "redirect", url: data.url };
}

export async function addToWishlist(productId) {
  const supabase = await createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) throw new Error("Not authenticated");

  const { error } = await supabase
    .from("wishlist")
    .insert({ user_id: user.id, product_id: productId });
  revalidateTag("wishlist");
  if (error) throw error;
}

export async function removeFromWishlist(productId) {
  const supabase = await createClient();
  const { status, user } = await getUserSession();

  if (status !== "success" || !user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("wishlist")
    .delete()
    .eq("user_id", user.id)
    .eq("product_id", productId);
  revalidateTag("wishlist");
  if (error) {
    console.error("Error removing from wishlist:", error);
    throw error;
  }

  return { success: true };
}
