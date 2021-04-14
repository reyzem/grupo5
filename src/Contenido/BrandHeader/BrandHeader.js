import Brand from "./Brand";
import "./BrandHeader.css";
function BrandHeader({ children }){
  return (
    <header>
      <Brand title="COVID-19 Equipo 5"></Brand>
    </header>
  );
}

export default BrandHeader;
