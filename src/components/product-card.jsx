//import {Card} from './Card.jsx';
import React from "react";

export default function ProductCard({ data, onAnswer }) {
    {/*criando as variaveis que recebem os dados de data */}
    const { pergunta, opcoes, resposta_correta } = data;
    const {tema, titulo, resumo, conteudo_completo} = data;
    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full 
            max-w-xl border border-gray-700"> 
            <p>{pergunta}</p>
            {/*aqui percorremos as opçoes e mostramos na tela */}
            <div className="grid gap-3">
                {opcoes.map((opcao, index) => (
                    <button 
                        className='text-left px-4 py-3 cursor-pointer
                        bg-blue-800 rounded-lg text-white'
                        key={index}
                        onClick={() => onAnswer(opcoes)}  >  
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