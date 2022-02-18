import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = function() {
  const {id} = useParams();
  const [loading, set_loading] = React.useState(false);
  const [cocktail, set_cocktail] = React.useState(null);

  React.useEffect(() => {
    set_loading(true);
    async function getCocktail () {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if ( data.drinks ) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
          } = data.drinks[0]
          const ingredients = [];
          for (let i = 1; i <= 15; i++) {
            const ing = data.drinks[0][`strIngredient${i}`];
            if (ing) {
              ingredients.push(ing)
            }
          }
          const drink = {name, image, info, category, glass, instructions, ingredients};
          set_cocktail(drink);
        } else {
          set_cocktail(null)
        }
      } catch (error) {
        console.log(error.message)
      }
      set_loading(false)
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  } else if (!cocktail) {
    return (
      <h2 className='section-title' >no cocktail to display...</h2>
    )
  } else {
    const {name, 
      image, 
      info, 
      category, 
      glass, 
      instructions, 
      ingredients
    } = cocktail;
    return (
      <section className='section cocktail-section' >
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>
              <span className='drink-data' >name : </span>
              {name}
            </p>
            <p>
              <span className='drink-data' >category : </span>
              {category}
            </p>
            <p>
              <span className='drink-data' >info : </span>
              {info}
            </p>
            <p>
              <span className='drink-data' >glass : </span>
              {glass}
            </p>
            <p>
              <span className='drink-data' >instructions : </span>
              {instructions}
            </p>
            <p>
              <span className='drink-data' >ingredients : </span>
              {ingredients.map((item, i) => 
                <span key={i} >{item}, </span>
              )}
            </p>
          </div>
        </div>
      </section>
    )

  }
}

export default SingleCocktail
