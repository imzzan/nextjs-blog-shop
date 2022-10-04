import React, { useState } from "react";
import { MdOutlineLogin, MdPersonAddAlt } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import Head from "next/head";

interface LayoutProps {
  pageTitle: string;
}

const Header = (props : LayoutProps) => {
  const { pageTitle } = props;
  const [nav, setNav] = useState(true);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <Head>
        <title>NextJs Basic | {pageTitle}</title>
        <meta name="description" content="Website Next Js Basic" />
      </Head>
      <div className=" flex sm:justify-around justify-between z-10 items-center h-16 text-white w-[100%] mx-auto bg-blue-600">
        <h1 className=" text-2xl font-bold cursor-pointer font-GreatVibes">Zanly.com</h1>
        <ul className=" hidden md:flex">
          <li className="p-4 cursor-pointer"><Link href="/">Home</Link></li>
          <li className="p-4 cursor-pointer"><Link href="/blog">Blog</Link></li>
          <li className="p-4 cursor-pointer"><Link href="/aboutus">About Us</Link></li>
          <li className="p-4 cursor-pointer"><Link href="/products">Products</Link></li>
        </ul>
        <ul className=" hidden md:flex">
          <li className=" p-2 border rounded-sm mx-3 cursor-pointer hover:border-pink-400">
            Login <MdOutlineLogin className=" inline" />
          </li>
          <li className=" p-2 border rounded-sm mx-3 cursor-pointer">
            Signin
            <MdPersonAddAlt className=" inline" />
          </li>
          <li className=" p-2 border rounded-sm mx-3 cursor-pointer">
            Account
            <BsPersonCircle className=" inline ml-1" />
          </li>
        </ul>
        <div className=" block md:hidden cursor-pointer" onClick={handleClick}>
          {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-[-100%]"
              : " fixed top-0 left-0 w-[50%] h-full border-r border-r-gray-500 bg-white ease-in-out duration-500 text-black p-6 z-10"
          }
        >
          <h1 className=" text-2xl font-bold m-4 w-full">
            <Link href="/">Zanly.com</Link>
          </h1>
          <li className="p-4 border-b border-b-gray-800 cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-b-gray-800 cursor-pointer">
            Product
          </li>
          <li className="p-4 border-b border-b-gray-800 cursor-pointer">
            About Us
          </li>
          <li className="p-4 cursor-pointer border-b border-b-gray-800">
            Reviews
          </li>
          <li className=" p-2 border rounded-sm cursor-pointer">
            Login <MdOutlineLogin className=" inline" />
          </li>
          <li className=" p-2 border rounded-sm cursor-pointer">
            Signin <MdPersonAddAlt className=" inline" />
          </li>
          <li className=" p-2 border rounded-sm cursor-pointer">
            Account <BsPersonCircle className=" inline ml-1" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
