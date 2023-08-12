import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./food/About";
import Contact from "./food/Contact";
import Home from "./food/Home";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";


function App() {
  return (
    <>

 <BrowserRouter>
 <Header/>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/About" element={<About/>}></Route>
 </Routes>
 </BrowserRouter>
  </>
  );
}
export default App;




// import React from "react"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./food/About";
// import Contact from "./food/Contact";
// import Home from "./food/Home";
// import Header from "./Header/Header";
// import Navbar from "./Navbar/Navbar";


// function App() {
//   return (
//     <>

//  <BrowserRouter>
//  <Header/>
//  <Navbar/>
//  <Routes>
//   <Route path="/" element={<Home/>}></Route>
//   <Route path="/Contact" element={<Contact/>}></Route>
//   <Route path="/About" element={<About/>}></Route>
//  </Routes>
//  </BrowserRouter>
//   </>
//   );
// }
// export default App;
