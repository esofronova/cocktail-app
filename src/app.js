import './style.scss';
import { cocktails } from './data/data';
import { useState } from 'react';
import Leftbar from './components/Leftbar';
import AllCocktails from './components/AllCocktails';
import Cocktail from './components/Cocktail';

export let cocktail, setCocktail, alc, setAlc, drinksByAlc;

export default function CocktailApp() {

  [cocktail, setCocktail] = useState('All');
  [alc, setAlc] = useState('All');

  console.log(cocktail);

  drinksByAlc = alc === 'All' ? [...cocktails] : [];
  cocktails.forEach((item) => {
    item.ingredients.forEach((liquor) => {
      if (liquor.name === alc) {
        drinksByAlc.push(item);
      };
    });
  });

  return (
    <div className="cocktail-app bg-cover py-5">
      <div className="container">
        <div className="row border rounded p-3 my-3 text-white cocktail-form">
          <div className="d-flex justify-content-between">
            <h3 className="fw-bold ms-3 text-white mix-drink">Mix Me a Drink!</h3>
            {cocktail !== "All" ?
              <button
                className="btn text-white shadow-none"
                onClick={() => { setCocktail("All") }}
              >All Cocktails</button>
              :
              ""}
          </div>
          <Leftbar />
          {cocktail === "All" ? <AllCocktails /> : <Cocktail />}
        </div>
      </div>
    </div>
  );
};