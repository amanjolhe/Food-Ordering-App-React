import { useState, useEffect } from "react";
import { MenuCardApi } from "../Constant";

const useRestrauntMenu = (ResId) => {
  const [restrauntInfo, setRestrauntInfo] = useState([]);
  useEffect(() => {
    getRetrauntInfo();
  }, []);
  async function getRetrauntInfo() {
    const data = await fetch(MenuCardApi + ResId);
    const jsondata = await data.json();

    setRestrauntInfo([
      { ...jsondata.data.cards[0].card.card.info },
      {
        ...jsondata.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
          (card) =>
            card.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ),
      },
    ]);
  }
  return restrauntInfo;
};
export default useRestrauntMenu;
