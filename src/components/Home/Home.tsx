import React from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import Title from "../UI/Title";
import content from "../../data/content.json";

interface ImageMap {
  [key: string]: string;
}

const imageMap: ImageMap = {
  pic1,
  pic2,
  pic3,
};

const HomeSection: React.FC<{
  image: string;
  title?: string;
  subtitle: string;
  isReverse?: boolean;
  imageRotation?: string;
  animationClass: string;
}> = ({ image, title, subtitle, isReverse, imageRotation, animationClass }) => {
  const flexDirection = isReverse ? "flex-row-reverse" : "flex-row";

  return (
    <div
      className={`flex ${flexDirection} items-center justify-center ${animationClass} mb-4`}
    >
      <div className="max-w-60 sm:max-w-[35%] aspect-square">
        <img
          src={imageMap[image]}
          alt=""
          className={`home_logo ${imageRotation || ""} ${
            isReverse ? "mb-8" : "mt-8"
          }`}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4 sm:gap-2 md:gap:6 lg:gap-8 p-4">
        {title && <h2>{title}</h2>}
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

const Home: React.FC<{ language?: 'bg' | 'en' }> = ({ language = 'bg' }) => {
  const animations = [
    "animate-slide-from-left",
    "animate-slide-from-right",
    "animate-slide-from-bottom",
  ];

  const rotations = ["rotate-1", "-rotate-1", "rotate-12"];
  
  const homeContent = content[language].home;

  return (
    <div className="container">
      <Title />
      {homeContent.sections.map((section, index) => (
        <HomeSection
          key={section.id}
          image={section.image}
          title={section.title}
          subtitle={section.subtitle}
          isReverse={index === 1}
          imageRotation={rotations[index]}
          animationClass={animations[index]}
        />
      ))}
    </div>
  );
};

export default Home;
