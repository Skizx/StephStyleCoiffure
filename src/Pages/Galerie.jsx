import { useEffect } from "react";
import AboutGallery from "../Components/AboutGallery/AboutGallery";
import Navbar from "../Components/Navbar/Navbar";

const Galerie = () => {

    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0
        })
    })

    return (
        <>
        <Navbar /> 
        <AboutGallery />
        </>
    );
};

export default Galerie;