import { cocktails } from '../data/data';
import { cocktail } from "../App";

export default function Cocktail() {

  return (
    <div className="col-12 col-md-8 p-3 mt-3 mt-md-0 h-50 h-md-100 overflow-auto">
      {cocktails.map((item, index) => {
        return (
          <div key={index} className={"mx-3 mx-md-0" + item.name + (item.name === cocktail ? "" : " d-none")}>
            <div className="row mb-3">
              <div className="col-7 col-sm-6 col-lg-4 mb-3">
                <img src={item.img} className="w-100 h-100 of-cover" alt={item.name} />
              </div>
              <div className="col-5 col-sm-6 col-lg-8">
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
  );
};