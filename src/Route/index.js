import React from "react";
import Profile from "../Component/Profile";
import Project from '../Component/Project'
import ErrorComponent from '../Component/ErrorComponent'
import PdfView from '../Component/PdfView'
import MetalHome from '../pages/MetalHome'

export const ROUTE = [
  {
    path:'/',
    component: MetalHome,
  },
  {
    path: "/Profile",
    component: Profile,
  },
  {
    path: "/project/:id",
    component: Project,
  },
  
  {
    path: "/resume",
    component: PdfView,
  },
  {
    path: "*",
    component: ErrorComponent,
  },
];
