
import { Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import Service from "./pages/service";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";

function App (){
    return <div>

        


        <Routes>

        <Route  path = "/home"  element= {<Home/>} />
        <Route  path = "/service"  element= {<Service/>} />
        <Route  path = "/feature"  element= {<Feature/>} />
        <Route  path = "/blog"  element= {<Blog/>} />

        </Routes>



    </div>
}

export default App


