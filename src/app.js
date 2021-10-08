import './style.scss';
import { alcohol, cocktails } from './data';
import { useState } from 'react';

export default function CocktailApp() {

  let [cocktail, setCocktail] = useState('All');
  let [alc, setAlc] = useState('All');

  let drinksByAlc = alc === 'All' ? [...cocktails] : [];
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
          <div className="col-12 col-md-4 d-flex flex-column justify-content-between">
            <form className="mt-3">
              <div className="mb-3">
                <label className="form-label">Drinks by Name</label>
                <select
                  className="form-select"
                  onChange={e => { setCocktail(e.target.value); setAlc('All') }}
                  value={cocktail}
                >
                  <option value="All">All</option>
                  {cocktails.map((item, index) => {
                    return (
                      <option key={index} value={item.name}>{item.name}</option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Drinks by Alcohol</label>
                <select
                  className="form-select"
                  value={alc}
                  onChange={(e) => { setAlc(e.target.value); setCocktail('All') }}
                >
                  <option value="All">All</option>
                  {alcohol.map((item, index) => {
                    return (
                      <option key={index} value={item}>{item}</option>
                    );
                  })}
                </select>
              </div>
              <div className="centered">
                <button
                  type="button"
                  className="btn text-white border"
                  onClick={() => {
                    let random = Math.floor(Math.random() * cocktails.length);
                    setCocktail(cocktails[random].name);
                    setAlc('All');
                  }}
                >Random Drink</button>
              </div>
            </form>
            <div className="source">
              <span>Source: </span>
              <a href="https://www.thecocktaildb.com/">https://www.thecocktaildb.com/</a>
            </div>
          </div>
          <div className="col-12 col-md-8 p-3">
            <div 
              className={"p-3 d-flex flex-wrap cocktails overflow-auto" + (cocktail === 'All' ? "" : " d-none")}
              style={{ height: "28em" }}
            >
              {drinksByAlc.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={"col-6 col-lg-4"}
                  >
                    <div className="m-3 position-relative rounded overflow-hidden">
                      <img src={item.img} className="w-100 h-100 of-cover" alt={item.name} />
                      <div
                        className="text-center text-white text-uppercase fw-bold position-absolute w-100 h-100 centered p-4 cocktail-name"
                        onClick={() => { setCocktail(item.name); setAlc('All') }}
                      >{item.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              {cocktails.map((item, index) => {
                return (
                  <div key={index} className={"" + item.name + (item.name === cocktail ? "" : " d-none")}>
                    <div className="row mb-3">
                      <div className="col-6 col-lg-4">
                        <img src={item.img} className="w-100 h-100 of-cover" alt={item.name} />
                      </div>
                      <div className="col-6 col-lg-8">
                        <h3 className="fw-bold">{item.name}</h3>
                        <h5>Ingredients</h5>
                        {item.ingredients.map((item, index) => {
                          return (
                            <p
                              key={index}
                              className="mb-1"
                            >{item.name + ' ' + (item.amount ? item.amount : '')}</p>
                          );
                        })}
                      </div>
                    </div>
                    <div className="row">
                      <h5>How To Mix It</h5>
                      <p>{item.instruction}</p>
                      <h5>{`Reccommended Glass: ${item.glass.name}`}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};