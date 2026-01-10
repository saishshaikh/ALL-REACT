import "../App.css";
import { Bookmark } from "lucide-react";

function Card(props) {
  console.log(props.company);

  return (
    <div className="card">
      <div className="TOP">
        <img
          src={props. brandLogo}
          alt="company"
        />
        <button>
          Save <Bookmark size={12} />
        </button>
      </div>

      <div className="Centre">
        <h3>
          {props.company}
          <span>{props.datePosted}</span>
        </h3>
        <h2>{props.post}</h2>

        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>${props.pay}/hr</h4>
          <p>Mumbai, India</p>
        </div>
        <button className="btn">Apply Now</button>
      </div>
    </div>
  );
}

export default Card;
