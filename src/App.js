import Login from "./pages/Login";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import  Blogs  from "./pages/Blogs";




function App() {
  return (
    <div className=" h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
