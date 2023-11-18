import { motion } from "framer-motion";
import "./services.scss";

const variants = {
  initial : {
    x: -500,
    y: 100,
    opacity: 0,
    },

   animate: {
     x: 0,
     opacity: 1,
     y: 0,
     transition: {
        duration: 1,
        staggerChildren: 0.1,
        }
   }
};

const Services = () => {
  return (
    <div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileinview="animate"
    >
      <div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </div>
      <motion.div className="titleContainer" variants={variants} whileHover={{color : 'grey'}}>
        <h1>Services</h1>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            suscipit fuga sequi cupiditate, totam iste aut dolor dolore debitis
            amet repudiandae eaque numquam reiciendis iusto tenetur possimus
            quas, deserunt nam. Saepe quis tenetur accusantium quas distinctio.
            Corporis sint laborum accusamus ad itaque dolore porro, eos quasi
            quisquam! Voluptatem pariatur, error cumque esse ipsum quae minima
            aliquam nesciunt necessitatibus odit. Aperiam.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            suscipit fuga sequi cupiditate, totam iste aut dolor dolore debitis
            amet repudiandae eaque numquam reiciendis iusto tenetur possimus
            quas, deserunt nam. Saepe quis tenetur accusantium quas distinctio.
            Corporis sint laborum accusamus ad itaque dolore porro, eos quasi
            quisquam! Voluptatem pariatur, error cumque esse ipsum quae minima
            aliquam nesciunt necessitatibus odit. Aperiam.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            suscipit fuga sequi cupiditate, totam iste aut dolor dolore debitis
            amet repudiandae eaque numquam reiciendis iusto tenetur possimus
            quas, deserunt nam. Saepe quis tenetur accusantium quas distinctio.
            Corporis sint laborum accusamus ad itaque dolore porro, eos quasi
            quisquam! Voluptatem pariatur, error cumque esse ipsum quae minima
            aliquam nesciunt necessitatibus odit. Aperiam.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
