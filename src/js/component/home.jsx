import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const listaProducts = [
  {
    title: "titulo 1",
    content: "lorem ipsum et dolor algo",
    image: "https://picsum.photos/400/325",
    price: 45,
  },
  {
    title: "titulo 2",
    content: "lorem ipsum et dolor algo",
    image: "https://picsum.photos/401/325",
    price: 45,
  },
  {
    title: "titulo 3",
    content: "lorem ipsum et dolor algo",
    image: "https://picsum.photos/403/325",
    price: 45,
  },
  {
    title: "titulo 4",
    content: "lorem ipsum et dolor algo",
    image: "https://picsum.photos/402/325",
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
    </>
  );
};

export default Home;
