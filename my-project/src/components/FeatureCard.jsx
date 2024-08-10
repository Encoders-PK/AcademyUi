import { BsVectorPen } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { RiCurrencyLine } from "react-icons/ri";
import { CiUnlock } from "react-icons/ci";

const FeatureCard = () => {
  const features = [
    {
      icon: <BsVectorPen className="h-12 w-12 text-white" />,
      title: "Plagiarism free",
      description: `All written tasks are passed through an originality detection process and come with a unique
quality guarantee. We make sure all sorts of work produced by us are written from the scratch
and nothing that copied from anywhere.`,
    },
    {
      icon: <MdTimer className="h-12 w-12 text-white" />,
      title: "Unique content",
      description: `Mechanisms are put in place to ensure that all assignments are delivered on the agreed time.
Choose us to receive professional help with your papers and get them done right on time for
your classes.`,
    },
    {
      icon: <RiCurrencyLine className="h-12 w-12 text-white" />,
      title: "Fast delivery",
      description: `To put it simply, get the best help without paying through the nose for it. We’re able to provide
fairly cheap services and still provide the best support in terms of quality and timely delivery for
students.`,
    },
    {
      icon: <CiUnlock className="h-12 w-12 text-white" />,
      title: "24/7 support",
      description: `He is right here for you 24/7. Get help perpetually with any questions or concerns as it comes
to a guarantee that you will avail help concerning the same at any moment. Services and how
we can assist you in achieving your academic goals.`,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-8 my-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl uppercase text-[#5A5A5A] font-bold pb-1">
          Your satisfaction is guaranteed
        </h1>
        <h3 className="text-lg md:text-xl text-[#5A5A5A] font-medium">
          Happy you, with your essay. Else - your money back
        </h3>
      </div>

      {/* Container for Icons and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4">
        {features.map((feature, index) => (
          <div
            className="flex flex-col items-center justify-evenly text-center  rounded-lg"
            key={index}
          >
            <div className="flex justify-center items-center gap-4">
              {/* Icon */}
              <div className="bg-green-600 h-16 w-16 rounded-full p-4 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              {/* Horizontal line for medium screens */}
              {index < features.length - 1 && (
                <div className="hidden md:block w-44 h-[2px] md:-mr-[11rem]  mt-4 bg-green-500 mb-2"></div>
              )}
            </div>

            {/* Heading and Description */}
            <div className="mb-4 md:mb-6">
              <h1 className="text-xl md:text-2xl font-bold text-[#5A5A5A] mb-4">
                {feature.title}
              </h1>
              <p className="text-sm md:text-base text-[#5A5A5A] text-center  md:px-4">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
