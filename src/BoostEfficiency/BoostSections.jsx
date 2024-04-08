import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const BoostSections = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active paragraph index

  const toggle = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // Function to handle button click and update active index
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
                    <a href="#SaveTime" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Save time with advanced Google features
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#AdvanceFeature"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Enabled advanced features
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#AutoAdvance" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Auto-advance
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Templates" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Templates
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#Customkeyboard"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Custom keyboard shortcuts
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#Unreadmessage"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Unread message icon
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
                  src="./assets/boost1.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] max-w-[12rem] leading-[1.6rem] text-[#5f6368]">
                  Gmail
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
              <img src="./assets/boost2.png" alt="" />
              <p className="text-center paragraph">
                Customize your Gmail experience with advanced features
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* second SeCtiON */}
      {/* Save time with advanced Gmail features */}
      <div id="SaveTime" className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Save time with advanced Gmail features
            </h1>
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
              <p>We know that an educator's role is not just teaching.</p>
              <p>
                It’s talking, listening, grading, planning, creating,
                communicating, collaborating and so much more!{" "}
              </p>
              <p>
                When you can reduce the time you spend on administrative tasks,
                it leaves more room for all the good stuff.
              </p>
              <p>
                Gmail’s advanced features help educators to reduce
                administrative time and in turn streamline their workload,
                through three key ideas.
              </p>
              <p>Simplify, Customize and Automate.</p>
              <p>
                Boosting your efficiency in Gmail starts with making the most of
                these ideas and learning how to utilise advanced features to
                optimize your work day.
              </p>
              <p>
                When we look at using Gmail to simplify we don’t just mean using
                folders and creating tasks.
              </p>
              <p>
                You can also use it to simplify your work day by creating email
                templates to communicate with guardians, and learning keyboard
                shortcuts to speed up repetitive work and reduce your tasks and
                inbox quicker.
              </p>
              <p>
                Customization features allow you to control what you see and how
                much you see in a way that makes sense for you and your working
                style.
              </p>
              <p>
                Not only can you choose which inbox view to use, but you can
                customize the way that emails are delivered to your inbox
                through conversation threads.
              </p>
              <p>
                Automate Gmail’s automation features learns your behaviors and
                anticipates your needs to keep you up to date and notified.
              </p>
              <p>
                From preempting which emails are important, to nudging you on
                emails you need to respond to.
              </p>
              <p>
                Gmail's features make handling information easy. Because when
                you don’t have to worry about the clutter, you can just focus on
                being the superhero you are.
              </p>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
          <p className="paragraph">
            Gmail has a number of features designed to make email faster and
            easier to use. These features can help you manage your inbox,
            automate prewritten messages, and reply to emails more quickly.
            Simplifying this administrative work can create more time for
            planning lessons, grading papers, or meeting with students. This
            lesson covers advanced features, like keyboard shortcuts and email
            templates, but there are many more. Feel free to explore the
            different options to find what works best for you.
          </p>
        </div>
      </div>
      {/*End oF second SeCtiON */}

      {/* 3 sEctiON */}
      {/* Enable advanced features */}
      <div
        id="AdvanceFeature"
        className=" sm:pt-20 pt-16 pb-16 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <h1 className="text1 leading-[2.4rem] mb-2">
            Enable advanced features
          </h1>
          <p className="paragraph">
            Before you can use advanced features, you need to enable them.
          </p>
          <p className="paragraph">
            Once enabled, some features will activate automatically. Others,
            like auto-advance and email templates, need additional setup before
            you can use them.
          </p>
        </div>
      </div>
      {/*end Of 3 sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/boost3.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 4 section */}
      {/* try it out */}
      <div className=" sm:pt-20 pt-16 md:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h3 className="text">Try it out</h3>
            <p className="paragraph">Enable advanced features in Gmail.</p>
          </div>

          {/* main div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article>
              <p className="paragraph md:pr-3 pr-0">
                1. Go to your Gmail account and click the{" "}
                <strong>Settings</strong> icon at the top of the page.
              </p>
            </article>
            <article className="flex flex-col gap-5 md:mt-6 mt-0">
              <p className="Bold">Click the expand icon to enlarge.</p>
              <img src="./assets/boost4.png" alt="" />
            </article>
            <article className="">
              <p className="paragraph md:pr-3 pr-0">
                2. Click <strong>See all settings</strong> and go to the
                <strong>Advanced</strong> tab to explore the available features.
              </p>
              <p className="paragraph md:pr-3 pr-0">
                3. To make a feature available for use, select{" "}
                <strong>Enable</strong>.
              </p>
              <p className="paragraph md:pr-3 pr-0">
                4. Finally, click <strong>Save Changes</strong> to activate the
                new settings.
              </p>
            </article>
            <article className="flex flex-col gap-5 md:mt-6 mt-0">
              <p className="Bold">Click the expand icon to enlarge.</p>
              <img src="./assets/boost5.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/* end of 4 section */}

      {/* 5 sEctiON */}
      {/* Auto-advance */}
      <div
        id="AutoAdvance"
        className=" sm:pt-20 pt-16 pb-16 shadow-top-bottom-inner bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">Auto-advance</h1>
            <p className="paragraph">
              When you delete or archive an email conversation, Gmail takes you
              back to your inbox. Auto-advance takes you to the next
              conversation instead, which saves time when you have a lot of
              unread emails. Once auto-advance is enabled, go to the General tab
              of the Settings menu to advance to older messages, newer messages,
              or back to the conversation list.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="Bold">Click the expand icon to enlarge.</p>
            <img src="./assets/boost6.png" alt="" />
          </div>
        </div>
      </div>
      {/*end Of 5 sEctiON */}

      {/* 6 sEctiON */}
      {/* Templates */}
      <div id="Templates" className=" sm:pt-20 pt-16 md:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">Templates</h1>
            <p className="paragraph">
              If you find yourself sending similar emails again and again,
              try&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/a/users/answer/11339703?hl=en&amp;visit_id=638035471395872866-3207941540&amp;rd=1#email_template"
                className="text-[blue] underline"
              >
                creating a template
              </a>
              . With templates, you can compose frequently sent messages without
              having to copy and paste them manually. They help streamline email
              communication, letting you send reminders, answer questions, and
              share important updates with ease. Each time you load a template,
              you can customize the content or personalize it for the recipient.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="Bold">Click the expand icon to enlarge.</p>
            <img src="./assets/boost7.png" alt="" />
          </div>
        </div>
      </div>
      {/*end Of 6 sEctiON */}

      {/* 7 sEctiON */}
      {/* Custom keyboard shortcuts */}
      <div
        id="Customkeyboard"
        className=" sm:pt-20 pt-16 pb-16 shadow-top-bottom-inner bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">
              Custom keyboard shortcuts
            </h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article className="flex flex-col gap-5">
              <p className="Bold">Click the expand icon to enlarge.</p>
              <img src="./assets/boost8.png" alt="" />
            </article>
            <article className="flex flex-col gap-5 md:mt-3 mt-0">
              <p className="paragraph">
                Keyboard shortcuts save you time by speeding up repetitive
                tasks. You may already use some shortcuts, like Ctrl + c or Cmd
                + c to copy. But there are many more for actions like inserting
                a link (Ctrl + k or Cmd + k) or sending an email (Ctrl + Enter
                or Cmd + Enter). Gmail lets you customize these shortcuts, which
                can be helpful if you have a mobility issue or want to
                standardize shortcuts across different applications.
              </p>
              <p className="paragraph">
                You can change a shortcut’s preset keystrokes (or add
                alternative keystrokes) in the{" "}
                <strong>Keyboard Shortcuts</strong> tab of the{" "}
                <strong>Settings</strong> menu. (To access this tab, you must
                first{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/mail/answer/6594?hl=en"
                  className="text-[blue] underline"
                >
                  enable keyboard shortcuts
                </a>{" "}
                in the <strong>Advanced</strong> tab). For example, you could
                add a second set of keystrokes to the “compose” shortcut, so
                that typing both c and n open a new message.&nbsp;
              </p>
              <p className="paragraph">
                <strong>Note:</strong> Only some keyboard shortcuts are active
                by default. You can explore and turn on additional shortcuts by
                typing '?' when Gmail is open.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end Of 7 sEctiON */}

      {/* 8 sEctiON */}
      {/* Unread message icon */}
      <div id="Unreadmessage" className=" sm:pt-20 pt-16 md:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem] mb-2">Unread message icon</h1>
            <p className="paragraph">
              This icon tracks the number of unread messages in your Gmail inbox
              browser tab. With this feature, you’ll know when new messages
              arrive without checking your inbox — which can help you stay
              up-to-date with important emails.
            </p>
            <p className="paragraph">
              The unread message icon is active once enabled in the{" "}
              <strong>Advanced</strong> tab of the <strong>Settings</strong>{" "}
              menu.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <img src="./assets/boost9.png" alt="" />
          </div>
        </div>
      </div>
      {/*end Of 8 sEctiON */}

      {/* iMAgE secTIon */}
      <div className="bg-[url('/assets/boost10.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 9 section */}
      {/* Take it to work: Create a template in Gmail */}
      <div
        id="technology"
        className="sm:pt-24 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* first duv */}
          <div className="flex flex-col gap-5">
            <h4 className="text">
              Take it to work: Create a template in Gmail
            </h4>
            <p className="paragraph">
              Now that you know how to use advanced features, it’s time to put
              that knowledge into practice. In this activity, you will create a
              template for an email you can send to colleagues, students, or
              guardians. Before you begin, make sure you’ve enabled templates in
              Gmail.
            </p>
          </div>

          {/* second div */}
          <div className="flex flex-col gap-2 mt-2">
            <p className="Bold mb-4">Click each tab to learn more.</p>
            {/* buttons ===> */}
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 ">
              <button
                className={`btn ${
                  activeIndex === 0 && "active1"
                } bg-[#dadce0] px-5 py-3 text-left rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(0)}
              >
                First, select an email for your template.
              </button>
              <button
                className={`btn ${
                  activeIndex === 1 && "active1"
                } bg-[#dadce0]  px-5 py-3 text-left rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(1)}
              >
                Open a new message in Gmail.
              </button>
              <button
                className={`btn ${
                  activeIndex === 2 && "active1"
                } bg-[#dadce0]  px-5 py-3 text-left rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(2)}
              >
                Replace any elements you might want to change in the future.
              </button>
              <button
                className={`btn ${
                  activeIndex === 3 && "active1"
                } bg-[#dadce0]  px-5 py-3 text-left rounded-sm duration-700 hover:bg-[#1A73E8] hover:text-[white]`}
                onClick={() => handleClick(3)}
              >
                Save as a new template.
              </button>
            </div>
            {/* end of buttons */}

            {/* paragraph  */}
            <div className="mt-4">
              <div
                className={`${
                  activeIndex === 0 ? "block" : "hidden"
                }  px-6 #3c4043 paragraph flex flex-col gap-4`}
              >
                <p className="paragraph">
                  First, select an email for your template. Consider the types
                  of emails you send often or that might be useful in the
                  future. You can pick a message you’ve used in the past or
                  write a new one for this exercise. If you're not sure what
                  type of email to choose, consider some common ways teachers
                  use templates, including:
                </p>
                <ul className="list-disc pl-12">
                  <li>
                    Communicating about recurring events (e.g., due dates,
                    meetings, conferences).
                  </li>
                  <li>
                    Answering frequently asked questions about a class or
                    assignment.
                  </li>
                  <li>
                    Informing guardians of absences or disciplinary issues.
                  </li>
                  <li>Troubleshooting for technical issues.</li>
                </ul>
              </div>
              <div
                className={`${
                  activeIndex === 1 ? "block" : "hidden"
                }  px-6 paragraph duration-700`}
              >
                Once you’ve picked an email for your template, open a new
                message in Gmail. Then, write your email or copy and paste it
                into the compose window. Do the same for the subject line.
              </div>
              <div
                className={`${
                  activeIndex === 2 ? "block" : "hidden"
                } px-6 paragraph`}
              >
                Replace any elements you might want to change in the future
                (e.g., names, dates, locations, or links) with placeholder text.
                Mark or format this text (e.g., with bracketed text, bolding,
                underlining, etc.) so you remember to update these elements when
                you use the template. For example, you could replace the
                subject, “Meeting this Tuesday” with “Meeting this [day]” or
                “Meeting this _____.”
              </div>
              <div
                className={`${
                  activeIndex === 3 ? "block" : "hidden"
                } px-6 paragraph`}
              >
                When you’re satisfied with the message, select{" "}
                <strong>More options</strong> (the three vertical dots under the
                compose window). Choose <strong>Templates</strong>, then select
                <strong>Save draft as template</strong>, and then click{" "}
                <strong>Save as new template</strong>. Give your template a
                descriptive name and then save it.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end of  9 section */}
    </div>
  );
};

export default BoostSections;
