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
    setRestrauntInfo(jsondata.data);
  }
  return restrauntInfo
};
export default useRestrauntMenu;