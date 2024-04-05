import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const ConfirmationMessage = () => {
  const [openModel, setOpenModel] = useState(null);

  return (
    <div>
      {/* 6 section */}
      {/* Customize your confirmation message */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          {/* first div */}
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Customize your confirmation message
            </h1>
            <p className="paragraph mt-6">
              Create a confirmation message to let guardians know that you
              received their responses. Customize this message to provide any
              additional information, such as when they can expect to receive
              further communication from you.
            </p>
            <div className="flex flex-col gap-4">
              <p className="font-semibold">
                To create a customized confirmation message:
              </p>
              <ol className="list-decimal pl-12 paragraph">
                <li>
                  At the top of your form, click <strong>Settings</strong>.{" "}
                </li>
                <li>
                  Click the <strong>Presentation dropdown</strong> menu.
                </li>
                <li>
                  Click <strong>Edit</strong> confirmation message.
                </li>
                <li>
                  Type the message you would like guardians to receive to
                  confirm that you have received their responses.
                </li>
                <li>
                  Then click <strong>Save</strong>.
                </li>
              </ol>
            </div>
          </div>
          {/* second div */}
          <div className="mt-3">
            <p className="Bold mb-6">Click each button to learn more.</p>

            <div className="relative">
              <button
                onClick={() => setOpenModel(3)}
                className="bg-[#dadce099] absolute top-[5%] left-[52%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => setOpenModel(4)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[47.5%] left-[70%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <button
                onClick={() => setOpenModel(5)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[70.5%] left-[70%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                3
              </button>
              <img src="./assets/guradian15.png" alt="" />
            </div>
          </div>
          {/* third div */}
          <div className="flex flex-col items-center gap-2 mt-3">
            <AiOutlineWarning className="w-[2.1rem] h-[2.1rem] text-[#c5221f]" />
            <p className="paragraph">
              Don't forget to click save once you've typed in your confirmation
              message.
            </p>
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
              openModel == 3 ? "block" : "hidden"
            }`}
          >
            <h1 className="text text-center">
              At the top of your form, click Settings.
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
              openModel == 4 ? "block" : "hidden"
            }`}
          >
            <h1 className="text text-center">
              Click the Presentation dropdown menu.
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

          {/* third MODeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              openModel == 5 ? "block" : "hidden"
            }`}
          >
            <h1 className="text text-center">
              Click Edit confirmation message.
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

      {/* 3 sEctiON */}
      {/* Access responses */}
      <div
        id="ScheduleMeeting"
        className=" sm:pt-20 pt-16 sm:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text1 leading-[2.4rem]">Access responses</h1>
          <p className="paragraph">
            View guardian responses in the <strong>Responses</strong> tab and
            create a spreadsheet that you can easily navigate to get the
            information you need quickly.
          </p>

          <div className="flex flex-col gap-4">
            <p className="font-semibold">
              To locate a particular detail quickly in Google Sheets, like a
              specific name, you can:
            </p>
            <ol className="list-decimal pl-12 paragraph">
              <li>
                Use keyboard shortcuts like{" "}
                <strong>Ctrl + f or Command + f</strong> to locate a specific
                word or phrase, like a student's name.
              </li>
              <li>
                Filter information by a <strong>name</strong> or{" "}
                <strong>keyword</strong>.
              </li>
              <li>
                Sort the spreadsheet by communication preferences, so you can
                see all guardians who prefer the same type of communication.
              </li>
              <li>
                Add additional columns to the spreadsheet to capture notes and
                other information. For example, you could add a new column for
                "Last contacted" or "contact notes" to capture important details
                about your interactions with a guardian.{" "}
              </li>
            </ol>
          </div>
        </div>
      </div>
      {/*end Of 3 sEctiON */}

      <div className="bg-[url('/assets/guardian16.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 2 sEctiON */}
      {/* Try it out */}
      <div
        id="ScheduleMeeting"
        className="bg-[#F9F9FA] sm:pt-20 pt-16 sm:pb-16 pb-12"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <h1 className="text">Try it out</h1>
          <p className="paragraph">Create a spreadsheet with guardian data.</p>

          {/* slider */}
          <div className="mt-6">
            <p className="Bold">Click the arrow to learn more.</p>
          </div>
          {/*end of slider */}

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 items-center">
              <HiOutlineSpeakerphone className="text-[8rem] text-[#1e8e3e]" />
              <p className="text-[#5f6368] text-[16px] font-medium">
                Useful tip
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="paragraph">
                In addition to keeping track of guardians’ communication
                preferences, you can use your spreadsheet to input contact
                notes.{" "}
              </p>
              <p className="paragraph">
                For example, you might add a new column for “Last contacted,” to
                mark the date you most recently reached out to each guardian.
                Then you could sort your sheet by “Last contacted” to view the
                guardians you have not communicated with in a while as a
                reminder to contact them again soon.
              </p>
              <p className="paragraph">
                You might also add a column for “Contact notes,” to list any
                important details about your interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end Of 4 sEctiON */}

      {/* image section */}
      <div className="bg-[url('/assets/guardian17.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 5 sEctiON */}
      {/* Take it to work */}
      <div id="ScheduleMeeting" className=" sm:pt-20 pt-16 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <h1 className="text">Take it to work</h1>
          {/* main div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4">
              <p className="paragraph">
                Now that you are familiar with the process of using Google Forms
                to compile and organize guardian communication preferences, you
                are ready to practice these skills.
              </p>
              <p className="paragraph">
                In this activity, you will create a contact form for guardians.
                As you set up your form, consider making certain questions only
                visible based on the guardians’ responses.
              </p>
              <div>
                <p className="paragraph">
                  To start, create a new form and add questions that will help
                  you connect with guardians. For example, you may consider
                  including questions about:{" "}
                </p>
                <ol className="list-disc pl-8 paragraph">
                  <li>The guardian’s first and last name.</li>
                  <li>Student name or names. </li>
                  <li>
                    The guardian’s email address and preferred phone number.
                  </li>
                  <li>
                    The guardian’s preferred communication channel, whether it's
                    email, phone, text, Google chat, or mail.
                  </li>
                  <li>The days and hours that are best for phone calls.</li>
                </ol>
                <div className="flex items-center gap-2 sm:pl-16 pl-10">
                  <div className="w-[6px] h-[6px] border border-black rounded-[50%]"></div>
                  <p className="paragraph">
                    Consider listing a few different options.
                  </p>
                </div>
              </div>
              <div>
                <p className="paragraph">
                  You might also consider including questions that may help you
                  better understand their child and their child’s needs, such
                  as:
                </p>
                <ol className="list-disc pl-8 paragraph">
                  <li>Any preferences the child may have.</li>
                  <li>
                    Their preferred pronouns and their child’s preferred
                    pronouns.
                  </li>
                  <li>Any areas of concern.</li>
                </ol>
              </div>
            </article>
            <article>
              <img src="./assets/guardian18.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end Of 5 sEctiON */}
    </div>
  );
};

export default ConfirmationMessage;
