import "./homepage.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>TARUN PARMAR</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button className="btn" variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button className="btn" variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Web Developer
      </motion.div>

      <div className="imageContainer">
        <img src="/homePage.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
