import React from "react";
import GridMain from "./GridMain";
import PostSec from "./PostSec";

function GridMainData() {
  const cards = [
    {
      title: "READY TO WEAR",
      Description: "SHOP NOW",
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/gytryt.jpg?v=1670048010",
    },
    {
      title: "UNSTICHED",
      Description: "SHOP NOW",
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/fesf.jpg?v=1670048042",
    },
    {
      title: "DUPATTAS",
      Description: "SHOP NOW",
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/1234_1c76f65a-6d6e-4e68-8e28-02c8b9a758ba.jpg?v=1669710064",
    },
    {
      title: "SHOWLS",
      Description: "SHOP NOW",
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/677_c1babb6e-7e67-44ea-bc1d-d134f9aee149.jpg?v=1669372424",
    },
    {
      title: "BOTTUMS",
      Description: "SHOP NOW",
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/gft.jpg?v=1666424563",
    },
    {
      title: "SPECIAL PRICES",
      Description: "SHOP NOW",
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/fg_f4746889-1a92-44c7-a222-02942e29fa1d.jpg?v=1669803570",
    },
  ];

  const PostSecDetail = [
    {
      Imgsrc:
        "https://cdn.shopify.com/s/files/1/2277/5269/files/Style_guide_1.jpg?v=1669445259",
      Off: "GET 50% OFF!",
      Discription: "SIGN UP NOW TO OUR NEWSLETTER",
    },
  ];
  return (
    <div>
      <div className="w-[80%] h-auto gap-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto my-16">
        <GridMain
          Imgsrc={cards[0].Imgsrc}
          title={cards[0].title}
          Description={cards[0].Description}
        />
        <GridMain
          Imgsrc={cards[1].Imgsrc}
          title={cards[1].title}
          Description={cards[1].Description}
        />
        <GridMain
          Imgsrc={cards[2].Imgsrc}
          title={cards[2].title}
          Description={cards[2].Description}
        />
        <GridMain
          Imgsrc={cards[3].Imgsrc}
          title={cards[3].title}
          Description={cards[3].Description}
        />
        <GridMain
          Imgsrc={cards[4].Imgsrc}
          title={cards[4].title}
          Description={cards[4].Description}
        />
        <GridMain
          Imgsrc={cards[5].Imgsrc}
          title={cards[5].title}
          Description={cards[5].Description}
        />
      </div>

      <PostSec
        Imgsrc={PostSecDetail[0].Imgsrc}
        Off={PostSecDetail[0].Off}
        Discription={PostSecDetail[0].Discription}
      />
    </div>
  );
}

export default GridMainData;
