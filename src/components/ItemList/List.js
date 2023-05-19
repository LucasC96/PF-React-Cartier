import { useContext, useState, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([]);
  const { buyProducts } = useContext(dataContext);
  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);
  console.log(items);

  return items.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt="img-product-card" />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <Button variant="contained" onClick={() => buyProducts(product)}>
          buy
        </Button>
        <Link to={`/itemDetail/${product.id}`} state={product}>
          <Button variant="contained">Ver Detalle</Button>
        </Link>
      </div>
    );
  });
};

export default List;
