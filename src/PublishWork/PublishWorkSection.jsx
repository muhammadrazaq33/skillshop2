import React, { useState } from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { Collapse } from "react-collapse";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const PublishWorkSection = () => {
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
  return (
    <div>
      {/* fiRSt sECtION */}
      <div className="bg-[#F9F9FA] shadow-inner-large mt-[3rem] sm:mt-[4rem] ">
        <div className="pt-6 sm:pb-36 pb-20 max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* sections ===> */}
          <div className="md:flex items-start justify-between gap-8">
            {/* left side */}
            <div className="flex flex-col gap-4 mb-4">
              <h1 className="text-[25px] text">Sections</h1>
              {/* links ===========> */}
              <div className="pl-4">
                <ul className="activitysection__list courselist">
                  <li className="activitysection__item courselist__item">
                    <a href="#CreateSpace" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create a space for students to share their learning
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#FacilitateGoogleSite"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Facilitate the use of Google Sites
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#BuildWebsite" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Build a website
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ShareGoogleSites"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Customize and share Google Sites
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
            {/* end of left side */}

            {/* right side */}
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-[25px] text">Tools you'll use</h1>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] border-[2.5px] px-12 py-2 max-w-[29rem] m-auto">
                <img
                  src="./assets/portfolio1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] max-w-[12rem] leading-[1.6rem] text-[#5f6368]">
                  Google Sites
                </h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text-[25px] text">
            By the end of the lesson, you’ll be able to:
          </h1>

          {/* cards ======> */}
          <div className="flex flex-wrap justify-center gap-6">
            <article
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="bg-[#E6E7E9] flex flex-col max-w-[20rem] items-center py-4 rounded-lg gap-y-5 px-4 "
            >
              <img src="./assets/guardian4.png" alt="" />
              <p className="text-center paragraph">
                Facilitate online sharing of student work using Google Sites
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* 2 seCTION */}
      {/* Create a space for students to share their learning
       */}
      <div id="CreateSpace" className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Create a space for students to share their learning
            </h1>
            <p className="paragraph">
              Students spend a lot of time and effort working on projects and
              other assignments, and it is important for them to have
              opportunities to celebrate that work. Your students may want to
              share their work with other students, teachers, parents, or even
              their community. When students share their work with an audience,
              they are more likely to carefully consider how it appears.
              Publishing work online can also provide authentic practice for how
              to communicate ideas with others.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-4">
            <article className="md:col-span-1">
              <img src="./assets/work2.png" alt="" />
            </article>
            <article className="flex flex-col gap-4 justify-center md:col-span-2">
              <p className="paragraph">
                One of the common themes throughout Google Workspace for
                Education tools is the ability to share. Google Sites is one
                online tool that students can use to customize and share their
                work without requiring viewers to have an account with a
                specific platform. This creates many opportunities for how
                students can present their work and who their work can be shared
                with. The ability to customize their site in Google Sites makes
                it a valuable tool for a wide variety of projects, such as
                creating an online portfolio of artwork, sharing arguments for a
                class debate, presenting an analysis of a book, or displaying
                the results of a science experiment.
              </p>
            </article>
          </div>
          {/* last div */}
          <div className="mt-3">
            <div className="flex flex-col gap-1 items-center">
              <HiOutlineSpeakerphone className="text-[6rem] text-[#7248ba]" />
              <p className="text-[#5f6368] text-[16px] font-medium">
                Useful tip
              </p>
            </div>
            <p>
              By having students create a website to share their work publicly,
              you can make learning experiences more personalized, allow for
              student creativity, and encourage students to take deeper pride in
              their work.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 seCTION */}
      {/* Facilitate the use of Google Sites
       */}
      <div
        id="FacilitateGoogleSite"
        className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Facilitate the use of Google Sites
            </h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-5 justify-center">
              <p className="paragraph">
                Some students may not have the background knowledge needed to
                use Google Sites for building, managing, and sharing a website.
              </p>
              <p className="paragraph">
                By spending time demonstrating different features within Google
                Sites, you can help all of your students feel more comfortable.
              </p>
              <p className="paragraph">
                The potential for more meaningful learning and the ability for
                students to share their work with a larger audience will be well
                worth the time you invest.
              </p>
            </article>
            <article className="">
              <img src="./assets/work3.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      {/* 4 section */}
      {/* Build a website */}
      <div id="BuildWebsite" className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  sm:gap-16 gap-10">
          <div className="flex flex-col sm:gap-16 gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text1 leading-[2.4rem]">Build a website</h1>
              <p className="paragraph">
                Google Sites allows your students to build a website, while
                maintaining creative control over the appearance and flow of
                their content. Students can create a unified appearance across
                the pages of their website by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/sites/answer/6372865?hl=en#zippy=%2Cuse-a-pre-made-themes%2Ccreate-custom-themes"
                  className="text-[blue] underline"
                >
                  choosing a predesigned theme
                </a>{" "}
                on the Themes tab, which sets the colors, fonts, and other
                styles of their pages. If they would like, they can also create
                a custom theme to suit their project's specific needs. For
                example, if they are sharing a project about the history of a
                country, they might customize the website theme using the colors
                of the country’s flag.
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
                  Pages tab
                </button>
                <button
                  className={`btn ${
                    activeIndex === 1 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(1)}
                >
                  Insert tab
                </button>
                <button
                  className={`btn ${
                    activeIndex === 2 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(2)}
                >
                  Using templates
                </button>
              </div>
              {/* end of buttons */}

              {/* paragraph  */}
              <div className="mt-4">
                {/* first paragraph */}
                <div
                  className={`${activeIndex === 0 ? "block" : "hidden"}  px-6`}
                >
                  <p className="paragraph">
                    The <strong>Pages&nbsp;</strong>tab allows students to{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/sites/answer/98216?hl=en&amp;ref_topic=6372877"
                      className="text-[blue] underline"
                    >
                      add, delete, and organize pages
                    </a>{" "}
                    to create a website that presents their content clearly.
                    Students can duplicate pages to quickly add new content
                    while maintaining layouts and a consistent visual
                    appearance. They can also create subpages to organize
                    content. For example, if a student is creating a site about
                    the rock cycle, they might have a main page describing the
                    cycle and subpages detailing the three main rock types.
                  </p>
                </div>

                {/* seConD pArAgrAPh */}
                <div
                  className={`${activeIndex === 1 ? "block" : "hidden"}  px-6`}
                >
                  <p className="paragraph">
                    The <strong>Insert</strong> tab allows students to
                    efficiently add layouts to a page by choosing content blocks
                    that organize visuals and text for them. If they would like,
                    they can also format their pages themselves by adding,
                    resizing, and organizing individual text boxes and
                    placeholders for other content. This can help them plan the
                    layout of their pages before adding specific content.
                  </p>
                </div>

                {/* third pArAgrAPh */}
                <div
                  className={`${activeIndex === 2 ? "block" : "hidden"}  px-6`}
                >
                  <p className="paragraph">
                    While some students may be comfortable building their
                    website on their own, others may need additional support.
                    You might encourage students who aren’t sure how to design
                    and organize their website to explore other websites for
                    ideas or use one of the Google Sites templates to get
                    started. They can access Sites templates by clicking the
                    <strong> Google apps</strong> icon in their Drive and
                    selecting <strong>Google Sites</strong>. There, they should
                    be able to find a variety of website templates to use as a
                    starting point for their own projects.
                  </p>
                </div>
              </div>
            </div>
            {/* EnD oF UsEsTate */}
            {/*end of buttons & paragraph */}
          </div>
        </div>
      </div>
      {/*end of 4 section */}

      {/* 3 section */}
      {/* Customize and share Google Sites */}
      <div
        id="ShareGoogleSites"
        className="sm:pt-20 pt-16 sm:pb-24 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Customize and share Google Sites
            </h1>
            <p className="paragraph">
              Google Sites offers creative ways to publish and share student
              work. Sharing their work online is a great way to increase student
              interest in an assignment, practice communication skills, and
              celebrate student work. Publishing their own website allows your
              students to take ownership of their learning and use their
              strengths to make a creative tool to share their knowledge with
              others.
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
                  <p className="text-[18px] ">Customizing their content</p>
                </article>
                <Collapse isOpened={open === 1}>
                  <article className="px-6 py-4">
                    <p className="paragraph">
                      Google Sites is a flexible option for publishing student
                      work it allows your students to control the appearance of
                      text, images, and other content they include on a page.
                      While adding text to a page, students can quickly change
                      the text’s style to differentiate headers from normal
                      text. This can help them emphasize certain text and give
                      the page a more personalized appearance. They can also add
                      links from specific words or phrases on one page of their
                      website to another page or website.
                    </p>
                    <p className="paragraph">
                      If your students used placeholders while designing the
                      layout of their page, they can replace them with a variety
                      of types of embedded media to provide more context for
                      visitors to their website. They can include pictures that
                      relate to the text on the page or{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://support.google.com/sites/answer/90569"
                        className="text-[blue] underline"
                      >
                        embed other types of files and content
                      </a>
                      , such as YouTube videos, maps, or documents from Drive.
                      For example, a student whose website is about musical
                      theory might embed a video of a musical performance for
                      the audience to listen to. This can help make a website
                      more meaningful and provide interactive ways for the
                      audience to engage with the content.
                    </p>
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
                  <p className="text-[18px] ">Safe sharing practices</p>
                </article>
                <Collapse isOpened={open === 2}>
                  <article className="px-6 py-4 flex flex-col gap-5">
                    <p className="paragraph">
                      Students can make their website public so that anyone can
                      read their content, which increases the number of people
                      they can share their work with.
                    </p>
                    <p className="paragraph">
                      While reaching a larger audience can be beneficial if
                      students want to communicate with their local or global
                      community, you should make sure to share safe practices
                      with your students and their guardians. Spend time
                      discussing personal identifiable information that the
                      students should not share online, such as their location,
                      phone number, passwords, or any other information that
                      should be kept private.
                    </p>
                    <p className="paragraph">
                      If students do not want their website to be publicly
                      accessible, they can{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://support.google.com/sites/answer/6372880?hl=en#zippy=%2Cchoose-who-can-see-your-site"
                        className="text-[blue] underline"
                      >
                        control their site's visibility
                      </a>{" "}
                      by only sharing their website with specific people, such
                      as their teachers, family, or friends. You might encourage
                      students to complete this{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://applieddigitalskills.withgoogle.com/c/middle-and-high-school/en/create-a-responsible-blog-with-google-sites/overview.html"
                        className="text-[blue] underline"
                      >
                        video lesson
                      </a>{" "}
                      to learn more about how to publish a responsible website.
                    </p>
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

      <div className="bg-[url('/assets/work4.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 seCTION */}
      {/* Take it to work: Give your students a voice
       */}
      <div className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text">
              Take it to work: Give your students a voice
            </h1>
            <p className="paragraph">
              Now it’s time to consider how to give students a platform to
              publish their classwork and express their voice. Think about
              assignments in your curriculum for which students can share their
              learning by creating a website in Google Sites. Choose one
              assignment and create a document with instructions for what they
              should include when they create their site.
            </p>
          </div>
          {/* second div */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-4">
            <article className="md:col-span-1">
              <img src="./assets/work5.png" alt="" />
            </article>
            <article className="flex flex-col gap-4 justify-center md:col-span-2 md:pl-6 pl-0">
              <p className="paragraph">
                For example, if you want your students to build a site to share
                a book report, you might instruct them to include:
              </p>
              <ol className="list-disc pl-8 paragraph">
                <li>A summary of the book.</li>
                <li>A description of all major characters and the setting.</li>
                <li>
                  A discussion of messages the author is trying to communicate
                  in the book.
                </li>
              </ol>
              <p className="paragraph">
                You might also include technical requirements for the website
                design, such as:
              </p>
              <ol className="list-disc pl-8 paragraph">
                <li>The minimum number of pages the website should include.</li>
                <li>The minimum number of visuals for each page.</li>
                <li>
                  Whether students must include links to outside resources.
                </li>
                <li>Who the project should be shared with.</li>
              </ol>
            </article>
          </div>
          {/* button */}
          <div className="flex justify-start mt-6">
            <button className="px-4 py-2 bg-[#1a73e8] hover:bg-[rgb(14,62,193)] text-white">
              <a
                href="https://docs.google.com/document/d/1uJYN8K6_oE6tgcr-_7lRLHzdj1jbFl4HYB0ATO_VJYw/edit"
                className="ev-links-item-link ev-button"
                target="_blank"
                role="button"
              >
                <span className="font-semibold text-[14px]">
                  Use this template to get started or create your own
                  instruction sheet.
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
      {/*end oF  6 seCTION */}
    </div>
  );
};

export default PublishWorkSection;
