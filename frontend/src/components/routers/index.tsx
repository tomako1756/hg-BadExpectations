import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";

const Router=()=>{
return(
    <BrowserRouter>
    <Routes>
        <Route path="/sign" element={<></>}/>
    </Routes>
    </BrowserRouter>
)
}
export default Router;