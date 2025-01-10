import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import "./ImageGallery.css"; // Import the CSS

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img1.jpg",
];

// Lazy load the image component
const LazyImage = lazy(() => import("./LazyImage"));

export default function ImageGallery() {
  const gallery = useRef(null);

  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    // Set initial dimension values
    resize();

    // Add event listener to update dimensions on resize
    window.addEventListener("resize", resize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []); // Empty dependency array to run once when component mounts

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return (
    <div ref={gallery} className="gallery">
      <Column images={[images[0], images[1], images[2]]} y={y} />
      <Column images={[images[3], images[4], images[5]]} y={y2} />
      <Column images={[images[6], images[7], images[8]]} y={y3} />
      <Column images={[images[9], images[10], images[11]]} y={y4} />
    </div>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => (
        <Suspense
          fallback={<div className="placeholder">Loading...</div>}
          key={i}
        >
          <LazyImage src={src} alt={`Image ${i}`} />
        </Suspense>
      ))}
    </motion.div>
  );
};
