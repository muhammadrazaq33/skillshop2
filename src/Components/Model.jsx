import React from "react";
import { GiBookmarklet } from "react-icons/gi";

const Model = ({ setShowModel, showModel, closeModel }) => {
  const handleClose = (e) => {
    if (e.target.id === "close") closeModel();
  };
  return (
    <div
      className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center"
      id="close"
      onClick={handleClose}
    >
      {/* first model */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 1 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph">
          The other Art teachers at my middle school and I got together and
          decided to have Art portfolios for all students. For some projects,
          our students design digital art using 2D and 3D design apps. But most
          of what we do is analog work. In our school, our students are allowed
          to bring their own device, so we have enough smartphones and tablets
          for them to take pictures and video of their work. They save their
          photos and videos in a Drive folder that’s shared with me. At the end
          of 8th Grade, they organize their favorite work they did in middle
          school in a Google Site as part of a reflection process, but also as
          something they can look back on when they are older.
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>

      {/* second model */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 2 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph">
          I started using electronic portfolios a couple of years ago as a way
          for my students to present their work to their parents. At our school,
          we have student-led conferences, so it’s the kids who are talking
          about the work they are doing and their learning, and not me. We take
          at least two projects per month, one suggested by me and another
          chosen by them, and we host them on a Google Site. For the
          conferences, students just open their site and talk away!
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>

      {/* third model  */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 3 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph ">
          For me, it’s really important for my students to reflect on their
          learning and to demonstrate it in as many ways as possible. My
          students work on different kinds of activities and projects, and we
          frequently capture work samples with their tablets. At the beginning
          of the school year I helped my students create a Drive folder called
          “Portfolio,” So, when they want to include something in their
          portfolio, all they have to do is take out their tablet, take a
          picture or video of their work and save it in Drive. Since they’re
          young, I have them talk about what they learned and record it instead
          of writing it. That way, it’s simple for them, and I can easily go
          through their work in Drive.
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>

      {/* fourth model  */}
      <div
        className={`flex flex-col gap-5 items-center bg-[white] w-[850px] p-10 rounded-sm ${
          showModel == 4 ? "block" : "hidden"
        }`}
      >
        <GiBookmarklet className="text-[4rem] text-blue-500" />
        <p className="paragraph ">
          We started using digital portfolios for all our high school students.
          We provide a Google Sites template so they can create a copy and
          customize it. One of the reasons we started doing this was that
          universities are looking for other evidence of student achievement
          besides just test scores. With a portfolio, students can better
          portray their personalities, their strengths, and passions. We’ve
          noticed our students really taking ownership of their portfolios, and
          they also give their friends feedback on how to make their sites
          better.
        </p>
        <button
          onClick={() => setShowModel(false)}
          className="bg-blue-500 hover:bg-blue-600 uppercase text-white px-6 py-2.5 rounded-sm"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Model;
