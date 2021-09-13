import './App.css';
import ENameCard from "./components/ENameCard";
import FooterComponent from "./components/footerComponent";
import HeaderComponent from "./components/HeaderComponent";
import React from "react";
function App() {
    return (
        <div>
            <HeaderComponent/>
            <div className="container">
                <ENameCard/>
            </div>
            <FooterComponent/>
        </div>

    );
}

export default App;
