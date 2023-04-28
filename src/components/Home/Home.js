import Banner from "../Banner/Banner";
import List from "../ItemList/List";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="product-card-container">
        <List />
      </div>
    </>
  );
};

export default Home;
