import CenterLeft from "./CenterLeft";
import CenterRight from "./CenterRight";

const Center = (props) => {
  return (
    <div className="Page-one-center">
      <CenterLeft />
      <CenterRight cards={props.cards} />
    </div>
  );
};

export default Center;
