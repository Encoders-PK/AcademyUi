const SubjectsCard = () => {
  const subjects = [
    "Accounting",
    "Agriculture",
    "Forestry",
    "Architecture",
    "Art & Design",
    
    
    "Chemistry",
    
    "Economics",
    "Education",
    "Engineering",
    
    "History",
    "Law",
    "Literature",
    "Mathematics",
    "Medicine",
    "Nursing",
    "Philosophy",
    "Physics",
    "Calculus",
    "Statics",
    "Pre-Medical",
    "Programming",
    "Data Science",
    "Astronomy",
    "Computer Science",
    "Geology",
    "Psychology",
    "Sociology",
    "Political Science",
    "Anthropology",
    "Geography",
    "Linguistics",
    "Public Health",
    "Coding",
    "Botany",
    "Zoology",
    "Microbiology",
    "Biotechnology",
    "Genetics",
    "Marine Biology",
    "Veterinary Science",
    "Pharmacology",
    "Dentistry",
    "Optometry",
    "Physical Therapy",
    "Radiology",
    "Neuroscience",
    "Criminology",
    "Library Science",
    "Journalism",
    "Film Studies",
    "Music",
    "Theater",
    "Dance",
    "Graphic Design",
  ];
  


  return (
    <div className="w-full h-auto bg-[#367285] mb-10">
      <div className="text-white text-center pt-16 pb-4">
        <h1 className="text-3xl md:text-6xl font-bold py-1">SUBJECTS WE COVERED</h1>
        <h2 className="text-lg md:text-2xl font-semibold py-1">We’ve Covered 650+ Subjects</h2>
        <p className="text-xs md:text-sm">
          We have built a team who with their distinct expertise creates diversity in academic
          <br className="hidden md:block" /> disciplines
        </p>
      </div>

      {/* Main Card Container */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-8 md:gap-4 w-[100%] sm:w-[80%] md:w-[94%]  mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
        {subjects.map((subject, index) => {
        
          const whatsappUrl = `https://wa.me/447397145697?text= I want  ${subject} help ${encodeURIComponent(
            "Hello Team Academians, I want to avail my promo code TA-OFF50."
          )}`;
          return (
            <a key={index} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <div className="bg-white rounded-lg shadow-lg flex items-center gap-1 p-1 cursor-pointer">
                
                <div className="flex-grow">
                  <h3 className="font-semibold md:text-base">{subject}</h3>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectsCard;
