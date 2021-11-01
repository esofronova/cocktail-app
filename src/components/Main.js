import { cocktail, setCocktail, setAlc, drinksByAlc } from "../App";
import { cocktails } from '../data/data';

export default function Main() {

  return (
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
  );
};