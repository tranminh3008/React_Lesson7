import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/hooks/Home";
import Contact from "./components/hooks/Contact";
import Notfound from "./components/hooks/Notfound";
import Blog from "./components/hooks/Blog";
import Header from "./components/hooks/Header";
import Products from "./components/products/Products";
import Detail from "./components/hooks/Detail";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<Detail />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;