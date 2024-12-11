import './App.css';
import ContactFrame from './ContactFrame/ContactFrame';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from './Menu/Menu';
import MainInfoFrameContainer from "./MainInfoFrame/MainInfoFrameContainer";
import ProjectsFrameContainer from "./ProjectsFrame/ProjectsFrameContainer";
import StackFrameContainer from "./StackFrame/StackFrameContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu/>
                <Routes>
                    <Route path="/profile" element={<MainInfoFrameContainer/>}/>
                    <Route path="/" element={<MainInfoFrameContainer/>}/>
                    <Route path="/projects" element={<ProjectsFrameContainer/>}/>
                    <Route path="/contact" element={<ContactFrame/>}/>
                    <Route path="/stack" element={<StackFrameContainer/>}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
