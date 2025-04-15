"use client";

import dynamic from "next/dynamic";
import Loading from "../../../components/shared/Loading";
const SingleCard = dynamic(() => import("./SingleProductCard"), {
  loading: () => <Loading />,
  ssr: false,
});

const ClientSingleCard = ({ product }) => {
  return <SingleCard product={product} />;
};

export default ClientSingleCard;
