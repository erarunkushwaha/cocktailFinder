import React, {useEffect, useState} from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  const [lodaing, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
      setLoading(true);
      async function getDrinks() {
          try {
           const response = await    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
           const  data = await response.json()
              const {drinks} = data;
           if(drinks){
               const  newCocktails = drinks.map(item => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return {id:idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic, glass:strGlass }
                   // console.log(item)
               });
               setCocktails(newCocktails);
           } else {
               setCocktails([]);
           }
          } catch (error){
              console.log(error)
          }
          setLoading(false);
      }

      getDrinks();
  }, [searchTerm]);
  return (
      <main>
        <SearchForm searchTerm={setSearchTerm} />
        <CocktailList lodaing={lodaing} cocktails={cocktails} />
      </main>
  );
}
