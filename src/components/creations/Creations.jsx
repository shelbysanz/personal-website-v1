import "./creations.scss";
import { creations } from "../../data";

export default function Portfolio() {
  return (
    <div className="creations" id="creations">
      <div className="banner">/portfolio</div>
      <div className="container">
        {creations.map((item, index) => (
          <div className="whole-item" key={index}>
            <a href={item.link} target="_blank" rel="noreferrer">
              <div className="item">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
            </a>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
