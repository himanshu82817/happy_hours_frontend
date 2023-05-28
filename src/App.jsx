import {BrowserRouter, Routes, Route }  from 'react-router-dom'
import Login from "./pages/LoginPage"
import Chat from "./pages/Chat"
import Register from "./pages/RegisterPage"


function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="chat" element={<Chat/>} />
      </Routes>
     </BrowserRouter>
  )
}

export default App
