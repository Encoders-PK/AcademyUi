

import {
  FaBook,
  FaUniversity,
  FaCalculator,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdCameraAlt, MdScience } from "react-icons/md";

const SubjectsCard = () => {
  const subjects = [
    "Accounting & Finance",
    "Agriculture & Forestry",
    "Architecture",
    "Art & Design",
    "Biological Sciences",
    "Business Management",
    "Chemistry",
    "Communication & Media Studies",
    "Economics",
    "Education",
    "Engineering",
    "Environmental Science",
    "History",
    "Law",
    "Literature",
    "Mathematics",
    "Medicine",
    "Nursing",
    "Philosophy",
    "Physics",
  ];

  const icons = [
    FaBook,
    FaUniversity,
    FaCalculator,
    FaChalkboardTeacher,
    MdCameraAlt,
    MdScience,
  ];

  return (
    <div className="w-full h-auto bg-[#010621] my-16">
      <div className="text-white text-center pt-16 pb-4">
        <h1 className="text-2xl md:text-4xl font-bold py-1">
          SUBJECTS WE COVERED
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold py-1">
          We’ve Covered 650+ Subjects
        </h2>
        <p className="text-xs md:text-sm">
          We have built a team who with their distinct expertise creates
          diversity in academic
          <br className="hidden md:block" /> disciplines
        </p>
      </div>

      {/* main Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
        {subjects.map((subject, index) => {
          const Icon = icons[index % icons.length];
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg flex items-center gap-3 p-2 "
            >
              <div className="flex-shrink-0 h-[40px] w-[40px] md:h-[56px] md:w-[56px] bg-[#367285] rounded-full flex items-center justify-center">
                <Icon color="white" size={20} className="md:text-[25px]" />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold md:text-base ">{subject}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectsCard;
