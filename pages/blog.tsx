import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Bubble from "../component/Bubble";

const blog = () => {
  return (
    <>
      <div className="  flex flex-col h-screen">
        <Header pageTitle="Blog Page" />
        <div className=" flex-1">
          <div className=" w-[100%
          ] flex mx-0 pt-10 justify-around bg-gradient-to-t from-[#00117f] to-[#4da2ff] flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Footer className="text-center text-gray-400 bg-[#00117f]" />
      </div>
      <Bubble />
    </>
  );
};

export default blog;
