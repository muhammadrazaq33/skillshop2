import React from "react";

const GoogleSlidesSection = () => {
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
                          Engage and inspire students with Google Slides
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
                          Explore ideas for interactive presentations
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#OrganizeItems"
                      className="double_click_protection"
                    >
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
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
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
      <div className="sm:pt-20 pt-12 pb-10">
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
    </div>
  );
};

export default GoogleSlidesSection;
