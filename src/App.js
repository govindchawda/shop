import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import Banner from './componants/Banner';
import Aboutus from './Aboutus';
import Course from './Course';
import Categorie from './Categories';
import Instructor from './Instructor';
import Section from './Section';
import Footer from './componants/Footer';
import { SliderDemo } from './componants/SliderDemo';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <SliderDemo/>
    {/* <Section/> */}
    <Aboutus/>
    <Course/>
    <Categorie/>
    <Instructor/>
    <Footer/>
    </>
  );
}

export default App;
