import { useEffect, useState } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Panier from './Components/Panier';
import Contact from './Components/Contact';

function App() {
  const [main, setMain] = useState("shop")

  useEffect(()=>{
    if(!sessionStorage.getItem("panier")){
      sessionStorage.setItem("panier", JSON.stringify([]))
    }
  }, [])

  return (
    <div>
      <Banner setMain = {setMain}/>
      {main === "shop" && <Shop />}
      {main === "panier" && <Panier />}
      {main === "contact" && <Contact />}
      <Footer />
    </div>
  );
}


export default App;
