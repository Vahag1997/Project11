import { HandsIcon, CheckIcon, HeartIcon, Avatarsicon, HandLeafIcon, ComunnityIcon } from "@/app/about/icons/Valueicons";

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
    image: "https://s3-alpha-sig.figma.com/img/a540/736d/eeaaa92f709d14bfbfb642082f0dc766?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQV2UHT5RbmamFHJkRv1gstE~CQ4Fn5fxyoOMY~IA9uZAwXIDYNeZ26ks-wvfU6yhpaZKOPH1ipvbvsTvH5JiOdLkcudvZ0TiWFf81TxDL4b4ak~n6i-rAb5gEO02nieXYV1xj7VPjyn3vwXasBV9lpZhgcoyF1ciZtUlbp-UlBpzWG8PJ7TwDfXz89IAiw2FbmOTbU2uEsLvJuANJc53jjl7ykEWI1jpYA0onB~oknROu32Q0Inm6IcQXPGEaWn3rPjYpDgZxhb0-rWUFhTbF~Y1fyiyCTtyjHYATM0cvr7yIXNRn1YV0e6tP-Jg4TI0PHkRBIZYEwF3tQCFpW9Mg__",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/8754/fb75/42496fd946443e1e49b732b5f5ab55d1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jMVTwIBOIdi~ZD~4VEuxOkmoiHQtWP3LSwJ16chve-qNdLGgz8SZA3BYix8s3~IDzVPzvml1MaHgkY~7lqlomah-nbdV8pQllaQ7uQl7ImaQ8zd-BkF8wRj0SEDb6T6Br1yGgBKXRBSttrNaND7voI7AKYrwmM3sdpkYkrWQ3bo3nAM7Rgtsum0h6DXxYN3PuJFya6F4MMLkPJ9ZWWBYblCWQ3~6nLKmCaw0Lj6I8zpAM6PLvpbyhgTXIaY8gjb7i4hjkZlmBgSUrd4YgXZLVDk4cQPsPhq2~8owuEkvO1HsDEBxPTfarVOPa706iu4-eVr5FY71ZGLtlPFQ6zSq4g__",
    name: "Amouage Epic Man",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "10%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0aumYfYxkjPaJ4zdJpedR0J5fcYV~eA~ImLn-Zms5x-TN6VqMLgouk1C~wN66Mn9jySsawN07CioKv8R5H6WfJyTfZS2f2GrKdlqco3j9pdR2ErXwOCd0xc9VNezrHtl6Lu3Gd7cvIZf9hVyXLljAr~Afl3pbPzx5vNyVmLgmur9AhHQB472Jz-wSGan4aLOKeITLK9um5G2NyaNdYw~WBg6RioIOQ~HZ3UJwrFLLm2vdgrPRI3uBv8ZC~-RxMQPFrRXnNO02uyOZQyYLh0co8UUm-b~3PRVqVBxdPIbs5IvCpAtIlyfHek5CmMDp848j7TV~kewoAuKFKOfKhWlw__",
    name: "Memo Irish Leather",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "30%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/a540/736d/eeaaa92f709d14bfbfb642082f0dc766?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQV2UHT5RbmamFHJkRv1gstE~CQ4Fn5fxyoOMY~IA9uZAwXIDYNeZ26ks-wvfU6yhpaZKOPH1ipvbvsTvH5JiOdLkcudvZ0TiWFf81TxDL4b4ak~n6i-rAb5gEO02nieXYV1xj7VPjyn3vwXasBV9lpZhgcoyF1ciZtUlbp-UlBpzWG8PJ7TwDfXz89IAiw2FbmOTbU2uEsLvJuANJc53jjl7ykEWI1jpYA0onB~oknROu32Q0Inm6IcQXPGEaWn3rPjYpDgZxhb0-rWUFhTbF~Y1fyiyCTtyjHYATM0cvr7yIXNRn1YV0e6tP-Jg4TI0PHkRBIZYEwF3tQCFpW9Mg__",
    name: "Memo Irish Leather",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0aumYfYxkjPaJ4zdJpedR0J5fcYV~eA~ImLn-Zms5x-TN6VqMLgouk1C~wN66Mn9jySsawN07CioKv8R5H6WfJyTfZS2f2GrKdlqco3j9pdR2ErXwOCd0xc9VNezrHtl6Lu3Gd7cvIZf9hVyXLljAr~Afl3pbPzx5vNyVmLgmur9AhHQB472Jz-wSGan4aLOKeITLK9um5G2NyaNdYw~WBg6RioIOQ~HZ3UJwrFLLm2vdgrPRI3uBv8ZC~-RxMQPFrRXnNO02uyOZQyYLh0co8UUm-b~3PRVqVBxdPIbs5IvCpAtIlyfHek5CmMDp848j7TV~kewoAuKFKOfKhWlw__",
    name: "Memo Irish Leather",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0aumYfYxkjPaJ4zdJpedR0J5fcYV~eA~ImLn-Zms5x-TN6VqMLgouk1C~wN66Mn9jySsawN07CioKv8R5H6WfJyTfZS2f2GrKdlqco3j9pdR2ErXwOCd0xc9VNezrHtl6Lu3Gd7cvIZf9hVyXLljAr~Afl3pbPzx5vNyVmLgmur9AhHQB472Jz-wSGan4aLOKeITLK9um5G2NyaNdYw~WBg6RioIOQ~HZ3UJwrFLLm2vdgrPRI3uBv8ZC~-RxMQPFrRXnNO02uyOZQyYLh0co8UUm-b~3PRVqVBxdPIbs5IvCpAtIlyfHek5CmMDp848j7TV~kewoAuKFKOfKhWlw__",
    name: "Memo Irisdsdh Leather",
    description: "Eau de Parfum",
    price: "$85 - $110",
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/a540/736d/eeaaa92f709d14bfbfb642082f0dc766?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQV2UHT5RbmamFHJkRv1gstE~CQ4Fn5fxyoOMY~IA9uZAwXIDYNeZ26ks-wvfU6yhpaZKOPH1ipvbvsTvH5JiOdLkcudvZ0TiWFf81TxDL4b4ak~n6i-rAb5gEO02nieXYV1xj7VPjyn3vwXasBV9lpZhgcoyF1ciZtUlbp-UlBpzWG8PJ7TwDfXz89IAiw2FbmOTbU2uEsLvJuANJc53jjl7ykEWI1jpYA0onB~oknROu32Q0Inm6IcQXPGEaWn3rPjYpDgZxhb0-rWUFhTbF~Y1fyiyCTtyjHYATM0cvr7yIXNRn1YV0e6tP-Jg4TI0PHkRBIZYEwF3tQCFpW9Mg__",
    name: "Memo Irish Leather",
    description: "Eau de Parfum",
    price: "$85 - $110",
    discount: "20%"
  },
  {
    image: "https://s3-alpha-sig.figma.com/img/f249/93c9/fbfc3e67898164a582ee89f852a0f271?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D0aumYfYxkjPaJ4zdJpedR0J5fcYV~eA~ImLn-Zms5x-TN6VqMLgouk1C~wN66Mn9jySsawN07CioKv8R5H6WfJyTfZS2f2GrKdlqco3j9pdR2ErXwOCd0xc9VNezrHtl6Lu3Gd7cvIZf9hVyXLljAr~Afl3pbPzx5vNyVmLgmur9AhHQB472Jz-wSGan4aLOKeITLK9um5G2NyaNdYw~WBg6RioIOQ~HZ3UJwrFLLm2vdgrPRI3uBv8ZC~-RxMQPFrRXnNO02uyOZQyYLh0co8UUm-b~3PRVqVBxdPIbs5IvCpAtIlyfHek5CmMDp848j7TV~kewoAuKFKOfKhWlw__",
    name: "BYREDOBAL DAFRIQUE",
    description: "Eau de Parfum",
    price: "$85 - $110",
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
    icon: <Avatarsicon />
  },
  {
    name: "Sustainability",
    description: "We are dedicated to environmentally friendly practices in sourcing and packaging our products",
    icon: <HandLeafIcon />
  },
  {
    name: "Community",
    description: "We believe in giving back and fostering connections within our local and global communities",
    icon: <ComunnityIcon />
  }
]

const ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ARRAY6 = [1, 2, 3, 4, 5, 6]

export { VALUESMAP, HOMEPAGESLIDES, PRODUCTS, FAQS, TESTIMONIALSDATA, CARDSDATA, ARRAY, FAQSHEADER, ARRAY6, CARDSDATA2 }