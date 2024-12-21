import React from "react";
import {useRoutes} from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Laptop from "pages/Laptop";
import Signin from "pages/Signin";
import SigninOne from "pages/SigninOne";
import { element } from "prop-types";

const ProjectRoutes=()=>{
    let element=useRoutes([
        {path:"/", element:<Home/>},
        {path:"*", element:<NotFound/>},
        {
            path:"laptop",
            element:<Laptop/>,
        },
        {
            path:"signin",
            element:<Signin/>,
        },
        {
            path:"signinone",
            element:<SigninOne/>,
        },
    ]);
    return element;
};

export default ProjectRoutes;
