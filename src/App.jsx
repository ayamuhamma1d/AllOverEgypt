
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/pagination';
import CustomNavbar from './shared/navbar/CustomNavbar';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import NotFoundPage from './shared/notFoundPage/NotFoundPage';
import EgyptDayTours from './components/egyptDayTours/EgyptDayTours';
import EgyptTourPackage from "./components/EgyptTourPackage/EgyptTourPackage";
import NileCruise from './components/nileCruise/NileCruise';
import Trip from './components/trip/Trips';
import Footer from './shared/footer/Footer';
import Whatsapp from './shared/whatsapp/Whatsapp';
import './App.css'
import Filter from './shared/filter/Filter';
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/egyptDayTours" element={<EgyptDayTours />} />
          <Route path="/egyptTourPackage" element={<EgyptTourPackage />} />
          <Route path="/nileCruise" element={<NileCruise />} />
          <Route path="/trips/:id" element={<Trip />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
        <Whatsapp />

      </BrowserRouter>

    </>
  )
}

export default App
