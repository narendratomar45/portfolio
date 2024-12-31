// import React from "react";

// const Review = () => {
//   let feedNames = [
//     {
//       imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
//       contant:
//         "Rohit is an outstanding frontend developer whose technical skills, attention to detail, and collaborative spirit greatly contribute to the success of our team. I highly recommend them for any future projects or opportunities.",
//       uname: ".....Yatin Yadav",
//     },
//     {
//       imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
//       contant:
//         "Additionally, Rohit is committed to their professional development. They actively pursue new learning opportunities and stay up-to-date with the latest industry trends. This commitment is evident in the innovative solutions they bring to our projects.",
//       uname: ".....Aaditya",
//     },
//     {
//       imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
//       contant:
//         "standout qualities is their meticulous attention to detail. They ensure that every user interface they design is pixel-perfect and functions flawlessly across various devices and browsers. Their code is always clean, maintainable, and well-documented, which significantly enhances our team’s efficiency and project maintainability.",
//       uname: ".....Nitish",
//     },
//   ];

//   let feedback = feedNames.map((feedName, index) => (
//     <div
//       className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4"
//       data-aos="flip-up"
//       key={index}
//     >
//       <p className="text-lg text-gray-700 italic">
//         <q>{feedName.contant}</q>
//       </p>
//       <p className="text-xl text-indigo-600">{feedName.uname}</p>
//       <div className="w-16 h-16 rounded-full overflow-hidden">
//         <img
//           src={feedName.imgsrc}
//           alt="user"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   ));

//   return (
//     <>
//       <h1 className="text-3xl font-semibold text-center my-10 text-gray-900">
//         What Our Users Say
//       </h1>
//       <div className="flex flex-wrap justify-center gap-8">{feedback}</div>
//     </>
//   );
// };

// export default Review;
import React from "react";

const Review = () => {
  let feedNames = [
    {
      imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
      contant:
        "Rohit is an outstanding frontend developer whose technical skills, attention to detail, and collaborative spirit greatly contribute to the success of our team. I highly recommend them for any future projects or opportunities.",
      uname: ".....Yatin Yadav",
    },
    {
      imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
      contant:
        "Additionally, Rohit is committed to their professional development. They actively pursue new learning opportunities and stay up-to-date with the latest industry trends. This commitment is evident in the innovative solutions they bring to our projects.",
      uname: ".....Aaditya",
    },
    {
      imgsrc: "https://gogil.aimcomely.com/webassets/images/user.png",
      contant:
        "One of Rohit's standout qualities is their meticulous attention to detail. They ensure that every user interface they design is pixel-perfect and functions flawlessly across various devices and browsers. Their code is always clean, maintainable, and well-documented, which significantly enhances our team’s efficiency and project maintainability.",
      uname: ".....Nitish",
    },
  ];

  let feedback = feedNames.map((feedName, index) => (
    <div
      className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center space-y-6 transform transition-transform hover:scale-105"
      data-aos="flip-up"
      key={index}
    >
      <p className="text-lg text-gray-700 italic text-center max-w-md">
        <q>{feedName.contant}</q>
      </p>
      <p className="text-xl text-indigo-600 font-semibold">{feedName.uname}</p>
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-600">
        <img
          src={feedName.imgsrc}
          alt="user"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-10 text-gray-900">
        What Our Users Say
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-6">{feedback}</div>
    </>
  );
};

export default Review;
