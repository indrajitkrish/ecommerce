import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return ( 
    <Carousel>
      <div>
        <img src="../Assets/banner1.jpg" alt="carousel1"/>
        <p className="legend"></p>
      </div>
      <div>
        <img src="../Assets/banner2.jpg" alt="carousel2"/>
        <p className="legend"></p>
      </div>
      <div>
        <img src="../Assets/banner3.jpg" alt="carousel3" />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
};

export default CarouselPage;