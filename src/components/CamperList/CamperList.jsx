import { useSelector } from "react-redux";

import Camper from "@components/Camper/Camper";
import { selectFilteredCampers } from "@redux/campers/selectors";

import css from "./CamperList.module.css";

const CamperList = () => {
  const campers = useSelector(selectFilteredCampers);

  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <Camper key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CamperList;
