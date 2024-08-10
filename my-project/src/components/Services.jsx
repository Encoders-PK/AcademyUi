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
      description:
        `Having a hard time with university examinations? Our professionals can help you change this
around. We assist with relevant and valuable material according to the customer’s
specification, Such as research services, writing services, and editing services. Our aim it to
ensure that you achieve your objectives to the maximum and minimize the challenges in your
education. Enjoy the power of an expert help, and you will be able to handle any task with ease.
Uni Assessment Help is nearby; call us now for assistance and start attaining your dreams!`,
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
      description:
        `The highly qualified team of our specialists makes efficient and effective effort and devotion to
help you get the highest grades. In pursuit of our mission of providing reliable and quality
learning materials, the tutors focus on offering proper explanation and filling the client in on
research findings as well as offering the necessary guidance in writing and editing of papers to
make them reflect the needed academic standard. Approach enables you to take your specific
requirements into consideration, whether it is to explain difficult concepts, or enhance your
efficiency in general. Recognise your strengths with Ace Your Assignment with Mum’s tailored
approach and be the best you are able to be within your academic endeavours. Don’t wait any
longer and get in touch with us to begin the process.`,
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
      description:
        `Here at our services, our dedicated team will provide you with the dissertation help you need
to get the best results. If you need help with your dissertation we have extensive experience in
Academic writing and assist with Research, Structure, and Edit for your dissertation papers. It is
our goal to help you to avoid the pitfalls, presenting the entire process in a more controlled and
encouraging way and delivering great results. Dissertation Help Service UK is here for making
your academic journey easier and smoother let’s connect for the professional help now.`,
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
      description:
        `Struggling with coursework? The members of our team of highly qualified specialists are ready
to provide comprehensive support to the client at any stage of work. We are here to assist you
in making sense of the information overload, improve your research and polish your skills. As
such, the emphasis is made on tasks’ academic honesty and quality of output, as well as on the
customer’s workload and performance enhancement. Looking for Coursework done by the
best? Make your Coursework reflect the quality you deserve, call on Do My Coursework today!`,
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
      description:
      `Stuck with your research paper or require help in online tests? Our professional staff provides
services according to the requirements of the client. We offer help with research paper, with
choosing the topic, research and writing the paper, and preparing for online tests to ace them.
Thus, our aim is to help you get good grades through correctly organized and concise papers.
We offer Research Papers Help and Online Exam Help; hence, feel free to contact us for quality
assistance.`,
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
        <h1 className="text-center pb-6 mb:pb-0 md:pt-0 pt-2 md:py-20 font-bold text-3xl md:text-6xl text-[#5A5A5A] uppercase">Services by Us</h1>
        <div className="bg-[#F6F8FA] py-14 px-8 rounded-lg shadow-md">
          <div className="w-full md:w-[70%] lg:h-[700px] md:h-[690px] h-auto mx-auto md:mx-0">
            <h1 className="uppercase text-xl md:text-3xl font-bold text-[#232E45] text-center md:text-left">
              What Our Experts Can Do
            </h1>

            <div className="flex flex-wrap items-center gap-2 md:gap-6 pt-6 pb-3 pl-2 justify-center md:justify-start">
              {tabs.map((tab) => (
                <ul
                  key={tab.name}
                  className={`cursor-pointer ${
                    activeTab.name === tab.name
                      ? "font-semibold text-[#408955]"
                      : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.name}
                </ul>
              ))}
            </div>
            <div className="border-b border-black mb-6"></div>

            <div className="text-center md:text-left">
              <h1 className="py-7 font-bold text-xl md:text-2xl">{activeTab.content.heading}</h1>
              <p className="pb-7">{activeTab.content.description}</p>
              <ul className="list-none pl-0">
                {activeTab.content.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-2 justify-center md:justify-start">
                    <FaCheck className="text-green-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <a href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
            <div className="bg-[#408955] w-full md:w-[230px] h-10 flex justify-center shadow-md rounded-md mt-14 mx-auto md:mx-0">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-2xl md:text-3xl" color="white" />
                <h1 className="text-white font-bold text-sm uppercase">talk to our expert</h1>
              </div>
            </div>
            </a>
            <div>
              <h1 className="text-sm text-center md:text-left px-8 py-2">It’s <b>100%</b> Confidential</h1>
            </div>
          </div>
        </div>

        <img
          src={activeTab.content.image}
          className="md:absolute hidden md:block -bottom-0 right-4 md:right-20 w-[400px] h-auto md:w-auto"
          alt={activeTab.name}
        />
      </div>
    </div>
  );
};

export default Services;


