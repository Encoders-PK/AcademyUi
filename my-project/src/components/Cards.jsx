import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const Cards = () => {
  return (
    <div className="w-[90%] md:w-[75%] h-auto mx-auto mt-8">
      <h1 className="upppercase text-center text-3xl md:text-6xl font-bold py-10 text-[#5A5A5A] flex justify-center uppercase">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 md:gap-10">
        {/* card one */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[370px]  h-auto bg-[#007285] shadow-2xl mb-4 rounded-xl">
          <div className="py-12 px-8 text-white">
            {/* <SlBadge color="white" className="mx-auto" size={55} /> */}
            <img src={icon1} className="mx-auto w-[80px]" alt="" />
            <h1 className="text-xl pt-3 text-center font-bold">
              Quality is our First Priority
            </h1>
            <p className="text-sm py-1 mt-2 text-center">
              We make sure that each paper and each assessment is written
              carefully and conforms to all the academic requirements, so that
              you can rely on our help and get a quality, guaranteed work.
            </p>
          </div>
        </div>

        {/* card two */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[370px]  h-auto bg-[#007285] shadow-2xl mb-4 rounded-xl">
          <div className="py-12 px-8 text-white">
            <img src={icon2} className="mx-auto w-[80px]" alt="" />
            <h1 className="text-xl pt-3 text-center font-bold">
              Experienced Writers
            </h1>
            <p className="text-sm py-1 mt-2 text-center">
              Our experienced writers provide high quality assignments and
              assessments with the necessary degrees and experience. Let them
              help you get quality, original papers that meet your expectations
              and are written according to strict academic standards and
              guidelines.
            </p>
          </div>
        </div>

        {/* card three */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[370px]  h-auto bg-[#007285] shadow-2xl mb-4 rounded-xl">
          <div className="py-12 px-8 text-white">
            <img src={icon3} className="mx-auto w-[80px]" alt="" />
            <h1 className="text-xl pt-3 font-bold text-center">
              100% Money Back
            </h1>
            <p className="text-sm py-1 mt-2 text-center">
              We have a no questions asked 100% money-back guarantee for your
              total satisfaction with our assignment and assessment help. If for
              any reason you are not entirely satisfied with what you have
              purchased, we will gladly give you your money back.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-0 md:gap-10">
        {/* card one */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[370px]  h-auto  bg-[#007285] shadow-2xl mb-4 rounded-xl">
          <div className="py-12 px-8 text-white">
            <img src={icon4} className="mx-auto w-[80px]" alt="" />
            <h1 className="text-xl pt-3 font-bold text-center">
              Choose from 90+ subjects
            </h1>
            <p className="text-sm py-1 mt-2 text-center">
              Still, you can select from over 150+ subjects to get professional
              assistance with your dissertations and assessments. Our extensive
              range gives you specialized attention as per your field of study
              and managing the complicated needs that academic professing
              presents.
            </p>
          </div>
        </div>
        {/* card two */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[370px]  h-auto  bg-[#007285] shadow-2xl mb-4 rounded-xl">
          <div className="py-12 px-8 text-white">
            <img src={icon5} className="mx-auto w-[80px]" alt="" />
            <h1 className="text-xl pt-3 font-bold text-center  ">
              Authentic and Reliable
            </h1>
            <p className="text-sm py-1 mt-2 text-center">
              They are genuine services, as we provide you with utterly original
              and thoroughly researched papers for your assignments and
              coursework. We offer authentic and quality help that can be relied
              upon to meet the required level of achievement.
            </p>
          </div>
        </div>

        {/* card three */}
        <div className="w-full sm:w-[46%] md:w-[48%] lg:w-[370px]  h-auto  bg-[#007285] shadow-2xl mb-4 rounded-xl">
          <div className="py-12 px-8 text-white">
            <img src={icon6} className="mx-auto w-[80px]" alt="" />
            <h1 className="text-xl pt-3 font-bold text-center ">
              Ranked 1 Service Provider
            </h1>
            <p className="text-sm py-1 mt-2 text-center">
              We are the premier service provider of assessment help across the
              UK. Our excellent services coupled with our professionalism give
              you the best academic help that you will ever need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
