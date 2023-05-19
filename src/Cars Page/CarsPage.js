import Cars from './Cars';
import CarsList from '../components/CarsList';
import Footer from './Footer';

function CarsPage() {
  return (
    <div className="CarsPage">
      <Cars></Cars>
      <CarsList></CarsList>
      <Footer></Footer>
    </div>
  );
}

export default CarsPage;
