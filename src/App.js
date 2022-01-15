import BoxGenerator from './components/BoxGenerator';
import './App.css';
import { ColorDisplay } from './components/ColorDisplay';

function App() {
  const [color,setColor] = useState("No Colors")
  return (
    <div className="App">
        <BoxGenerator/>
        <ColorDisplay color={color}></ColorDisplay>
    </div>
  );
}

export default App;
