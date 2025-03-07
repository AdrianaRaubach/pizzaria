import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import Menu from "./pages/Menu";
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Nav/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
