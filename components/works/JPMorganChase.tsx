import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Software Engineering 
        <span className="text-textGreen tracking-wide">Virtual Experience</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2023 - Jul 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and integrated systems to interface with stock price data feeds, ensuring real-time data availability for analysis and decision-making.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leveraged JPMorgan Chase & Co. frameworks and tools to enhance system performance and ensure alignment with industry standards and practices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and implemented visual displays to present stock price data effectively, enabling traders to make informed decisions quickly.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;
