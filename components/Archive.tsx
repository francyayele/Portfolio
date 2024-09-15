import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Sign-language-classifcation"
          des=" Developed a system using deep learning models to classify sign language gestures, enhancing communication accessibility for the hearing impaired."
          listItem={["TensorFlow", "Keras", "OpenCV"]}
          link="https://github.com/francyayele/Sign-language-classifcationn-Sync-intern.git"
        />
        <ArchiveCard
          title="Predicting-Boston-Housing-Prices"
          des=" Built a machine learning model to predict Boston housing prices based on various features, supporting informed real estate decisions."
          listItem={["Scikit-learn", "Pandas", "Numpy"]}
          link="https://github.com/francyayele/Predicting-Boston-Housing-Prices-ML-project.git"
        />
        <ArchiveCard
          title="Back-End Development"
          des=" Designed and implemented efficient server-side architecture to ensure scalability, security, and seamless communication between databases and front-end systems."
          listItem={["Node.js", "MongoDB", " Docker"]}
          link="https://github.com/francyayele/Backend-Engineering-LYFT-.git"
        />
     
        

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Sentiment Analysis"
                des=" Created an NLP-based system to analyze sentiment from text, enabling businesses to understand customer emotions and improve engagement."
                listItem={["NLTK", "Scikit-learn", "Word2Vec"]}
                link="https://github.com/francyayele/Sentiment-Analysis.git"
              />
            
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
