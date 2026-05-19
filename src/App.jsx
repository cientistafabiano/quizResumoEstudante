import  ProductCard  from "./components/product-card";
import { noticiaText, temaQuiz } from "./data";
import { useState } from "react";
import Confetti from "react-confetti";

export default function App() {
  {/*criando os estados para escolha de perguntas e respostas */}
  const [currentProduct, setCurrentProduct] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
 
  {/*função de decisao não esta reconhecendo a proxima pergunta*/}
  const handleAnswer = (opcao) => {
      if (showFeedback) return;

      setSelectedAnswer(opcao);
      setShowFeedback(true);

      if (opcao === temaQuiz[0].perguntas[currentProduct].resposta_correta) {
          setScore(score + 1);
      }
  };
  {/*função seguir para a próxima pergunta */}
  const handleNextQuestion = () => {
      if (currentProduct + 1 < temaQuiz.length) {
          setCurrentProduct(currentProduct + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
      } else {
          setIsFinished(true);
      }
  };
  {/*função reiniciar o quiz */}
  const restartQuiz = () => {
    setCurrentProduct(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsFinished(false);
  };
  {/*função calcular o progresso do quiz */}
  const calculateProgress = () => {
    if (isFinished) return 100;
    const baseProgress = (currentProduct / temaQuiz[0].perguntas.length) * 100;
    const questionProgress = selectedAnswer ? (1 / temaQuiz[0].perguntas.length) * 100 : 0;
    return baseProgress + questionProgress;
  };

  const percentage = (score / temaQuiz[0].perguntas.length) * 100;
  const showConfetti = isFinished && percentage > 50; 

  return (
    <div className="min-h-screen bg-gray-900
     text-white flex flex-col 
    items-center justify-center p-4">
      {showConfetti && <Confetti />} 
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">React:  Quiz + Notícia</h1>
        <p className="text-gray-400">Faça seu resumo e leia uma notícia.</p>
      </div>
      {/*barra de progresso */}
      <div className="w-full max-w-xl mb-6">
        <div className="bg-gray-700 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 duration-500 ease-out transition-all"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      {/*recebe os dados de data para o quiz como o temaQuiz é um array
      precisa escolher a posição para depois acessar o objeto (perguntas) */}
        
      {!isFinished ? (
        <>
          <ProductCard 
            showFeedback={showFeedback}
            onAnswer={handleAnswer} 
            data={temaQuiz[0].perguntas[currentProduct]} 
            current={currentProduct}            
            total={temaQuiz.length}
            selected={selectedAnswer}
          />{/*erro ta aqui pra pegar o tamanho do array - total */}
          {/*criando o button de próxima pergunta */}
          <div className="mt-6 min-h-[60px]">
            {showFeedback && (
              <button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600
              py-3 px-6 rounded-lg font-medium shadow-lg cursor-pointer"
              onClick={handleNextQuestion}>
                {currentProduct + 1 < temaQuiz.length ? 
                'Continue' : 'Veja resultados'}
              </button>)}
          </div>
        </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completo!</h2>
            <p className="text-xl mb-6">
              Sua Pontuação <span>{score}</span> de{" "}
              <span className="font-bold">{temaQuiz.length}</span> e isto é{" "}
              {Math.round((score / temaQuiz.length) * 100)}%
            </p>
            <button
              className="bg-gradient-to-r from-indigo-600 to-purple-600 py-3 px-6 rounded-lg font-medium shadow-lg cursor-pointer"
              onClick={restartQuiz}
            >
              Reiniciar Quiz
            </button>
          </div>
        )
    
    }
        {/*<main className='flex-1 flex items-center justify-center'>
        <ProductCard noticiaText={noticiaText}/>
      </main> 
      if data={temaQuiz.tema} === data={noticiaText.tema}
      <div> <ProductCard noticiaText={noticiaText} /> </div>
      */}
  </div>
 );
}
    
       

 
        