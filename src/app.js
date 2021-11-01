import './style.scss';
import Leftbar from './components/Leftbar';
import Main from './components/Main';
import { cocktails } from './data/data';
import { useState } from 'react';

export let cocktail, setCocktail, alc, setAlc, drinksByAlc;

export default function CocktailApp() {

  [cocktail, setCocktail] = useState('All');
  [alc, setAlc] = useState('All');

  drinksByAlc = alc === 'All' ? [...cocktails] : [];
  cocktails.forEach((item) => {
    item.ingredients.forEach((liquor) => {
      if (liquor.name === alc) {
        drinksByAlc.push(item);
      };
    });
  });

  return (
    <div className="cocktail-app bg-cover py-5 h-100 overflow-hidden">
      <div className="container">
        <div className="row border rounded p-3 my-3 text-white cocktail-form">
          <h3 className="fw-bold ms-3 text-white mix-drink">Mix Me a Drink!</h3>
          <Leftbar />
          <Main />
        </div>
      </div>
    </div>
  );
};