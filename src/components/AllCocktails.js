import { setCocktail, setAlc, drinksByAlc } from "../App";

export default function AllCocktails() {

  return (
    <div className="col-12 col-md-8 p-3 d-flex flex-wrap cocktails">
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
  );
};