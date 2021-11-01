import margarita from './images/margarita.jpg';
import bloody_mary from './images/bloody-mary.jpg';
import daiquiri from './images/daiquiri.jpg';
import dry_martini from './images/dry-martini.jpg';
import long_island from './images/long-island.jpg';
import mojito from './images/mojito.jpg';
import negroni from './images/negroni.jpg';
import whisky_sour from './images/whisky-sour.jpg';
import white_russian from './images/white-russian.jpg';
import old_fashioned from './images/old-fashioned.jpg';

export const cocktails = [
  {
    name: 'Margarita',
    img: margarita,
    ingredients: [
      {
        name: 'Tequila',
        amount: '1.5 oz'
      },
      {
        name: 'Triple Sec',
        amount: '0.5 oz'
      },
      {
        name: 'Lime Juice',
        amount: '1 oz'
      },
      {
        name: 'Salt'
      }
    ],
    instruction: 'Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.',
    glass: {
      name: 'Cocktail Glass',
      img: '' 
    }
  },
  {
    name: 'Mojito',
    img: mojito,
    ingredients: [
      {
        name: 'Light Rum',
        amount: '2-3 oz'
      },
      {
        name: 'Lime',
        amount: '1'
      },
      {
        name: 'Sugar',
        amount: '2 tsp'
      },
      {
        name: 'Mint',
        amount: '2-4'
      },
      {
        name: 'Soda Water'
      }
    ],
    instruction: 'Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.',
    glass: {
      name: 'Highball glass',
      img: '' 
    }
  },
  {
    name: 'Long Island Tea',
    img: long_island,
    ingredients: [
      {
        name: 'Vodka',
        amount: '0.5 oz'
      },
      {
        name: 'Light Rum',
        amount: '0.5 oz'
      },
      {
        name: 'Gin',
        amount: '0.5 oz'
      },
      {
        name: 'Tequila',
        amount: '0.5 oz'
      },
      {
        name: 'Lemon',
        amount: '1'
      },
      {
        name: 'Coca-Cola',
      }
    ],
    instruction: 'Combine all ingredients (except cola) and pour over ice in a highball glass. Add the splash of cola for color. Decorate with a slice of lemon and serve.',
    glass: {
      name: 'Highball glass',
      img: '' 
    }
  },
  {
    name: 'Daiquiri',
    img: daiquiri,
    ingredients: [
      {
        name: 'Light Rum',
        amount: '1.5 oz'
      },
      {
        name: 'Lime',
        amount: '1'
      },
      {
        name: 'Sugar',
        amount: '1 tsp'
      }
    ],
    instruction: 'Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass.',
    glass: {
      name: 'Cocktail glass',
      img: '' 
    }
  },
  {
    name: 'Old Fashioned',
    img: old_fashioned,
    ingredients: [
      {
        name: 'Bourbon',
        amount: '4.5 cL'
      },
      {
        name: 'Angostura bitters',
        amount: '2 dashes'
      },
      {
        name: 'Orange Twist',
      },
      {
        name: 'Plain Water',
      }
    ],
    instruction: "Place sugar cube in old fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolved. Fill the glass with ice cubes and add bourbon. Garnish with orange twist.",
    glass: {
      name: 'Old-fashioned glass',
      img: '' 
    }
  },
  {
    name: 'Bloody Mary',
    img: bloody_mary,
    ingredients: [
      {
        name: 'Vodka',
        amount: '1 oz'
      },
      {
        name: 'Tomaro Juice',
        amount: '2 oz'
      },
      {
        name: 'Tabasco Sauce',
        amount: '1 dash'
      },
      {
        name: 'Celery',
        amount: '1'
      },
      {
        name: 'Lime',
        amount: '1'
      },
    ],
    instruction: "Shake all ingredients with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slices of lime and serve.",
    glass: {
      name: 'Old-fashioned glass',
      img: '' 
    }
  },
  {
    name: 'Dry Martini',
    img: dry_martini,
    ingredients: [
      {
        name: 'Gin',
        amount: '1.5 oz'
      },
      {
        name: 'Dry Vermouth',
        amount: '0.5 oz'
      },
      {
        name: 'Olive',
        amount: '1'
      }
    ],
    instruction: "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
    glass: {
      name: 'Cocktail glass',
      img: '' 
    }
  },
  {
    name: 'Whisky Sour',
    img: whisky_sour,
    ingredients: [
      {
        name: 'Whisky',
        amount: '2 oz'
      },
      {
        name: 'Lemon',
        amount: '1'
      },
      {
        name: 'Cherry',
        amount: '1'
      },
      {
        name: 'Sugar',
        amount: '1 tsp'
      }
    ],
    instruction: "Shake with ice. Strain into chilled glass, garnish and serve. If served 'On the rocks', strain ingredients into old-fashioned glass filled with ice.",
    glass: {
      name: 'Old-fashioned glass',
      img: '' 
    }
  },
  {
    name: 'Negroni',
    img: negroni,
    ingredients: [
      {
        name: 'Gin',
        amount: '1 oz'
      },
      {
        name: 'Campari',
        amount: '1 oz'
      },
      {
        name: 'Sweet Vermouth',
        amount: '1 oz'
      }
    ],
    instruction: "Stir into glass over ice, garnish and serve.",
    glass: {
      name: 'Old-fashioned glass',
      img: '' 
    }
  },
  {
    name: 'White Russian',
    img: white_russian,
    ingredients: [
      {
        name: 'Vodka',
        amount: '2 oz'
      },
      {
        name: 'Coffee Liquor',
        amount: '1 oz'
      },
      {
        name: 'Light Cream',
      },
    ],
    instruction: "Pour vodka and coffee liqueur over ice cubes in an old-fashioned glass. Fill with light cream and serve.",
    glass: {
      name: 'Old-fashioned glass',
      img: '' 
    }
  },
];

export const alcohol = ['Tequila', 'Light Rum', 'Vodka', 'Whisky', 'Gin', 'Martini' ];