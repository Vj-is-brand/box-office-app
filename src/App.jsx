import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";


const App = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/starred" element={<Starred/>}/>
            <Route path="*" element={<div>404 Error Page not found</div>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
