import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom"
import DetailPage from './pages/DetailPage';
import MainPage from "./pages/MainPage";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage"
const Layout = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  )
}
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/pokemon/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App