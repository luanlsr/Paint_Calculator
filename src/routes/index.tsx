import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';

import MainPage from '../pages/Main';
import { ResultPage } from '../pages/ResultPage';
import { WallFour } from '../pages/WallFour';
import { WallOne } from '../pages/WallOne';
import { WallThree } from '../pages/WallThree';
import { WallTwo } from '../pages/WallTwo';

export const RoutesBuilder = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/wallone' element={<WallOne />} />
      <Route path='/walltwo' element={<WallTwo />} />
      <Route path='/wallthree' element={<WallThree />} />
      <Route path='/wallfour' element={<WallFour />} />
      <Route path='/result' element={<ResultPage />} />
    </Routes>
  );
};

export const CreateRoutes = (): JSX.Element => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RoutesBuilder />
      <Footer />
    </BrowserRouter>
  );
};
