import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Facts from "./components/Facts";
import PropagateLoader from "react-spinners/PropagateLoader";
import ImageGallery from "./components/ImageGallery";
import Services from "./components/Services";

export default function App() {
  const [renderPage, setrenderPage] = useState(false); // State to manage Facts rendering

  useEffect(() => {
    // Set a timeout to update the state after the delay (2 seconds in this case)
    const timer = setTimeout(() => {
      setrenderPage(true); // Show the Facts section after the delay
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div className="test">
        <PropagateLoader />
      </div>
      <motion.div
        className="website-container"
        initial={{
          clipPath: "polygon(50vw 25vh, 50vw 35vh, 50vw 75vh, 50vw 65vh)", // Small rhombus-like shape
        }}
        animate={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Full screen reveal
        }}
        transition={{
          delay: 2, // 2-second delay before the animation starts
          duration: 1, // Duration of the animation
          ease: [0.83, 0, 0.17, 1],
        }}
      >
        <Navbar />
        <Landing />
        {renderPage && <Facts />}
        {renderPage && <ImageGallery />}
        {renderPage && <Services />}
      </motion.div>
    </>
  );
}
