import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Level from "./pages/Level"

function App() {
  return (
    <main className="font-barlowSemiCondensed h-screen bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="max-w-110 mx-auto ">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/:level" element={<Level/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  )
}

export default App
