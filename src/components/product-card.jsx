//import {Card} from './Card.jsx';
import React from "react";
import { temaQuiz } from "../data";
//update
//import { gerarQuiz } from "../service/aiQuiz";

export default function ProductCard({ data, onAnswer, 
    showFeedback, selected, current, total }) {
    {/*criando as variaveis que recebem os dados de data */}
   // const { pergunta, opcoes, resposta_correta } = data;
    //const {tema, titulo, resumo, conteudo_completo} = data;
   //fazer mudanças
   const temaAtual = temaQuiz[current];
   const perguntaAtual = temaAtual?.perguntas[0]
   //update
    //const temaAtual = gerarQuiz(current);
   // const perguntaAtual = temaAtual?.perguntas[0]    

    {/*funcao button alterando a cor */}
    const getButtonStyle = (index) => {
        if (!showFeedback) {
            return "bg-indigo-700 hover:bg-indigo-600 hover:scale-[1.01]"
        }

        if (index === perguntaAtual.resposta_correta) return "bg-green-800";
        if (index === selected) return "bg-rose-600";
        return "bg-gray-600" 
    }
    //new
    if (!perguntaAtual) return <p className="text-white">Nenhuma pergunta encontrada</p>
    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full 
            max-w-xl border border-gray-700">             
            <div className="flex flex-col  md:flex-row justify-between md:items-center gap-3 mb-4">
                <span className="bg-indigo-500 text-slate-900 font-bold px-3 py-1 
                rounded-full text-xs uppercase tracking-wider" >{temaAtual.tema}</span>
                <h2 className="text-lg font-medium text-gray-300">
                Question {current + 1} of {total}
                </h2>
                {/*calculando o progresso */}
                <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
                {selected
                    ? Math.round(((current + 1) / total) * 100) + "% complete"
                    : Math.round((current / total) * 100) + "% complete"}
                </span>
            </div>
        

            <p className="text-xl font-medium mb-6">{perguntaAtual.pergunta}</p>
            <div className="grid gap-3">
                {perguntaAtual.opcoes.map((opcao, index) => (
                <button
                    className={`${getButtonStyle(
                    index
                    )} text-left px-4 py-3 cursor-pointer rounded-lg text-white `}
                    key={index}
                    onClick={() => onAnswer(index)}
                    disabled={showFeedback}
                >
                    {opcao}
                </button>                
                ))}
            </div>        
        </div>
    );
}


{/*export function ProductCard({ noticiaText, onSelect }) {
    return (
        <div className=""> ProductCard
           {noticiaText.map((noticia) => (
                <Card key={noticia.id} 
                noticiaText={noticia} 
                onClick={() => onSelect(noticia)}  />
            ))}
        </div>
    );
}*/}