import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";

export default function Root() {
  const [color, snowflakeCount] = ["#dee4df", 200];
  return (
    <>
      <Snowfall color={color} snowflakeCount={snowflakeCount} />
      <div className="App bg-black  h-[1000px]">
        <Outlet />
      </div>
    </>
  );
}
