import { useState } from "react";
import { motion } from "framer-motion";
import { initial, animate, transition } from "./anims";
import muted from "../assets/muted.svg";
import play from "../assets/play.svg";
import "./Landing.css";

export default function Landing() {
  const [isMuted, setMuted] = useState(true);
  //blurb stuff
  const blurb = "Redefining Luxury Roofing";
  const content =
    "We pride ourselves on our attention to detail, exceptional customer service, and commitment to using only the best materials for every job. Trust us to protect your home or business with a roof built to last.";
  const company = "COMPANY NAME™";
  const startDelay = 2;

  // We need to calculate the total number of characters in the string to determine the cumulative delay
  let letterIndex = 0;

  return (
    <div className="landing-container">
      <video src="./test.mp4" autoPlay loop muted={isMuted}></video>
      <div className="sound-button" onClick={() => setMuted(!isMuted)}>
        {isMuted ? <img src={muted}></img> : <img src={play}></img>}
      </div>
      <div className="blurb-container">
        <motion.p>
          <span className="letter-wrapper">
            {company.split(" ").map((line, index) => (
              <span className="letter-wrapper">
                <motion.span
                  className="line"
                  style={{ display: "block" }}
                  initial={initial}
                  animate={animate}
                  transition={{
                    delay: index * 0.1 + startDelay,
                    ...transition,
                  }}
                  key={index}
                >
                  {line}
                  &nbsp;
                </motion.span>
              </span>
            ))}
          </span>
        </motion.p>
        <motion.h1>
          <span className="blurb">
            {blurb.split(" ").map((word, wordIndex) => (
              <span key={wordIndex}>
                {word.split("").map((letter, index) => {
                  const delay = letterIndex * 0.03 + 0.2; // Increment delay for each letter
                  letterIndex++; // Increment the global index

                  return (
                    <motion.span
                      style={{ display: "inline-block" }}
                      initial={initial}
                      animate={animate}
                      transition={{ delay: delay + startDelay, ...transition }}
                      key={letterIndex}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
                {/* Render space between words */}
                {wordIndex < blurb.split(" ").length - 1 && (
                  <motion.span
                    style={{ display: "inline-block" }}
                    key={`space-${wordIndex}`}
                  >
                    &nbsp; {/* This adds a space between words */}
                  </motion.span>
                )}
              </span>
            ))}
          </span>
        </motion.h1>
        <div className="small-info">
          <motion.p>
            <span className="letter-wrapper">
              {content.split(" ").map((line, index) => (
                <span className="letter-wrapper">
                  <motion.span
                    className="line"
                    style={{ display: "block" }}
                    initial={initial}
                    animate={animate}
                    transition={{
                      delay: index * 0.01 + 0.35 + startDelay,
                      ...transition,
                    }}
                    key={index}
                  >
                    {line}
                    &nbsp;
                  </motion.span>
                </span>
              ))}
            </span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
