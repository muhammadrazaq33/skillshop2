import React, { useState } from "react";
import { SlBadge } from "react-icons/sl";

const DigitalSyllabusSection = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

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
                      href="#DigitalSyllabus"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          The power of a digital syllabus
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Collaborate" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Collaborate on your syllabus
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#TransformSyllabus"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Transform your syllabus
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Redesign" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Take it to work: Redesign a digital syllabus
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
                  src="./assets/syllabus2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Docs
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/syllabus3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Drive
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
                Create, share and collaborate on a digital syllabus
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* The power of a digital syllabus
       */}
      <div id="DigitalSyllabus" className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              The power of a digital syllabus
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4 justify-center col-span-2">
              <p className="paragraph">
                An effective course syllabus can be a key resource — not just
                for your students, but for guardians, administrators, and other
                teachers as well. With so many different audiences and
                collaborators, it’s important for your syllabus to be both
                organized and easily accessible.
              </p>
              <p className="paragraph">
                With Google Docs features like tables and styles, you can create
                a clear, engaging, and shareable syllabus that helps everyone
                find the information they need.
              </p>
              <p className="paragraph">
                Even if you don’t use a syllabus for your courses, the skills in
                this lesson can still help you collaborate with colleagues or
                share course content with students.
              </p>
            </article>
            <article className="col-span-1">
              <img src="./assets/syllabus6.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 seCTION */}
      {/* Collaborate on your syllabus
       */}
      <div
        id="Collaborate"
        className="sm:pt-20 pt-12 pb-10 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Collaborate on your syllabus
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <article className="col-span-1">
              <img src="./assets/syllabus7.png" alt="" />
            </article>
            <article className="flex flex-col gap-4 col-span-2 md:pl-8 pl-0">
              <p className="paragraph">
                When drafting a syllabus, it can sometimes be helpful to share
                it with colleagues.
              </p>
              <p className="paragraph">
                If you’re co-teaching a class or trying to align course content
                across your department, you may want feedback from other
                teachers.
              </p>
              <p className="paragraph">
                Fortunately, Google Docs makes it easy to share and collaborate
                on your syllabus from directly within the document.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      <div className="bg-[url('/assets/syllabus8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Collaborate within your syllabus.</p>
            <ol className="list-decimal paragraph pl-4">
              <li> Update your collaborators.</li>
              <li>Tag collaborators in comments.</li>
              <li>Show collaborators' edits.</li>
            </ol>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="Bold mb-4">Click play to watch the video below.</p>
            {/* video */}
            {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

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
            <div className="flex flex-col gap-10 paragraph">
              <div className="flex flex-col gap-5">
                <p className="paragraph">
                  In this video we will collaborate with others on creating a
                  course syllabus.{" "}
                </p>
                <p className="paragraph">
                  So once you've shared your syllabus file with collaborators,
                  you can communicate with them directly within Google Docs.
                </p>
                <p className="paragraph">
                  One way to do this is to email them directly within Google
                  Docs.
                </p>
                <ol className="list-decimal paragraph pl-12">
                  <li>
                    Go to <strong>File</strong>, choose <strong>Email</strong>,
                    and then <strong>Email collaborators</strong>.{" "}
                  </li>
                  <li>
                    You can customize who this email goes to by adding or
                    removing recipients.
                  </li>
                  <li>
                    Once you’ve typed your message click <strong>Send</strong>.
                  </li>
                  <li>
                    Another way you can collaborate with colleagues to create a
                    course syllabus is to tag them in comments.{" "}
                  </li>
                  <li>Start by opening up a new comment box.</li>
                  <li>
                    Click <strong>Insert comment</strong> in the toolbar here.
                  </li>
                  <li>
                    Or highlight the area that you want to leave the comment on
                    and click the <strong>Add comment</strong> icon to add a
                    comment.{" "}
                  </li>
                  <li>
                    To add a collaborator type the @ symbol in the comment box
                    and your collaborators name.
                  </li>
                  <li>
                    Once done, click <strong>Comment</strong> to post.
                  </li>
                </ol>
              </div>
              {/* 2 div */}
              <div className="flex flex-col gap-5">
                <p className="paragraph">
                  Your collaborator will then get an email with a comment and a
                  link to the syllabus. They can go directly to that comment
                  through the link or they can reply to it in the thread in the
                  email without even opening the document.{" "}
                </p>
                <p className="paragraph">
                  Another useful feature when collaborating with others in a
                  Google Docs is visibility of collaborators' edits.
                </p>
                <p className="paragraph">
                  If you have multiple collaborators, sometimes it's helpful to
                  know which collaborator has made edits.
                </p>
                <p className="paragraph">
                  To do this, highlight a block of text.
                </p>
                <ol className="list-decimal paragraph pl-12">
                  <li>
                    Right click on that block of text and choose{" "}
                    <strong>Show editors</strong>.{" "}
                  </li>
                  <li>
                    You will then see the person to make the most recent edit
                    and what time.{" "}
                  </li>
                  <li>
                    Click <strong>Show more</strong> to reveal everyone who has
                    edited this block.
                  </li>
                  <li>
                    You can also click <strong>See version history</strong> to
                    see in more detail the edits in the entire document.
                  </li>
                </ol>
              </div>
              <p className="paragraph">
                This makes keeping track of collaborations and new changes to
                your syllabus easy.
              </p>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}

          {/* last div */}
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5 md:mt-6 mt-3">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                Did you know that you can do more with Google Docs and Google
                Drive inside of the <strong>Education Plus</strong> edition of
                Google Workspace for Education? With{" "}
                <strong>Education Plus</strong>, you can send documents in
                Google Drive through a formal approval process. Reviewers can
                approve, reject, or leave feedback on the documents directly
                within Drive, Docs, and other Google Workspace for Education
                editors.
              </p>
              <p className="paragraph">
                You can use this process to get approval on a contract or new
                hire, approve changes for a document before publication, or
                other formal approval situations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*End oF 3 SeCtiON */}

      {/* 4 seCTION */}
      {/* Transform your syllabus
       */}
      <div
        id="TransformSyllabus"
        className="sm:pt-32 pt-16 pb-10 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Transform your syllabus</h1>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              A course syllabus is a way to share essential information — from
              course content and resources to deadlines, grading criteria, and
              school policies. To communicate that information effectively, you
              should keep your syllabus organized, readable, and easy to
              navigate. Google Docs includes several features to help you do
              that.
            </p>
            <div>
              <p>We are going to explore how to: </p>
              <ol className="list-disc pl-8 paragraph">
                <li>Create a table of contents.</li>
                <li>Organize information in tables.</li>
                <li>Integrate information with smart chips.</li>
                <li>Add and customize images.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      <div className="bg-[url('/assets/syllabus8.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 section */}
      {/* Try it out  */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text">Try it out </h1>
            <p className="paragraph">
              Organize your syllabus with features in Google Docs.{" "}
            </p>
          </div>

          {/* main div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                Create a table of contents for our syllabus.{" "}
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <p className="Bold mb-4">
                  Click play to watch the video below.
                </p>
                {/* video */}
                {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

                <iframe
                  //   width="800"
                  //   height="600"
                  src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="max-w-[905px] min-h-[310px] "
                ></iframe>

                {/* button  */}
                <button
                  onClick={toggle}
                  className="w-full bg-[#1A73E8] py-2.5 text-white"
                >
                  Transcript
                </button>
              </div>
            </article>
            <article className="flex flex-col gap-4">
              {" "}
              <div className="flex flex-col gap-2 mt-2">
                <p className="Bold mb-4">
                  Click play to watch the video below.
                </p>
                {/* video */}
                {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

                <iframe
                  //   width="800"
                  //   height="600"
                  src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="max-w-[905px] min-h-[310px] "
                ></iframe>

                {/* button  */}
                <button
                  onClick={toggle}
                  className="w-full bg-[#1A73E8] py-2.5 text-white"
                >
                  Transcript
                </button>
              </div>
            </article>
            <article className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 mt-2">
                <p className="Bold mb-4">
                  Click play to watch the video below.
                </p>
                {/* video */}
                {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

                <iframe
                  //   width="800"
                  //   height="600"
                  src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="max-w-[905px] min-h-[310px] "
                ></iframe>

                {/* button  */}
                <button
                  onClick={toggle}
                  className="w-full bg-[#1A73E8] py-2.5 text-white"
                >
                  Transcript
                </button>
              </div>
            </article>
            <article className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 mt-2">
                <p className="Bold mb-4">
                  Click play to watch the video below.
                </p>
                {/* video */}
                {/* <video
            tabindex="-1"
            class="video-stream html5-main-video"
            webkit-playsinline=""
            playsinline=""
            controlslist="nodownload"
            style="width: 905px; height: 509px; left: 0px; top: 0px;"
            src="blob:https://www.youtube.com/45b3ff66-03c9-47fd-92d3-3aabe7bbb16d"
          ></video> */}

                <iframe
                  //   width="800"
                  //   height="600"
                  src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="max-w-[905px] min-h-[310px] "
                ></iframe>

                {/* button  */}
                <button
                  onClick={toggle}
                  className="w-full bg-[#1A73E8] py-2.5 text-white"
                >
                  Transcript
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/*end of 5 section */}

      {/* 6 section */}
      {/* Take it to work: Redesign a digital syllabus */}
      <div id="Redesign" className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  sm:gap-16 gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text1 leading-[2.4rem]">
                Take it to work: Redesign a digital syllabus
              </h1>
              <p className="paragraph">
                Now it’s your turn to use some of these features to create a
                more clear and functional digital syllabus. For this exercise,
                you can work with an example syllabus or use one of your own.
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
                  Make a copy
                </button>
                <button
                  className={`btn ${
                    activeIndex === 1 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(1)}
                >
                  Try out the table of contents
                </button>
                <button
                  className={`btn ${
                    activeIndex === 2 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(2)}
                >
                  Customize it
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
                    To start, make a copy of the&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://docs.google.com/document/d/1CQaD3REKo1x2XWdEIMrCI3qg71GWEjd2I1VLCxZ0Wfo/edit?resourcekey=0-pGBOLeWNyLViaZ_TodZsZQ"
                      class="text-[blue] underline"
                    >
                      example syllabus
                    </a>{" "}
                    or upload a syllabus to Google Docs. Then, think of some
                    ways you could use Google Docs features to make the syllabus
                    more functional and engaging.
                  </p>
                </div>

                {/* seConD pArAgrAPh */}
                <div
                  className={`${activeIndex === 1 ? "block" : "hidden"}  px-6`}
                >
                  <p className="paragraph">
                    You could start by adding a table of contents or formatting
                    the images, but you don’t need to limit yourself to features
                    covered in this lesson.
                  </p>
                </div>

                {/* third pArAgrAPh */}
                <div
                  className={`${activeIndex === 2 ? "block" : "hidden"}  px-6`}
                >
                  <p className="paragraph">
                    For example, if you feel comfortable doing so, you could
                    change the fonts, adjust the spacing, insert columns, or add
                    color. When deciding how to reformat your syllabus, be sure
                    to consider how specific changes could make it easier to
                    use.
                  </p>
                </div>
              </div>
            </div>
            {/* EnD oF UsEsTate */}
            {/*end of buttons & paragraph */}
          </div>
        </div>
      </div>
      {/*end of 6 section */}
    </div>
  );
};

export default DigitalSyllabusSection;
