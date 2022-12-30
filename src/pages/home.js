import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer/footer";
import HomePageComponent from "../components/HomePage";

function HomePage() {
  return (
    <div>
      <Header />
      <HomePageComponent />
      <Footer />
    </div>
  );
}

export default HomePage;