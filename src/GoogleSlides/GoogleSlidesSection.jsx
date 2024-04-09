import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const GoogleSlidesSection = () => {
  const [review, setReview] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle1 = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };
  return (
    <div>
      {/* first section */}
      <div className="bg-[#F9F9FA] shadow-inner-large mt-[4rem] ">
        <div className="pt-6 pb-36 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* sections ===> */}
          <div className="md:flex items-start justify-between gap-8">
            {/* left side */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text">Sections</h1>
              {/* links ===========> */}
              <div className="pl-4">
                <ul className="activitysection__list courselist">
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#EngageStudents"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Engage and inspire students with Google Slides
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#ExploreIdeas" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Explore ideas for interactive presentations
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Educators" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          How educators use Google Slides
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* end of left side */}

            {/* right side */}
            <div className="flex flex-col gap-4">
              <h1 className="text">Tools you'll use</h1>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/meeting4.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Slides
                </h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

          {/* cards ======> */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 max-w-[20rem]"
            >
              <img src="./assets/slide2.png" alt="" />
              <p className="text-center">
                Create interactive presentations for student use in Google
                Slides
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* Engage and inspire students with Google Slides
       */}
      <div id="EngageStudents" className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Engage and inspire students with Google Slides
            </h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="">
              <img src="./assets/slide3.png" alt="" />
            </article>
            <article className="flex flex-col gap-4 justify-center">
              <p className="paragraph">
                Many teachers use Google Slides to present lesson content. But
                Slides is also an effective tool for designing interactive
                learning experiences that engage students beyond direct
                instruction. You can use presentations to create activities,
                share resources, or even deliver assessments. When students can
                explore presentations on their own devices, they can pause, go
                back, and interact with digital features for a more personalized
                experience. They also have the power to take control of their
                learning and apply their knowledge through collaborative
                activities.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 section */}
      {/* Explore ideas for interactive presentations */}
      <div
        id="ExploreIdeas"
        className="sm:pt-32 pt-20 sm:pb-24 pb-20 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Explore ideas for interactive presentations
            </h1>
            <p className="paragraph">
              Here are a few ideas to encourage student engagement and
              creativity with Google Slides. As you review each idea, try to
              think of a unit or lesson you teach that might benefit from
              interactive slide presentations.
            </p>
          </div>
          {/* Accordian div */}
          <div className="flex flex-col justify-end gap-4 mt-10">
            <p className="Bold">Click below to expand each item.</p>
            {/* Accordian */}
            <div>
              {/* first */}
              <div className="flex flex-col gap-1">
                <article
                  onClick={() => toggle1(1)}
                  className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
                    open === true && "active2"
                  }`}
                >
                  <button>{open === 1 ? <FaMinus /> : <FaPlus />}</button>
                  <p className="text-[18px] ">
                    Share presentations for note-taking
                  </p>
                </article>
                <Collapse isOpened={open === 1}>
                  <article className="px-6 py-4 flex flex-col gap-4">
                    <p className="paragraph">
                      If you use Slides to present content, you can invite your
                      students to make copies of the presentations for their own
                      use. They can use these copies to follow along as you
                      present, take notes directly in the presentation, or
                      review the content on their own.{" "}
                    </p>
                    <ul className="list-disc pl-8 paragraph">
                      <li>
                        To{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/a/users/answer/9308866?hl=en"
                          className="text-[blue] underline"
                        >
                          enable the copy function
                        </a>
                        , copy the file link from the address bar and paste it
                        into an email or another shared resource, like a post in
                        Google Classroom.&nbsp;
                      </li>
                      <li>
                        Then, in the URL, replace <strong>“/edit”</strong> with
                        <strong> “/copy.”</strong>{" "}
                      </li>
                      <li>
                        When a student clicks the link, they can click{" "}
                        <strong>Make a copy</strong> to save a version of the
                        presentation to Google Drive. Any changes they make to
                        their copies will not affect each other’s copies or your
                        original file.{" "}
                      </li>
                    </ul>
                  </article>
                </Collapse>
              </div>
              {/* second  */}
              <div className="flex flex-col gap-1">
                <article
                  onClick={() => toggle1(2)}
                  className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
                    open === true && "active2"
                  }`}
                >
                  <button>{open === 2 ? <FaMinus /> : <FaPlus />}</button>
                  <p className="text-[18px] ">
                    Reframe lessons and assignments
                  </p>
                </article>
                <Collapse isOpened={open === 2}>
                  <article className="px-6 py-4 flex flex-col gap-5">
                    <p className="paragraph">
                      Slides is also a great vehicle for self-directed lesson
                      content and activities, especially if you’re teaching
                      without a textbook. You can add lesson content to each
                      slide by linking to resources, embedding images and
                      videos, or typing the content yourself. Students can then
                      annotate the content using features like lines, text
                      boxes, or the highlighter tool.
                    </p>
                    <p className="paragraph">
                      To make your lessons more interactive, consider adding
                      spaces for self-reflection, flash cards for review, or
                      activity prompts. For example, if your lesson is about
                      grammar, you might ask students to highlight adjectives
                      and adverbs using different colors. You could also
                      encourage students to explore concepts independently by
                      having them add their own slides to the presentation.
                    </p>
                  </article>
                </Collapse>
              </div>
              {/* third */}
              <div className="flex flex-col gap-1">
                <article
                  onClick={() => toggle1(3)}
                  className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
                    open === true && "active2"
                  }`}
                >
                  <button>{open === 3 ? <FaMinus /> : <FaPlus />}</button>
                  <p className="text-[18px] ">
                    Assess learning with Google Slides and Forms
                  </p>
                </article>
                <Collapse isOpened={open === 3}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div>
                      <img src="./assets/slide19.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        Slides becomes even more powerful when combined with
                        other Google tools. To keep students engaged and measure
                        their progress with a digital lesson, try including
                        assessments with Google Forms.{" "}
                      </p>
                      <p className="paragraph">
                        For example, you could link to a form that quizzes them
                        on content or polls their opinions. You can even{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/docs/answer/139706?hl=en&amp;ref_topic=6063592#zippy=%2Cview-all-responses-in-a-spreadsheet"
                          className="text-[blue] underline"
                        >
                          collect their responses in a Google Sheet
                        </a>
                        , which makes it easy to check comprehension at the
                        class level or identify students who need extra help.
                      </p>
                      <p className="paragraph">
                        To send results to a new or existing spreadsheet, go to
                        the <strong>Responses</strong> tab in your form and
                        select <strong>Create</strong> spreadsheet.
                      </p>
                      <p className="paragraph">
                        As students complete the form, their answers will appear
                        in the spreadsheet automatically.
                      </p>
                    </div>
                  </article>
                </Collapse>
              </div>
              {/* fourth */}
              <div className="flex flex-col gap-1">
                <article
                  onClick={() => toggle1(4)}
                  className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
                    open === true && "active2"
                  }`}
                >
                  <button>{open === 4 ? <FaMinus /> : <FaPlus />}</button>
                  <p className="text-[18px] ">
                    visualize thinking with Google Drawings and Slides
                  </p>
                </article>
                <Collapse isOpened={open === 4}>
                  <article className="px-6 py-4">
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        Google Drawings can be used to create sophisticated
                        graphics and flowcharts that can be embedded into Google
                        Slides. For example, for a book report, a student may
                        want to visualize the storyline. They can fill in the
                        components of the story arc with text or images. Their
                        final drawing is then added to a slide along with a
                        written piece about the book. When they present, the
                        students can creatively brainstorm what the story would
                        be like if one of the points of the story arc was
                        altered.
                      </p>
                    </div>
                  </article>
                </Collapse>
              </div>
            </div>
            {/*end of Accordian */}
          </div>
          {/*end of Accordian div */}
        </div>
      </div>
      {/*end of 3 section */}

      {/* 5 seCTION */}
      {/* How educators use Google Slides
       */}
      <div id="Educators" className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              How educators use Google Slides
            </h1>
            <p className="paragraph">
              Take a look at the below testimonials to get an idea on how other
              educators are currently using Google Slides.
            </p>
          </div>
          {/* second div */}
          <div className="flex flex-col gap-7 mt-8">
            <p className="Bold">Click the Start button to learn more.</p>
            {/* cards ======> */}
            <div
              className={`flex flex-wrap md:flex-row flex-col justify-center items-center gap-3 ${
                review ? "hidden" : "block"
              }`}
            >
              <article
                // data-aos="fade-up"
                // data-aos-delay="50"
                // data-aos-duration="1200"
                className="grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4 max-w-[16rem] w-full"
              >
                <img src="./assets/slide20.png" className="w-24 h-24" alt="" />
              </article>
              <article
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
                className="max-w-[16rem] w-full grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4"
              >
                <img src="./assets/slide21.png" className="w-24 h-24" alt="" />
              </article>
              <article
                // data-aos="fade-up"
                // data-aos-delay="50"
                // data-aos-duration="1200"
                className="max-w-[16rem] w-full grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4"
              >
                <img src="./assets/slide22.png" className="w-24 h-24" alt="" />
              </article>
            </div>
            {/* button */}
            <button
              onClick={() => setReview(true)}
              className={`bg-[#4285F4] text-white m-auto py-3 px-4 font-bold mt-1 ${
                review ? "hidden" : "block"
              }`}
            >
              Start
            </button>
          </div>
          {/* usestate */}
          {/* third div */}
          <div className={`flex flex-col gap-1 ${review ? "block" : "hidden"}`}>
            {/* first card */}
            <div
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              className={`grid place-content-start max-w-[50rem] w-full`}
            >
              <article className="bg-[#DADCE0] flex justify-around  items-center rounded-lg sm:gap-x-10 gap-x-6 sm:pl-20 px-8 py-4 sm:py-6">
                <img src="./assets/slide20.png" className="w-24 h-24" alt="" />
                <p className="paragraph">
                  Preparing students for tests is important, but traditional
                  study guides and review sessions just weren’t helping them. It
                  wasn’t until I shifted how I was delivering this content that
                  I finally was able to see an improvement. I created a Google
                  Slide deck that had one item for the test on each slide.
                  Students then added what they knew about that concept,
                  including page numbers, images, and videos to the slide.
                  Students used the comment feature to give each other feedback
                  and answer each other’s questions. I was able to work
                  individually with students who struggled with the content, and
                  add to each slide when I saw a lack of accurate information.
                  Students all had access to the slides to prepare for the test
                  and were motivated to study to see how their classmates shared
                  their interpretations.
                </p>
              </article>
            </div>
            {/* second card */}
            <div
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="1800"
              className={`grid place-content-end w-full`}
            >
              <article className="bg-[#DADCE0] flex sm:gap-x-10 gap-x-6 px-8 py-4 sm:py-6 items-center sm:pr-20 rounded-lg justify-between max-w-[50rem]">
                <p className="paragraph">
                  I love to engage students with short films for comprehension
                  practice. I created a complete digital lesson using Google
                  Slides, including instructions, videos (from YouTube and
                  Google Drive), and either a Google Form or a Google Doc linked
                  to the slides. Students loved being able to see the videos
                  multiple times to catch minute details.
                </p>
                <img src="./assets/slide21.png" className="w-24 h-24" alt="" />
              </article>
            </div>
            {/* third card */}
            <div
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="2200"
              className={`grid place-content-start w-full`}
            >
              <article className="bg-[#DADCE0] flex justify-around items-center sm:gap-x-10 gap-x-6 sm:pl-20 px-8 py-4 sm:py-6 rounded-lg max-w-[50rem]">
                <img src="./assets/slide22.png" className="w-24 h-24" alt="" />
                <p className="paragraph">
                  There’s nothing I love better than using technology to connect
                  classmates with one another. I start by sharing one slide deck
                  for introductions to connect new groups and to provide an
                  opportunity for them to learn how to use this versatile app.
                  Students are able to interact with many of the app's features
                  including the speaker notes as a way to share even more about
                  themselves. The next time we use Google Slides, I won’t need
                  to factor in time for learning a new tool since my students
                  already know the “how-tos,” leaving valuable time for
                  instruction on the content we are exploring.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      <div className="bg-[url('/assets/slide5.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/*  seCTION */}
      {/* Take it to work: Create an interactive slides presentation
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text">
              Take it to work: Create an interactive slides presentation
            </h1>
            <p className="paragraph">
              Now that you’ve explored some creative uses for Google Slides,
              consider some ways you could incorporate them in your own classes.
              To begin, think of a lesson you teach that you want to make more
              interactive. Then, open a document and describe one or two
              techniques you could use to engage and inspire your students with
              Slides.
            </p>
            <p className="paragraph">
              You don’t need to limit yourself to the ideas discussed in this
              lesson, but you could start by:
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="">
              <img src="./assets/slide4.png" alt="" />
            </article>
            <article className="flex flex-col gap-4 justify-center">
              <ul className="list-disc pl-8 paragraph">
                <li>Linking to additional resources on a topic.</li>
                <li>Embedding videos to deliver content.</li>
                <li>Writing activity prompts.</li>
                <li>
                  Creating flash cards for a study guide (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/presentation/d/1TesCAe2kyDMZ_xqFRCMEnhTQmSST08VIMJwguxePX_4/copy#slide=id.g1f5a554dbf_0_404"
                    className="text-[blue] underline"
                  >
                    template
                  </a>
                  ).
                </li>
                <li>Adding a quiz made in Forms.</li>
              </ul>
              <p className="paragraph">
                Then, if you’d like, open a new or existing presentation in
                Slides to put your ideas into practice. Feel free to experiment
                to find the best options for your courses and your students.
                Keep in mind that any changes you make don’t have to be
                complicated or time-consuming to have a big impact on student
                learning.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1yUKdjthXuXctr1p6H2TNAyV04ANUKvApnfvkAwDpOk4/edit#slide=id.p"
                  className="text-[blue] underline"
                >
                  Explore an example interactive slide presentation
                </a>
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end oF   seCTION */}

      {/* last footer */}
      <div className="pt-16 pb-24 bg-[#3C4043] grid place-items-center">
        <div className="grid place-items-center gap-y-3">
          {/*  */}
          <FaRegCheckCircle className="text-white text-[3.3rem]" />
          <p className="text-white">
            It looks like you've completed this lesson.
          </p>
        </div>
      </div>
      {/*end of last footer */}
    </div>
  );
};

export default GoogleSlidesSection;
