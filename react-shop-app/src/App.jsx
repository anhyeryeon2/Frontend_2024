import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import DetailPage from './pages/DetailPage/index';
import CartPage from './pages/CartPage/index';
import LoginPage from './pages/LoginPage/index';
import OrderPage from './pages/OrderPage/index';
import NotFoundPage from './pages/NotFoundPage/index';
import RegisterPage from './pages/RegisterPage/index';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
