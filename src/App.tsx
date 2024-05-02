import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Level from "./pages/Level"

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/:level" element={<Level/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
