import Link from "next/link";
import React from "react";

const Shop = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const  products   = await data.json();

 console.log(products);
 
  return (
    <div>
      <div className="h-[300px] w-[300px] bg-sky-400 mx-auto container">
        <p className="text-5xl flex items-center justify-center">Shop Hero</p>

        <p className="text-3xl underline flex py-5 items-center justify-center">
          <Link href={"/shop/product"}>Single product</Link>{" "}
        </p>
      </div>

      {products.map((item) => (
        <div>  
        <div className="py-10 text-center">
          <h3 key={item.id} className=" bg-green-300">{item.title}</h3>
        </div>
      <div className=" flex justify-center items-center">
            <img className="w-[200px] h-[200px]" src={item.image} alt="" />
      </div>
      </div>
      ))}
    </div>
  );
};

export default Shop;
