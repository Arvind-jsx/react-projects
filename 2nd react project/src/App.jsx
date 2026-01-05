import Page1 from "./components/Page1/Page1";
import Page2 from "./components/page2/Page2";

const App = () => {
  const Cards = [
    {
      img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      tag: "Satisfied",
      index:1
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      tag: "UnderCoverd",
       index:2
    },
    {
      img: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      tag: "Progress",
       index:3
    },
    {
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      tag: "Underserved",
       index:4
    }
  ];

  return (
    <>
      <Page1 cards={Cards} />
      <Page2 />
    </>
  );
};

export default App;
