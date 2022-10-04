import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[400px] py-4 px-4 bg-white shadow-xl rounded-lg my-10 hover:scale-110 transition cursor-pointer">
      <div className="flex justify-center md:justify-end -mt-16">
        <Image
          src="/poto.jpg"
          alt="My foto"
          width={70}
          height={70}
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-xl font-semibold">Design Tools</h2>
        <p className="mt-2 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
          deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
          commodi hic, suscipit in a veritatis pariatur minus consequuntur!
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className=" text-sm font-medium text-indigo-500">
          John Doe
        </a>
      </div>
    </div>
  );
};

export default Card;
