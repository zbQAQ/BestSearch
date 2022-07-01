import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DefaultLayout from '../layout/DefaultLayout';
import Home from '../pages/Home/Home';
import SearchPage from '../pages/SearchPage/SearchPage';

export default function Router() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}