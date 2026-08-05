import Link from 'next/link';
import HeroCarousel from './pages/farmingcarousals';
import FarmServices from './pages/farmservices';
import CoreValues from './pages/CoreValues';
import FarmLegacy from './pages/FarmLegacy';
import AboutUs from './pages/AboutUs';

export default function Home() {
  return (
    <div>
      <HeroCarousel/>
        <AboutUs/>
      <FarmServices/>
      <CoreValues/>
      <FarmLegacy/>
    
    </div>
  );
}