import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            A creative and results-driven Machine Learning Engineer passionate about transforming data 
            into meaningful insights and solutions. Skilled in crafting intelligent models, integrating AI into 
            user-friendly applications, and solving complex challenges across industries. Always exploring the 
             forefront of technology to drive innovation and make a tangible impact.
          </p>
         
          <p>Here are a few technologies I have been working with recently:</p>
          <motion.ul 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                }
              }
            }}
            className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6"
          >
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python  
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.2
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TensorFlow
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.4
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Keras
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.6
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React 
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.8
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1.0
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Flask
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1.2
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Scikit-learn
            </motion.li>
            <motion.li 
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { 
                  opacity: [0.5, 1, 0.5],
                  y: 0,
                  transition: {
                    opacity: {
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1.4
                    }
                  }
                }
              }}
              className="flex items-center gap-2"
            >
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              SQL
            </motion.li>
          </motion.ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
