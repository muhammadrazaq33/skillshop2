import React, { useState } from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const ManageMeetingSection = () => {
  const [show, setShow] = useState(false);
  const [openModel, setOpenModel] = useState(null);
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
                    <a href="#Schedule" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Schedule and meet with guardians
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Host" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Host a virtual sync
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#StudentInput" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Bring student input to guardian meeting
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
                  src="./assets/meeting2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Meet
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/meeting3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Calendar
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/meeting4.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
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
              <img src="./assets/tool3.png" alt="" />
              <p className="text-center">
                Establish a system for conducting meetings
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/tool4.png" alt="" />
              <p className="text-center">
                Facilitate student involvement in your meeting system
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* Schedule and meet with guardians */}
      <div id="Schedule" className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Schedule and meet with guardians
            </h1>
            <p className="paragraph">
              Coordinating meetings with every guardian in your class can be
              time-consuming. Google Calendar makes scheduling time with
              guardians easier and more organized.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      <div className="bg-[url('/assets/meeting5.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12 shadow-inner-large bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Schedule a meeting.</p>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p className="Bold mb-4">Click play to watch the video below.</p>
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
                  Let's show you how to create appointments so that guardians
                  can book time with you through Google calendar.{" "}
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    Click on the <strong>Create</strong> button and select
                    <strong>Appointment schedule</strong>.{" "}
                  </li>
                  <li>Give the appointment a name.</li>
                  <li>
                    And set the duration for each slot, in this case 15 minutes.
                  </li>
                  <li>
                    Then select how often you will repeat. In this case,{" "}
                    <strong>Weekly</strong>.
                  </li>
                  <li>
                    The next step is to set the availability for the meetings.{" "}
                  </li>
                  <li>
                    Let’s set them after school hours at, say, 4:30 p.m on
                    Monday and Thursday and remove the other days by clicking
                    the <strong>Remove</strong> icon.
                  </li>
                  <li>
                    Below you'll find further options like the timezone, adjust
                    other appointment settings and change the color. For now,
                    let’s click <strong>Next</strong>.{" "}
                  </li>
                  <li>
                    On this screen you can add a description to the appointment,
                    decide what information gets collected on the booking form,
                    and add any others.
                  </li>
                  <li>
                    Let’s add a phone number. Click <strong>Add an item</strong>
                    , select <strong>Phone number</strong> and check the tick
                    box for <strong>Required</strong>.
                  </li>
                  <li>
                    You can also edit the <strong>Booking confirmation</strong>{" "}
                    and <strong>Reminder settings</strong>.
                  </li>
                  <li>
                    In this case we’ll leave the default setting, which is an
                    email reminder one day before the appointment. Now click
                    <strong>Save</strong>.{" "}
                  </li>
                </ol>
              </div>
              {/* 2 div */}
              <div className="flex flex-col gap-5">
                <p className="paragraph">
                  A pop up will appear. This will give you a link that can be
                  shared with guardians. They can open the link and select an
                  available timeslot to meet with you.
                </p>
                <p className="paragraph">
                  If you click the <strong>Share</strong> button, you can choose
                  whether you would like to share all the appointment schedules
                  or just a single booking.
                </p>
                <div>
                  <p className="paragraph">In this case </p>
                  <ol className="list-decimal pl-12 paragraph">
                    <li>
                      select a <strong>Single booking page</strong>.
                    </li>
                    <li>
                      click <strong>Copy link</strong>.
                    </li>
                    <li>
                      and then select <strong>Done</strong>. You can now close
                      this pop up.{" "}
                    </li>
                  </ol>
                </div>
              </div>
              <p className="paragraph">
                You'll now see the meeting slots. At the moment none of these
                slots have been booked, but when they are, they will appear in
                your calendar.
              </p>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF 3 SeCtiON */}

      {/* 4 seCTION */}
      {/* Host a virtual sync */}
      <div id="Host" className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Host a virtual sync</h1>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                If it’s not possible to meet students or guardians in person,
                Google Meet is an ideal tool for connecting virtually.
              </p>
              <p className="paragraph">
                When you create an appointment schedule in{" "}
                <strong>Google Calendar</strong>, select{" "}
                <strong>Google Meet</strong> video conferencing as the location.
              </p>
              <p className="paragraph">
                If you both join with video conferencing, you will see each
                other. <strong>Share your screen</strong> to demonstrate student
                work, progress reports, or processes.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      <div className="bg-[url('/assets/meeting6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 seCTION */}
      {/* To access a meeting:
       */}
      <div className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  sm:gap-16 gap-10">
          {/* first div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h1 className="text">To access a meeting:</h1>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    Open <strong>Google Calendar</strong> and click on the
                    appointment.
                  </li>
                  <li>
                    Then click <strong>Join with Google Meet</strong> to start
                    the meeting.
                  </li>
                </ol>
              </div>
              {/* model image */}
              <div className="mt-3">
                <p className="Bold mb-6">Click each button to learn more.</p>

                <div className="relative">
                  <button
                    onClick={() => setOpenModel(1)}
                    className="bg-[#dadce099] absolute top-[1.8%] left-[1%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
                  >
                    1
                  </button>
                  <button
                    onClick={() => setOpenModel(2)}
                    className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[33%] left-[15%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
                  >
                    2
                  </button>
                  <img src="./assets/meeting7.png" alt="" />
                </div>
              </div>
              {/*end of model image  */}
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
                      Open Google Calendar and click on the appointment.
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
                      Then click Join with Google Meet to start the meeting.
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
            </article>
            <article className="flex flex-col gap-2 md:pl-3 pl-0">
              <h1 className="text">Guardians have two options to join:</h1>
              <div className="grid grid-cols-2 gap-4 pl-3">
                <article
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="bg-[#E8E8E8] flex flex-col gap-6 px-4 pb-4 pt-4 rounded-sm"
                >
                  <img src="./assets/meeting8.png" alt="" />
                  <p className="paragraph">
                    Click <strong>Join with Google Meet</strong> from their
                    appointment email.
                  </p>
                </article>
                <article
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1200"
                  className="bg-[#E8E8E8] flex flex-col gap-6 px-4 pb-4 pt-4 rounded-sm"
                >
                  <img src="./assets/meeting9.png" alt="" />
                  <p className="paragraph">
                    Open Google Calendar, click on their appointment, and then
                    click <strong>Join with Google Meet</strong>. (As shown on
                    the left)
                  </p>
                </article>
              </div>
            </article>
          </div>

          {/* second div */}
          <div className="mt-3">
            <div className="flex flex-col gap-1 items-center">
              <HiOutlineSpeakerphone className="text-[8rem] text-[#1e8e3e]" />
              <p className="text-[#5f6368] text-[16px] font-medium">
                Useful tip
              </p>
            </div>
            <p className=" paragraph text-center">
              You and the guardian also have the option to join by phone by
              calling the number included in the appointment details.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      {/* 6 seCTION */}
      {/* Bring student input to guardian meetings */}
      <div
        id="StudentInput"
        className="sm:pt-20 pt-12 pb-10 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Bring student input to guardian meetings
            </h1>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                Involve your students in guardian-teacher meetings to facilitate
                engagement. To include your students in guardian-teacher
                meetings, encourage them to create a Google Slides presentation
                as a review of their work and class progress.
              </p>
              <p className="paragraph">
                To facilitate this engagement, create a template in Google
                Slides that your students can use to prepare for student-led
                meetings. Then, have the student use Share your screen to
                present during the meeting.
              </p>
              <p className="paragraph">
                By giving students a foundation to share their learning
                experiences during these meetings, they will provide better
                insight into how you and their guardian can better support their
                academic needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  6 seCTION */}

      <div className="bg-[url('/assets/meeting10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 7 seCTION */}
      {/* Take it to work: Create a student-led meeting template in Google Slides
       */}
      <div className="sm:pt-20 pt-12 pb-10">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col  sm:gap-16 gap-10">
          {/* first div  */}
          <div className="flex flex-col gap-4">
            <h1 className="text">
              Take it to work: Create a student-led meeting template in Google
              Slides
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <article className="flex flex-col gap-5 justify-center md:pr-5 pr-0">
                <p className="paragraph">
                  Create a template in Google Slides for students to use during
                  student-led meetings.
                </p>
                <p className="paragraph">
                  When you are ready to share the template with your students,
                  you can edit the URL to only give students the ability to make
                  a copy. When students use this URL to open the template, it
                  automatically prompts them to make a copy of it.
                </p>
              </article>
              <article>
                <img src="./assets/meeting11.png" alt="" />
              </article>
            </div>
          </div>

          {/* second div */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text">
                Share your documents with your colleagues and students:
              </h1>
              <p className="paragraph">
                Share your document so that{" "}
                <strong>Anyone with the link can view</strong>.
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
                  Create the template
                </button>
                <button
                  className={`btn ${
                    activeIndex === 1 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(1)}
                >
                  Note the original share URL
                </button>
                <button
                  className={`btn ${
                    activeIndex === 2 && "active1"
                  } bg-[#dadce0] px-2 py-5 rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                  onClick={() => handleClick(2)}
                >
                  Edit the URL before sharing
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
                    Start by creating a Google Slides template. If you're not
                    sure where to start, try some of our tips below.{" "}
                  </p>
                </div>

                {/* seConD pArAgrAPh */}
                <div
                  className={`${activeIndex === 1 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-5">
                    <p className="paragraph">
                      The original share URL will look something like:
                    </p>
                    <p className="paragraph overflow-hidden">
                      https://docs.google.com/presentation/d/1mEkic0oeLP0w_qoU_vT04Xm4M19mSmDGwZ5sMvVBooc/
                      {
                        <span className="text-[20px] text-[#9365b8] font-bold">
                          edit
                        </span>
                      }
                      ?usp=sharing
                    </p>
                  </div>
                </div>

                {/* third pArAgrAPh */}
                <div
                  className={`${activeIndex === 2 ? "block" : "hidden"}  px-6`}
                >
                  <div className="flex flex-col gap-5">
                    <p className="paragraph">
                      You should change the word 'edit' in the URL to 'copy'.
                    </p>
                    <p className="paragraph overflow-hidden">
                      https://docs.google.com/presentation/d/1mEkic0oeLP0w_qoU_vT04Xm4M19mSmDGwZ5sMvVBooc/
                      {
                        <span className="text-[20px] text-[#00a885] font-bold">
                          copy
                        </span>
                      }
                      ?usp=sharing
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* EnD oF UsEsTate */}
            {/*end of buttons & paragraph */}
          </div>

          {/* third div */}
          <div className="flex flex-col gap-5">
            <h1 className="text">
              Depending on the age of your students, for the template, consider
              including slides:
            </h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <article className="flex flex-col gap-4">
                <p className="font-bold">For each subject area:</p>
                <ol className="list-disc pl-8 paragraph">
                  <li>
                    Students can include an example of best work for each area,
                    for example:
                  </li>
                  <ol className="list-disc pl-12">
                    <li>
                      An excerpt from a paper or writing assignment that they
                      were most proud of.
                    </li>
                    <li>
                      A photo of a completed science project or of a high score
                      they earned on a math test.
                    </li>
                    <li>A video of a chemistry experiment.</li>
                  </ol>
                  <li>
                    Students can list their favorite topic or concept they
                    learned in each subject.
                  </li>
                  <li>
                    Students can identify one area of improvement for each
                    subject area.
                  </li>
                </ol>
              </article>
              <article className="flex flex-col gap-4 md:pl-3 pl-0">
                <p className="font-bold">About their overall progress with:</p>
                <ol className="list-disc paragraph pl-8">
                  <li>Time management.</li>
                  {/* child list */}
                  <ol className="list-disc pl-12">
                    <li>Completes assignments on-time.</li>
                    <li>Spends time to submit quality work.</li>
                  </ol>
                  <li>Participation.</li>
                  {/* child list */}
                  <ol className="list-disc pl-12">
                    <li>Engages in class discussions.</li>
                    <li>Asks questions.</li>
                    <li>Contributes to group work.</li>
                    <li>Acts as a team player.</li>
                  </ol>
                  <li>Classroom citizenship.</li>
                  {/* child list */}
                  <ol className="list-disc pl-12">
                    <li>Respects other classmates.</li>
                    <li>Demonstrates honesty.</li>
                    <li>Follows class rules.</li>
                    <li>Inclusive of others.</li>
                  </ol>
                </ol>
              </article>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-2">
              <article className="flex flex-col gap-4">
                <p className="font-bold">For personal learning goals.</p>
                <ol className="list-disc pl-8 paragraph">
                  <li>Goals for social skills</li>
                  <li>Goals for work habits</li>
                </ol>
              </article>
              <article className="flex flex-col gap-4 md:pl-3 pl-0"></article>
            </div>
          </div>

          {/* fourth div  */}
          <div className="flex flex-col gap-5 items-start">
            <p className="paragraph">
              Here’s an example template for students ranging in ages fourteen
              to eighteen
            </p>
            <button className="bg-[#0E3EC1] text-white px-4 py-2">
              <a
                href="https://docs.google.com/presentation/d/100uoSYn6rO4k7ukfRtjmI1INAB2z7fJL0Hv87zrQ8Fc/edit?usp=sharing"
                className=""
                target="_blank"
                role="button"
              >
                <span>Template↗</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      {/*end oF  7 seCTION */}
    </div>
  );
};

export default ManageMeetingSection;
