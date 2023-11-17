import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Sidebar/>

        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Tarun Parmar
          </motion.span>
          <div className="social">
            <a href="#">
              {" "}
              <img src="/facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              {" "}
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="#">
              {" "}
              <img src="/github.jpg" alt="Github" />
            </a>
            <a href="#">
              {" "}
              <img src="/linkedIn.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
