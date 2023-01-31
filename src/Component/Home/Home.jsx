import React from "react";
import Support from "../Contact/Support";
import Destination from "../Destination/Destination";
import Discount from "../Discount/Discount";
import Galarry from "../Gallary/Gallary";
import Packages from "../Packages/Packages";
import Services from "../Services/Services";
import HeaderSection from "./HeaderSection/HeaderSection";


const Home = () => {

  // All home component add here
  return (
    <div>
     <HeaderSection></HeaderSection>
      <Destination />
      
      <Discount />
      <Services></Services>
      <Packages quantity={6} />
   
      <Support />
      <Galarry />
    </div>
  );
};

export default Home;
