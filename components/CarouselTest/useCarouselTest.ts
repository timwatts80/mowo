import React from "react";
import logo1 from "public/assets/images/Haskolinn Logo.png";
import logo2 from "public/assets/images/Arion Banki Logo.png";
import bgimage1 from "public/assets/images/CustomerCases_case_background.png";

const useCarouselTest = () => {

  const clientCases = [
    {
      logo: logo1,
      bgimage: bgimage1,
      title: "Reykjavik University",
      description: "With Microsoft Surface Studio devices in all classrooms at Reykjavík University the organization has taken a digital leap into the future. Teachers are integrating new tools and techniques in their teaching that resonate with the 21st century skills.",
    },
    {
      logo: logo2,
      bgimage: bgimage2,
      title: "Reykjavik University",
      description: "With Microsoft Surface Studio devices in all classrooms at Reykjavík University the organization has taken a digital leap into the future. Teachers are integrating new tools and techniques in their teaching that resonate with the 21st century skills.",
    }

    // ... Add more items as needed
  ];

  let data = { clientCases };

  return { data };

};

export default useCarouselTest;
