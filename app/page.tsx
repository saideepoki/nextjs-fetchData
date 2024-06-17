import ProductButton from "./productButton";


async function fetchProducts() {
  let data: any = await fetch("https://dummyjson.com/products");
  data = await data.json();
  console.log(data);
  return data.products;

}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Product List</h1>
      <ul>
        {products.map((item) => (
          <div key={item.id}>
            <li>{item.title} {item.description}</li>
             <ProductButton id = {item.id}/>
          </div>
        ))}
      </ul>
    </main>
  );
}
