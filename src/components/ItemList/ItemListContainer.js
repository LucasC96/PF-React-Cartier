import { useState, useEffect } from "react";
import Products from "../Products/Products";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : Products);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      <Products items={items} />
    </div>
  );
};

export default ItemListContainer;
