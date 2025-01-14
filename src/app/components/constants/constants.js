import { HandsIcon, CheckIcon, HeartIcon, AvatarsIcon, HandLeafIcon, CommunityIcon } from "../../about/icons/Valueicons";


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
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XTf~hN8MhiVaB6akHolm9vq7imfHmi6U9GSt5TcrPgLDntjU0NC~0VEfgWxl~sol5Nv6Fl5VkycCfuLkjxMhdeLJ~OUkQI7WEKrpu3VEl5rUYGijUKZ3OCv5Bkg28u2MpA6pYfVZezKOSyJgU4IkQVbnzBF1MKW5RKJI64bH29oJRmNAo1aWDdhVIh-IggB9ycP6P4F-RFkEvSQ8f7e8a01rT9HYoY-O4BnX~l4G0D8rcYzVrnXF4DFibZwv0CMH7x9g9nwh2FUvtWU5R5EMKVsxhm9JgBvrAz5~627htxosg65LdnZpeCIO9ftCumFyJI4~Fo9GHSpgXa5VAhRy9Q__https://zacshop.com/cdn/shop/articles/bottle-perfume-with-word-perfume-it.jpg?v=1687911687",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
];

const FAQS = [
  {
    question: "How long does a fragrance last?",
    answer: "A fragrance typically lasts between 6 to 8 hours, depending on the formulation and your skin type.",
  },
  {
    question: "Whats the difference between Eau de Parfum and Eau de Toilette?",
    answer: "Eau de Parfum has a higher concentration of fragrance oils than Eau de Toilette, making it last longer.",
  },
  {
    question: "How do I store my perfume properly?",
    answer: "Store your perfume in a cool, dry place away from direct sunlight to maintain its quality.",
  },
  {
    question: "Can I return or exchange a fragrance?",
    answer: "Yes, returns and exchanges are accepted within 30 days of purchase, provided the bottle is unopened.",
  },
];

const FAQSHEADER = {
  heading: "Got Questions? Weve Got Answers!",
  text: "Find quick answers to some of the most common questions about our fragrances and services.",
  theme: "black"
}

const TESTIMONIALSDATA = [
  {
    name: "Martin Goutry",
    brand: "perfume brand name",
    review:
      "narfum is finally addressing a long time problem we had when building UIs. It’s ease of use and workflow seems really intuitive. Promising!",
    date: "2021.03.02",
  },
  {
    name: "Sophia Carter",
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
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
];

const CARDSDATA2 = [
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
  {
    imageSrc: "https://s3-alpha-sig.figma.com/img/5a20/6df7/6ce6fdffc93a7a606c2131c069c8200e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af8IcXT7DubpJNEAsAY0Z0p19gHdEWhgZVAugBscaRk74wVKzxjT3uWs2wbTR8MlUugRo8xPv1oiXU54oA2rJzD0M1jN4mGEoLavJjpiYciEjBOSF6wRlGL8~E1Z2VaEmCHCI5-f0DXxi-m6zHnjEEuStAfAQ2PqFwP1vSZz5eIXCvw1-572iz3QnVSe~955ZDmPZ58hjzzEhHNurr7d~tDm9~uvO94m9wSbUsv5QrwXUCzoOLW0zfU121MBWE~MAZZR2~uf83wWSNN-etYOcgVPBCQ1LM-uAtEUAlF1U3aGQGhTymN52sYWYzQE8ULNLOuP5b8mQrHllKfInqMj5g__",
    title: "Title Here You Perfume Should Lorem Ipsum",
    description:
      "“Narffum is finally addressing a long-time problem we had when building UIs. Its ease of use and workflow seems really intuitive. Promising!”",
    date: "March 8, 2024",
  },
];

const VALUESMAP = [
  {
    name: "Integrity",
    description: "Honesty and transparency are at the heart of our business, building trust with our customers",
    icon: <HandsIcon />
  },
  {
    name: "Quality",
    description: "We prioritize sourcing only the finest ingredients to create exquisite fragrances.",
    icon: <CheckIcon />
  },
  {
    name: "Passion",
    description: "Our love for fragrances drives us to explore new scents and innovations continually",
    icon: <HeartIcon />
  },
  {
    name: "Customer-Centricity",
    description: "We put our customers first, striving to meet their needs and exceed their expectations",
    icon: <AvatarsIcon />
  },
  {
    name: "Sustainability",
    description: "We are dedicated to environmentally friendly practices in sourcing and packaging our products",
    icon: <HandLeafIcon />
  },
  {
    name: "Community",
    description: "We believe in giving back and fostering connections within our local and global communities",
    icon: <CommunityIcon />
  }
]

const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ARRAY6 = [1, 2, 3, 4, 5, 6]

export { VALUESMAP, HOMEPAGESLIDES, PRODUCTS, FAQS, TESTIMONIALSDATA, CARDSDATA, ARRAY, FAQSHEADER, ARRAY6, CARDSDATA2 }