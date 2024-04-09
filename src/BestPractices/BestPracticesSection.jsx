import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import SingleStep from "../Components/SingleStep";

const BestPracticesSection = () => {
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
                      href="#LeveragingGoogletools"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Leveraging Google tools for productivity
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#PowerOfGoogle"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Harness the power of Google for research
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#Engagestudents"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Engage students with interactive videos
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#GetInspired" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Get inspired by alternate learning models
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#Setupmentorship"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Set up mentorship and support models to guide teachers
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
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem] m-auto">
                <img
                  src="./assets/best2.jpeg"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[21px] text-[#5f6368] max-w-[12rem] leading-[1.6rem]">
                  Google Workspace for Education
                </h1>
              </div>
            </div>
            {/*end of right side */}
          </div>

          {/* cards ========> */}
          <h1 className="text">By the end of the lesson, you’ll be able to:</h1>

          {/* cards ======> */}
          <div className="flex md:flex-row flex-col justify-center items-center gap-5">
            <article
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 max-w-[20rem] w-full"
            >
              <img src="./assets/explore3.png" alt="" />
              <p className="text-center">
                Use Google tools to make work processes more efficient
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] w-full grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/explore4.png" alt="" />
              <p className="text-center">
                Support interactive, personalized learning experiences
              </p>
            </article>
            <article
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] w-full grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/best3.png" alt="" />
              <p className="text-center">
                Apply teaching and learning best practices
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* Leveraging Google tools for productivity
       */}
      <div id="LeveragingGoogletools" className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Leveraging Google tools for productivity
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-4">
            <article className="flex flex-col gap-4 md:col-span-2">
              <p className="paragraph">
                Throughout this course, you’ve learned how to implement Google
                tools into your classroom to improve teaching and learning. You
                can also increase productivity for you and your students. To
                make the most of your school day, let’s focus on managing time
                effectively with Google tools. For example, you can:
              </p>
              <ol className="list-disc pl-8 paragraph">
                <li>
                  <p>
                    Explore features like{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/mail/answer/9259856?hl=en&amp;sjid=8433049706079928201-NA#zippy=%2Clearn-how"
                      className="text-[blue] underline"
                    >
                      Gmail’s templates
                    </a>{" "}
                    and{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/mail/answer/6579?hl=en&amp;sjid=8433049706079928201-NA#zippy=%2Ccreate-a-filter"
                      className="text-[blue] underline"
                    >
                      filters
                    </a>{" "}
                    to increase email efficiency.
                  </p>
                </li>
                <li>
                  <p>
                    Use{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://chipshttps%3A//support.google.com/docs/answer/10710316?hl=en&amp;ref_topic=9045752&amp;sjid=8433049706079928201-NA"
                      className="text-[blue] underline"
                    >
                      smart chips
                    </a>{" "}
                    in a Google Doc to add colleagues and links to files.
                  </p>
                </li>
                <li>
                  <p>
                    Create Calendar{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/calendar/answer/190998?hl=en&amp;sjid=8433049706079928201-NA"
                      className="text-[blue] underline"
                    >
                      appointment slots
                    </a>{" "}
                    so guardians and students can book appointments with you.
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/chrome/answer/188842?hl=en&amp;sjid=8433049706079928201-NA"
                      className="text-[blue] underline"
                    >
                      Bookmark
                    </a>{" "}
                    important and most visited websites in Chrome.
                  </p>
                </li>
                <li>
                  <p>
                    Use Google Groups to{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/groups/answer/46601?hl=en"
                      className="text-[blue] underline"
                    >
                      more easily communicate
                    </a>{" "}
                    with school clubs, guardians, and all staff.
                  </p>
                </li>
                <li>
                  <p>
                    Use Google Groups to c
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/groups/answer/2464926?sjid=15297724574217153894-NA#zippy=%2Cadvanced-settings-reference"
                      className="text-[blue] underline"
                    >
                      reate a partially walled community
                    </a>{" "}
                    to help students learn how to interact on social
                    websites.&nbsp;
                  </p>
                </li>
              </ol>
              <p className="paragraph">
                Google has other tools within and outside of Google Workspace
                for Education Fundamentals that can be used in the classroom,
                which you may be able to access with your same username and
                password. We will discuss these at times throughout this course,
                and remember that you can leverage these tools for both for
                learning and productivity.
              </p>
            </article>
            <article className="md:col-span-1">
              <img src="./assets/best4.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 seCTION */}
      {/* Harness the power of Google for research
       */}
      <div
        id="PowerOfGoogle"
        className="sm:pt-20 pt-12 sm:pb-24 pb-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          {/* first div */}
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Harness the power of Google for research
            </h1>
            <p className="paragraph mt-1">
              Google’s mission is to organize the world’s information and make
              it universally accessible and useful. With so much of the world’s
              information available online, it is essential that we teach
              students to ‘search smart’. These skills enable students and
              teachers to access information and create meaningful learning
              experiences that, in turn, engage them in critical thinking and
              analysis.
            </p>
            <p className="paragraph">
              With Google Workspace for Education, your classroom has the latest
              technology to allow students access to facts and figures within a
              few clicks. Encouraging students to become independent learners
              and seek out answers to questions will benefit them in a 21st
              century world. Explore how you can use Google tools to harness the
              power of research.
            </p>
          </div>
          {/* second div */}
          <div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-y-16 gap-x-6 w-[70%] m-auto ">
              <article className="flex flex-col gap-5">
                <img src="./assets/best8.png" alt="" />
                <div className="flex flex-col gap-4">
                  <p className="paragraph">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://search.google.com/"
                      className="text-[blue] underline"
                    >
                      Google Search
                    </a>{" "}
                    is Google’s search engine
                  </p>
                  <ol className="list-disc pl-8 paragraph">
                    <li>
                      Students can find answers to their questions quickly.
                    </li>
                    <li>
                      Understand how to get assistance beyond their teacher.
                    </li>
                    <li>
                      Become masters of their own learning and foster their
                      naturally inquisitive minds.
                    </li>
                  </ol>
                </div>
              </article>
              <article className="flex flex-col gap-5">
                <img src="./assets/best6.png" alt="" />
                <div className="flex flex-col gap-4">
                  <p>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://scholar.google.com/"
                      className="text-[blue] underline"
                    >
                      Google Scholar
                    </a>
                  </p>
                  <ol className="list-disc pl-8 paragraph">
                    <li>
                      <p>
                        Find academic sources and{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://scholar.google.com/intl/en/scholar/help.html#library"
                          className="text-[blue] underline"
                        >
                          save the links to "My library"
                        </a>{" "}
                        within Scholar.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        Search for articles by a particular{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://scholar.google.com/intl/en/scholar/help.html#searching"
                          className="text-[blue] underline"
                        >
                          author
                        </a>
                        .&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        Request results within a{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://scholar.google.com/intl/en/scholar/help.html#searching"
                          className="text-[blue] underline"
                        >
                          date range
                        </a>
                        .&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        Use the{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://scholar.google.com/intl/en/scholar/help.html#export"
                          className="text-[blue] underline"
                        >
                          "Cite" tool
                        </a>{" "}
                        to correctly format citations.&nbsp;
                      </p>
                    </li>
                    <li>
                      <p>
                        Use the{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://scholar.google.com/intl/en/scholar/help.html#searching"
                          className="text-[blue] underline"
                        >
                          "Related Articles"
                        </a>{" "}
                        feature to find additional research related to specific
                        search results.
                      </p>
                    </li>
                  </ol>
                </div>
              </article>
              <article className="flex flex-col gap-5">
                <img src="./assets/best7.png" alt="" />
                <div className="flex flex-col gap-4">
                  <p className="paragraph">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://trends.google.com/"
                      className="text-[blue] underline"
                    >
                      Google Trends
                    </a>{" "}
                    Keeping up with current events may be part of your class. If
                    so, you can learn a lot about what’s happening by looking at{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://support.google.com/trends/answer/6248105?hl=en&amp;ref_topic=6248052&amp;sjid=6229965830635948065-NA"
                      className="text-[blue] underline"
                    >
                      what people are searching for
                    </a>
                    .
                  </p>
                  <ol className="list-disc pl-8 paragraph">
                    <li>
                      Categories such as YouTube videos, charts, search terms,
                      and even geographic locations highlight what is popular on
                      the Internet.{" "}
                    </li>
                    <li>
                      <p>
                        Change the{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/trends/answer/4355212?hl=en&amp;ref_topic=4365530&amp;sjid=6229965830635948065-NA"
                          className="text-[blue] underline"
                        >
                          location selector
                        </a>{" "}
                        to see the world from a different point of view.
                      </p>
                    </li>
                    <li>
                      Browse through current trends across multiple categories
                      and countries.
                    </li>
                  </ol>
                </div>
              </article>
              <article className="flex flex-col gap-5">
                <img src="./assets/best9.png" alt="" />
                <div className="flex flex-col gap-4">
                  <p className="paragraph">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://docs.google.com/"
                      className="text-[blue] underline"
                    >
                      Google Docs
                    </a>{" "}
                    The power of search is integrated within Google Workspace
                    for Education tools like Docs.&nbsp;
                  </p>
                  <ol className="list-disc pl-8 paragraph">
                    <li>
                      <p>
                        Students can use the{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/docs/answer/2481802?hl=en&amp;co=GENIE.Platform%3DDesktop"
                          className="text-[blue] underline"
                        >
                          Explore tool
                        </a>{" "}
                        to get snippets of information about their research
                        topic.
                      </p>
                    </li>
                    <li>
                      Prompt students to right click on key vocabulary words and
                      select "Define" or "Explore". Students can also access the
                      Dictionary from the Tools menu.
                    </li>
                    <li>
                      <p>
                        The entire text of a Google Doc can be{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/docs/answer/187189?hl=en&amp;ref_topic=9045753&amp;sjid=6229965830635948065-NA"
                          className="text-[blue] underline"
                        >
                          converted from one language to another
                        </a>
                        .
                      </p>
                    </li>
                    <li>
                      <p>
                        Compare student’s Google Docs files against webpages and
                        books on the internet with{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://support.google.com/edu/classroom/answer/9335819?hl=en"
                          className="text-[blue] underline"
                        >
                          originality reports
                        </a>
                        .
                      </p>
                    </li>
                  </ol>
                </div>
              </article>
            </div>
          </div>
          {/* third div */}
          <div className="flex flex-col gap-5 mt-3">
            <p className="paragraph">
              Part of the role of a teacher today is to empower students with
              the knowledge and skills necessary to evaluate the reliability of
              any web content they find. It’s important for us to help students
              understand that just because information is found online, it
              doesn’t mean it is true.{" "}
            </p>
            <p className="paragraph">
              A digitally literate person must be able find, evaluate, use, and
              communicate information digitally. Encourage students to:
            </p>
            <ul className="list-disc pl-8 paragraph">
              <li>Analyze the web address.</li>
              <li>
                Closely analyze the look, feel, and point of view of a website.
              </li>
              <li>
                Understand the source and creator of the site’s information.
              </li>
              <li>Double check facts.</li>
            </ul>
            <p className="paragraph">
              Information literacy is a skill that transcends content areas and
              grade levels. It is a skill that will serve and continue to serve
              students as seekers of information well beyond their years of
              formal education. Not only will it support your students as
              lifelong learners, but it is a skill that employers now demand.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      {/* 4 seCTION */}
      {/* Engage students with interactive videos
       */}
      <div id="Engagestudents" className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Engage students with interactive videos
            </h1>
          </div>
          {/* second div */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-4">
            <article className="flex flex-col gap-4 md:col-span-2">
              <p className="paragraph">
                You might have a class of mixed-ability students, and want to
                use video to teach all students at the correct pace.
              </p>
              <p className="paragraph">
                An interactive video is different than many of the instructional
                videos out there because the viewers play an active role. For
                example, they can click on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/youtube/answer/6140493?sjid=8433049706079928201-NA"
                  className="text-[blue] underline"
                >
                  cards
                </a>{" "}
                that pop up on the video to take them to another website, answer
                a question or a poll, or jump to a different YouTube video
                entirely.&nbsp;
              </p>
              <p className="paragraph">
                Further, you may want your students to watch a long video you
                produced in YouTube, and then discuss specific sections in the
                following lesson. To help your students navigate lengthy videos,
                you can list the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/youtube/answer/9884579?sjid=8433049706079928201-NA"
                  className="text-[blue] underline"
                >
                  key sections, timestamps, and links
                </a>{" "}
                to specific times in the video in the Comments section.
              </p>
            </article>
            <article className="md:col-span-1">
              <img src="./assets/best5.png" alt="" />
            </article>
          </div>
          {/* third div */}
          <div className="flex flex-col gap-5 mt-4">
            <p className="paragraph">
              When creating instructional videos on YouTube, you should:
            </p>
            <ul className="list-disc pl-8 paragraph">
              <li>Have a clear goal and purpose for the video.</li>
              <li>
                Have a clear purpose for Cards and not distract the audience
                from the content.
              </li>
              <li>
                Use video instruction to cover the lesson material so you can
                spend more time with individual students that need help.{" "}
              </li>
              <li>
                Give students instructional videos to watch in their own time,
                at their own pace, so they can ask questions about it during
                class.
              </li>
            </ul>
            <p className="paragraph">
              To further support your students and differentiate instruction,
              consider using different instructional learning models.
            </p>
            <p className="paragraph">
              Additional services like YouTube are designed for consumer users
              and can optionally be used with Google Workspace for Education
              accounts if{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/a/answer/181865?hl=en#zippy=%2Cturn-services-on-or-off-for-users%2Cadditional-services-with-an-individual-on-or-off-control"
                className="text-[blue] underline"
              >
                allowed
              </a>{" "}
              for educational purposes by a school’s{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/accounts/answer/6208960"
                className="text-[blue] underline"
              >
                domain administrator
              </a>
              .{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/youtube/answer/10977326"
                className="text-[blue] underline"
              >
                Here
              </a>{" "}
              are some of the features that are not available, if your domain
              administrator has marked your students as under 18 years old.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      {/* 5 seCTION */}
      {/* Get inspired by alternate learning models
       */}
      <div
        id="GetInspired"
        className="sm:pt-20 pt-12 sm:pb-24 pb-12 bg-[#F9F9FA] shadow-top-bottom-inner"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          {/* first div */}
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Get inspired by alternate learning models
            </h1>
            <p className="paragraph mt-1">
              Over the past few years, instruction and technology have allowed
              us to move beyond a, ‘one size fits all,’ approach to teaching.
              Teachers have learned instructional strategies that help fit the
              needs of individual student abilities and tap into student
              passions.
            </p>
            <p className="paragraph">
              Personalized learning can be delivered in many ways. Explore the
              following instructional models:
            </p>
          </div>
          {/* second div */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            <article
              data-aos-delay="60"
              data-aos-duration="1900"
              data-aos="fade-up"
              className="flex flex-col gap-6 bg-[white] p-3 rounded-xl"
            >
              <img src="./assets/best10.png" alt="" />
              <div className="flex flex-col gap-5">
                <p className="font-bold">Project-Based Learning</p>
                <p className="paragraph">
                  Project-Based Learning (PBL) starts with a Driving Question
                  followed by an inquiry process as students organize their
                  thoughts. They then choose how to solve the problem and
                  present their findings. PBL encourages students to devise
                  their own solutions about issues/problems rather than look for
                  someone else’s solution. See the Buck Institute for more
                  information on{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://bie.org/"
                    className="text-[blue] underline"
                  >
                    PBL
                  </a>
                  .
                </p>
              </div>
            </article>
            <article
              data-aos-delay="65"
              data-aos-duration="2000"
              data-aos="fade-up"
              className="flex flex-col gap-6 bg-[white] p-3 rounded-xl"
            >
              <img src="./assets/best11.png" alt="" />
              <div className="flex flex-col gap-5">
                <p className="font-bold">Blended Learning</p>
                <p className="paragraph">
                  Blended Learning is a model that weaves classroom and online
                  instruction together. Many blended classrooms rely on a robust
                  teacher website where teachers can post activities for
                  students to complete or create online. Blended learning often
                  uses adaptive online learning programs that can increase
                  skills and knowledge, freeing the teacher up to work
                  intensively with smaller groups.
                </p>
                <p className="paragraph">
                  See the Clayton Christensen Institute for more information on
                  Blended Learning.
                </p>
              </div>
            </article>
            <article
              data-aos-delay="70"
              data-aos-duration="2000"
              data-aos="fade-up"
              className="flex flex-col gap-6 bg-[white] p-3 rounded-xl"
            >
              <img src="./assets/best12.png" alt="" />
              <div className="flex flex-col gap-5">
                <p className="font-bold">Flipped Instruction</p>
                <p className="paragraph">
                  Flipped Instruction switches up the instructional model of the
                  classroom. The traditional model where students practice at
                  home without assistance and receive content in class is
                  flipped. Instead, students receive the content at home
                  (normally by video) then the teacher reinforces the video and
                  asks students to apply what they learned in class. The teacher
                  is there to support and extend the learning.
                </p>
              </div>
            </article>
          </div>
          {/* third div */}
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              As mentioned, you don’t have to choose just one of these three
              personalized learning models. While one approach may be best for
              one unit, a different model may be better for other material. It’s
              up to you to determine how these models might be applied in your
              classroom. It’s important to deliver instruction at the correct
              level for your students, and which excites and motivates them.
            </p>
            <p className="paragraph">
              As you make these decisions, you can seek guidance from
              instructional coaches, peer teachers, site mentors and others at
              your school or beyond.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      {/* 6 seCTION */}
      {/* Set up mentorship and support models to guide teachers
       */}
      <div id="Setupmentorship" className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Set up mentorship and support models to guide teachers
            </h1>
            <p className="paragraph">
              It may seem overwhelming to successfully integrate technology
              campus wide, especially with staff’s varying levels of technology
              adoption and knowledge. To support teachers with technology
              integration, identify coaches and mentors to work with those less
              comfortable with online technology.
            </p>
            <p className="paragraph">Consider the following models:</p>
          </div>
          {/* second div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[3rem mt-4 gap-y-5">
            <article className="flex flex-col gap-5">
              <img src="./assets/best13.png" alt="" />
            </article>
            {/* Accordian */}
            <article className="flex flex-col justify-center gap-4 md:mt-8 mt-0 md:pl-5 pl-0">
              <p className="Bold">Click below to expand each item.</p>
              {/* Accordian */}
              <div>
                {data.map((curEle) => {
                  return (
                    <SingleStep
                      key={curEle.id}
                      {...curEle}
                      open={curEle.id === open}
                      toggle1={() => toggle1(curEle.id)}
                    />
                  );
                })}
              </div>
              {/*end of Accordian */}
            </article>
          </div>
          {/* third div */}
          <div className="mt-4">
            <p className="paragraph">
              There’s no “one size fits all” solution for successfully
              integrating technology, and you can always mix and match support
              models based on the need, so feel free to explore different ways
              that you can support your teachers.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  6 seCTION */}
    </div>
  );
};

export default BestPracticesSection;

const data = [
  {
    id: 1,
    title: "Instructional coaches",
    info: `At some schools, a classroom teacher is released from normal teaching duties to become a flexible resource for other staff members. They can personalize instruction by working one to one with teachers during scheduled appointments. Coaches can also demonstrate lessons during class time and model effective ways to instruct with technology. They can join collaboration meetings to help generate lesson planning ideas and connect teachers with each other to show what works in the classroom.`,
  },
  {
    id: 2,
    title: "School site mentors",
    info: `If a coaching position is not a possibility, a similar role can be assigned to a classroom teacher with advanced tech skills. For example, a school can identify a tech mentor for each grade level to bring ideas to grade-level teams. During lesson planning collaboration, school site mentors can help colleagues integrate technology into the curriculum. This type of support is embedded into established groups and provides just-in-time help for their peers.`,
  },
  {
    id: 3,
    title: "Staff-development workshops",
    info: `Teacher-led workshops during professional development time are an effective method for sharing best practices and building professional learning communities. With time to learn, connect, and share ideas for a specific tech activity or skill shared at a workshop, a group of teachers can gain valuable support to bring innovative instruction to their classrooms.`,
  },
  {
    id: 4,
    title: "Student-led support",
    info: `Students are a great resource and can take a leadership role in helping support teachers. Form a group of techie students who are also able to teach teachers how to use common tools.`,
  },
  {
    id: 5,
    title: "Self-guided professional development",
    info: `Coaches or tech leaders can help curate and generate digital development resources. Whether it be shared through developed websites or a simple email, teachers can benefit from a wide variety of support that they can access whenever they choose.`,
  },
];
