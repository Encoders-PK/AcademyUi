import { useState } from "react";
import HomeworkImage from "../assets/slide-1.png";
import AssignmentImage from "../assets/slide-2.png";
import ResearchImage from "../assets/slide-3.png";
import AssignmentEditImage from "../assets/slide-4.png";
import OtherImage from "../assets/slide-5.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const tabs = [
  {
    name: "Assessment",
    content: {
      heading: "Uni Assessment Help",
      description: `Struggling with university assessments? Our experts are here to help. We provide tailored research, writing, and editing services to ensure you reach your academic goals. Our mission is to help you succeed with ease. Contact Uni Assessment Help today and start achieving your dreams!`,
      bulletPoints: [
        "100% Satisfaction Guaranteed",
        "Pay Only If You Satisfied",
        "Quality, and Low Cost",
      ],
      image: HomeworkImage,
    },
  },
  {
    name: "Assignment",
    content: {
      heading: "Ace Your Assignment",
      description: `Our expert team is dedicated to helping you achieve top grades through efficient and effective support. We provide reliable, high-quality expert help, offering clear explanations, research insights, and guidance in writing and editing to meet academic standards. Our tailored approach considers your specific needs, whether clarifying complex concepts or improving overall efficiency. Recognize your strengths with Ace Your Assignment and excel in your academic pursuits. Contact us today to start your journey.`,
      bulletPoints: [
        "Custom Solutions",
        "Feedback on Paper and Email",
        "Timely Assistance",
        "24/7 Personalized Support",
        "Native British Writer",
      ],
      image: AssignmentImage,
    },
  },
  {
    name: "Dissertation",
    content: {
      heading: "Dissertation Help",
      description: `Our team provides the dissertation help you need for top results. With expertise in academic help, we assist with research, structure, and editing. We aim to simplify the process and deliver excellent results. Let Dissertation Help Service UK make your academic journey smoother. Connect with us today`,
      bulletPoints: [
        "dropping for Peace of Mind Guaranteed",
        "Help From Expert Only In Some Cases",
        "Rise in your Academic Decoration",
      ],
      image: ResearchImage,
    },
  },
  {
    name: "Coursework",
    content: {
      heading: "Do My Coursework",
      description: `Struggling with coursework? Our team of highly qualified specialists is ready to support you at any stage. We help you navigate information overload, improve research, and refine your skills. We prioritize academic honesty, quality, and enhancing your performance. Want the best coursework? Reflect the quality you deserve with Do My Coursework today`,
      bulletPoints: [
        "Custom Solutions",
        "Feedback on Paper and Email",
        "Timely Assistance",
        "24/7 Personalized Support",
        "Native British Writer",
        "300+ Subjects Support",
      ],
      image: AssignmentEditImage,
    },
  },
  {
    name: "Other",
    content: {
      heading: "Research Proposal/Online Exam",
      description: `Struggling with a research paper or need help with online exams? Our professional team offers tailored support to meet your needs. We assist with topic selection, research, writing, and test preparation to help you excel. Our goal is to ensure well-organized papers and strong results. Contact us for expert Research Paper and Online Exam Help today.`,
      bulletPoints: [
        "On-Time Delivery",
        "Expert Assistance Provided",
        "Commitment to Excellence",
        "Reliable and Professional",
      ],
      image: OtherImage,
    },
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative w-full ">
      <div className="md:w-[65%] w-full mx-auto md:mx-0  md:ml-[14%] mb-14">
        <h1 className="text-center pb-6 mb:pb-0 md:pt-0 pt-2 md:py-20 font-bold text-3xl md:text-6xl text-[#5A5A5A] uppercase">
          Services by Us
        </h1>
        <div className="bg-[#F6F8FA] py-14 px-8 rounded-lg shadow-md">
          <div className="w-full md:w-[70%] lg:h-[700px]  h-auto mx-auto md:mx-0">
            <h1 className="uppercase text-xl md:text-3xl font-bold text-[#232E45] text-center md:text-left">
              What Our Experts Can Do
            </h1>

            <div className="flex flex-wrap items-center gap-1 md:gap-4 pt-6 pb-3  justify-center md:justify-start">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  className={`cursor-pointer bg-[#F1B815] p-1 md:p-2 rounded-md  font-semibold ${
                    activeTab.name === tab.name ? "font-bold text-white" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.name}
                </div>
              ))}
            </div>
            <div className="border-b border-black mb-6"></div>

            <div className="text-center md:text-left md:w-[88%] w-full">
              <h1 className="py-7 font-bold text-xl md:text-2xl">
                {activeTab.content.heading}
              </h1>
              <p className="pb-7 text-sm">{activeTab.content.description}</p>
              <ul className="list-none pl-0 ">
                {activeTab.content.bulletPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm gap-2 justify-center md:justify-start"
                  >
                    <FaCheck className="text-green-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <div className="bg-[#408955] w-full md:w-[230px] h-10 flex justify-center shadow-md rounded-md mt-12 mx-auto md:mx-0">
                <div className="flex items-center gap-2">
                  <IoLogoWhatsapp
                    className="text-2xl md:text-3xl"
                    color="white"
                  />
                  <h1 className="text-white font-bold text-sm uppercase">
                    talk to our expert
                  </h1>
                </div>
              </div>
            </a>
            <div>
              <h1 className="text-sm text-center md:text-left px-8 py-2">
                It’s <b>100%</b> Confidential
              </h1>
            </div>
          </div>
        </div>

        <img
          src={activeTab.content.image}
          className="md:absolute hidden md:block -bottom-0 right-0 md:right-20 w-[400px] h-auto md:w-auto"
          alt={activeTab.name}
        />
      </div>
    </div>
  );
};

export default Services;
