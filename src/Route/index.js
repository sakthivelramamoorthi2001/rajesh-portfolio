import React from "react";
import Profile from "../Component/Profile";
import Project from '../Component/Project'

export const ROUTE = [
  {
    path: "/",
    component: Profile,
  },
  {
    path: "/project/:id",
    component: Project,
  },
];
