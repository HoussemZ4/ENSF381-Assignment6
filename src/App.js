import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Layout from "./Layout";
import EditableMain from "./EditableMain";
import './index.css';
import React, {useState} from "react";
import uuid from "react-uuid";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout toggleSidebar={toggleSidebar}/>}>
        <Route path = "/" element={<div className="content">{isSidebarVisible ? <Sidebar /> : null}<Main /></div>}></Route>
        <Route path = "/edit" element={<div className="editableContent">{isSidebarVisible ? <Sidebar /> : null}<EditableMain /></div>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>);
}

export default App;
