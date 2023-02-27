import { NavLink } from "react-router-dom";

function GridMain(props) {
  return (
    <div className="w-full ">
      <NavLink to="/collection">
        <img src={props.Imgsrc} alt="" />
      </NavLink>
      <h3 className="text-lg p-2 font-bold h-12 text-center cursor-pointer">
        {props.title}
      </h3>
      <h4 className="text-base hover:underline h-8 text-center cursor-pointer">
        {props.Description}
      </h4>
    </div>
  );
}
export default GridMain;
