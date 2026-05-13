//import {Card} from './Card.jsx';
import React from "react";

export default function ProductCard({ data, onAnswer, showFeedback, selected }) {
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
        }
    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full 
            max-w-xl border border-gray-700"> 
            <p>{pergunta}</p>
            {/*aqui percorremos as opçoes e mostramos na tela */}
            <div className="grid gap-3">
                 {/*coloca a função button dentro do className linha 29*/}
                {opcoes.map((opcao, index) => (
                    <button 
                       
                        key={index}
                        className={'${getButtonStyle(opcao)} text-left px-4 py-3 cursor-pointerbg-blue-800 rounded-lg text-white disabled:bg-gray-200'}
                        
                        onClick={() => onAnswer(opcao)}  
                        disabled={showFeedback}>  
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