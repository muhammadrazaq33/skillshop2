import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FaCheck } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

const GoogleSheetSection = () => {
  const [open, setOpen] = useState(false);

  const toggle1 = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
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
                    <a href="#KeyData" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Visualize key data
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ConditionalFormatting"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Apply conditional formatting
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#Explore" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Explore how other teachers use conditional formatting
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
                  src="./assets/guardian3.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="text-[23px] max-w-[12rem] leading-[1.6rem] text-[#5f6368]">
                  Google Sheets
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
              <img src="./assets/tool3.png" alt="" />
              <p className="text-center paragraph">
                Apply conditional formatting in Google Sheets to monitor student
                results
              </p>
            </article>
          </div>
        </div>
      </div>
      {/* End oF FiRsT sEctION */}

      {/* 2 seCTION */}
      {/* Visualize key data
       */}
      <div id="KeyData" className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Visualize key data</h1>
            <p className="paragraph">
              As education becomes increasingly guided by data, the need to
              effectively analyze and interpret that data is more crucial than
              ever. With Google Sheets, you can quickly collect and analyze key
              student data, such as grades, assignment completion, or
              attendance.
            </p>
            <p className="paragraph">
              One way to make key data more visible is by applying conditional
              formatting. Conditional formatting is a spreadsheet feature that
              can add visual emphasis to your data. You can use{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/docs/answer/78413?hl=en&amp;co=GENIE.Platform%3DDesktop"
                className="text-[blue] underline"
              >
                conditional formatting rules&nbsp;
              </a>
              to format cells to turn a specific color when they meet certain
              criteria. This allows you to easily identify data that stands out
              and may help you adjust your teaching. For example, you might set
              a conditional formatting rule to turn cells with low assignment
              scores red to identify students who need additional support with
              content or skills.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 seCTION */}
      {/* Apply conditional formatting
       */}
      <div
        id="ConditionalFormatting"
        className="sm:pt-20 pt-12 md:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Apply conditional formatting
            </h1>
            <p className="paragraph">
              Follow the steps below to learn how to apply conditional
              formatting to make your spreadsheets more visual.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      <div className="bg-[url('/assets/sheet2.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 3 section */}
      {/* Try it out */}
      <div id="ExploreIdeas" className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text">Try it out</h1>
            <p className="paragraph">
              Now it's your chance to use conditional formatting.
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
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">
                    Step 1: Open the conditional formatting menu
                  </p>
                </article>
                <Collapse isOpened={open === 1}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/sheet20.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        Open a spreadsheet that contains data you would like to
                        visualize. Select the cells you would like to apply
                        conditional formatting to.{" "}
                      </p>
                      <p className="paragraph">
                        Then, open the <strong>Format</strong> menu and select
                        <strong>Conditional formatting</strong>.
                      </p>
                    </div>
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
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">Step 2: Create a rule</p>
                </article>
                <Collapse isOpened={open === 2}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/sheet21.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        In the side panel that appears, choose a condition that
                        must be met from the <strong>Format cells if… </strong>
                        drop-down menu.{" "}
                      </p>
                      <p className="paragraph">
                        Depending on the contents of your cells, you can choose
                        from a variety of conditions, such as if the cell
                        contains specific text, if a number is greater than,
                        less than, or equal to a certain value, or if a date is
                        before or after a deadline.
                      </p>
                    </div>
                  </article>
                </Collapse>
              </div>
              {/* third  */}
              <div className="flex flex-col gap-1">
                <article
                  onClick={() => toggle1(3)}
                  className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
                    open === true && "active2"
                  }`}
                >
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">
                    Step 3: Choose the conditional formatting output
                  </p>
                </article>
                <Collapse isOpened={open === 3}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/sheet22.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        In the formatting style section, choose how cells will
                        appear if they fit the condition that you set in the
                        previous step. You can choose to bold, italicize, or
                        underline the font, strike through the text, change the
                        text color, or change the cell’s fill color.
                      </p>
                      <p className="paragraph">
                        Any of these options can be used to draw attention to
                        important data and help you gain insights into ways to
                        improve your lessons to better meet your students’
                        needs.
                      </p>
                    </div>
                  </article>
                </Collapse>
              </div>
              {/* fourth  */}
              <div className="flex flex-col gap-1">
                <article
                  onClick={() => toggle1(4)}
                  className={`flex items-center gap-6 px-6 py-5 rounded-md cursor-pointer bg-[#dadce0] hover:bg-[#1A73E8] duration-700 hover:text-white ${
                    open === true && "active2"
                  }`}
                >
                  <button>
                    <FaCheck />
                  </button>
                  <p className="text-[18px] ">
                    Step 4: Finalize your rule or create another
                  </p>
                </article>
                <Collapse isOpened={open === 4}>
                  <article className="px-6 py-4 grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <img src="./assets/sheet23.png" alt="" />
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="paragraph">
                        Once your conditional formatting rule is complete, click
                        <strong> Done</strong> to implement it or{" "}
                        <strong>Add another rule</strong> to create a new rule
                        for the same set of cells. You can apply multiple
                        conditional formatting rules to cells to cover a variety
                        of conditions.
                      </p>
                      <p className="paragraph">
                        For example, if you want to visualize which students are
                        achieving scores above and below a specific value, you
                        might set one rule to change the cells red if they are
                        less than the value and a second rule to change the
                        cells green if they are greater than the value.
                      </p>
                      <p className="paragraph">
                        If you would like more practice with conditional
                        formatting, check out this{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://applieddigitalskills.withgoogle.com/c/middle-and-high-school/en/make-art-with-google-sheets/overview.html"
                          className="text-[blue] underline"
                        >
                          video lesson
                        </a>
                        .
                      </p>
                    </div>
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

      {/* 5 seCTION */}
      {/* Explore how other teachers use conditional formatting
       */}
      <div
        id="Explore"
        className="sm:pt-20 pt-12 md:pb-16 pb-12 bg-[#F9F9FA] top-shadow"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          {/* first div */}
          <div className="flex flex-col gap-12">
            <h1 className="text1 leading-[2.4rem]">
              Explore how other teachers use conditional formatting
            </h1>
            <p className="paragraph">
              There are many ways that you can apply and customize conditional
              formatting. You can even combine conditional formatting with
              formulas. Read these teacher quotes and explore the examples they
              describe in{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/spreadsheets/d/15rY0ZfqXmSFwiXrdOCEMFAPW45DAdurSQcpSNNSFiyk/edit?usp=sharing"
                className="text-[blue] underline"
              >
                this spreadsheet
              </a>{" "}
              to see other ways you might use conditional formatting to
              visualize data.
            </p>
          </div>
          {/* second div */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 p-3">
            <article className="flex flex-col gap-5 border-[1px] border-black p-3.5 bg-white">
              <img src="./assets/sheet3.png" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold text-center">
                  Add a color scale
                </h3>
                <p className="paragraph">
                  “I organize a list of all my students and the books that they
                  are reading into a reading log. Once a week during our
                  individual reading time, I check in with each student and
                  update their progress in one column using percentages. There
                  are different shades of green so the higher the percentage
                  they have completed of their book the darker the green color.”
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-5 border-[1px] border-black p-3.5 bg-white">
              <img src="./assets/sheet4.png" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold text-center">
                  Identify specific text
                </h3>
                <p className="paragraph">
                  "To ensure students are engaging in my class, I use a
                  spreadsheet to track student participation. At the end of each
                  week, I assign each student a rating of frequently,
                  occasionally, or rarely. To help me visualize patterns in
                  student participation, I use conditional formatting to make
                  cells containing each rating turn different colors. To create
                  a conditional formatting rule for specific text, I select{" "}
                  <strong>Text is exactly</strong> in the{" "}
                  <strong>Format cells if </strong>
                  drop-down and then I type in one of the ratings. Then I add
                  another rule for the other ratings and change the color."
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-5 border-[1px] border-black p-3.5 bg-white">
              <img src="./assets/sheet5.png" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold text-center">
                  Format an entire row
                </h3>
                <div>
                  <p className="paragraph">
                    “When I am tracking which students have and haven’t turned
                    in their permission forms, conditional formatting allows me
                    to format entire rows. To highlight a whole row if the value
                    in column B is “Late,” I select all the rows I want the rule
                    to apply to, open the <strong>Format</strong> menu, and
                    select <strong>Conditional formatting</strong>. In the
                    Format cells if drop-down, I select Custom formula is and
                    use the formula:{" "}
                  </p>
                  <h4 className="text-[22px] text-[#41a85f]">=$B2=”Late”</h4>
                  <p className="paragraph">
                    This highlights not only the status of the permission form
                    but the student's name, making it extra clear who I need to
                    follow up with.”
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col gap-5 border-[1px] border-black p-3.5 bg-white">
              <img src="./assets/sheet6.png" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] font-bold text-center">
                  Create a heat map
                </h3>
                <p className="paragraph">
                  "I use the Color Scale option in conditional formatting to
                  create a kind of heat map in my gradebook. Different shades of
                  red are used to differentiate lower and higher scores. This
                  helps me to quickly identify students who may need additional
                  support or assignments that many students did poorly on."
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      <div className="bg-[url('/assets/sheet7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 sEctIOn */}
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
            <article className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    What data are you collecting that conditional formatting can
                    help make more visual?
                  </li>
                </ol>
              </div>
              <p className="paragraph">
                Once you have thought of data you would like to visualize
                better, make a copy of the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/spreadsheets/d/15rY0ZfqXmSFwiXrdOCEMFAPW45DAdurSQcpSNNSFiyk/copy"
                  className="text-[blue] underline"
                >
                  conditional formatting examples spreadsheet
                </a>
                , create a new sheet within the spreadsheet, and add your data.
                You can also open a new spreadsheet in Google Sheets for your
                data. Then, experiment with different ways to use conditional
                formatting to improve your ability to identify trends or key
                data.
              </p>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/sheet8.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF 6 sEctIOn */}

      {/* last footer */}
      <div className="pt-16 pb-24 bg-[#3C4043] grid place-items-center">
        <div className="grid place-items-center gap-y-3">
          {/*  */}
          <FaRegCheckCircle className="text-white text-[3.3rem]" />
          <p className="text-white">
            It looks like you've completed this lesson.
          </p>
        </div>
      </div>
      {/*end of last footer */}
    </div>
  );
};

export default GoogleSheetSection;
