import { useState } from "react";
import  Router  from "./router/Router.jsx";
import publicRoutes from "./router/routes/publicRoutes.js";


function App() {

  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  return <Router allRoutes={allRoutes} />

}

export default App;
 