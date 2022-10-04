import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";

interface Item {
  id: Number;
  title: String;
  price : String;
  image : string;
  rating : {
    rate : String;
    count: Number;
  }
  
}

interface productProps {
  product: Item[]
}

const products = (props : productProps) => {

  const {product} = props;

  return (
    <>
      <div className=" flex flex-col h-screen">
        <Header pageTitle="Products Page" />
        <div className=" flex-1 flex flex-wrap justify-center md:justify-around md:flex-row flex-col bg-gradient-to-t from-[#00117f] to-[#4da2ff]">
          
          {
            product.map((item) => {
              return (
                <div className=" w-[300px] my-10 h-470px] mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    src={item.image}
                    className="p-8 rounded-t-lg w-[100%] h-[300px]"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <BsFillStarFill className=" text-orange-400" />
                    <BsFillStarFill className=" text-orange-400" />
                    <BsFillStarFill className=" text-orange-400" />
                    <BsFillStarFill className=" text-orange-400" />
                    <BsFillStarFill />
                    <p>{item.rating.rate}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {item.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
        <Footer className=" text-center text-gray-500 bg-col bg-[#00117f]" />
      </div>
    </>
  );
};

export default products;

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const product = await res.json();
  return {
    props : {
      product
    }
  }
}