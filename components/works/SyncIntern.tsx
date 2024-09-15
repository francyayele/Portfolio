import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Machine Learning 
        <span className="text-textGreen tracking-wide">Intern</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2023 - Sep 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented machine learning algorithms and models to analyze large datasets and extract actionable insights.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted data preprocessing, including data cleaning, normalization, and feature extraction, to improve model performance.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and trained predictive models for various applications, including classification, regression, and clustering
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
