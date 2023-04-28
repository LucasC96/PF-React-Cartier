import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([]);
  const { buyProducts } = useContext(dataContext);
  const { categoryName } = useParams();

  const checkItemCategory = (item) => {
    if (!categoryName) {
      return true;
    }
    return categoryName === item.category;
  };

  const filterItems = (responseItems) => {
    if (!categoryName) {
      return responseItems;
    }
    const filteredItems = responseItems.filter(checkItemCategory);
    return filteredItems;
  };

  useEffect(() => {
    axios
      .get("/productsMock.json")
      .then((res) => setItems(filterItems(res.data)));
  }, [categoryName]);

  return items.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <Button variant="contained" onClick={() => buyProducts(product)}>
          buy
        </Button>
        <Link to={`/itemDetail/${product.id}`}>
          <Button variant="contained">Ver Detalle</Button>
        </Link>
      </div>
    );
  });
};

export default List;
