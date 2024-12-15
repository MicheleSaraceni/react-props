import Button from "./Button.jsx";
import style from "./Card.module.css";

function CardComponent({
    image = "https://picsum.photos/600/400",
    title,
    content,
    tags = "Descrizione non presente",
}) {
    return (
        <div className={`card ${style.cardEffect}`}>
            <img
                src={image}
                className={`card-img-top ${style.cardImg}`}
                alt={title}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div>{content}</div>
                <br />
                <p className="card-text">{tags}</p>
                <Button />
            </div>
        </div>
    );
}

export default CardComponent;
