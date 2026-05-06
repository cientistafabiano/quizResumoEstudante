import { ProductCard } from "./components/product-card";
import { noticiaText } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col 
    items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">React:  Quiz + Notícia</h1>
        <p className="text-gray-400">Faça seu resumo e leia uma notícia.</p>
      </div>
        {/*<main className='flex-1 flex items-center justify-center'>
        <ProductCard noticiaText={noticiaText}/>
      </main> */}
    </div>
  );
}
 
        