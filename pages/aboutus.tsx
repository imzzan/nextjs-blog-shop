import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Image from "next/image";
import Bubble from "../component/Bubble";

const aboutus = () => {
  return (
    <>
      <div className=" flex flex-col h-screen">
        <Header pageTitle="Blog Page" />
        <div className=" flex-1 bg-gradient-to-t from-[#00117f] to-[#4da2ff]">
          <div className=" flex sm:flex-row flex-col justify-around mt-10 px-10 items-center gap-5">
            <Image
              src="/gambar.png"
              width={600}
              height={300}
              className=" w-[600px] rounded-xl hover:scale-150 transition"
            />
            <div className=" item-center text-white text-center">
              <h1 className=" text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                unde!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                itaque accusamus harum dolores, et excepturi fugit commodi
                repudiandae aliquam. Dolorem ad quam sed fuga magni.
              </p>
            </div>
          </div>

          <div className=" flex sm:flex-row flex-col justify-around mt-10 px-10 items-center gap-5">
            <div className=" item-center text-white text-center">
              <h1 className=" text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                unde!
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                itaque accusamus harum dolores, et excepturi fugit commodi
                repudiandae aliquam. Dolorem ad quam sed fuga magni.
              </p>
            </div>
            <Image
              src="/gambar.png"
              width={600}
              height={300}
              className=" w-[600px] rounded-xl hover:scale-150 transition"
            />
          </div>

        </div>
        <Footer className=" text-center text-gray-500 bg-[#00117f]" />
      </div>
      <Bubble />
    </>
  );
};

export default aboutus;
