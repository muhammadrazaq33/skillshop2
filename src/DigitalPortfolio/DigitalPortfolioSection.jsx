import React, { useState } from "react";
import Model from "../Components/Model";
import { FaRegCheckCircle } from "react-icons/fa";

const citizens = [
  {
    id: 1,
    img: "./assets/portfolio4.png",
    text: "Open transcript",
  },
  {
    id: 2,
    img: "./assets/portfolio5.png",
    text: "Open transcript",
  },
  {
    id: 3,
    img: "./assets/portfolio6.png",
    text: "Open transcript",
  },
  {
    id: 4,
    img: "./assets/portfolio7.png",
    text: "Open transcript",
  },
];

const DigitalPortfolioSection = () => {
  const [showModel, setShowModel] = useState(false);
  const [review, setReview] = useState(false);

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
                      href="#electronicportfolio"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          The power of an electronic portfolio
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#ExploreIdeas" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Explore ideas from other educators
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#Housingstudent"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Housing student work
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#DesignPortfolio"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Take it to work: Design your Portfolio Site
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
                  src="./assets/portfolio1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Sites
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/syllabus3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Meet
                </h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

          {/* cards ======> */}
          <div className="flex flex-wrap md:flex-row flex-col justify-center items-center gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 max-w-[17.5rem]"
            >
              <img src="./assets/explore3.png" alt="" />
              <p className="text-center">
                Create a portfolio for your students
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[17.5rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/explore4.png" alt="" />
              <p className="text-center">
                Organize and share your resources in one location
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* The power of an electronic portfolio
       */}
      <div id="electronicportfolio" className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              The power of an electronic portfolio
            </h1>
            <div className="max-w-[38rem] m-auto">
              <img src="./assets/portfolio3.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <p className="paragraph">
              Digital portfolios can host all kinds of electronic files like
              documents, presentations, spreadsheets, videos, and audio files.
              Other non-digital work such as painting, models, and theater
              productions can be digitized by taking pictures, scanning, or
              recording them. To house your files you can use Google Drive,
              Sites, or a combination of both.
            </p>
            <p className="paragraph">
              Throughout the lesson try to identify which method would work best
              for your class and students.
            </p>
            <div>
              <p className="font-bold">For Students</p>
              <p className="paragraph">
                Electronic portfolios are great for students as they provide a
                platform to reflect on their own learning. Often, students will
                research, write papers, take a test, and go through school
                without taking time to think about what and how they are
                learning. Portfolios create space for this reflection process.
                They also serve as a gauge to visualize progress throughout the
                school year or even through the years.
              </p>
            </div>
            <div>
              <p className="font-bold">For Teachers</p>
              <p className="paragraph">
                Teachers can also use the portfolio to assess projects, as they
                can focus not only on the finished product, but also observe the
                process and reflection. Together they constitute a much richer
                assessment of performance than a test of rote learning: vital in
                developing students for the twenty-first century. Portfolios
                also make it easier for teachers to demonstrate a student’s
                growth to parents.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* third section */}
      {/* Explore ideas from other educators */}
      <div
        id="ExploreIdeas"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text1">Explore ideas from other educators</h1>
            <p className="paragraph">
              Listen to the following teachers talk about why they started using
              electronic portfolios, and what Google tools they use to
              accomplish this.
            </p>
          </div>
          {/* cards ========> */}
          <div className="mt-16 flex flex-col gap-6">
            <p className="Bold">
              Click play to listen to each teacher. You can also open each
              transcript to read at your own pace.
            </p>

            <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-x-[6rem] sm:gap-x-[3rem] gap-x-[2rem] gap-y-[2rem]  p-3">
              {citizens.map((citizen) => {
                const { id, img, text } = citizen;
                return (
                  <article
                    key={id}
                    className="flex flex-col items-center gap-4"
                  >
                    <img src={img} alt="" />
                    <button
                      onClick={() => setShowModel(id)}
                      className="bg-[#1A73E8] py-2.5 text-white w-full font-bold"
                    >
                      {text}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        {/* Model */}
        {showModel && (
          <Model
            setShowModel={setShowModel}
            showModel={showModel}
            closeModel={() => setShowModel(false)}
          />
        )}
      </div>
      {/* end of third section */}

      {/* 4 seCTION */}
      {/* Housing student work
       */}
      <div id="Housingstudent" className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Housing student work</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <article>
                <img src="./assets/portfolio8.png" alt="" />
              </article>
              <article className="flex flex-col gap-4">
                <p className="paragraph">
                  We have reviewed some of the benefits of using electronic
                  portfolios with your students.{" "}
                </p>
                <p className="paragraph">
                  The most ideal way to house and organize student portfolios is
                  using both Drive and Sites. You can have students put all
                  their digital work in Drive and then display it on a site.
                  They can easily{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.google.com/sites/answer/6372879"
                    className="text-[blue] underline"
                  >
                    insert Google Docs, Sheets, Slides
                  </a>
                  , or even a whole folder in a site. These folders may contain
                  other non-Google documents, such as images, PDFs and videos.
                </p>
                <p className="paragraph">
                  Let’s now take a look at the different methods we can use to
                  house digital work with Google tools.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      <div className="bg-[url('/assets/portfolio9.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* slider */}
      <div className="grid place-content-center h-[25rem] bg-[#F9F9FA]">
        <h1 className="text-[4rem]">Slider</h1>
      </div>
      {/*end of slider */}

      <div className="bg-[url('/assets/portfolio10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* slider */}
      <div className="grid place-content-center h-[25rem]">
        <h1 className="text-[4rem]">Slider</h1>
      </div>
      {/*end of slider */}

      <div className="bg-[url('/assets/portfolio11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 seCTION */}
      {/* Take it to work: Design your Portfolio Site
       */}
      <div
        id="DesignPortfolio"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text">
              Take it to work: Design your Portfolio Site
            </h1>
            <p className="paragraph">
              At this point, you have seen some of the benefits of having
              digital student portfolios and a few ways to create them using
              Google tools. It is now your turn to design a site that works for
              your class. Think about the purpose(s) the site will serve, the
              content you want your students to insert, and how it will be
              organized.
            </p>
            <p className="paragraph">
              Building a site takes a lot of planning. Consider the following
              before you jump in:
            </p>
          </div>
          {/* second div */}
          <div className="flex flex-col gap-7 mt-8">
            <p className="Bold">
              Click the button 'Review considerations' to learn more.
            </p>
            {/* cards ======> */}
            <div
              className={`flex flex-wrap md:flex-row flex-col justify-center items-center gap-3 ${
                review ? "hidden" : "block"
              }`}
            >
              <article
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
                className="grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4 max-w-[16rem] w-full"
              >
                <img
                  src="./assets/portfolio12.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
              <article
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1200"
                className="max-w-[16rem] w-full grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4"
              >
                <img
                  src="./assets/portfolio13.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
            </div>
            {/* button */}
            <button
              onClick={() => setReview(true)}
              className={`bg-[#4285F4] text-white m-auto py-3 px-4 font-bold mt-1 ${
                review ? "hidden" : "block"
              }`}
            >
              Review considerations
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
              className={`grid place-content-start`}
            >
              <article className="bg-[#DADCE0] flex justify-around gap-x-10 items-center sm:px-20 px-10 py-6 rounded-lg sm:w-[55vw]">
                <img
                  src="./assets/portfolio12.png"
                  className="w-12 h-12"
                  alt=""
                />
                <p className="paragraph">Why are you making a site?</p>
              </article>
            </div>
            {/* second card */}
            <div
              data-aos="fade-right"
              data-aos-delay="70"
              data-aos-duration="1800"
              className={`grid place-content-end`}
            >
              <article className="bg-[#DADCE0] flex  gap-x-10 items-center sm:px-20 px-10 py-6 rounded-lg justify-between sm:w-[55vw]">
                <p className="paragraph">What content will go on it?</p>
                <img
                  src="./assets/portfolio13.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
            </div>
            {/* third card */}
            <div
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="2200"
              className={`grid place-content-start`}
            >
              <article className="bg-[#DADCE0] flex justify-around gap-x-10 items-center sm:px-20 px-10 py-6 rounded-lg sm:w-[55vw]">
                <img
                  src="./assets/portfolio12.png"
                  className="w-12 h-12"
                  alt=""
                />
                <p className="paragraph">
                  What is the structure of the site? What pages will go on it?
                </p>
              </article>
            </div>
            {/* fourth card */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="2800"
              className={`grid place-content-end`}
            >
              <article className="bg-[#DADCE0] flex  gap-x-10 items-center sm:px-20 px-10 py-6 rounded-lg justify-between sm:w-[55vw]">
                <p className="paragraph">
                  What type of media do you need to gather?
                </p>
                <img
                  src="./assets/portfolio13.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
            </div>
          </div>
          {/* fourth div */}
          <div className="flex flex-col gap-6 mt-2">
            <p className="paragraph">
              Below you will find a link to a Doc that will guide you through
              the process. In the document you will find further instructions on
              creating your site.
            </p>
            <p className="paragraph">
              After considering the above questions, open the Google Doc below
              to get started!
            </p>
            {/* button */}
            <div className="flex justify-start">
              <button className="bg-[#4285F4] text-white py-3 px-4 font-bold mt-1">
                <a
                  href="https://docs.google.com/document/d/1z7TOzbfmdl0B0M8zs_o0qrY1URgcG_weklVasNv6vgo/copy"
                  target="_blank"
                  role="button"
                >
                  <span>
                    <span>Click here to design your portfolio site ↗</span>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      <div className="bg-[url('/assets/portfolio15.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 sEctIOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col md:gap-12 gap-8">
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
                    How can I support my students as they create a digital
                    portfolio that showcases their learning and growth?
                  </li>
                  <li>
                    {" "}
                    In what ways can I share my students' digital portfolios
                    with others?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/portfolio16.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF 6 sEctIOn */}

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

export default DigitalPortfolioSection;
