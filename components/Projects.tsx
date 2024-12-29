import Image from "next/image";
import { PDD, Chatbot } from "@/public/assets";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/francyayele/Brain-tumor-detection-system-using-deep-learning-technique.git"
            target="_blank"
          >
            <div>
              <video
                className="w-full h-full object-contain"
                src="/assets/images/BTD upworkk.mp4"
                controls
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Brain Scan AI</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            A brain tumor detection system using   <span className="text-textGreen"> U-Net  </span> and <span className="text-textGreen">ResNet</span>  architecture that applies deep learning for accurate 
            segmentation of tumor regions in medical images with{" "}
              <span className="text-textGreen">98.6 % accuracy</span> aiding in treatmentplanning through
               automated medical image analysis.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>UNET</li>
              <li>ResNet 50</li>
              <li>Flask</li>
              <li>React</li>
              <li>Supa Database</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/francyayele/Brain-tumor-detection-system-using-deep-learning-technique"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="\assets\BTD .mp4"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="\assets\BSc project report final doc.pdf"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/francyayele/Plant-Detection-using-machine-learning.git"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={PDD}
                alt="Plant Disease Detection"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Leaf Check</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            A plant disease detection system using CNN achieves <span  className="text-textGreen"> 94 % accuracy </span>  in detecting diseases from leaf images, enhancing early
             diagnosis and improving overall crop health and yield through automated image analysis.{" "}

            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>Scikit</li>
              <li>Flask</li>
              <li>Matplotlib</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/francyayele/Plant-Detection-using-machine-learning.git"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="\assets\PDD.mp4"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="\assets\plant disease detection system.pdf"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/francyayele/Building-Chatbot.git/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={Chatbot}
                alt="Chatbot"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">AI Chatbot</h3>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
               Ongoing
              </p>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            An AI chatbot system uses natural language processing to understand and respond to user queries, providing real-time
             assistance and improving customer support efficiency through automated, human-like interactions.{" "}

            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Dialogflow</li>
              <li>TensorFlow</li>
              <li>NLTK</li>
              <li>Rasa</li>
              <li>Flask</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/francyayele/Building-Chatbot.git"
                target="_blank"
              >
                <TbBrandGithub />
              </a>

            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
