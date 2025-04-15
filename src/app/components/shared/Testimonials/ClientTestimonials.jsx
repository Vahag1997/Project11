"use client";

import dynamic from "next/dynamic";
import Loading from "../Loading";
const Testimonial = dynamic(() => import("./Testimonials"), {
  loading: () => <Loading />,
  ssr: false,
});

const ClientTestimonials = () => {
  return <Testimonial />;
};

export default ClientTestimonials;
