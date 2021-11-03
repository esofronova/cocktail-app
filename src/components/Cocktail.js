import { cocktail } from "../App";

export default function Cocktail(item) {

  console.log(cocktail);
  item = cocktail;

  return (
    <div className="mx-3 mx-md-4">
      <div>
        <h3 className="fw-bold text-center mb-3">{item.name}</h3>
      </div>
      <div className="row mb-3">
        <div className="col-7 col-sm-6 col-lg-4 mb-3">
          <img src={item.img} className="w-100 h-100 of-cover" alt={item.name} />
        </div>
        <div className="col-5 col-sm-6 col-lg-8">
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
};