import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(dataContext);

  useEffect(() => {
    axios("productsMock.json").then((res) => setData(res.data));
  }, []);

  return data.map((product) => {
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

export default Products;
