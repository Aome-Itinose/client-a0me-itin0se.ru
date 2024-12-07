import './App.css';
import ProjectsFrame from "./ProjectsFrame/ProjectsFrame";
import ContactFrame from './ContactFrame/ContactFrame';
import StackFrame from './StackFrame/StackFrame';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './Menu/Menu';
import MainInfoFrameContainer from "./MainInfoFrame/MainInfoFrameContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu/>
                <Routes>
                    <Route path="/profile" element={<MainInfoFrameContainer/>}/>
                    <Route path="/" element={<MainInfoFrameContainer/>}/>
                    <Route path="/projects" element={<ProjectsFrame/>}/>
                    <Route path="/contact" element={<ContactFrame/>}/>
                    <Route path="/stack" element={<StackFrame/>}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
