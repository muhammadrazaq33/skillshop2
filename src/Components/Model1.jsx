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
        <div className="flex flex-col gap-4 paragraph">
          <p>
            I love showcasing student work. And this particular example grew
            into a full PBL project unintentionally! The project was the result
            of an article that my 5th grade students and I had read in class. It
            was about a nearby body of water that had been contaminated.{" "}
          </p>
          <p>
            As we began doing research on water contamination, I documented what
            was going on in the classroom on a Google Site. I embedded the
            recordings of guest speakers to the class, we included images that
            students felt were relevant, and I was even able to include student
            testimonials of their learning.
          </p>
          <p>
            As students explored different concepts of clean water vs. dirty
            water, I added a page that explained each result. By the end we had
            an amazing website that demonstrated everything we’d learned in our
            PBL unit.
          </p>
        </div>
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
        <div className="flex flex-col gap-4 paragraph">
          <p>
            I am active in online education communities and I go to many
            conferences. I’ve learned a lot about really cool things students
            can do online with apps or software, but never a good way to bring
            4-5 online tools together to create a cohesive unit.{" "}
          </p>
          <p>
            One day I realized that with a simple table of tools to explore and
            their hyperlinks in a Google Doc table, I could guide my students
            through different online tools to explore a concept. One column has
            the media I want them to explore. The other column is for students
            to record their thoughts and ideas. They can even paste images in
            the table to help clarify their point. I use Google Classroom to
            send each student a copy of what I like to call Multi-Media Text
            Sets.
          </p>
        </div>
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
          I’ve found Blogger to be the perfect platform for my Flipped Class.
          I’ve created a page for each unit with a two-column table for each
          lesson. In one column I have the video and in the other column I put
          the task that each student has to complete before they come to class
          the next day. One reason I like Blogger is that it allows my students
          to have a voice. If they have a question, they can post a comment.
          Either I or the other kids in the class will respond. That way they
          can get help anytime, anywhere.
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
          The day I realized I could use Google Forms to flip my class, I was
          pumped. I’ve always enjoyed the ability to ask my students questions
          and have their results nested on a spreadsheet, but I remember the day
          I clicked “Add Item” and saw “Video” - I thought I’d won the lottery.
          Right away I started adding my flipped videos to the form and then
          using questions under the form to ask questions about the concepts in
          the video. Recently, I learned how to crop my video so I can insert
          parts of the video and ask questions specifically about those parts.
          My students can do their learning with just one site and I can get the
          results of their learning in time to adjust for the next day’s lesson.
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
