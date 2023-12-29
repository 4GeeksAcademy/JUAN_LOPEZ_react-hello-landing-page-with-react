import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const listaProducts = [
  {
    title: "titulo 1",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam corrupti libero consequatur iure eius aliquam!",
    image: "https://picsum.photos/500/325",
    price: 45,
  },
  {
    title: "titulo 2",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam corrupti libero consequatur iure eius aliquam!",
    image: "https://picsum.photos/501/325",
    price: 45,
  },
  {
    title: "titulo 3",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam corrupti libero consequatur iure eius aliquam!",
    image: "https://picsum.photos/503/325",
    price: 45,
  },
  {
    title: "titulo 4",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis nam corrupti libero consequatur iure eius aliquam!",
    image: "https://picsum.photos/502/325",
    price: 45,
  },
];

//create your first component
const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Jumbotron */}
      <div className="container my-2 ">
        <Jumbotron />
      </div>{" "}
      {/* Card X 4 */}
      <div className="container row mx-auto">
        {listaProducts.map((product, index) => {
          return (
            <Card
              key={index}
              title={product.title}
              content={product.content}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
