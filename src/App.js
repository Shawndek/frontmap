<<<<<<< HEAD
import { Route, Routes, } from 'react-router-dom';
import Home from "./components/home"
=======
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import { v4 as uuidv4 } from 'uuid';

export const [data] = [
  {
    name: 'WBS Coding School',
    id: uuidv4(),
    coordinates: ['48.80483', '9.20847'],
    adress: {
      city: 'Berlin',
      zipcode: '12459',
      street: 'Weiskopfstr',
      region: 'Berlin',
    },
    img: 'https://mlsf03rmjfdn.i.optimole.com/fVWTwdQ.IAUD~13218/w:768/h:293/q:90/https://www.wbscodingschool.com/files/standard_colour_cutout_text_icon-1.svg',
    wikiLink: 'https://de.wikipedia.org/wiki/WBS_Training',
    description:
      'Skip years of studying and become a Web Developer, Data Scientist or Digital Product Designer from scratch.',
  },
];
>>>>>>> e2022ce0947df387f1b3a483c85a2a5b8a8cfbc5

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='*' element={<div>NotFound</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
