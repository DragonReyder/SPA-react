import { Link } from "react-router-dom";

function CartItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;
    return (
        <div className="card hoverable">
            <div className="card-image">
                <img className="materialboxed" width="200" src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">

                <Link to={`/category/${strCategory}`} className="btn">
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export { CartItem };