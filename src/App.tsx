import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Level from "./pages/Level"

function App() {
  return (
    <main className="min-h-screen">
      <div className="max-w-110 mx-auto min-h-screen">
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
