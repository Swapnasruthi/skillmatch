import Login from "./componenets/Login";
import Body from "./componenets/Body";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Feed from "./componenets/Feed";

const App = () => {
  return (
    <>
    <BrowserRouter basename="/">
       <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>}/>

          </Route>
       </Routes>
    </BrowserRouter>

    </>
  )
}



export default App;