import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";
import FooterIcon from "./FooterIcon";
import Terms from "./Terms";
import MiniSlider from "./MiniSlider";
import ApiMainData from "./Collection/ApiMainData";
import Login from "./Collection/Login";
import AdminPanel from "./Admin Panel/AdminPanel";
import Whishlist from "./whishlist/Whishlist";
import Ishipping from "./SliderComponents/Ishipping";
import Cart from "./cart/Cart";
import CancellationForm from "./whishlist/CancellationForm";
import { ApiData1 } from "./Collection/ApiMainData";
import Collection from "./Collection/Collection";
import { useState } from "react";

function App(props) {
  const [cartItems, setcartItems] = useState([]);
  const { handleAddProduct } = props;
  return (
    <div>
      <ApiMainData.Provider value={ApiData1}>
        <BrowserRouter>
          <MiniSlider />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/apimaindata" element={<ApiMainData />} /> */}
            <Route path="/collection" element={<Collection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminpanel" element={<AdminPanel />} />
            <Route path="/whishlist" element={<Whishlist />} />
            <Route path="/ishipping" element={<Ishipping />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  handleAddProduct={handleAddProduct}
                ></Cart>
              }
            />
            <Route path="/cancellationform" element={<CancellationForm />} />
          </Routes>
          <Footer />
          <FooterIcon />
          <Terms />
        </BrowserRouter>
      </ApiMainData.Provider>
    </div>
  );
}
export default App;
