import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { initial, animate, transition } from "./anims";
import "./Facts.css";

export default function Facts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation only once

  const words =
    "The AE.1™ Cosmos Edition delivers the most range and solar capacity of any available travel trailer. It’s made for those who want to get the most out of every moment in wild and unforgettable places.";
  return (
    <motion.div className="facts-container">
      <motion.p className="example-blurb" ref={ref}>
        <span className="letter-wrapper">
          {words.split(" ").map((line, index) => (
            <span className="letter-wrapper">
              <motion.span
                className="line"
                style={{ display: "block" }}
                initial={initial}
                animate={isInView ? animate : {}}
                transition={{ delay: index * 0.01, ...transition }}
                key={index}
              >
                {line}
                &nbsp;
              </motion.span>
            </span>
          ))}
        </span>
      </motion.p>
    </motion.div>
  );
}
