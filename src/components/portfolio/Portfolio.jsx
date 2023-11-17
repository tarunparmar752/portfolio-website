import React, { useRef } from "react";
import "./portfolio.scss";
import {motion , useScroll , useSpring, useTransform} from 'framer-motion'

const items = [
  {
    id: 1,
    title: "AnimalShala",
    img: "https://images.pexels.com/photos/12461880/pexels-photo-12461880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus eum perferendis enim natus ipsum, quam veritatis dignissimos aliquam, iusto atque culpa blanditiis et consectetur nihil repellendus repudiandae molestiae nostrum.",
  },
  {
    id: 2,
    title: "Helping Hands",
    img: "https://images.pexels.com/photos/9462732/pexels-photo-9462732.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus eum perferendis enim natus ipsum, quam veritatis dignissimos aliquam, iusto atque culpa blanditiis et consectetur nihil repellendus repudiandae molestiae nostrum.",
  },
  {
    id: 3,
    title: "College Junk",
    img: "https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus eum perferendis enim natus ipsum, quam veritatis dignissimos aliquam, iusto atque culpa blanditiis et consectetur nihil repellendus repudiandae molestiae nostrum.",
  },
];

const Single = ({item}) => {
    const ref = useRef();
       const { scrollYProgress } = useScroll({
         target: ref,
       });

      const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="image" />
            </div>

            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
}

function Portfolio() {
   const ref = useRef();

   const {scrollYProgress} = useScroll({target:ref , offset:['end end' , 'start start']});

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
