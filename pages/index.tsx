import Bubble from "../component/Bubble";
import Fish from "../component/Fish";
import Footer from "../component/Footer";
import Header from "../component/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className=" h-screen flex flex-col">
        <Header pageTitle="Home Page " />
        <div className=" flex-1 bg-gradient-to-t from-[#00117f] to-[#4da2ff]">
          <div className=" text-center sm:mt-[98px] mt-5 mx-[40px]">
            <p className="font-bold text-2xl text-white font-Playball">
              Welcome to Zanly.com, What are you looking for ?
            </p>
            <p className=" text-white py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque
              sed cumque nobis reprehenderit! Magni iste quam id recusandae
              provident? Fugit dolorem labore eius vel qui, repellat, est
              praesentium error eum consequatur necessitatibus obcaecati ea,
              velit ducimus voluptates saepe doloribus iusto recusandae. Nobis
              aperiam unde reprehenderit dignissimos, explicabo distinctio?
              Iure!
            </p>
            <button className=" bg-sky-500 p-2 rounded-lg text-white cursor-pointer z-50">
              Let's get Started
            </button>
          </div>
          <Fish />
        </div>
        <Footer className="text-center text-gray-400 bg-[#00117f]" />
      </div>
      <Bubble/>
    </>
  );
}
