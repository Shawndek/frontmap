import { Route, Routes, } from 'react-router-dom';
import Home from './components/Home.js'


export const [data] = 
  [
    {
      "name": "Wilhelma",
      "id": "123abc",
      "coordinates": [
        "48.80483",
        "9.20847"
      ],
      "adress": {
        "city": "Stuttgart",
        "zipcode": "70376",
        "street": "",
        "region": "Baden-Wuerttemberg"
      },
      "img": "https://upload.wikimedia.org/wikipedia/en/8/83/Stuttgart_Wilhelma_1900.jpg",
      "wikiLink": "https://en.wikipedia.org/wiki/Wilhelma",
      "description": "Wilhelma is a zoological-botanical garden in Stuttgart in the Bad Cannstatt district in the north of the city on the grounds of a historic castle. Wilhelma Zoo is one of the most popular tourist destinations in Baden-Württemberg, seeing more than 2 million visitors annually."
    }
  ]


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home />}/>
          <Route path='*' element={<div>NotFound</div>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

