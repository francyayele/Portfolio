import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Back-End Engineering 
        <span className="text-textGreen tracking-wide">Virtual Experience</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2023 - Aug 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Applied software architecture principles and best practices for code quality, performance optimization, and security measures.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted code reviews, provided constructive feedback, and mentored junior team members, emphasizing continuous improvement and refactoring.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Practiced Agile methodologies, actively participating in sprint planning, daily stand-ups, and retrospectives to ensure timely delivery of features.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
