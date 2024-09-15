import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Computer Network Design 
        <span className="text-textGreen tracking-wide">Intern</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jun 2023 - Aug 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led a critical project to design and implement network infrastructure for Raras Technologies PLC, involving detailed requirements gathering, architecture development, and extensive testing.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          configured core network components including routing, switching, security, and wireless systems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrated exceptional technical expertise in network design principles and protocols, quickly mastering Cisco nexus switches, routers, and technologies like VLANs, VRRP, and OSPF routing.
          
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;
