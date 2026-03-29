import logo from './logo.svg';
import './App.css';
import { Web } from './componentes/web';
import { ItemApi } from './componentes/itemapi';
import Itemdetailcontiner from './componentes/Itemdetailcontiner';
import { Itemlistcontainter } from './pomponentes/itemlistcontainter';
import { Api } from './pomponentes/api';
import { Itemdetailcontainer } from './pomponentes/itemdetailcontainer';
function App() {
  

  return (
    <div>
        <Web />
        <Itemdetailcontainer 
        id ={4} />
    </div>
  );
}

export default App;
