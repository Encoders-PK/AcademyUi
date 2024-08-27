import { useEffect, useState } from "react";
import faq from "../assets/faq.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiMessageRoundedDots } from "react-icons/bi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf"; // Your Tawk.to script source
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };

  const faqs = [
    {
      question: "1. What types of assignments can you help with?",
      answer:
        `We provide assignment writing help for all forms of assignments, including essays, presentations, case studies, and report writing. Any research help that is required for the drafting, editing, and formatting of an assignment is catered to by our team. With our help, you can get all kinds of academic assignments covered across subjects and disciplines.`,
    },
    {
      question: "2. How do I know my assignment will be done on time?",
      answer:
        `Our service is designed to keep up with tight deadlines, ensuring timely delivery of assignments. When you place an order, specify your deadline, and our team will work diligently on the completion of your assignment way ahead of the deadline. We are available 24/7 for support, and you can reach out anytime to check on the progress of your assignment or if urgent help is needed.`,
    },
    {
      question: "3. Will my assignment be original and free from plagiarism?",
      answer:
        `Absolutely. We prioritise originality and academic integrity. Every assignment is created from scratch according to your specifications. At this point, our expert plagiarism control team checks every submission for plagiarism to ensure the final product is entirely original and meets the best conventions of academic honesty.`,
    },
    {
      question: "4. What if I need revisions after my assignment is delivered?",
      answer:
        `We offer free revisions to ensure that your assignment meets your expectations. If there is anything that needs to be tweaked or any refinements, then let us know and we'll do the same. Your satisfaction is what we work towards, and it has to be ensured that work is delivered tailored as per your requirement. So don't hesitate to ask for revisions within the given revision period to have your assignment exactly the way you want it.`,
    },
    {
      question: "5. How quickly can you complete my order?",
      answer:
        "Get your order delivered fast - with the writers at Academians®, you can receive high-quality Academic within Couples of Hours! Our experienced professionals have been in this field for years and are committed to crafting exceptional work on time. Go ahead, specify a deadline of your preference: We'll make sure we exceed it every single time.",
    },
    {
      question: "6. Do you ensure confidentiality?",
      answer:
        "At Academians, we go to great lengths to ensure your data remains private and never gets shared with third-parties. Your personal details such as name, email address and payment information are kept safe under our confidentially policy - so you can trust us when making an order!",
    },
    
  ];

  return (
    <div className="w-full md:w-[90%] px-4 py-6 md:py-24 mx-auto">
      <div className="text-center pb-12">
        <h1 className="text-3xl md:text-6xl font-bold text-[#5A5A5A]">FAQ</h1>
        <h2 className="text-xl md:text-2xl text-[#5A5A5A] pt-4 px-4">
          Frequently Ask Questions
        </h2>
      </div>

      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side */}
        <div className="w-full md:w-[40%] hidden md:block ">
         <div className="flex justify-center items-center">
         <img src={faq} alt="FAQ Illustration" className="w-[400px]  h-auto" />
         </div>
          

          <div className="flex flex-col md:flex-row gap-4 justify-center py-8 w-full md:w-auto">
            <button
              onClick={handleTalkToExpertClick}
              className="flex gap-2 lg:gap-1 items-center bg-[#007285] w-full md:w-[230px]  h-10 justify-center rounded-md"
            >
              <BiMessageRoundedDots
                className="text-2xl md:text-3xl lg:text-2xl"
                color="white"
              />
              <h1 className="text-white font-bold text-sm md:text-base lg:text-sm">
                TALK TO OUR EXPERT
              </h1>
            </button>

            <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <div className="bg-white w-full md:w-[230px] h-10 flex items-center gap-2 justify-center rounded-md border border-[#408955]">
                <IoLogoWhatsapp className="text-2xl text-[#408955]" />
                <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">
                  Whatsapp Now
                </h1>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[50%] px-4 md:px-8">
          <div className="bg-[#007285] text-white rounded-lg shadow-md p-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-600">
      <button
        onClick={onClick}
        className="w-full text-left px-4 py-3 focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg">{question}</span>
        <span
          className={`text-xl w-7 h-7 flex items-center justify-center font-bold rounded-full p-1 ${
            isOpen ? "bg-white text-black" : "bg-[#0F203D] text-white"
          }`}
        >
          {isOpen ? "x" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 text-white bg-[#007285]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faq;
