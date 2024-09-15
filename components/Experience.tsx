import { useState } from "react";
import SectionTitle from "./SectionTitle";
import RarasTechnology from "./works/RarasTechnology";
import SyncIntern from "./works/SyncIntern";
import Lyft from "./works/Lyft";
import JPMorganChase from "./works/JPMorganChase";

const Experience = () => {
  const [isRarasTechnology, setIsRarasTechnology] = useState(true);
  const [isSyncIntern, setIsSyncIntern] = useState(false);
  const [isJPMorganChase, setIsJPMorganChase] = useState(false);
  const [isLyft, setIsLyft] = useState(false);

  const handleRarasTechnology = () => {
    setIsRarasTechnology(true);
    setIsSyncIntern(false);
    setIsJPMorganChase(false);
    setIsLyft(false);
  };

  const handleSyncIntern = () => {
    setIsRarasTechnology(false);
    setIsSyncIntern(true);
    setIsJPMorganChase(false);
    setIsLyft(false);
  };

  const handleJPMorganChase = () => {
    setIsRarasTechnology(false);
    setIsSyncIntern(false);
    setIsJPMorganChase(true);
    setIsLyft(false);
  };

  const handleLyft = () => {
    setIsRarasTechnology(false);
    setIsSyncIntern(false);
    setIsJPMorganChase(false);
    setIsLyft(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I Have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleRarasTechnology}
            className={`${
              isRarasTechnology
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Raras Technology
          </li>
          <li
            onClick={handleSyncIntern}
            className={`${
              isSyncIntern
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Sync Intern
          </li>
          <li
            onClick={handleJPMorganChase}
            className={`${
              isJPMorganChase
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            JPMorgan Chase & Co
          </li>
          <li
            onClick={handleLyft}
            className={`${
              isLyft
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Lyft
          </li>
        </ul>
        {isRarasTechnology && <RarasTechnology />}
        {isSyncIntern && <SyncIntern />}
        {isJPMorganChase && <JPMorganChase />}
        {isLyft && <Lyft />}
      </div>
    </section>
  );
};

export default Experience;
