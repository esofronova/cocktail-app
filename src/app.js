import './style.scss';
import { cocktails } from './data/data';
import { useState } from 'react';
import Leftbar from './components/Leftbar';
import AllCocktails from './components/AllCocktails';
import Cocktail from './components/Cocktail';
import { ArrowReturnLeft } from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';

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

  console.log(cocktail);

  return (
    <div className="cocktail-app bg-cover py-sm-3 h-100">
      <Container className="h-100">
        <div className="p-3 text-white cocktail-form h-100">
          <div className="d-flex justify-content-between align-items-center mb-3" style={{ height: "7%" }}>
            <h3 className="fw-bold ms-3 text-white mix-drink mb-0">Mix Me a Drink!</h3>
            {cocktail !== "All" ?
              <button
                className="btn text-white shadow-none fs-3 p-0 d-flex"
                onClick={() => { setCocktail("All") }}
              ><ArrowReturnLeft /></button>
              :
              ""}
          </div>
          <Row style={{ height: "93%" }}>
            <Col xs={12} md={4} className="h-40 h-md-100 overflow-hidden">
              <Leftbar />
            </Col>
            <Col xs={12} md={8} className="h-50 h-md-100 overflow-auto">
              {cocktail === "All" ? <AllCocktails /> : <Cocktail />}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};