import React from "react"
import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import GraphVisualizer from "../pages/apps/simulators/graph-simulator/GraphVisualizer"
import TicTacToe from "../pages/apps/sockets/tic-tac-toe/Tictactoe"
import MemorySimulator from "../pages/apps/simulators/memory-simulator/MemorySimulator"
import KakaoMap from "../pages/apps/simulators/map-api/KakaoMap"
import Career from "../pages/projects/Career"

const routes = [
  {
    path: "/",
    element: <Home />,
  },

  // Projects
  {
    path: "/career",
    element: <Career />,
  },

  // Apps

  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
  {
    path: "/graph-visualizer",
    element: <GraphVisualizer />,
  },
  {
    path: "/memory-simulator",
    element: <MemorySimulator />,
  },
  {
    path: "/kakao-map",
    element: <KakaoMap />,
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
  { basename: "/" },
])

export default router
