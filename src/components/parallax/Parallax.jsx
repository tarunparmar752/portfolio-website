import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

  // const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="parallax"
      style={{
        background:
          "linear-gradient(180deg, black, grey)",
      }}
    >
      <motion.h1 >   
        {type === "services" ? "What we do?" : "What we did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
