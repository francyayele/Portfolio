import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-[#0A192F] pl-0 md:pl-24"
    >
      {/* Video Background */}
      <div className="absolute top-0 left-[60%] -translate-x-1/2 w-[85%] md:w-[75%] lg:w-[70%] xl:w-[65%] h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[102%] min-h-[102%] object-cover rounded-lg"
        >
          <source src="/assets/BG.mp4" type="video/mp4" />
        </video>
        {/* Edge blend overlay */}
        <div className="absolute inset-0 bg-[#0A192F] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-[#0A192F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-transparent to-[#0A192F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/80 via-transparent to-[#0A192F]/80" />
      </div>
      
      {/* Main Content */}
      <div className="w-[85%] md:w-[75%] lg:w-[70%] xl:w-[65%] mx-auto flex flex-col gap-4 lgl:gap-8 items-start justify-center z-10">
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, this is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
        >
          Fransi M.
          <span className="text-textDark mt-2 lgl:mt-4">
            A Machine Learning Engineer.
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base md:max-w-[650px] text-textDark font-medium"
        >
          Driven by a passion for innovation, I specialize in building and deploying advanced AI solutions that tackle real-world challenges. With a solid foundation in artificial intelligence, deep learning, and data science, I have successfully contributed to impactful projects in areas like healthcare, computer vision, and natural language processing.

          <br />✨ Let&apos;s create the future together...{" "}
          <a href="https://www.linkedin.com/in/fransi-mengesha?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhpVBDOXPQrmbTK22dAs0pw%3D%3D" target="_blank">
            {" "}
            <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
              Learn more
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
          </a>
        </motion.p>
        <a href="https://github.com/francyayele" target="_blank">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
          >
            Check out my project!
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Banner;
