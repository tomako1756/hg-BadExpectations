import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Auth from "../../page/auth";

const Router=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route path="/sign" element={<Auth />}/>
    </Routes>
    </BrowserRouter>
)
}
export default Router;