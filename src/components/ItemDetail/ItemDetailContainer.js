import { ItemDetail } from "./ItemDetail";

import { useLocation } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { state: product } = useLocation();
  return (
    <div className="product-card-container">
      <ItemDetail product={product} />
    </div>
  );
};
