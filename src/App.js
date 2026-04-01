import logo from "./logo.svg";
import "./App.css";
import { Web } from "./componentes/web";
import { ItemApi } from "./componentes/itemapi";
import { Itemdetailcontiner  } from "./componentes/Itemdetailcontiner";
//import { Itemlistcontainter } from "./pomponentes/itemlistcontainter";
import { Api } from "./pomponentes/api";
//import { Itemdetailcontainer } from "./pomponentes/itemdetailcontainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

    <Web/>
      <Routes>
        <Route path="/" element={<ItemApi  />} />
          <Route path="/:id" element={<Itemdetailcontiner />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
