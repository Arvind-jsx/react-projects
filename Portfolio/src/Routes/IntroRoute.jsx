import { Routes, Route } from "react-router-dom";
import Intro from "../Components/IntroPage/Intro";
import AllRoute from "./AllRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Intro />} />
      <Route path="/*" element={<AllRoute />} />
    </Routes>
  );
};

export default AppRoutes;
