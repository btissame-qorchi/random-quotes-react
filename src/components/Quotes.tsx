import '../style.scss';
import { useState } from "react";
import { QuotesData } from "../data/QuotsData";

const Quotes = () => {
const [randomItem, setRandomItem] = useState<string | null>(null);

     const getRandomItem = () => {
       const randomIndex = Math.floor(Math.random() * QuotesData.length);
       setRandomItem(QuotesData[randomIndex]);
     };

  return (
    <div className="quotes">
      {randomItem && <h2>{randomItem}</h2>}
      <button onClick={getRandomItem}>
        {randomItem
          ? "Click again for more quotes"
          : "Click here to get your daily quote !"}
      </button>
    </div>
  );
}

export default Quotes
