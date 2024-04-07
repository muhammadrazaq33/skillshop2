import React, { useState } from "react";

const AssessTools = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {/* 5 SeCtiON */}
      {/* Assessment tools in Google Classroom */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Assessment tools in Google Classroom
            </h1>
            <p className="paragraph">
              Google Classroom is a helpful platform that allows you to quickly
              communicate with your class and share learning resources. However,
              you can also use Classroom as a formative assessment tool.
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
                  Integrate Forms in Classroom
                </button>
                <button
                  className={`btn ${
                    activeIndex === 1 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(1)}
                >
                  Create assignments
                </button>
                <button
                  className={`btn ${
                    activeIndex === 2 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(2)}
                >
                  Post questions
                </button>
              </div>
              {/* end of buttons */}

              {/* paragraph  */}
              <div className="mt-4">
                {/* first paragraph */}
                <div
                  className={`${activeIndex === 0 ? "block" : "hidden"}  px-6`}
                >
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <article className="md:col-span-1">
                      <img src="./assets/assess3.png" alt="" />
                    </article>
                    <article className="md:col-span-2">
                      <p className="paragraph">
                        While you can create and distribute forms from Google
                        Forms, Google Classroom integrates with Google Forms so
                        that you can{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/edu/classroom/answer/9095575"
                          className="text-[blue] underline"
                        >
                          create and post quizzes
                        </a>{" "}
                        directly in Classroom. Hosting Google Forms in Classroom
                        allows you to streamline the distribution and collection
                        of student work. You can also import the grades from
                        your students’ quizzes, so that you can easily analyze
                        the results and share them with your students.
                      </p>
                    </article>
                  </div>
                </div>

                {/* seConD pArAgrAPh */}
                <div
                  className={`${activeIndex === 1 ? "block" : "hidden"}  px-6`}
                >
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                    <article>
                      <p className="paragraph">
                        In Google Classroom, you can create assignments to use
                        as formative assessments. To create a copy of an
                        assignment for each student, select{" "}
                        <strong>Create</strong> and choose a Google app. Then
                        create the assignment and select{" "}
                        <strong>Make a copy for each student</strong>. You can
                        then monitor which students have turned in assignments
                        and you can personalize your feedback by adding comments
                        directly in each student's work.
                      </p>
                    </article>
                    <article>
                      <img src="./assets/assess4.png" alt="" />
                    </article>
                  </div>
                </div>

                {/* third pArAgrAPh */}
                <div
                  className={`${activeIndex === 2 ? "block" : "hidden"}  px-6`}
                >
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                    <article className="md:col-span-1">
                      <img src="./assets/assess5.png" alt="" />
                    </article>
                    <article className="md:col-span-2 flex flex-col gap-5">
                      <p className="paragraph">
                        Sometimes a formative assessment can be as simple as a
                        single question. Just like with assignments, you can
                        create questions and choose whether each student should
                        answer it on their own or as part of a group discussion
                        where students reply to each other's responses. You can
                        create multiple-choice or short-answer questions
                        depending on the content you’re assessing.
                      </p>
                      <p className="paragraph">
                        You can also post questions immediately or schedule
                        questions for a future date and time. To schedule a
                        question, write your question, then click the{" "}
                        <strong>Ask</strong>
                        drop-down arrow, select <strong>Schedule</strong>, and
                        choose a date and time.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            {/* EnD oF UsEsTate */}
            {/*end of buttons & paragraph */}
          </div>
        </div>
      </div>
      {/*End oF 5 SeCtiON */}

      {/* 6 SeCtiON */}
      {/* Success stories */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Success stories</h1>
            <p className="paragraph">
              Read below some tips from other educators and learn from their
              experiences.
            </p>
          </div>
        </div>
      </div>
      {/*End oF 6 SeCtiON */}

      <div className="bg-[url('/assets/assess6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 7 sEctIOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Reflect on what you have learned
            </h1>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    How can you be sure your students understand the learning
                    objectives?
                  </li>
                  <li>
                    What are some efficient ways to check for student learning?
                  </li>
                  <li>
                    How are you preparing to provide meaningful feedback to
                    students?
                  </li>
                  <li>
                    How are you empowering students to take action on your
                    feedback?
                  </li>
                </ol>
              </div>
              <p className="paragraph">
                After you have reflected, consider what you have learned in this
                lesson to improve upon a formative assessment that you already
                use in your classroom or create a new one. Decide whether you
                will use Google Forms or Google Classroom to create your
                assessment. Check out the links below for tips on creating your
                formative assessment.
              </p>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/assess7.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF 7 sEctIOn */}

      {/* ​​Additional Resources​​ */}
      <div className="sm:pb-16 pb-12  pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-4">
          <div className="flex flex-col sm:gap-12 gap-8">
            <h1 className="leading-[2.4rem] text5">
              ​​Additional Resources​​
            </h1>
            <p className="paragraph">
              To learn more about this topic, click the links below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-12">
            <article className="flex flex-col justify-start md:justify-center gap-6 md:col-span-2">
              <div className="flex flex-col gap-2">
                <p className="paragraph">Google Form Resources:</p>
                <div className="flex flex-col gap-4 md:items-start items-center">
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfZEanqjY80-3Nw-Xkxg1IH96oYFFCxoNFgSErMBIdZ2Mh3xg/viewform"
                      className="ev-links-item-link ev-button"
                      target="_blank"
                      role="button"
                    >
                      <span>Check out this example in Google forms ↗</span>
                    </a>
                  </button>
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://support.google.com/a/users/answer/9303071?hl=en&amp;ref_topic=9296604"
                      className="ev-links-item-link ev-button"
                      target="_blank"
                      role="button"
                    >
                      <span>Create and edit a new form ↗</span>
                    </a>
                  </button>
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://support.google.com/a/users/answer/9303072?hl=en&amp;ref_topic=9296604"
                      className="ev-links-item-link ev-button"
                      target="_blank"
                      role="button"
                    >
                      <span>Share your form ↗</span>
                    </a>
                  </button>
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://support.google.com/a/users/answer/9303167?hl=en&amp;ref_topic=9296604"
                      className="ev-links-item-link ev-button"
                      target="_blank"
                      role="button"
                    >
                      <span>Analyze your form responses ↗</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="paragraph">Google Classroom Resources:</p>
                <div className="flex flex-col gap-4 md:items-start items-center">
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://support.google.com/edu/classroom/answer/6020265?hl=en-GB&amp;ref_topic=11599384"
                      className="ev-links-item-link ev-button"
                      target="_blank"
                      role="button"
                    >
                      <span>Create an assignment ↗</span>
                    </a>
                  </button>
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://support.google.com/edu/classroom/answer/9093530?hl=en-GB&amp;ref_topic=11596422"
                      className="ev-links-item-link ev-button"
                      target="_blank"
                      role="button"
                    >
                      <span>Give feedback on assignments ↗</span>
                    </a>
                  </button>
                  <button className="bg-[#1a73e8] text-white py-2 px-4 font-semibold text-[14px]">
                    <a
                      href="https://blog.google/outreach-initiatives/education/introducing-practice-sets/"
                      className=""
                      target="_blank"
                      role="button"
                    >
                      <span>Personalize learning with practice sets ↗</span>
                    </a>
                  </button>
                </div>
              </div>
            </article>
            <article className="md:col-span-1 flex flex-col justify-center">
              <img
                src="./assets/share7.png"
                className="cursor-zoom-in"
                alt=""
              />
            </article>
          </div>
        </div>
      </div>
      {/* end of Additional Resources */}
    </div>
  );
};

export default AssessTools;
