import './App.css';
import MainInfoFrame from "./MainInfoFrame/MainInfoFrame";
import ProjectsFrame from "./ProjectsFrame/ProjectsFrame";
import ContactFrame from './ContactFrame/ContactFrame';
import StackFrame from './StackFrame/StackFrame';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './Menu/Menu';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu/>
                <Routes>
                    <Route path="/profile" element={<MainInfoFrame/>}/>
                    <Route path="/" element={<MainInfoFrame/>}/>
                    <Route path="/projects" element={<ProjectsFrame/>}/>
                    <Route path="/contact" element={<ContactFrame/>}/>
                    <Route path="/stack" element={<StackFrame/>}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
