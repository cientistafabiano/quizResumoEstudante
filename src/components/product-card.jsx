//import {Card} from './Card.jsx';
import React from "react";

export default function ProductCard({ data, onAnswer, showFeedback, selected, current, total }) {
    {/*criando as variaveis que recebem os dados de data */}
    const { pergunta, opcoes, resposta_correta } = data;
    const {tema, titulo, resumo, conteudo_completo} = data;
   

    {/*funcao button alterando a cor */}
    const getButtonStyle = (opcao) => {
        if (!showFeedback) {
            return "bg-indigo-700 hover:bg-indigo-600 hover:scale-[1.01]"
        }

        if (opcao === resposta_correta) return "bg-esmerald-600";
        if (opcao === selected) return "bg-rose-600";
        return "bg-gray-600" 
    }
    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full 
            max-w-xl border border-gray-700">             
            <div className="flex justify-between items-center mb-4">
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
        

            <p className="text-xl font-medium mb-6">{pergunta}</p>
            <div className="grid gap-3">
                {opcoes.map((opcao, index) => (
                <button
                    className={`${getButtonStyle(
                    opcao
                    )} text-left px-4 py-3 cursor-pointer rounded-lg text-white `}
                    key={index}
                    onClick={() => onAnswer(opcao)}
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