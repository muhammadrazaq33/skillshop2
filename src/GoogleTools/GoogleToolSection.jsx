import React, { useState } from "react";

const GoogleToolSection = () => {
  const [show, setShow] = useState(false);

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
                          Use Google Classroom to automate personalized updates
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
                          Track student progress using Google Sheets
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
                  src="./assets/tool2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[20px] max-w-[12rem] leading-[1.6rem]">
                  Google Classroom
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
              <img src="./assets/tool3.png" alt="" />
              <p className="text-center">
                Summarize student information in Google Classroom
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
                Track student progress using Google Sheets
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* SECOND seCTION */}
      {/* Use Google Classroom to automate personalized updates */}
      <div className="sm:pt-20 pt-12 pb-10 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Use Google Classroom to automate personalized updates
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4 col-span-2">
              <p className="paragraph">
                Google Classroom is a tool that will help you connect with
                guardians and share important updates about your students. With
                Classroom, you can send guardians automated, individualized
                student updates. You may choose to send daily or weekly guardian
                summaries that include class announcements, current assignments,
                or missing work reports.
              </p>
              <p className="paragraph">
                In order to create these summaries, your school’s administration
                must first verify that you’re a teacher, turn on the summary
                option, and give you permission to manage guardian summaries.
              </p>
            </article>
            <article className="col-span-1">
              <p className="text-[#3c4043] paragraph">
                Here's an example of a guardian summary.
              </p>
              <img src="./assets/tool6.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  SECOND seCTION */}

      <div className="bg-[url('/assets/tool7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 seCTION */}
      {/* Try it out */}
      <div className="sm:pt-20 pt-12 pb-10 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-7">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Invite guardians to receive personalized updates.{" "}
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                In order for guardians to receive summaries about their child,
                they must sign up. You can help guardians sign up by inviting
                them.
              </p>
              <div>
                <p>
                  <strong>To do this:</strong>
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    <p>
                      Go to{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://classroom.google.com/"
                        className="text-[blue] underline"
                      >
                        classroom.google.com
                      </a>
                    </p>
                  </li>
                  <li>Click your class.</li>
                  <li>
                    Click <strong>People</strong> at the top of the page.
                  </li>
                  <li>
                    Next to a student’s name, click{" "}
                    <strong>Invite guardians</strong>.
                  </li>
                  <li>
                    Enter the guardian’s email address. To invite multiple
                    guardians, insert a comma between the email addresses.
                  </li>
                  <li>
                    Then click <strong>Invite.</strong>
                  </li>
                </ol>
              </div>
            </article>
            <article>
              <img src="./assets/tool8.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      <div className="bg-[url('/assets/tool7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 4 seCTION */}
      {/* Try it out */}
      <div className="sm:pt-20 pt-12 pb-10 bg-[#F9F9FA]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <p className="paragraph">
              Once a guardian accepts the invitation, the guardian’s name will
              be listed next to their student’s name on the{" "}
              <strong>People</strong>r page. This indicates that they will be
              able to view the guardian summaries you create.
            </p>
            <p className="paragraph">
              To create these automated student updates, enable guardian
              summaries in Google Classroom.
            </p>
            <p>
              <strong>To do this:</strong>
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4">
              <div>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    <p>
                      Go to{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://classroom.google.com/"
                        className="text-[blue] underline"
                      >
                        classroom.google.com
                      </a>
                    </p>
                  </li>
                  <li>Open the desired class.</li>
                  <li>
                    Click <strong>Settings.</strong>
                  </li>
                  <li>
                    Turn the <strong>Guardian summaries</strong> switch on.
                  </li>
                  <li>
                    When prompted, click <strong>Add class</strong>.
                  </li>
                  <li>
                    And at any point you want to disable guardian summaries, you
                    can click the same switch off.
                  </li>
                </ol>
              </div>
            </article>
            <article className="flex flex-col gap-6">
              <img src="./assets/tool9.png" alt="" />
              <img src="./assets/tool10.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      {/* 5 seCTION */}
      {/* Track student progress with Google Sheets */}
      <div className="sm:pt-20 pt-12 pb-10 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-10 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Track student progress with Google Sheets
            </h1>
            <p className="paragraph">
              Some guardians want to know about their child’s behavior in school
              -- whether it’s related to class time, assignment completion, or
              social habits. If there’s a specific behavior that you, the
              student, and their guardian want to observe and monitor for
              improvement, shared spreadsheets in Google Sheets are a simple and
              transparent way to do so. And you can use features such as
              filtering, data validation, and comments to easily update and
              share with your student’s guardian.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      <div className="bg-[url('/assets/tool11.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 SeCtiON */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">Set up a Sheet for an example student.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="paragraph">Before starting, make sure to:</p>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 px-2">
              <article className="py-3.5 rounded-sm max-h-[10rem] px-3.5 bg-[#E8E8E8]">
                <p className="paragraph">Create a new spreadsheet</p>
              </article>
              <article className="py-3.5 rounded-sm max-h-[10rem] px-3.5 bg-[#E8E8E8]">
                <p className="paragraph">
                  Add headers for the information you want to include
                </p>
              </article>
              <article className="py-3.5 rounded-sm max-h-[10rem] px-3.5 bg-[#E8E8E8]">
                <p className="paragraph">Choose a student from your class</p>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-9">
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
          <div className={`flex flex-col gap-6 ${show ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-5 paragraph">
              <p className="paragraph">
                In this video, we'll create a new Google spreadsheet to use as a
                student progress tracker.{" "}
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  To start, create a new spreadsheet by clicking{" "}
                  <strong>New Google Sheets</strong>.{" "}
                </li>
                <li>
                  Next, add headers for the information you want to include in
                  your student progress tracker.
                </li>
                <li>
                  For example the subject area, assignment or the status of the
                  assignment, due dates, anything that you would like to track.
                </li>
                <li>
                  Next, add the student's name to the title of the spreadsheet.
                </li>
                <li>
                  You might also want to rename the tab at the bottom with the
                  student's name but this is optional.
                </li>
                <li>
                  Resize the columns as needed to make each column legible.
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-5 mt-3">
              <p className="paragraph">
                You can use a feature called data validation. This will make
                completing this tracker easy and more efficient. With data
                validation, you can create dropdown menus for the different
                columns and select options from those menus.
              </p>
              <p className="paragraph">
                For example, for the subject column, you can create a dropdown
                menu of all of the subjects.{" "}
              </p>
            </div>
            <div>
              <p className="paragraph">Let’s show you how. </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  Highlight the cells where you would like the dropdown menu to
                  appear, then on the <strong>Data</strong> menu and select{" "}
                  <strong>Data validation</strong>.
                </li>
                <li>
                  The data validation panel will appear. Click{" "}
                  <strong>Add rule</strong>{" "}
                </li>
                <li>
                  The rule setting will appear, and be automatically set up for
                  a dropdown.
                </li>
                <li>
                  To add the list items, type in the different options for your
                  dropdown.{" "}
                </li>
                <li>In this case let’s add course names. </li>
                <li>
                  To add more items, click <strong>Add another item.</strong>{" "}
                </li>
                <li>
                  When you've finished click <strong>Done</strong>.
                </li>
                <li>
                  You’ll now see the drop down appear in the cells that were
                  highlighted earlier.{" "}
                </li>
                <li>
                  When you click the the different subject areas are available
                  for you to select.{" "}
                </li>
                <li>Let’s show you one we made earlier. </li>
                <li>
                  Once you have completed the details that you want to add to
                  the students Progress Tracker, you can leave a comment for the
                  Student’s Guardian. Let’s show you how.
                </li>
                <li>
                  Highlight the information that you would like to bring to the
                  Guardian's attention.
                </li>
                <li>
                  Then click the <strong>Insert</strong> menu and select
                  <strong>Comment</strong>.
                </li>
                <li>
                  Type the the @ symbol followed by Guardian's email address.
                  Then type your comment.
                </li>
                <li>
                  When you are finished click <strong>Comment</strong>.
                </li>
                <li>
                  If the spreadsheet has not been shared with the Guardian yet,
                  you will get a prompt to do so.
                </li>
                <li>
                  Go ahead and click <strong>Comment</strong>.
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-5 mt-2">
              <p className="paragraph">
                The Guardian can now reply to this comment, add another comment
                or resolve the comment by clicking the checkmark.
              </p>
              <p className="paragraph">
                This spreadsheet is a place for an educator and guardian to
                connect and stay informed. You can share regular updates with
                guardians without needing to schedule calls or rely on emails
              </p>
            </div>
          </div>
          {/* eND oF TRansCrIpt */}
        </div>
      </div>
      {/*End oF 6 SeCtiON */}

      <div className="bg-[url('/assets/tool15.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      <div className="grid place-content-center h-[10rem] bg-[#F9F9FA]">
        <p className="text-[4rem]">check box</p>
      </div>
    </div>
  );
};

export default GoogleToolSection;
