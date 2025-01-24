import React, { useMemo } from "react";
import { decorationCards } from "../data/constants";
import DecorationCard from "../components/Sections/Decoration/DecorationCard";

const Decoration: React.FC = () => {
  const memoizedCards = useMemo(
    () =>
      decorationCards.map((card, index) => (
        <DecorationCard
          key={index}
          image={card.image}
          title={card.title}
          link={card.link}
        />
      )),
    []
  ); 

  return (
    <div className="container">
      <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2 max-sm:grid-cols-1">
        {memoizedCards}
      </div>
    </div>
  );
};

export default Decoration;
