import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Ipads from "./assets/Images/Ipads.webp";
import Ipadpro from "./assets/Images/Ipadpro.jpeg";
import appleTv from "./assets/Images/appleTv.jpeg";
import appleDiwali from "./assets/Images/appleDiwali.jpeg";
import Iphone14pro from "./assets/Images/Iphone14pro.jpeg";
import Iphone14 from "./assets/Images/Iphone14.jpg";
import appleWatch from "./assets/Images/appleWatch.webp";
import appleWatch8 from "./assets/Images/appleWatch8.png";
import airpods from "./assets/Images/airpods.png";
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <Home
          image={Ipads}
          title="iPad"
          subtitle="Lovable.Drawable.Magical"
          justify="flex-start"
          align="flex-end"
        />
        <Home
          image={Ipadpro}
          title="iPad Pro"
          subtitle="Supercharged by M2"
          justify="center"
          align="flex-start"
          color="white"
        />
        <Home
          image={appleTv}
          title="Apple tv 4k"
          subtitle="The Apple experience.Cinematic in every sense"
          justify="center"
          align="flex-end"
        />
        <Cards
          image1={appleDiwali}
          image2={Iphone14pro}
          title2="iPhone 14 Pro"
          subtitle2="Pro. Beyond."
          color="white"
          display1="none"
        />
        <Cards
          image1={Iphone14}
          image2={appleWatch}
          title1="iPhone 14"
          subtitle1="Big and Bigger."
          title2="Apple Watch"
          subtitle2="Adventure awaits"
        />
        <Cards
          image1={appleWatch8}
          image2={airpods}
          title2="AirPods Pro"
          subtitle2="Rebuilt from the sound up"
          title1="Apple Watch"
          subtitle1="A healthy leap ahead"
          color="white"
        />
        <Carousel />
        <Footer />
      </Route>
    </Switch>
  );
};

export default App;
