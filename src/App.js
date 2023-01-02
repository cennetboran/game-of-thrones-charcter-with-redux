import MemberLists from "./component/movieList";
import Snowfall from "react-snowfall";

import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./component/homepage/homepage";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#dee4fd");
  const [snowflakeCount, setSnowflakeCount] = useState(200);
  return (
    <div className="App bg-black  h-[1000px]">
      <Provider store={store}>
        <Snowfall color={color} snowflakeCount={snowflakeCount} />
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
