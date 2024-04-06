import React, { useState } from "react";
import SingleStep from "../Components/SingleStep";
import Model1 from "../Components/Model1";

const citizens = [
  {
    id: 1,
    img: "./assets/portfolio6.png",
    text: "Open transcript",
    title: `"By the end we had an amazing website."`,
  },
  {
    id: 2,
    img: "./assets/portfolio7.png",
    text: "Open transcript",
    title: `"to create a cohesive unit"`,
  },
  {
    id: 3,
    img: "./assets/portfolio4.png",
    text: "Open transcript",
    title: `"Blogger allows my students to have a voice"`,
  },
  {
    id: 4,
    img: "./assets/portfolio5.png",
    text: "Open transcript",
    title: `"in time to adjust for the next day's lesson"`,
  },
];
const ShareOptionSection = () => {
  const [showModel, setShowModel] = useState(false);
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
                    <a href="#startDrive" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Explore how digital tools can personalize learning
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
                          Explore ideas from other educators
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
                  src="./assets/portfolio1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Sites
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/syllabus2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Docs
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/guardian2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Forms
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/share2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Blogger
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
              <img src="./assets/explore3.png" alt="" />
              <p className="text-center">
                Recognize digital tools that can enhance different personalized
                learning models
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/explore4.png" alt="" />
              <p className="text-center">
                Apply Google Workspace for Education tools to personalize
                learning content
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* third section */}
      {/* Explore ideas from other educators */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto">
          <div className="flex flex-col gap-5">
            <h1 className="text1">Explore ideas from other educators</h1>
            <p className="paragraph">
              Explore which digital tools other educators are using to support
              personalized learning in their classrooms.
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
                const { id, img, text, title } = citizen;
                return (
                  <article
                    key={id}
                    className="flex flex-col items-center gap-4"
                  >
                    <p className="text-[20px] overflow-hidden">{title}</p>
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
          <Model1
            setShowModel={setShowModel}
            showModel={showModel}
            closeModel={() => setShowModel(false)}
          />
        )}
      </div>
      {/* end of third section */}

      <div className="bg-[url('/assets/share4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 4 seCTION */}
      {/* Take it to work: Create a multimedia text set
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text">
              Take it to work: Create a multimedia text set
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <article className="col-span-1">
              <img src="./assets/syllabus7.png" alt="" />
            </article>
            <article className="flex flex-col justify-center gap-4 col-span-2 md:pl-8 pl-0">
              <p className="paragraph">
                Now it’s your turn to create an activity that you can use with
                any personalized learning model. You are going to create a
                multimedia text set so that your students can choose a
                personalized way to explore new content.
              </p>
              <p>
                Earlier in this lesson, you viewed an image of a link in a
                multimedia text set. Here’s a complete example of a&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/10GR2BVhNGzwafcAKzL-Prxd7VvN3lg5ZKl74kLvs_vw/edit?usp=sharing"
                  className="text-[blue] underline"
                >
                  multimedia text set
                </a>
                , which includes links to other learning opportunities.
                Multimedia text sets can take on a variety of appearances, so
                use this&nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/document/d/1R9EbXkegECagqfxFNvDs9V7P1mjJ2zhkCAd2SGnVor4/copy"
                  className="text-[blue] underline"
                >
                  template
                </a>{" "}
                to get started or open a new document in Google Docs and create
                your own design!
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      <div className="bg-[url('/assets/share5.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 sEctIOn */}
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
            <article className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    Where and when will your students do this? For how long do
                    you expect students to work on this?
                  </li>
                  <li>
                    How will you share it with your students (embed it in a
                    website, through Google Classroom, etc.)?
                  </li>
                  <li>
                    What will your role be in the classroom while your students
                    are exploring the activities?
                  </li>
                  <li>
                    Does your text set include diverse learning opportunities
                    that will provide your students with a personalized
                    experience?
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
      {/*END oF 7 sEctIOn */}
    </div>
  );
};

export default ShareOptionSection;

const data = [
  {
    id: 1,
    title: "Showcase student work with Google Sites",
    info: `You can highlight student work for parents and guardians, administrators, and the students themselves using Google Sites. You or your students can ${(
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://support.google.com/sites/answer/98081?hl=en&amp;ref_topic=7184580"
        class="text-[blue] underline"
      >
        create a website
      </a>
    )} using Google Sites where students can showcase their inquiry process and present their findings.&nbsp;`,
  },
  {
    id: 2,
    title: "Give students a way to present their work",
    info: `With Meet, your students can share their accomplishments with the school community and beyond. You could arrange for your class to present projects to parents, guardians, or others who may be interested. For instance, if your students have written essays about a book they’ve read, they could share some highlights with the author over Meet.`,
  },
  {
    id: 3,
    title: "Connect with classes around the world",
    info: `If your class corresponds with students in a different part of the world, they can learn more about each other over voice or video chat. Meet can also be a great way for students who are studying a language to practice their conversational skills.

`,
  },
];
