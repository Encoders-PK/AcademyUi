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
      question: "1. Can I talk to the writer working on my Academic?",
      answer:
        "Here at Academians, we believe in open communication between our customers and the writers. Our 24/7 live chat option gives you direct access to your writer, enabling you to discuss all of your order requirements without any barriers. We understand that it is essential for customers to have this connection with their chosen professionals - talk directly today!",
    },
    {
      question: "2. Will the writer work according to my order requirements?",
      answer:
        "Our experienced, knowledgeable writers will ensure that they fully understand the instructions provided by you before beginning work on your order. After placing an order with us, one of our subject matter experts is immediately assigned to start crafting a unique and tailored outline specifically for your needs. Though we typically don't need any further clarifications from customers after receiving their orders placed - if we think more information could improve results, we'll be sure get in touch!",
    },
    {
      question: "3. How can I request a revision for my Academic?",
      answer:
        "Our customers' satisfaction is our top priority and we aim to provide maximum convenience for them. We carefully follow all given instructions, with no extra charge for revising the work provided as per your needs - just mark a revision in the user area or reach out at any time to our 24/7 support team!.",
    },
    {
      question: "4. How do you ensure plagiarism-free writing?",
      answer:
        "We are committed to delivering only original work - each piece carefully crafted and checked by our quality assurance team using advanced plagiarism-checking tools. Our writers have undergone rigorous training in the art of sourcing reliable, authentic material for every project they take on. Rest assured that any order you place with us will come accompanied by a verification report giving you absolute certainty about its authenticity!",
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
