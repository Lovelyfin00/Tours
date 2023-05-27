import { useState } from "react";

const Card = (props) => {
  const {id, image, info, name, price, removeCard} = props;

  const [isShortened, setIsShortened] = useState(true);

  const InfoText = isShortened ? String(info).slice(0, 200) : info;
  const buttonText = isShortened ? "...Read More" : "Show Less";

  return (
      <article className="single-tour" key={id}>
        <img src={image} alt={name} className="img" />
        <span className="tour-price">{price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>{InfoText}<button className="info-btn" onClick={() => setIsShortened(!isShortened)}>{buttonText}</button></p>
          <button className="btn delete-btn" onClick={() => removeCard(id)}>Not interested</button>
        </div>
      </article>
  )
}
export default Card