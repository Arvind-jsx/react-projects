import Center from "./Center";
import Navbar from "./Navbar";

const Page1 = (props) => {
  return (
    <>
      <Navbar />
      <Center cards={props.cards} />
    </>
  );
};

export default Page1;
