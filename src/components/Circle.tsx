import { motion } from 'framer-motion';

const circleStyles = [
  {
    backgroundColor: "#ff885b",
    size: "300px",
    top: "30%",
    left: "45%",
    animationDuration: 9,
    z: 1
  },
  {
    backgroundColor: "#046d82",
    size: "150px",
    top: "70%",
    left: "80%",
    animationDuration: 7,
    z: 0
  },
  {
    backgroundColor: "#08b2d7",
    size: "100px",
    top: "15%",
    left: "65%",
    animationDuration: 8,
    z: 0
  },
];

const Circle = () => (
  <>
    {circleStyles.map((circle, index) => (
      <motion.div
        key={index}
        style={{
          position: "absolute",
          width: circle.size,
          height: circle.size,
          backgroundColor: circle.backgroundColor,
          borderRadius: "50%",
          top: circle.top,
          left: circle.left,
          zIndex: circle.z
        }}
        initial={{ translateX: -50, translateY: -50 }}
        animate={{ 
          x: ["-50%", "-50%", `${-50 + getRandom(-5, 5)}%`], 
          y: ["-50%", "-50%", `${-50 + getRandom(-5, 5)}%`], 
          translateX: -50, 
          translateY: -50 
        }}
        transition={{ 
          x: { repeat: Infinity, repeatType: "reverse", duration: circle.animationDuration / 2 }, 
          y: { repeat: Infinity, repeatType: "reverse", duration: circle.animationDuration / 2 } 
        }}
      />
    ))}
  </>
);

// Fonction pour générer un nombre aléatoire entre min et max
function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default Circle;
