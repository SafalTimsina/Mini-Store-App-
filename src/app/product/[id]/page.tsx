import { getProduct } from "@/lib/api";
import { notFound } from "next/navigation";
import { ProductDetail } from "./detail";
// import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

// type MetaProps = {
//   params: Promise<{ id: string }>;
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// const API = "https://api.freeapi.app/api/v1/public/randomproducts/";
// export async function generateMetadata({ params }: MetaProps): Promise<Metadata> {
//   const { id } = await params;
//   const hostUrl = API_BASE;
//   const imageUrl = API_BASE;
//   const productmeta = await fetch(API + id).then((res) => res.json());

//   return {
//     title: productmeta?.data?.title,
//     description: productmeta.data?.overview || "MiniStore",
//     keywords: "",

//     openGraph: {
//       url: `${hostUrl}${id}`,
//       title: productmeta.data?.title,
//       description: productmeta.data?.description,
//       images: [
//         {
//           url: `${imageUrl + productmeta?.data?.thumbnail}`,
//           width: 800,
//           height: 600,
//           alt: productmeta?.data?.title,
//           type: "image/jpeg,image/png",
//         },
//       ],
//       siteName: "Movie Night Mayhem",
//     },
//   };
// }

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}