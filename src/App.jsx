import {BrowserRouter, Routes, Route, Navigate }  from 'react-router-dom'
import Login from "./pages/LoginPage"
import Chat from "./pages/Chat"
import Register from "./pages/RegisterPage"


function App() {

  return (
     <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
     </BrowserRouter>
  )
}

export default App





