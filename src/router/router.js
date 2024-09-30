import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import GraphVisualizer from "../pages/apps/simulators/graph-simulator/GraphVisualizer"
import TicTacToe from "../pages/apps/sockets/tic-tac-toe/Tictactoe"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/graph-visualizer",
    element: <GraphVisualizer />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
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
