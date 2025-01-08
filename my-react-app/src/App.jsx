import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/header/index";
import "./App.css";
import Upperbody from "./component/body/upper_body/pager";
import Card from "./component/body/cards/card";
import Middlebody from "./component/body/middle_body/body";
import Lowerbody from "./component/body/lower_body/lower";
import Upperfoot from "./component/footer/lowerfoot/footi";
import Last from "./component/footer/upperfoot/last";
import CarouselComponent from "./component/body/carousel/carousel";

function App() {
  return (
    <BrowserRouter>
      <Navbar id="coli"/>
      <Upperbody/>
      <CarouselComponent/>
      <Card/>
      <Middlebody/>
      <Lowerbody/>
      <Upperfoot/>
      <Last/>
    </BrowserRouter>
  );
}

export default App;
