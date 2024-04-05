import React, { useState } from "react";
import { SlBadge } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ExploreSection = () => {
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
                          The possibilities of Google Workspace for Education
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
                          Explore add-on options
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
                          Get started with add-ons
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
                  src="./assets/explore2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Marketplace
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
                Understand add-ons and their impact on teaching
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
                Use add-ons to automate classroom tasks
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* SECOND seCTION */}
      {/* The possibilities of Google Workspace for Education */}
      <div className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              The possibilities of Google Workspace for Education
            </h1>
            <p className="paragraph">
              Add-ons are additional features created by third-party developers
              to address certain needs. The best add-ons are designed to be easy
              enough for anyone to use. Many add-ons can help you automate
              classroom tasks, like grading quizzes and tests. Some add-ons are
              free of charge, while others may require a paid subscription.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article>
              <img src="./assets/explore6.jpeg" alt="" />
            </article>
            <article className="flex flex-col gap-5">
              <p className="paragraph">
                Add-ons are created using{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/docs/answer/2942256"
                  className="text-[blue] underline"
                >
                  Google Apps Script
                </a>
                , a coding language based on JavaScript syntax. While you may
                have to know code to write an add-on, you do not have to be a
                coder to use them! However, if you or your students are
                interested in coding, check out this{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://applieddigitalskills.withgoogle.com/c/middle-and-high-school/en/code-a-joke-telling-talkbot/overview.html"
                  className="text-[blue] underline"
                >
                  video lesson
                </a>
                . Apps Script provides a great opportunity to work on real-world
                problems and create useful features in Google Workspace for
                Education to address these problems.
              </p>
              <p className="paragraph">
                There are separate sets of add-ons for each Google Workspace for
                Education product, so anyone can access add-ons in apps like
                Docs, Sheets, and Forms.
              </p>
            </article>
          </div>
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5 md:mt-6 mt-3">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <p>
              Did you know that you can do more with add-ons inside of the{" "}
              <strong>Teaching and Learning Upgrade,&nbsp;</strong>and
              <strong>&nbsp;Education Plus&nbsp;</strong>editions of Google
              Workspace for Education? You'll be able to access additional
              add-ons for tools like Google Classroom. Some work and school
              accounts have add-ons installed by their organization. You may
              need to talk to your{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/accounts/answer/6208960"
                className="text-[blue] underline"
              >
                <span>domain administrator</span>
              </a>{" "}
              to enable access.&nbsp;
            </p>
          </div>
        </div>
      </div>
      {/*end oF  SECOND seCTION */}

      {/* 3 sEctiON */}
      {/* Explore add-on options */}
      <div
        id="ScheduleMeeting"
        className=" sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Explore add-on options
          </h1>
          {/* first div */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              You can use add-ons to make many aspects of your teaching duties
              more efficient. You might use add-ons to:
            </p>
            <ul className="list-disc pl-10 paragraph">
              <li>Automatically create quizzes from documents.</li>
              <li>
                Integrate other educational technology tools to make more
                dynamic lessons.
              </li>
              <li>Provide individualized feedback to students more easily.</li>
              <li>Create interactive Google Slides presentations.</li>
              <li>Create Grade reports from Google Classroom.</li>
            </ul>
          </div>
          {/* second div */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Here are a few add-ons that might suit your needs:
            </p>
            <ul className="list-disc pl-10 paragraph">
              <li>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://workspace.google.com/marketplace/app/pear_deck_for_google_slides_addon/363332900703"
                    className="text-[blue] underline"
                  >
                    Pear Deck
                  </a>{" "}
                  is an add-on that can make your Google Slides presentations
                  more interactive.
                </p>
              </li>
              <li>
                <p dir="ltr">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://workspace.google.com/marketplace/app/flubaroo/817638980086"
                    className="text-[blue] underline"
                  >
                    Flubaroo
                  </a>{" "}
                  is an add-on that can make your grading practices using Google
                  Sheets more efficient.&nbsp;
                </p>
              </li>
              <li>
                <p dir="ltr">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://workspace.google.com/marketplace/app/formlimiter/538161738778"
                    className="text-[blue] underline"
                  >
                    formLimiter
                  </a>{" "}
                  sets due dates and helps set limits on the number of
                  submissions in Google Forms.
                </p>
              </li>
            </ul>
            <p className="paragraph mt-2">
              These are just a few examples of add-ons that can impact and even
              automate your teaching and classroom management practices. And new
              add-ons are always being created to provide additional support.
            </p>
          </div>
        </div>
      </div>
      {/*end Of 3 sEctiON */}

      {/* 4 SectION */}
      {/* Get started with add-ons */}
      <div className="sm:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Get started with add-ons</h1>
          </div>
          {/* bUTTONs and pArAGrAPhs ===>*/}
          <div className=" sm:pb-16 pb-12">
            <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
              {/* useSTATE */}
              {/* second div */}
              <div className="flex flex-col gap-3">
                <p className="Bold">Click each tab to learn more.</p>
                {/* buttons ===> */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 ">
                  <button
                    className={`btn ${
                      activeIndex === 0 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(0)}
                  >
                    Find and install add-ons
                  </button>
                  <button
                    className={`btn ${
                      activeIndex === 1 && "active1"
                    } bg-[#dadce0] px-2 py-3 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                    onClick={() => handleClick(1)}
                  >
                    Use and manage add-ons
                  </button>
                </div>
                {/* end of buttons */}

                {/* paragraph  */}
                <div className="mt-4">
                  <div
                    className={`${
                      activeIndex === 0 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-3 grid-cols-1 gap-8`}
                  >
                    {/* imaGE */}
                    <div className="col-span-1">
                      <img src="./assets/explore7.png" alt="" />
                    </div>
                    <div className="col-span-2 flex flex-col gap-4">
                      <p className="paragraph">
                        Add-ons can be installed directly from within Google
                        Docs, Sheets, or Forms. For example, in the menu bar for
                        Google Docs, you can install add-ons through the
                        <strong>Extensions menu</strong>. However, this process
                        may differ depending on the app or tool that you are
                        using.
                      </p>
                      <p className="paragraph">
                        In the Google Workspace Marketplace, you can search by
                        name or keyword and filter by category (including an
                        Education category) to find add-ons to fit your needs.
                        For example, you may want your students to expand their
                        vocabulary in their essays. You can quickly find an
                        add-on that will add a thesaurus directly to Google Docs
                        by searching for, “thesaurus,” in the{" "}
                        <strong>add-ons menu</strong>.
                      </p>
                      <p className="paragraph">
                        Most add-ons will have a basic description, screenshots,
                        a video introduction, star ratings, and comments by
                        users. Some add-ons are free of charge, while others may
                        require a paid subscription.
                      </p>
                    </div>
                  </div>

                  {/* seConD pArAgrAPh */}
                  <div
                    className={`${
                      activeIndex === 1 ? "block" : "hidden"
                    }  px-6 grid md:grid-cols-3 grid-cols-1 gap-6`}
                  >
                    {/* imaGE */}
                    <div className="col-span-1">
                      <img src="./assets/explore8.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-4 col-span-2">
                      <p className="paragraph">
                        Once you install an add-on, it is available every time
                        you create a new file in the Google apps where add-ons
                        are available. Once an add-on is installed, you can
                        access it by selecting the{" "}
                        <strong>Add-ons button</strong> at the top of the page.
                        Many add-ons will open a sidebar within the document,
                        spreadsheet, or form. Usually this sidebar has a simple
                        menu or form fields for you to select and control how
                        the add-on works.
                      </p>
                      <p>
                        If you want to manage an add-on, select&nbsp;
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/docs/answer/4454440"
                          className="text-[blue] underline"
                        >
                          <strong>Manage add-ons</strong>
                        </a>{" "}
                        from the <strong>Add-ons menu</strong>. To remove an
                        add-on, select the Options button and choose{" "}
                        <strong>Uninstall</strong>. You can always reinstall the
                        add-on later if you need to.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* EnD oF UsEsTate */}
            </div>
          </div>
          {/* End Of ButTONs ===> */}
        </div>
      </div>
      {/*EnD of 4 SectION */}

      <div className="bg-[url('/assets/explore9.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>
    </div>
  );
};

export default ExploreSection;
