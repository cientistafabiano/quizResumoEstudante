import { Heart } from 'lucide-react';
export function Card ({noticiaText}) {
    return (
        <div>
            <div className="rounded-lg shadow-md p-4">
                
                <h2 className="card-title">{noticiaText.titulo}</h2>
                <p className="card-description">{noticiaText.resumo}</p>
            </div>
            <button className="card-button">
                <Heart />
            </button>
        </div>
    );
}