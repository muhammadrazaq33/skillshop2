import React, { useState } from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const GuardianInfoSection = () => {
  const [show, setShow] = useState(false);
  const [openModel, setOpenModel] = useState(null);

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
                    <a href="#startDrive" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Use Forms to improve communication
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
                          Collect information based on the guardian's selection
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
                          Send your form
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#OrganizeItems"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Customize your confirmation message
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#OrganizeItems"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Access responses
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
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Forms
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/guardian3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Sheets
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
                Compile and organize guardian information using Google Forms
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
                Filter and sort guardian information using Google Sheets
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 sEctiON */}
      {/* Use Forms to improve communication */}
      <div id="ScheduleMeeting" className=" sm:pt-20 pt-16 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Use Forms to improve communication
          </h1>
          <p className="paragraph">
            Forms are useful for improving communication with guardians. Here
            are some cases where they help you the most:
          </p>

          {/* main div */}
          <div className="">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-[80%] m-auto">
              <article className=" flex flex-col gap-4">
                <img src="./assets/guardian6.png" alt="" />
                <div className=" flex flex-col gap-4">
                  <p className="font-semibold">
                    Collecting guardian communication preferences.
                  </p>
                  <p className="paragraph">
                    Determine the best way to contact each guardian to ensure
                    that they receive your messages.
                  </p>
                </div>
              </article>
              <article className=" flex flex-col gap-4">
                <img src="./assets/guardian7.png" alt="" />
                <div className=" flex flex-col gap-4">
                  <p className="font-semibold">
                    Quickly find contact information in an emergency.
                  </p>
                  <p className="paragraph">
                    Quickly filter to find the contact information you need in
                    Google Sheets. Google keeps this data safe.
                  </p>
                </div>
              </article>
              <article className=" flex flex-col gap-4">
                <img src="./assets/guardian8.png" alt="" />
                <div className=" flex flex-col gap-4">
                  <p className="font-semibold">
                    Set up regular communication with guardians based on their
                    interests.
                  </p>
                  <p className="paragraph">
                    Keep guardians informed about class events, student
                    progress, or volunteer opportunities.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*end Of 2 sEctiON */}

      {/* 3 sEctiON */}
      {/* Collect information based on the guardian's selection */}
      <div
        id="ScheduleMeeting"
        className=" sm:pt-20 pt-16 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">
            Collect information based on the guardian's selection
          </h1>
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Set up your forms to ask follow-up information based on a
              guardian's responses.
            </p>
            <p className="paragraph">
              For example, if a guardian selects "phone" as their preferred
              communication method, create a follow-up question about their
              available times for a phone call.
            </p>
            <p className="paragraph">
              For guardians who select "email" as their preference, follow up by
              asking for their email address.
            </p>
            <p className="paragraph">
              Using the <strong>Go to section based on answer</strong> ensures
              guardians only answer relevant questions.
            </p>
          </div>

          {/* animation */}
          <img src="./assets/guardian9.gif" alt="" />
        </div>
      </div>
      {/*end Of 3 sEctiON */}

      <div className="bg-[url('/assets/guardian10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 4 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Create a form to collect guardian communication preferences and
              contact information. Create sections in the form and using the{" "}
              <strong>Go to section based on answer</strong> so that it can
              navigate to follow-up questions based on a guardian's response.
            </p>
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
            <div className="flex flex-col gap-5 paragraph">
              <div className="flex flex-col gap-5">
                <p className="paragraph">
                  In this video we will create create a branching form.
                </p>
                <p className="paragraph">
                  A branching form takes users to a specific section of the form
                  based on their response to a question.
                </p>
              </div>
              {/* 2 div */}
              <div className="flex flex-col gap-5">
                <p className="paragraph">
                  For example, we could use a form like this with Guardians,
                  asking them how they would like us to communicate and then
                  take them to a section specifically around their response,
                  whether they choose phone or email.
                </p>
                <ol className="list-decimal pl-10 paragraph">
                  <li>
                    To get started create a <strong>New Google Form</strong>.
                  </li>
                  <li>
                    Then give your form a title and a description that makes
                    sense.
                  </li>
                  <li>
                    Now we'll add our first question asking Guardians what their
                    preferred form of communication is.{" "}
                  </li>
                  <li>Then we'll add a couple of answers in the options. </li>
                  <li>
                    Now that we have our first question, we can now create a new
                    section.{" "}
                  </li>
                  <li>
                    The reason we need to create a new section is if we want to
                    take our users to different sections based on their answer,
                    it has to be located in its own section.
                  </li>
                  <li>
                    To add a new section, click the <strong>Add section</strong>{" "}
                    button in the
                    <strong> Toolbar</strong>.
                  </li>
                  <li>
                    Give your new section a name that is clearly related to the
                    chosen response.{" "}
                  </li>
                  <li>Now add follow up questions to this section. </li>
                  <li>
                    You'll notice that Google Forms gives you some answer
                    suggestions that you can choose to use or you can type your
                    own.
                  </li>
                  <li>
                    Now you need to create another section for if the Guardian
                    had chosen the other option instead.
                  </li>
                  <li>
                    Click the <strong>New section</strong> icon, and title it
                    clearly relating to the second answer.
                  </li>
                  <li>
                    Now you can add a follow up question related to that. This
                    question only needs one answer so I’m going to leave it as a
                    <strong>Short answer</strong> in the{" "}
                    <strong>Question layout</strong>.{" "}
                  </li>
                </ol>
              </div>
              {/* 3 div */}
              <div className="flex flex-col gap-5 mt-2">
                <p className="paragraph">
                  At this point, we now want to ask some questions to everyone,
                  regardless of their response in question.{" "}
                </p>
                <p className="paragraph">
                  Add a <strong>New section</strong>, give it a title and fill
                  it with questions that everyone will answer. You can add as
                  many questions as you would like here. So now that we're set
                  up with our initial question and two branching sections and
                  then a final section for everyone to answer, we need to tell
                  Google forms how we want the branching to work.
                </p>
                <p className="paragraph">
                  Go back to the first question, and tell Google forms what to
                  do with their answer.
                </p>
              </div>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF 4 SeCtiON */}

      <div className="bg-[url('/assets/guardian11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 section */}
      <div className="bg-[#F9F9FA] shadow-inner-large sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* first div */}
          <div className="flex flex-col gap-5">
            <h1 className="text">Preview your form</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <article className="flex flex-col gap-4 md:pr-3 pr-0">
                <p className="font-bold">
                  To test your form from a user's perspective:
                </p>
                <div className="">
                  <p className="paragraph">
                    1. Click <strong>Preview</strong>. Your form opens in
                    another tab as it will appear to guardians.
                  </p>
                  <p className="paragraph">
                    2. Answer the questions as a guardian would. Select
                    different branching options and ensure that each response
                    leads to the appropriate follow-up questions.
                  </p>
                </div>
              </article>
              <article>
                <img src="./assets/guardian12.png" alt="" />
              </article>
            </div>
          </div>

          {/* second div */}
          <div className="flex flex-col gap-5">
            <h1 className="text">Send your form</h1>
            <div className=" flex flex-col gap-4">
              <p className="paragraph">
                Once you have created all of the questions, you can send the
                form to your guardians.
              </p>
              <p className="paragraph">
                If you already have a list of their email addresses, you can
                email the form link directly to them. However, if you do not
                have this information yet, you can share the form’s URL.
                Guardians can use this to access it instead.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-bold">
                To locate your form's URL, first open the form in Google Forms.
              </p>
              <ol className="list-decimal pl-10 paragraph">
                <li>
                  In the top right, click <strong>Send</strong>.
                </li>
                <li>
                  At the top of the window, click the <strong>Link</strong>{" "}
                  icon.
                </li>
              </ol>
            </div>
          </div>
          {/* third div */}
          <div className="">
            <div className="">
              <div className="mt-3">
                <p className="Bold mb-6">Click each button to learn more.</p>

                <div className="relative">
                  <button
                    onClick={() => setOpenModel(1)}
                    className="bg-[#dadce099] absolute top-[7%] left-[88%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
                  >
                    1
                  </button>
                  <button
                    onClick={() => setOpenModel(2)}
                    className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[17%] left-[42%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
                  >
                    2
                  </button>
                  <img src="./assets/guardian13.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* end OF SECOND Section  */}
          {/* MODEL */}
          {openModel && (
            <div className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center">
              {/* FIrSt MOdeL */}
              <div
                className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
                  openModel == 1 ? "block" : "hidden"
                }`}
              >
                <h1 className="text text-center">
                  In the top right, click Send.
                </h1>
                <div className="py-5 border-t text-center border-gray-400">
                  <button
                    onClick={() => setOpenModel(null)}
                    className="bg-[#1A73E8] px-3 py-2 text-white"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* SECond MODeL */}
              <div
                className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
                  openModel == 2 ? "block" : "hidden"
                }`}
              >
                <h1 className="text text-center">
                  At the top of the window, click the Link icon.
                </h1>
                <div className="py-5 border-t text-center border-gray-400">
                  <button
                    onClick={() => setOpenModel(null)}
                    className="bg-[#1A73E8] px-3 py-2 text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
              {/* EnD oF seCOnD MoDEl */}
            </div>
          )}
          {/* END of modeL */}

          {/* fourth div */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 items-center">
              <HiOutlineSpeakerphone className="text-[8rem] text-[#7248b9]" />
              <p className="text-[#5f6368] text-[16px] font-medium">
                Unsure of what you you can do with the link? Check out these two
                tips.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-12">
              <article className="flex flex-col gap-4">
                <p className="font-bold text-center">Publish the link</p>
                <p className="paragraph">
                  Consider publishing the Form URL on your school or class site
                  so that your audience can see it.
                </p>
              </article>
              <article className="flex flex-col gap-4">
                <p className="font-bold text-center">Have student share it</p>
                <p className="paragraph">
                  Writing or printing the shortened URL on index cards to send
                  home with students.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*end of 5 section */}
    </div>
  );
};

export default GuardianInfoSection;
