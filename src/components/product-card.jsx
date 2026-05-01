import {Card} from './Card.jsx';

export function ProductCard({ noticiaText, onSelect }) {
    return (
        <div className="">
            {noticiaText.map((noticia) => (
                <Card key={noticia.id} 
                noticiaText={noticia} 
                onClick={() => onSelect(noticia)} />
            ))}
        </div>
    );
}