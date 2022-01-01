import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail(){
      try {
        const  response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const  data = await response.json();
        if(data.drinks){
          const {strDrink:name, strDrinkThumb:image, strAlcoholic:info, strCategory:category, strGlass:glass,
            strInstructions:instructions, strIngredient1, strIngredient2, strIngredient3,
            strIngredient4, strIngredient5 } = data.drinks[0];

          const  indregents = [strIngredient1, strIngredient2, strIngredient3,
            strIngredient4, strIngredient5];
          const  newCocktail = {name, image, info, category, glass, instructions, indregents };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error ){
        console.log(error)
      }
      setLoading(false);

    }
    getCocktail();
  },[id]);
  if(loading){
    return  <h2 className="section-title">Loading...</h2>
  }
  if(!cocktail){
    return  <h2 className="section-title">No thing to display</h2>

  } else {
    const {name, image, category, info, glass, instructions, indregents} = cocktail;
  }
  return (
      <section className="section cocktail-section">
        <Link to="/" className={"btn btn-primary"}>back to home</Link>
        <h2 className="section-title">{ cocktail.name }</h2>
        <div className="drink">
          <img src={cocktail.image} alt= {cocktail.name } />
          <div className="drink-info">
            <p>name: {cocktail.name } </p>
            <p>category: {cocktail.category } </p>
            <p>info: {cocktail.info } </p>

            <p>glass: {cocktail.glass } </p>
            <p>instructions: {cocktail.instructions } </p>
            <p>
              indregents :

              { cocktail.indregents.map((item, index) => {
              return item ? <span key={index}>{item}</span> : null;
              })
            }
            </p>

          </div>
        </div>
      </section>
  );
}
