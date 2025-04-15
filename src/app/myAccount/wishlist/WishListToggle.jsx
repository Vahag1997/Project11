"use client";

import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { addToWishlist, removeFromWishlist } from "../../(auth)/actions";

export function WishlistToggle({ productId, initial }) {
  const [liked, setLiked] = useState(initial);
  const [loading, setLoading] = useState(false);

  const toggle = async () => {
    setLiked(!liked); 
    setLoading(true);

    try {
      liked
        ? await removeFromWishlist(productId)
        : await addToWishlist(productId);
    } catch (e) {
      setLiked(liked); 
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <IconButton
      onClick={toggle}
      bg="none"
      height="auto"
      color="black"
      isLoading={loading}
      size={"2xl"}
    >
      {liked ? <IoIosHeart fill="#0E623E" /> : <IoIosHeartEmpty fill="#0E623E" />}
    </IconButton>
  );
}
