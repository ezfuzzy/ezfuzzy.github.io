import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => {
      return {
        index: route.path === "/",
        path: route.path === "/" ? undefined : route.path,
        element: route.element,
      }
    }),
  },
])

export default router
