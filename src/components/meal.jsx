import { Link } from "react-router-dom";

export default function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">

                <img className="materialboxed" width="200" src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title"> {strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn"> Watch recipe </Link>
            </div>
        </div>
    );
}