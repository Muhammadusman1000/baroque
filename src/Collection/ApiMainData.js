import { createContext } from "react";
const ApiMainData = createContext();

// export const handleAddProduct = (ApiData1) => {
//   const productExist = cartItems.find((item) => item.id === ApiData1.id);
//   if (productExist) {
//     setcartItems(
//       cartItems.map((item) =>
//         item.id === ApiData1.id
//           ? { ...ApiData1, Quantity: productExist.quantity + 1 }
//           : item
//       )
//     );
//   } else {
//     setcartItems([...cartItems, { ApiData1, Quantity: 1 }]);
//   }
// };

export const ApiData1 = [
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/75_ed3d1ca1-64b1-4d92-a7d1-6ae3324bf056_533x.jpg?v=1669115348",
    Discription: "EMBROIDERED NET CH10-01",
    Price: "PKR 19,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/77_1afe9e4c-023d-4993-96c8-b2d696893bbc_533x.jpg?v=1669794980",
    Discription: "EMBROIDERED NET CH10-02",
    Price: "PKR 19,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/79_a36dba5e-4837-4ddf-8ba2-584b91e91394_533x.jpg?v=1669115360",
    Discription: "EMBROIDERED NET CH10-03",
    Price: "PKR !6,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/82_5491962c-0861-47a2-ab32-74173b23039f_533x.jpg?v=1669115366",
    Discription: "EMBROIDERED NET CH10-04",
    Price: "PKR 16,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/83_9e527d7f-50f0-41b1-ac3c-2ba65d282d11_533x.jpg?v=1669115372",
    Discription: "EMBROIDERED NET CH10-05",
    Price: "PKR 16,900",
  },

  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/86_77c95ada-8275-4c99-a13e-c7a225323649_533x.jpg?v=1669115405",
    Discription: "EMBROIDERED NET CH10-06",
    Price: "17,500",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/87_36907ca8-ca65-43a3-b140-2c8cf6c09a99_533x.jpg?v=1669115381",
    Discription: "EMBROIDERED NET CH10-07",
    Price: "PKR 19,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/89_bcac18f5-5788-4b97-ae71-4abd47a6ba1d_533x.jpg?v=1669115432",
    Discription: "EMBROIDERED NET CH10-08",
    Price: "PKR 19,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/1Q0A0210.jpg?v=1669115477",
    Discription: "EMBROIDERED CHIFFON-CH06-EC02",
    Price: "PKR 15,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/PS5.jpg?v=1612252983",
    Discription: "EMBROIDERED NET CH08-01",
    Price: "PKR 17,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/09_3.jpg?v=1669112365",
    Discription: "EMBROIDERED NET CH09-02",
    Price: "PKR 19,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/FL5.jpg?v=1612340459",
    Discription: "EMBROIDERED NET CH8-D6",
    Price: "PKR 12,500",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/c2_1_71098c76-34e6-405c-84c0-2108d1dfeb16_360x.jpg?v=1669115725",
    Discription: "EMBROIDERED CHIFFON CH07-02 ",
    Price: "PKR 15,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/30_6d2cefbb-8949-4632-8bf0-43c90f453a9b_360x.jpg?v=1669115685",
    Discription: "EMBROIDERED NET CH09-06",
    Price: "PKR 15,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/1Q0A1993.jpg?v=1570388248",
    Discription: "EMBROIDERED CHIFFON-CH509",
    Price: "PKR 15,000",
  },

  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/c2_1_71098c76-34e6-405c-84c0-2108d1dfeb16_360x.jpg?v=1669115725",
    Discription: "EMBROIDERED NET CH07-01",
    Price: "PKR 15,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/36_a4ab3563-4d83-41e1-a94c-8abd1139321a.jpg?v=1669115685",
    Discription: "EMBROIDERED CHIFFON CH09-04",
    Price: "PKR 15,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/42_526f7da3-22a8-4427-96ca-ed564cd65464.jpg?v=1669115652",
    Discription: "EMBROIDERED NET CH09-05",
    Price: "PKR 17,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/57_1.jpg?v=1669115787",
    Discription: "EMBROIDERED NET CH09-07",
    Price: "PKR 12,900",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/Pearl_luster_3.jpg?v=1594118536",
    Discription: "EMBROIDERED CHIFFON CH03-09",
    Price: "PKR 14,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/ST4_1fbcf726-55e9-439e-bba1-c05f00177007.jpg?v=1665215930",
    Discription: "EMBROIDERED NET CH08-10",
    Price: "PKR 17,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/C6.jpg?v=1637240015",
    Discription: "EMBROIDERED NET CH07-03",
    Price: "PKR 15,000",
  },
  {
    Imgsrc:
      "https://cdn.shopify.com/s/files/1/2277/5269/products/1Q0A0015.jpg?v=1665215947",
    Discription: "EMBROIDERED NET CH6-D5",
    Price: "PKR 12,800",
  },
];

export default ApiMainData;
