import  ProductCard  from "./components/product-card";
import { noticiaText, temaQuiz } from "./data";
import { useState } from "react";

export default function App() {
  {/*criando os estados para escolha de perguntas e respostas */}
  const [currentProduct, setCurrentProduct] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  {/*função de decisao */}
  const handleAnswer = (opcao) => {
      if (showFeedback) return;
      setSelectedAnswer(opcao);
      setShowFeedback(true);

      if (opcao === temaQuiz[currentProduct].perguntas[1].resposta_correta) {
          setScore(score + 1);
      }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col 
    items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">React:  Quiz + Notícia</h1>
        <p className="text-gray-400">Faça seu resumo e leia uma notícia.</p>
      </div>
      {/*recebe os dados de data para o quiz como o temaQuiz é um array
      precisa escolher a posição para depois acessar o objeto (perguntas) */}
        <p>Pontuação: {score}</p>
        <ProductCard onAnswer={handleAnswer} data={temaQuiz[0]?.perguntas[currentProduct]} />
        {/*<main className='flex-1 flex items-center justify-center'>
        <ProductCard noticiaText={noticiaText}/>
      </main> 
      if data={temaQuiz.tema} === data={noticiaText.tema}
      <div> <ProductCard noticiaText={noticiaText} /> </div>
      */}
    </div>
  );
}
 
        