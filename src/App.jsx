import  ProductCard  from "./components/product-card";
import { noticiaText, temaQuiz } from "./data";
import { useState } from "react";

export default function App() {
  {/*criando os estados  */}
  const [currentProduct, setCurrentProduct] = useState(0);
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col 
    items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">React:  Quiz + Notícia</h1>
        <p className="text-gray-400">Faça seu resumo e leia uma notícia.</p>
      </div>
      {/*recebe os dados de data para o quiz como o temaQuiz é um array
      precisa escolher a posição para depois acessar o objeto (perguntas) */}
        <ProductCard data={temaQuiz[0]?.perguntas[currentProduct]} />
        {/*<main className='flex-1 flex items-center justify-center'>
        <ProductCard noticiaText={noticiaText}/>
      </main> */}
    </div>
  );
}
 
        