import Home from "./components/Home/Home";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartContent />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>Ruta inexistente</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
