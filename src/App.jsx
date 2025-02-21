import React from "react";
import Header from "./Componets/Header";
import InfoSection from "./Componets/InfoSection";
import GridSection from "./Componets/GridSection";
import Footer from "./Componets/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <Header />
            <InfoSection />
            <GridSection />
            <Footer />
        </div>
    );
};

export default App;
