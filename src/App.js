import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import MainInfoFrameContainer from "./MainInfoFrame/MainInfoFrameContainer";
import ProjectsFrameContainer from "./ProjectsFrame/ProjectsFrameContainer";
import StackFrameContainer from "./StackFrame/StackFrameContainer";
import ContactFrameContainer from "./ContactFrame/ContactFrameContainer";
import MenuContainer from "./Menu/MenyContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MenuContainer/>
                <Routes>
                    <Route path="/profile" element={<MainInfoFrameContainer/>}/>
                    <Route path="/" element={<Navigate to="/profile" replace />} />
                    <Route path="/projects" element={<ProjectsFrameContainer/>}/>
                    <Route path="/contact" element={<ContactFrameContainer/>}/>
                    <Route path="/stack" element={<StackFrameContainer/>}/>
                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;
