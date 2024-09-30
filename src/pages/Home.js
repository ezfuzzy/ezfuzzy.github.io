import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8">
          {/* Omok Game */}
          <li className="list-none">
            <Link
              to="/omok"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img src="/images/app/omok-thumbnail.png" alt="Omok Thumbnail" className="w-full h-auto rounded" />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">Omok</span>
            </Link>
          </li>

          {/* Tic Tac Toe Game */}
          <li className="list-none">
            <Link
              to="/tictactoe"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img
                  src="/images/app/tictactoe-thumbnail.png"
                  alt="Tic Tac Toe Thumbnail"
                  className="w-full h-auto rounded"
                />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">Tic Tac Toe</span>
            </Link>
          </li>

          {/* CatchMind Game */}
          <li className="list-none">
            <Link
              to="/catchMind"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img
                  src="/images/app/catchMind-thumbnail.png"
                  alt="CatchMind Thumbnail"
                  className="w-full h-auto rounded"
                />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">CatchMind</span>
            </Link>
          </li>

          {/* Graph Visualizer */}
          <li className="list-none">
            <Link
              to="/graph-visualizer"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img
                  src="/images/app/graph-visualizer-thumbnail.png"
                  alt="Graph Visualizer Thumbnail"
                  className="w-full h-auto rounded"
                />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">Graph Visualizer</span>
            </Link>
          </li>

          {/* Memory Allocate Simulator */}
          <li className="list-none">
            <Link
              to="/memory-simulator"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img
                  src="/images/app/memory-simulator-thumbnail.png"
                  alt="Memory Simulator Thumbnail"
                  className="w-full h-auto rounded"
                />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">Memory Simulator</span>
            </Link>
          </li>

          {/* Matrix Simulator */}
          <li className="list-none">
            <Link
              to="/memory-simulator"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img
                  src="/images/app/matrix-simulator-thumbnail.png"
                  alt="Matrix Simulator Thumbnail"
                  className="w-full h-auto rounded"
                />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">Matrix Simulator</span>
            </Link>
          </li>

          {/* Matrix Simulator */}
          <li className="list-none">
            <Link
              to="/memory-simulator"
              className="block border-2 border-green-900 rounded-lg p-4 hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out min-h-[300px] flex flex-col justify-between">
              <span className="block flex-grow mb-2">
                <img src="/images/app/ezfuzzy-thumbnail.png" alt="Thumbnail" className="w-full h-auto rounded" />
              </span>
              <span className="block text-center text-lg font-semibold mt-auto">Matrix Simulator</span>
            </Link>
          </li>
        </div>{" "}
        {/* end of item div */}
      </div>
    </div>
  )
}

export default Home
