import { ProductCard } from "./components/product-card";
import { noticiaText } from "./data";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <h1 className='text-red-500 text-5xl font-bold'>Quiz</h1>
      <main className='flex-1 flex items-center justify-center'>
        <ProductCard noticiaText={noticiaText}/>
      </main>
    </div>
  );
}