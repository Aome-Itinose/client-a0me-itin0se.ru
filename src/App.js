import './App.css';
import MainInfoFrame from "./MainInfoFrame/MainInfoFrame";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MainInfoFrame/>
            </div>
        </BrowserRouter>
    );
}

export default App;
