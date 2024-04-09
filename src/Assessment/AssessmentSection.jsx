import React, { useState } from "react";
import { SlBadge } from "react-icons/sl";
import { Collapse } from "react-collapse";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const AssessmentSection = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  const [open, setOpen] = useState(false);

  const toggle1 = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
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
                      href="#AssessWithPurpose"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Assess with a purpose
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#focusedassessments"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create focused assessments
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#AssessmentFeature"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Assessment features in Google Forms
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#AssessmentTools"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Assessment tools in Google Classroom
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#SuccessStories"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Success stories
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
                  src="./assets/guardian2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Forms
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/tool2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Classroom
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
              <img src="./assets/guardian4.png" alt="" />
              <p className="text-center">
                Create formative assessments using Google Forms
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/guardian5.png" alt="" />
              <p className="text-center">
                Deliver formative assessments using Google Classroom
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* video div */}
          <div className="flex flex-col gap-2 mt-2">
            <p className="Bold mb-4">Click play to watch the video below.</p>
            <iframe
              //   width="800"
              //   height="600"
              src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="max-w-[905px] w-[92vw] m-auto md:h-[509px] min-h-[400px] "
            ></iframe>

            {/* button  */}
            <button
              onClick={toggle}
              className="w-full bg-[#1A73E8] py-2.5 text-white"
            >
              Transcript
            </button>
          </div>

          {/* transcript  ==> */}
          <div className={`flex flex-col gap-8 ${show ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-5 paragraph">
              <p className="paragraph">
                Data plays a vital part in an Educator’s role and can inform key
                decisions you make about your teaching.
              </p>
              <p>
                Google’s advanced tools allow you to collect and analyze data
                from classroom assignments, surveys, and quizzes, to help you
                measure student progress, identify areas of potential, and even
                adjust your teaching to support student needs.
              </p>
              <p>
                The interconnectivity of Google Sheets, Forms, and Classroom
                helps you to automate lengthy processes, easily analysis data,
                and unlock your full teaching potential.{" "}
              </p>
              <p>
                On Google Sheets you can store and sort data, such as student
                grades, apply filters to help you search and create tables to
                present and analyze your results.
              </p>
              <p>
                Google sheets makes it easy to create datasets that are simple
                to navigate, share, and collaborate on.
              </p>
              <p>
                Create formative assessments by utilizing quizzes on Google
                Forms to measure student learning.
              </p>
              <p>
                You can import the responses to Google Sheets for further
                analysis.
              </p>
              <p>
                By now you're used to using Google Classroom to share files and
                create assignments but you can do even more.
              </p>
              <p>
                You can also use Classroom for measurement by integrating forms
                and sheets into the workspace and with the new practice sets
                feature in Classroom available in Education Plus and the
                Teaching and Learning upgrade, you can cut down on the manual
                grading time with autograding and get quick performance insights
                to shape future lesson plans.
              </p>
              <p>
                Google workspace makes collecting, analyzing and collaborating
                on data so much easier, automating processes that would be time
                consuming, so you can focus on the important things.
              </p>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF 2 SeCtiON */}

      {/* 3 SeCtiON */}
      {/* Assess with a purpose */}
      <div
        id="AssessWithPurpose"
        className="sm:pb-20 pb-12 md:pt-28 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Assess with a purpose</h1>
            <p className="paragraph">
              As your students progress through learning activities, you can use
              formative assessments to analyze their understanding and provide
              personalized feedback. Simple and properly designed formative
              assessments can be useful tools for measuring student learning.
              They can be used throughout a lesson, rather than at the end of a
              unit, to reduce the time between the delivery of content and the
              measurement of the impact a lesson is having on student learning.
              Formative assessments can also help you make subtle (or
              substantial) changes to teaching methods so all students can
              master content.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-2">
            <article className="flex flex-col gap-5 justify-center">
              <div>
                <p className="paragraph">
                  The most effective formative assessments:
                </p>
                <ul className="list-disc pl-8 paragraph">
                  <li>Serve a defined purpose.</li>
                  <li>Align with learning outcomes.</li>
                  <li>Meet the needs of the teacher.</li>
                  <li>Highlight the progress of each student's learning.</li>
                  <li>Create clear actions for teachers and students.</li>
                </ul>
              </div>
              <p className="paragraph">
                Now, let’s check out how you can take the appropriate steps to
                build formative assessments using Google tools.
              </p>
            </article>
            <article className="flex flex-col gap-6">
              <p className="Bold">Click the image to enlarge. </p>
              <img src="./assets/assess2.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*End oF 3 SeCtiON */}

      {/* 4 SeCtiON */}
      {/* Create focused assessments */}
      <div id="focusedassessments" className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Create focused assessments
            </h1>
            <p className="paragraph">
              With a Google Workspace for Education account, you can use a
              variety of tools, such as Google Forms and Google Classroom, to
              design and deliver effective formative assessments. While creating
              formative assessments, you should always use the following steps
              to ensure they align with your goals and your students' needs:
            </p>
          </div>
          {/* second div */}
          <div className="flex flex-col sm:gap-16 gap-12">
            {/* buttons & paragraph */}
            {/* useSTATE */}
            <div className="flex flex-col gap-3">
              <p className="Bold">Click each tab to learn more.</p>
              {/* buttons ===> */}
              <div className="grid sm:grid-cols-3 grid-cols-1 gap-1 ">
                <button
                  className={`btn ${
                    activeIndex === 0 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(0)}
                >
                  Identify purpose and objectives
                </button>
                <button
                  className={`btn ${
                    activeIndex === 1 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(1)}
                >
                  Monitor student progress
                </button>
                <button
                  className={`btn ${
                    activeIndex === 2 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(2)}
                >
                  Adjust your teaching
                </button>
              </div>
              {/* end of buttons */}

              {/* paragraph  */}
              <div className="mt-4">
                {/* first paragraph */}
                <div
                  className={`${activeIndex === 0 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-5">
                    <p className="paragraph">
                      You can use the "Instructions" field of an assignment post
                      in Google Classroom to help your students better
                      understand the purpose and objectives of an assignment. A
                      simple sentence can help students recall the lesson or
                      topic covered previously and better set them up for
                      displaying their knowledge of the content. Additionally,
                      consider attaching documents, presentations, and videos
                      from YouTube to provide students a more clear
                      understanding of the assignment.
                    </p>
                    <p className="paragraph">
                      Another way to help students better understand learning
                      objectives is to include them on formative assessments.
                      Use the first page of a form in Google Forms to highlight
                      objectives before students are presented with questions.
                    </p>
                  </div>
                </div>

                {/* seConD pArAgrAPh */}
                <div
                  className={`${activeIndex === 1 ? "block" : "hidden"}  px-6`}
                >
                  <p className="paragraph">
                    Assessments in Google Forms can illustrate student
                    performance over the course of a school year or provide
                    immediate feedback to students each day. Using the quiz
                    feature in Google Forms can provide students the feedback
                    necessary for them to progress confidently through content.
                    This simple feedback loop can help students better assess
                    their own learning and help you create a more personalized
                    educational experience.
                  </p>
                </div>

                {/* third pArAgrAPh */}
                <div
                  className={`${activeIndex === 2 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-5">
                    <p className="paragraph">
                      Whether you are using Google Forms, Google Classroom, or
                      another Google tool, digital tools can make it easier for
                      you to monitor student growth and learning over the course
                      of the year. You can reflect on your own teaching and
                      assessment practices by using the data you collect to
                      determine what content or skills your students understand
                      and what you might need to differentiate or reteach.
                    </p>
                    <p className="paragraph">
                      Analyzing the results of your assessment can also help you
                      identify ways to improve your assessment. For example, you
                      may find that many students got the same quiz question
                      incorrect despite the content being well covered. Consider
                      whether your assessment is clear and if all parts of it
                      align with the desired learning objectives and outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* EnD oF UsEsTate */}
            {/*end of buttons & paragraph */}
          </div>

          {/* third div */}
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5 md:mt-6 mt-3">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <p className="paragraph">
              Did you know that you can do more with Google Classroom inside of
              the{" "}
              <strong>
                Teaching and Learning, and Education Plus editions&nbsp;
              </strong>
              of Google Workspace for Education? With{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://blog.google/outreach-initiatives/education/introducing-practice-sets/"
              >
                <span className="text-[blue] underline">practice sets</span>
              </a>{" "}
              in Google Classroom, you can analyze how student learning is
              progressing, while also observing class trends. Practice sets
              allow your students to improve new skills and get instant feedback
              and tips. They also allow you to get quick insights into which
              students might need additional support and which topics might need
              reviewing or reteaching for your entire class. Practice sets are
              available if you have the <strong>Teaching and Learning</strong>{" "}
              or <strong>Education Plus</strong> <strong>editions</strong> of
              Google Workspace for Education.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      {/* 5 section */}
      {/* Assessment features in Google Forms */}
      <div
        id="AssessmentFeature"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Assessment features in Google Forms
            </h1>
            <p className="paragraph">
              Google Forms has several powerful features that can help you
              create effective formative assessments. Check out the following
              examples to learn more.
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
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">Create quizzes</p>
                </article>
                <Collapse isOpened={open === 1}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/assess20.png" alt="" />
                    </div>
                    <div>
                      <p className="paragraph">
                        The ability to create quizzes in Google Forms can save
                        you a lot of time. To&nbsp;
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/docs/answer/7032287?hl=en"
                          className="text-[blue] underline"
                        >
                          create a quiz in Google Forms
                        </a>
                        , open a new form, go to <strong>Settings</strong>, and
                        turn on <strong>Make this a quiz</strong>. This allows
                        you to assign correct and incorrect answers that the
                        form will grade immediately. The quiz feature also makes
                        it possible for you to assign point values for each
                        question, provide feedback for incorrect answers, and
                        even control when grades will be released. All of these
                        features can simplify your grading process and help
                        empower your students to review their scores upon
                        submitting their answers. Check out this{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfZEanqjY80-3Nw-Xkxg1IH96oYFFCxoNFgSErMBIdZ2Mh3xg/viewform"
                          className="text-[blue] underline"
                        >
                          quiz example
                        </a>
                        .
                      </p>
                    </div>
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
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">Have students upload files</p>
                </article>
                <Collapse isOpened={open === 2}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/assess21.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        For a more open-ended formative assessment, you can
                        create a&nbsp;
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/a/users/answer/9308632?hl=en"
                          className="text-[blue] underline"
                        >
                          file upload question
                        </a>
                        . To create a file upload question, create a{" "}
                        <strong>new question</strong>, provide instructions for
                        what your students should upload in the question box,
                        click the <strong>drop-down menu</strong> next to the
                        question, and select&nbsp;<strong>File upload</strong>
                        .&nbsp;
                      </p>
                      <p className="paragraph">
                        With this type of question, you can collect other types
                        of formative work or resources from your students. For
                        example, you might want to assess whether students can
                        identify a specific plant type in a local habitat or
                        recite something in a new language. You can use the file
                        upload feature to collect images, audio recordings, and
                        even videos that your students create to demonstrate
                        their knowledge. Check out this&nbsp;
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://docs.google.com/forms/d/e/1FAIpQLScDW7Lb8Ogv7_hUGepo9TNrRQbkgDdmXRDfzWcAPTNVZ4ftdQ/viewform"
                          className="text-[blue] underline"
                        >
                          example
                        </a>{" "}
                        that requires students to upload files.
                      </p>
                    </div>
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
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">Include images as answers</p>
                </article>
                <Collapse isOpened={open === 3}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/assess22.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        Google Forms empowers you to&nbsp;
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/docs/answer/2839737?hl=en#zippy=%2Cadd-image-or-video"
                          className="text-[blue] underline"
                        >
                          add images
                        </a>{" "}
                        to your response options. So instead of asking your
                        students to provide written answers or pick from a list
                        of numbered solutions, you can have them select the
                        image that best identifies an answer. This can make your
                        quizzes more visual and accessible for your students. To
                        add images for each response option, hover over the
                        response and click the&nbsp;Add image&nbsp;icon to the
                        right of the response. Check out this&nbsp;
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSeYV1UwcQNJGt46wPWcrIWjW5coySqJctsvfKMzot9ePDA8Bw/viewform"
                          className="text-[blue] underline"
                        >
                          example
                        </a>{" "}
                        that uses images as answer options.
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
      {/*end of 5 section */}
    </div>
  );
};

export default AssessmentSection;
