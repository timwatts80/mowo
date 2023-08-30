import React from "react";
import image1 from "public/assets/images/1.png";
import image2 from "public/assets/images/2.png";
import image3 from "public/assets/images/3.png";
import image4 from "public/assets/images/4.png";

const useCarouselTest = () => {

  const clientCases = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },

    // ... Add more items as needed
  ];

  let data = { clientCases };

  return { data };

};

export default useCarouselTest;
