import React, { useState } from "react";

const VisualizeLearningSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  const handleClick = (index) => {
    setActiveIndex(index);
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
                    <a href="#startDrive" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Promote student choice
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UploadMaterial"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Apply digital tools in your classroom
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UploadMaterial"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Facilitate project-based learning
                        </h3>
                      </div>
                    </a>
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
                  src="./assets/visuale2.png"
                  className="w-[2.2rem] h-[3rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Drawings
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/syllabus3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Drive
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/meeting4.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Slides
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/visuale3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Jamboard
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
              <img src="./assets/visuale4.png" alt="" />
              <p className="text-center paragraph">
                Demonstrate digital tools to help students visualize their
                learning
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/visuale5.png" alt="" />
              <p className="text-center paragraph">
                Promote an environment of student choice in your classroom
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* Promote student choice
       */}
      <div className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Promote student choice</h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4 justify-center md:col-span-2">
              <p className="paragraph">
                There are many different digital tools that students can use to
                illustrate what they have learned. By helping your students use
                digital tools to visualize their learning in unique and fun
                ways, you can increase their engagement and understanding of the
                content. When you provide students with choices for how to
                visualize their learning, they are able to utilize their
                strengths and interests to personalize their learning.
              </p>
            </article>
            <article className="md:col-span-1">
              <img src="./assets/visual6.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 section */}
      {/* Facilitate project-based learning */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  sm:gap-16 gap-10">
          <div className="flex flex-col sm:gap-16 gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text1 leading-[2.4rem]">
                Facilitate project-based learning
              </h1>
              <p className="paragraph">
                Creating a project-based learning environment where your
                students can choose how they visualize their learning can
                promote a personalized and meaningful learning experience. To
                help your students successfully create projects of their own,
                scaffold lessons to provide ideas and support that will
                encourage their own creative ideas. Here are some ways you can
                facilitate an effective project-based learning process:
              </p>
            </div>

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
                  Demonstrate digital tools
                </button>
                <button
                  className={`btn ${
                    activeIndex === 1 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(1)}
                >
                  Foster different types of support
                </button>
                <button
                  className={`btn ${
                    activeIndex === 2 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(2)}
                >
                  Provide Feedback
                </button>
              </div>
              {/* end of buttons */}

              {/* paragraph  */}
              <div className="mt-4">
                {/* first paragraph */}
                <div
                  className={`${activeIndex === 0 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-4">
                    <p className="paragraph">
                      Before students can choose a way to display their
                      knowledge, they need to be familiar with their options. To
                      show your students the different ways they can present
                      their learning, you can include different types of digital
                      tools in your lessons and discuss what types of projects
                      they can be most useful for. After you present the tool,
                      have your students reflect on the product to help them
                      internalize the benefits, drawbacks, and potential uses of
                      the tool.{" "}
                    </p>
                    <p className="paragraph">
                      Consider hosting a discussion after the next presentation
                      you give using Google Slides. Ask your students how Slides
                      is a useful tool for sharing knowledge, what features make
                      it more interesting or engaging, and when they think it
                      may be the most effective tool to use. You could also ask
                      them to work with a partner to brainstorm different
                      digital tools that could have been used to present the
                      same information in a different way. This feedback can
                      help students better understand when they should use
                      different tools and help you improve your own selection of
                      tools when teaching.
                    </p>
                  </div>
                </div>

                {/* seConD pArAgrAPh */}
                <div
                  className={`${activeIndex === 1 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-4">
                    <p className="paragraph">
                      When your students have the opportunity to be creative and
                      choose their own digital tools, they may each need
                      different amounts and types of support to complete their
                      projects. As you observe your students working, you can
                      provide personalized support to individuals by discussing
                      their progress and any questions that they have. You can
                      also consider finding small groups of students who are
                      using the same tool and discussing how each of them is
                      using it so they can learn from one another's application
                      of the tool.
                    </p>
                    <p className="paragraph">
                      If a student has a question about a digital tool that you
                      can’t answer, encourage them to research a solution
                      online. Then follow up with the student so you can learn
                      from them. This can increase student confidence as well as
                      your ability to support other students in the future. In
                      some cases, you can identify students who are familiar
                      with a digital tool to act as a peer mentor. Peer mentors
                      can help their fellow students and will increase their own
                      expertise through teaching others.
                    </p>
                  </div>
                </div>

                {/* third pArAgrAPh */}
                <div
                  className={`${activeIndex === 2 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-4">
                    <p className="paragraph">
                      For students to reflect, grow, and better understand the
                      digital tools they’re using in your classroom, provide
                      formative feedback while they work. You can often make
                      this process more efficient by using digital tools. For
                      example, you might use the comment feature to select
                      specific aspects of a project and provide feedback on a
                      student’s knowledge of the content and their use of the
                      visual tool. You can even include links to resources on
                      how to use their chosen digital tool in new ways.
                    </p>
                    <p className="paragraph">
                      If students are presenting their work to the class,
                      audience members can provide compliments and suggestions
                      to help students reflect on and improve their use of the
                      visual tool. To achieve this, you could have students use
                      the comment feature in Google tools, such as Slides and
                      Drawings, and in Drive, where you can make comments on
                      image files. You could also encourage students to gather
                      peer feedback on their project using Google Jamboard. This{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://applieddigitalskills.withgoogle.com/c/middle-and-high-school/en/get-feedback-in-google-jamboard/overview.html"
                        className="text-[blue] underline"
                      >
                        video lesson
                      </a>{" "}
                      shows you how.&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* EnD oF UsEsTate */}
            {/*end of buttons & paragraph */}
          </div>
        </div>
      </div>
      {/*end of 3 section */}

      <div className="bg-[url('/assets/visual7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 section */}
      {/* Take it to work: Create a menu for student choice  */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  sm:gap-12 gap-10">
          <div className="flex flex-col sm:gap-12 gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text">
                Take it to work: Create a menu for student choice
              </h1>
              <p className="paragraph">
                Now it's your turn to try out creating a new copy of a document
                and sharing it. Choose a project that you already use in your
                class that you would like to make more personalized for your
                students. Consider what content the students must cover to
                demonstrate their learning. Next, identify a variety of methods
                and tools your students could use to convey their learning.
              </p>
            </div>

            {/* grid  */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
              <article className="flex flex-col gap-5">
                <p className="paragraph">
                  Use all of this information to create a student choice menu.
                  The menu should clearly identify the task they must complete,
                  list general requirements, and provide options that they can
                  choose from to complete the project. You may even offer the
                  option for students to generate their own ideas. Once your
                  student choice menu is complete, share it with your students
                  to give them more freedom to personalize the projects they
                  create.
                </p>
                <p className="paragraph">
                  Checkout{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.google.com/presentation/d/19lVEiptBXdK0cIX4pQQKnk-TmVr73G1MIKt8tDvoC5I/edit#slide=id.g162cdc52302_0_82"
                    className="text-[blue] underline"
                  >
                    this example
                  </a>
                  .
                </p>
              </article>
              <article className="flex flex-col gap-5 items-start">
                <p className="paragraph">
                  To get started on creating your own student choice menu, click
                  the button below:
                </p>
                <button className="text-white bg-[#4285f4] rounded-[2px] py-[9px] px-[13px] font-medium text-[16px] shadow-md ml-2">
                  <a
                    href="https://docs.google.com/presentation/d/184cfCowyAkFBrMjrSEtDdVO9wSzVGI_6iRtZQOsP2Uw/edit#slide=id.g162cdc52302_0_77"
                    class="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>View template</span>
                  </a>
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*end of 5 section */}

      <div className="bg-[url('/assets/visual8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 sEctIOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text1 leading-[2.4rem]">
            Reflect on what you have learned
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <div className="flex flex-col gap-4 md:col-span-1">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    How can I use Google tools to help students reflect on and
                    visualize their learning?
                  </li>
                  <li>
                    What other options might you add to the menu template to
                    encourage student choice?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/visual9.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF 6 sEctIOn */}
    </div>
  );
};

export default VisualizeLearningSection;
