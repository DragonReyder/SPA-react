import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

export default function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe card-panel grey lighten-2 center-align">
                    <h1>{recipe.strMeal}</h1>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <div className="recipehead2 center-align">

                        <h6>Category: {recipe.strCategory}</h6>
                        {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                        <p>{recipe.strInstructions}</p>
                    </div>
                    <table className="centered ">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })
                            }
                        </tbody>
                    </table>
                </div>
            )
            };

        </>
    )
}