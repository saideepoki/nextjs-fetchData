"use client";

import { useEffect, useState } from "react";


export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data: any= await response.json();
      setProducts(data.products);
      console.log(data.products);
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Product List</h1>
      <ul>
        {products.map((item) => (
          <div key={item.id}>
            <li>{item.title} {item.description}</li>
            <button onClick={() => console.log("Button clicked")}>Click me</button>
          </div>
        ))}
      </ul>
    </main>
  );
}
