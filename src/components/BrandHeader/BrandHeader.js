import NavBar from "../NavBars/NavBar";
import Brand from "./Brand";
import "./BrandHeader.css";
function BrandHeader({ children }){
  return (
    <header>
      <Brand title="Covid-19 Equipo 5"></Brand>
      <NavBar></NavBar>
    </header>
  );
}

export default BrandHeader;
