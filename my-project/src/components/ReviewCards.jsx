import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import cardicon from "../assets/cardicon.png";
import pencilicon from "../assets/pencilicon.png";


const reviews = [
  {
    name: "CHARLOTTE",
    rating: 4.9,
    reviewCount: 1,
    reviewText:
      "I have always topped my class but this time, my economics research paper was proving difficult to handle. I was at to give up when a friend recommended your writing services. I was still sceptical until I saw the outline your writer had prepared. I immediately ordered the paper and relaxed, waiting for the outcome. I must confess that your writers are professionals. They delivered beyond what I would have done with my advanced economics degree.",
  },
  {
    name: "JIMMY",
    rating: 5.0,
    reviewCount: 1,
    reviewText:
      `I am not at all surprised by there service as I have been using their service from past 1 year and never got less marks. But this time I was very tensed as our professor gave me to write 20,000 words dissertation writing. But I trusted Academians and gave them work and I got a grade of 86% which is really amazing as our professors are very stricting regarding marking criteria.
Thank you Academians.`,
  },
  {
    name: "LAURA WILLAIMS",
    rating: 5.0,
    reviewCount: 1,
    reviewText:
      "The most trustworthy e-learning site I have ever seen. My Friend, Adam introduced me to Assignment consultancy to get help for an assignment, and now, this site has become my online professor. I enjoy learning from here. Thank you Academians. It would not be possible for me to understand the concepts in such an easy manner, if you people were not there. Highly Recommended website for MBA help as well as Graduate courses.",
  },
  {
    name: "JOAN",
    rating: 4.9,
    reviewCount: 1,
    reviewText:
      "Very few people understand anthropology. That’s why I was not sure of getting any quality help with my paper. Though I ordered the paper, I continued working on it because I was expecting disappointment. I felt dumb once your writer emailed the complete paper. It read like the best research paper you will in anthropology. I am grateful I met you because my college assignments will never be the same again. You people are amazing.",
  },
  {
    name: "SYLVIA LORRAINE",
    rating: 4.7,
    reviewCount: 1,
    reviewText:
      "I have not ordered a paper online for a while. I was discouraged by the thought of plagiarism and delayed work. I kept talking to the support team in the course of completing the essay, yet he never got tired. Once the paper was returned, all my fears were gone. I loved everything from the title to the introduction and the ideas discussed in the paper. The paper has exceeded my expectations.",
  },
  {
    name: "MARTIN A",
    rating: 5.0,
    reviewCount: 1,
    reviewText:
      "I found this site a year ago and it was a truly life changing experience. Prior to that moment I tried to deal with all my assignments by myself, being torn apart in between my work and studies. However, when I realized that I could not handle that pressure anymore and I wanted to concentrate on my job I felt that I needed some professional help. I mostly use this site to do some physics and chemistry labs. It always takes a lot of time to double check all the formulas and calculations that were used in the lab. Yet, I am so lucky that today it´s not my job anymore because I found this website Academians, one of the best experts in these sciences here. He does that work for me and the only thing I need to care about is submitting my labs right before the deadline so that I could get my full points!",
  },

  {
      name: "BISHNU NARAYAN SAHU",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "I like the transparency of all the processes from placing the order and clarifying possible issues with the writer to receiving the order and paying for it. The support team is very collaborative and ready to help. Thanks.",
    },

    {
      name: "ANDREW HARRIS",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Never thought I’ll be the one to write the review on writing service, but here I am and it’s nothing to be ashamed of! Academians is great for real, their exceptional care I felt from the start. They called me and asked is it okay to talk now. Wow, not every company asking about it! They cared me through the order completely. I was notified when my writer was assigned, that he or she started writing, that my order is under the review. I received polished work everyone will be pleased to receive! Very good choice of words, accurate formatting, any visible mistakes (I guess invisible are absent too). Can recommend Academians to everyone who seek for quality writing services.",
    },
    {
      name: "CLIVE BULMER",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "Best of the best of the best! I was afraid I’ll leave college after the first year because my grades were so bad and I really weren’t able to find a way to improve them myself. But then I realized I need my college and classmates badly and I really can pay a lot to leave things as theu are. Writers from Academians are god-given for sure, don’t know if it were real for real people to do so many papers. You are my heroes and I’ll give a lot of good revies everywhere. Other people deserve to know how to save themselves in a college.",
    },
    {
      name: "CRYSTAL VARGAS",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "It’s insane that I can’t find good writing companies online! Some write like they are from kindergarten, some charge enormous amount of money for ordinary article. I was in rage, but then I found Academians. They are pretty reasonable too, also they do exactly what you ask for. Nice writing, so I want to proceed my work with them.",
    },
    {
      name: "CYNTHIA PIKE",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "If you’re a lucky client of these talented geeks, expect total understanding from their side, following all your requirements, and caring support available 24/7. Great service.",
    },

    {
      name: "MAGGIE GALLE",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "If you want quality, better pay the right price, or get ready for surprises. Here everything’s fair and square. Discounts, proper customer support, and writing experts with good English and zero plagiarism. I’m really happy I found you.",
    },

    {
      name: "KIM MILLER",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        `If you’re not a fan of big texts, I’ll say short – Academians is legit writing service. 
        You can rely on it.I recommend Academians to everyone and will use their help in future more.`,
    },
    {
      name: "ZAINAB BATOOL",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "Your writers are extremely talented and kind. They followed all the guidelines that I provided them regarding my assignment and they made sure that they were being followed.",
    },

    {
      name: "JANITA R.",
      rating: 4.8,
      reviewCount: 1,
      reviewText:
        "My essay was very well written, it had no errors and was written according to the guidelines I gave the writers. They patiently took my instructions and followed it accordingly. it seemed 100% original.",
    },
    {
      name: "SHAKUR",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "We have been working with Academians regularly for about a year and experienced professional writing. Academians can also easily handle complicated technical assignments too.",
    },
    {
      name: "SUSAN LEE",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "Academians is one of the best writing services that I have come across. They have ensured that they hire the best people who can generate outstanding work that gives competitors a run for their money. Their customer support is extremely professional and helpful.",
    },

    {
      name: "G.WESTON",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "Working with Academians was great, from the customer representatives to the dedicated manager, all of them were very patient and also understanding. Thumbs up to the team.",
    },

    {
      name: "G.WESTON",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "Working with Academians was great, from the customer representatives to the dedicated manager, all of them were very patient and also understanding. Thumbs up to the team.",
    },
    {
      name: "KORBYN MACLEROY",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "The writers at Academians know what they are doing. I was surprised at the level of research and the quality of writing they produced on my research paper.",
    },
    {
      name: "LINDA TINDELL",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "As a student I am always looking for a cheap and smart solutions for my academic writings. Fortunately, Academians never fails to deliver exactly that.",
    },
    {
      name: "JULIE LANCASTER",
      rating: 5.0,
      reviewCount: 1,
      reviewText:
        "I am impressed by the writing quality and that that too in such a short time. I had totally forgotten about my pending assignment and would have definitely messed it up if I would have done it my own. The sales guy assured me I will receive in 6 hrs something but I received it just in 5. I recommend 5/5",
    },
    {
      name: "MARIE",
      rating: 4.9,
      reviewCount: 1,
      reviewText:
        "For students a writing service that is available 24/7 is a gift from heavens. They help you with all your writing issues and add content that is unique and factual.",
    },
    {
      name: "AMBROSE SHAW",
      rating: 4.7,
      reviewCount: 1,
      reviewText:
        "My writing skills are average I can manage assignments but dissertations are a different game. The day I hired Academians to write my dissertation. I decided they will be writing my assignments too.",
    },
];

const ReviewCard = ({ name, rating, reviewCount, reviewText }) => (
  <div className="bg-white w-full rounded-2xl shadow-lg p-6">
    <div className="flex items-center gap-4">
      <img src={cardicon} className="w-14 h-14 md:w-16 md:h-16" alt="cardicon image" />
      <div>
        <h1 className="text-lg md:text-xl font-semibold">{name}</h1>
        <div className="flex items-center">
          <h1 className="font-bold pr-2">{rating}</h1>
          {[...Array(Math.floor(rating))].map((_, i) => (
            <FaStar key={i} color="#F0AC44" />
          ))}
          {rating % 1 !== 0 && <FaStarHalfAlt color="#F0AC44" />}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 py-4">
      <img src={pencilicon} className="w-5 h-5 md:w-6 md:h-6" alt="" />
      <span className="text-sm md:text-base">{reviewCount} Review{reviewCount > 1 ? 's' : ''}</span>
    </div>
    <p className="text-sm md:text-base text-[#8A94A6]">{reviewText}</p>
  </div>
);

const ReviewCards = () => {
  return (
    <div className="bg-[#FAFBFF] w-full py-10">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
