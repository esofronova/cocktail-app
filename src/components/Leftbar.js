import { cocktail, setCocktail, alc, setAlc } from "../App";
import { alcohol, cocktails } from '../data/data';

export default function Leftbar() {

  return (
    <div className="mx-3 mx-md-0 d-flex flex-column justify-content-between h-100">
      <form>
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
            className="btn text-white border shadow-none"
            onClick={() => {
              let random = Math.floor(Math.random() * cocktails.length);
              setCocktail(cocktails[random].name);
              setAlc('All');
            }}
          >Random Drink</button>
        </div>
      </form>
      <div className="source mt-4">
        <span>Source: </span>
        <a href="https://www.thecocktaildb.com/">https://www.thecocktaildb.com/</a>
      </div>
    </div>
  );
};