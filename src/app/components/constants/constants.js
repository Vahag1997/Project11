import {
  HandsIcon,
  CheckIcon,
  HeartIcon,
  AvatarsIcon,
  HandLeafIcon,
  CommunityIcon,
} from "../../about/icons/Valueicons";
import Versace from "../../../../public/brandsLogos/versace.webp";
import Dior from "../../../../public/brandsLogos/christiandior.webp";
import Chanel from "../../../../public/brandsLogos/channel.webp";
import Dolce from "../../../../public/brandsLogos/dolcegabbana.webp";
import Gucci from "../../../../public/brandsLogos/gucci.webp";
import JeanPaul from "../../../../public/brandsLogos/jeanpaul.webp";
import MontBlanc from "../../../../public/brandsLogos/montblanc.webp";
import Prada from "../../../../public/brandsLogos/prada.webp";

import Citrus from "../../../../public/images/Citrus.webp";
import Leather from "../../../../public/images/Leather.webp";
import Floral from "../../../../public/images/Floral.webp";
import Tobacco from "../../../../public/images/Tobacco.webp";
import Spicy from "../../../../public/images/Spicy.webp";
import Fruty from "../../../../public/images/Fruty.webp";
import Vanille from "../../../../public/images/Vanille.webp";
import Woody from "../../../../public/images/Woody.webp";
import Alcohol from "../../../../public/images/Alcohol.webp";
import Aquatic from "../../../../public/images/Aquatic.webp";
import Gourmet from "../../../../public/images/Gourmet.webp";
import Oriental from "../../../../public/images/Oriental.webp";

const NOTES = [
  { name: "floral", logo: Floral },
  { name: "woody", logo: Woody },
  { name: "tobacco", logo: Tobacco },
  { name: "vanille", logo: Vanille },
  { name: "spicy", logo: Spicy },
  { name: "citrus", logo: Citrus },
  { name: "leather", logo: Leather },
  { name: "oriental", logo: Oriental },
  { name: "aquatic", logo: Aquatic },
  { name: "alcohol", logo: Alcohol },
  { name: "gourmet", logo: Gourmet },
  { name: "fruty", logo: Fruty },
];

const BRANDS = [
  { name: "Dior", logo: Dior },
  { name: "Dolce & Gabbana", logo: Dolce },
  { name: "Channel", logo: Chanel },
  { name: "Prada", logo: Prada },
  { name: "Gucci", logo: Gucci },
  { name: "Mont Blanc", logo: MontBlanc },
  { name: "Jean Paul Gaultier", logo: JeanPaul },
  { name: "Versace", logo: Versace },
];

const HOMEPAGESLIDES = [
  {
    image: "/headerImages/home.webp",
    title: "Slide 1",
    description: "This is the description for slide 1",
  },
  {
    image: "/headerImages/about.webp",
    title: "Slide 2",
    description: "This is the description for slide 2",
  },
  {
    image: "/headerImages/brands.webp",
    title: "Slide 3",
    description: "This is the description for slide 3",
  },
  {
    image: "/headerImages/product.webp",
    title: "Slide 4",
    description: "This is the description for slide 3",
  },
  {
    image: "/headerImages/blog.webp",
    title: "Slide 5",
    description: "This is the description for slide 3",
  },
];

const PRODUCTS = [
  {
    image:
      "https://ddlnhqzqkolahqjfjoat.supabase.co/storage/v1/object/public/parfume%20images//Amouage.webp",
    name: "Amouage",
    description: "Epic Man",
    price: "$805 - $1100",
    discount: "20%",
  },
  {
    image:
      "https://ddlnhqzqkolahqjfjoat.supabase.co/storage/v1/object/public/parfume%20images//Amouage.webp",
    name: "Amouage",
    description: "Epic Man",
    price: "$805 - $1100",
    discount: "20%",
  },
  {
    image:
      "https://ddlnhqzqkolahqjfjoat.supabase.co/storage/v1/object/public/parfume%20images//Amouage.webp",
    name: "Amouage",
    description: "Epic Man",
    price: "$805 - $1100",
    discount: "20%",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XUT04951U1Gk90pC2nqd3kWi7dOMmHiUS783jfYjovl78F3DFNk2cG3eehTeg0legafSLNAIY87Z3bc7PA-Ht7s1TD2aYVJB-4pCPPdBbVd-av42Zehsus2t0M2WUhjL~iOfs9e~LTKGCPuW3Y8KLVtghDjHhGFdOXrlwyLClj2UZKI2LfQxa4BibLU~8VzSbT8azJf4dtFm8UwrJPovZyk2xajnYu14FJQXdVMCHwksi89Rx1bVSDZ63qZVzqHym6SOsGaJCabrWRvZdpHQeGopOWqGOiReHQlba-yWuIkGHIYzLt0nR0FHhp4CE0o2MN-EdGziY9Z3yX4WadZgnw__",
    name: "Amouage",
    description: "Epic Man",
    price: "$805 - $1100",
    discount: "20%",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XUT04951U1Gk90pC2nqd3kWi7dOMmHiUS783jfYjovl78F3DFNk2cG3eehTeg0legafSLNAIY87Z3bc7PA-Ht7s1TD2aYVJB-4pCPPdBbVd-av42Zehsus2t0M2WUhjL~iOfs9e~LTKGCPuW3Y8KLVtghDjHhGFdOXrlwyLClj2UZKI2LfQxa4BibLU~8VzSbT8azJf4dtFm8UwrJPovZyk2xajnYu14FJQXdVMCHwksi89Rx1bVSDZ63qZVzqHym6SOsGaJCabrWRvZdpHQeGopOWqGOiReHQlba-yWuIkGHIYzLt0nR0FHhp4CE0o2MN-EdGziY9Z3yX4WadZgnw__",
    name: "Amouage",
    description: "Epic Man",
    price: "$805 - $1100",
    discount: "20%",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XUT04951U1Gk90pC2nqd3kWi7dOMmHiUS783jfYjovl78F3DFNk2cG3eehTeg0legafSLNAIY87Z3bc7PA-Ht7s1TD2aYVJB-4pCPPdBbVd-av42Zehsus2t0M2WUhjL~iOfs9e~LTKGCPuW3Y8KLVtghDjHhGFdOXrlwyLClj2UZKI2LfQxa4BibLU~8VzSbT8azJf4dtFm8UwrJPovZyk2xajnYu14FJQXdVMCHwksi89Rx1bVSDZ63qZVzqHym6SOsGaJCabrWRvZdpHQeGopOWqGOiReHQlba-yWuIkGHIYzLt0nR0FHhp4CE0o2MN-EdGziY9Z3yX4WadZgnw__",
    name: "Amouage",
    description: "Epic Man",
    price: "$85 - $110",
    discount: "20%",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XUT04951U1Gk90pC2nqd3kWi7dOMmHiUS783jfYjovl78F3DFNk2cG3eehTeg0legafSLNAIY87Z3bc7PA-Ht7s1TD2aYVJB-4pCPPdBbVd-av42Zehsus2t0M2WUhjL~iOfs9e~LTKGCPuW3Y8KLVtghDjHhGFdOXrlwyLClj2UZKI2LfQxa4BibLU~8VzSbT8azJf4dtFm8UwrJPovZyk2xajnYu14FJQXdVMCHwksi89Rx1bVSDZ63qZVzqHym6SOsGaJCabrWRvZdpHQeGopOWqGOiReHQlba-yWuIkGHIYzLt0nR0FHhp4CE0o2MN-EdGziY9Z3yX4WadZgnw__",
    name: "Amouage",
    description: "Epic Man",
    price: "$85 - $110",
    discount: "20%",
  },
  {
    image:
      "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XUT04951U1Gk90pC2nqd3kWi7dOMmHiUS783jfYjovl78F3DFNk2cG3eehTeg0legafSLNAIY87Z3bc7PA-Ht7s1TD2aYVJB-4pCPPdBbVd-av42Zehsus2t0M2WUhjL~iOfs9e~LTKGCPuW3Y8KLVtghDjHhGFdOXrlwyLClj2UZKI2LfQxa4BibLU~8VzSbT8azJf4dtFm8UwrJPovZyk2xajnYu14FJQXdVMCHwksi89Rx1bVSDZ63qZVzqHym6SOsGaJCabrWRvZdpHQeGopOWqGOiReHQlba-yWuIkGHIYzLt0nR0FHhp4CE0o2MN-EdGziY9Z3yX4WadZgnw__",
    name: "Amouage",
    description: "Epic Man",
    price: "$85 - $110",
    discount: "20%",
  },
];

const TESTIMONIALSDATA = [
  {
    name: "Narek Adamyan",
    brand: "perfume brand name",
    review:
      "narfum is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!",
    date: "2021.03.02",
  },
  {
    name: "Narek Parfumyan",
    brand: "luxury skincare brand",
    review:
      "This product made a huge difference in our process. We’ve never had such an efficient and intuitive experience before!",
    date: "2022.07.15",
  },
  {
    name: "Liam Anderson",
    brand: "gourmet food brand",
    review:
      "It’s an innovative solution! The simplicity and usability are truly remarkable, allowing us to focus on what we do best.",
    date: "2023.01.20",
  },
  {
    name: "Emily Johnson",
    brand: "handmade crafts",
    review:
      "The best decision we made was adopting this product. It’s saved us countless hours and streamlined our workflow perfectly!",
    date: "2020.11.05",
  },
  {
    name: "Ethan Brown",
    brand: "tech accessories",
    review:
      "This product stands out for its intuitive design and flexibility. It’s definitely worth the investment!",
    date: "2019.05.10",
  },
];

const CARDSDATA = [
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/8d16/4253/ae824c8a2a97ac08c05b2bea2ba92991?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EfawwUgqqfBlLIQaRYcsOQ7LEHLhFOdRyu1Lck~d1lyoqe81mKM92~9FKVY~nhxGywhVwnzaMkG-xVBh8Ubf~U0w0lV8LPaib55NkT9jtRmxK3EiklCnjntfFdx~MzEino1vZdiAErqwRlKzScir2aq2qVetiJ~bN3ftY~BSCdOXIpGxdn0VK0bKIvKbiJXe1hg~9xgx1ozR8UiEyT4dJeiJXtYQ6uTr8ZQuQNmEQKuvgkp7vLPcnKjgbYGcxpc1mtXesnznYbLbf0DbL6wG5w~SXBkwKdzJULnas5pp87cKXpd4IEuUj2WALiHlrZdmTUiqyfE7UjoDA3wXDms-Pw__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VOOxRCqIvA~EgvZWORhYi6hTJerqrRL9J7WZwqbaGk~GxhzhGBndoxFeDaBNFziudObvlJCMOZYKsbyfRUtQ~JBKeHYGid1ivNMgBhBFzIQ-DPAb389JU0mjurV9J2-oYW93Hos-sSifKa9BaAa~3iN-lYAGUDsLCLo61XGJSszS6ThhntIj80PpwiCsAiUo8n7BiDzzoabYoHx7dfbx2Kild5OHoassk4xqcuN5EfJa9BfCn99RsBGsGV04dc036gYbba1azqhxm9x-14cauZpa0ODj~GKIHbFGnHBPWSh2VN2J0-z7CMZXeA~j0csM5NGJAlYGridbtq1fYdC9Og__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VOOxRCqIvA~EgvZWORhYi6hTJerqrRL9J7WZwqbaGk~GxhzhGBndoxFeDaBNFziudObvlJCMOZYKsbyfRUtQ~JBKeHYGid1ivNMgBhBFzIQ-DPAb389JU0mjurV9J2-oYW93Hos-sSifKa9BaAa~3iN-lYAGUDsLCLo61XGJSszS6ThhntIj80PpwiCsAiUo8n7BiDzzoabYoHx7dfbx2Kild5OHoassk4xqcuN5EfJa9BfCn99RsBGsGV04dc036gYbba1azqhxm9x-14cauZpa0ODj~GKIHbFGnHBPWSh2VN2J0-z7CMZXeA~j0csM5NGJAlYGridbtq1fYdC9Og__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
];

const CARDSDATA2 = [
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
];

const VALUESMAP = [
  {
    name: "Integrity",
    description:
      "Honesty and transparency are at the heart of our business. We build long-term relationships with our customers based on transparency: honest recommendations, fair pricing, and reliable service. Your satisfaction and trust in us are our top priorities.",
    icon: <HandsIcon />,
  },
  {
    name: "Quality",
    description:
      "100% original products. We guarantee that every fragrance available in our store is 100% original and supplied only by official distributors. We carefully vet all our suppliers to ensure that you can trust the high quality of every bottle we offer.",
    icon: <CheckIcon />,
  },
  {
    name: "Passion",
    description:
      "We are always on the lookout for new, unique fragrances to offer our customers the freshest and most interesting perfume novelties. We keep up with the latest trends and carefully select exclusive compositions to expand our assortment and cater to even the most discerning perfume lovers.",
    icon: <HeartIcon />,
  },
  {
    name: "Customer Centricity",
    description:
      "Customer orientation is the foundation of our work. We strive to create the most comfortable and personalized conditions for each visitor, ensuring their experience with us is exceptional. We put our customers first, striving to meet their needs and exceed their expectations",
    icon: <AvatarsIcon />,
  },
  {
    name: "Sustainability",
    description:
      "Our store offers a rich selection of fragrances, including both iconic classic compositions and the latest trends in perfumery. We feature exclusive niche scents, rare and unique collections, as well as popular brands, ensuring that every customer can find something that suits their taste and mood.",
    icon: <HandLeafIcon />,
  },
  {
    name: "Community",
    description:
      "We believe in building strong and long-term relationships with our customers. We bring together people who share a passion for exquisite fragrances, creating a space for exchanging opinions, tips, and recommendations. Our community is not just about products; it's about a shared journey through the world of perfumery and appreciating this art together.",
    icon: <CommunityIcon />,
  },
];

const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ARRAY6 = [1, 2, 3, 4, 5, 6];

const NAVLINKS = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/brands", key: "brands" },
  { href: "/products", key: "products" },
  { href: "/offers", key: "offers" },
  { href: "/blog", key: "blog" },
];

const FREGRANCES = [
  { label: "ALL FRAGRANCES", colSpan: 2, rowSpan: 2 },
  { label: "MEN", value: "male", colSpan: 1 },
  { label: "WOMEN", value: "female", colSpan: 1 },
  { label: "UNISEX", value: "unisex", colSpan: 1, rowSpan: 1 },
];

export {
  NAVLINKS,
  VALUESMAP,
  HOMEPAGESLIDES,
  PRODUCTS,
  TESTIMONIALSDATA,
  CARDSDATA,
  ARRAY,
  ARRAY6,
  CARDSDATA2,
  BRANDS,
  NOTES,
  FREGRANCES,
};
