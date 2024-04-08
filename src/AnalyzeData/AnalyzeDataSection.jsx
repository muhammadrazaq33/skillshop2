import React, { useState } from "react";

const AnalyzeDataSection = () => {
  const [openModel, setOpenModel] = useState(null);

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
                          Use advanced tools for data analysis
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
                          Sort your data
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UploadMaterial"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Apply filters
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UploadMaterial"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Create a pivot table
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UploadMaterial"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          COUNTIF function
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#UploadMaterial"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          SUMIF function
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
              className="bg-[#E6E7E9] grid place-items-center py-4 rounded-lg gap-y-5 px-4 max-w-[20rem]"
            >
              <img src="./assets/tool3.png" alt="" />
              <p className="text-center paragraph">
                Analyze large datasets using Google Sheets
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
              <p className="text-center paragraph">
                Interpret data more efficiently using Google Sheets
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* Use advanced tools for data analysis
       */}
      <div className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Use advanced tools for data analysis
            </h1>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            <article className="md:col-span-1">
              <img src="./assets/data2.png" alt="" />
            </article>
            <article className="md:col-span-2 md:pl-3 pl-0">
              <p className="paragraph">
                As a teacher, collecting and analyzing data can help you
                understand your students' learning and improve your teaching
                practices. Google Sheets has numerous features that allow you to
                analyze the data you collect. Each feature has a specific use
                and, when used by itself or with other features, provides a
                powerful toolkit for you and your students.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 seCTION */}
      {/* Sort your data
       */}
      <div className="sm:pt-20 pt-12 md:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Sort your data</h1>
            <p className="paragraph">
              Sorting data allows you to organize data in your spreadsheet
              alphabetically or numerically. For example, you might want to
              organize a list of students in a gradebook in alphabetical order
              or you might want to sort the scores on an assignment from lowest
              to highest to see which students might need more support.
            </p>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      <div className="bg-[url('/assets/sheet2.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 4 section */}
      {/* Try it out */}
      <div className="sm:pb-16 pb-12 md:pt-20 pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          {/* first div */}
          <div className="flex flex-col gap-5">
            <h1 className="text">Try it out</h1>
            <p className="paragraph mt-4">
              Now it's your chance to sort data in a sheet.
            </p>
          </div>
          {/* second div */}
          <div className="mt-3">
            <p className="Bold mb-6">Click each button to learn more.</p>

            <div className="relative">
              <button
                onClick={() => setOpenModel(3)}
                className="bg-[#dadce099] absolute top-[58.5%] left-[8%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center hover:text-[white] duration-700 hover:bg-[#1A73E8] sm:p-8 text-[20px]"
              >
                1
              </button>
              <button
                onClick={() => setOpenModel(4)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[26%] left-[26%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                2
              </button>
              <button
                onClick={() => setOpenModel(5)}
                className="bg-[#dadce099] text-[20px] sm:p-8 duration-700 hover:bg-[#1A73E8] hover:text-[white] absolute top-[23%] left-[60%] w-[50px] overflow-visible cursor-pointer h-[50px] rounded-[50%] grid place-content-center"
              >
                3
              </button>
              <img src="./assets/data3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* end OF 4 Section  */}
      {/* MODEL */}
      {openModel && (
        <div className="fixed inset-0 z-10 p-5 bg-[#272727B8] flex justify-center items-center">
          {/* FIrSt MOdeL */}
          <div
            className={`flex flex-col gap-4 max-w-[800px] pt-10 px-8 bg-white ${
              openModel == 3 ? "block" : "hidden"
            }`}
          >
            <div className="text-center">
              <ol className="list-decimal paragraph pl-5">
                <li>
                  Click the column with the data you would like to organize,
                  open the <strong>Data</strong> menu.
                </li>
              </ol>
            </div>
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
            <div className="w-[50vw]">
              <p className="paragraph">
                2. Click <strong>Sort sheet</strong>.
              </p>
            </div>
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
            <div className="w-[50vw] flex flex-col gap-5">
              <p className="paragraph">
                3. Choose whether you want it organized A to Z or Z to A.
              </p>
              <p className="paragraph">
                <strong>Note:</strong> If your data is numerical, A to Z will
                put it in order from smallest to greatest.
              </p>
            </div>
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

      {/* 5 seCTION */}
      {/* Apply filters
       */}
      <div className="sm:pt-20 pt-12 md:pb-20 pb-16 bg-[#F9F9FA] shadow-top-bottom-inner">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Apply filters</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="2500"
              className="flex flex-col gap-5"
            >
              <p className="paragraph">
                If you have a spreadsheet with lots of student data, like
                attendance or grades, you can use the{" "}
                <strong>Create a filter </strong>option in the
                <strong> Data</strong> menu to{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/docs/answer/3540681"
                  className="text-[blue] underline"
                >
                  apply a filter
                </a>{" "}
                to your data. When you apply a filter, you will be able to view
                only the data that meets specific criteria, like absences
                greater than three. Applying filters will alter the data that is
                visible in the spreadsheet for anyone who has access to it. This
                can be useful if you are collaborating with colleagues and you
                want to draw their attention to specific data, such as the
                results from your latest assignment or student attendance for a
                specific week.
              </p>
              <p className="paragraph">
                You can also filter large sets of data more dynamically using
                filter views. Creating a filter view creates a drop-down menu
                for each column and allows you to change criteria for one or
                more columns to filter out the rows that you don’t need to see.
                Each filter view that you create is automatically saved, and you
                can name them so that you can apply the same filter quickly in
                the future.
              </p>
              <p className="paragraph">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/a/users/answer/9308952?hl=en"
                  className="text-[blue] underline"
                >
                  Filter views{" "}
                </a>
                are also great for shared spreadsheets because you can open a
                filter view and filter the data without changing the view for
                anyone else working in the same spreadsheet. So if you have a
                shared spreadsheet with data on 120 students, you may filter
                them to view only students from your class who haven’t completed
                a specific assignment without affecting other teachers’ views of
                the spreadsheet.
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="90"
              data-aos-duration="2500"
              className="md:pl-3 pl-0"
            >
              <img src="./assets/data4.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      {/* 6 seCTION */}
      {/* Create a pivot table
       */}
      <div className="sm:pt-20 pt-12 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Create a pivot table</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
            <article className="">
              <img src="./assets/data5.png" alt="" />
            </article>
            <article className="md:pl-3 pl-0">
              <p className="paragraph">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://support.google.com/docs/answer/1272900"
                  className="text-[blue] underline"
                >
                  A pivot table
                </a>{" "}
                is another tool that provides a dynamic interface for working
                with larger data sets. A pivot table is a powerful tool that
                summarizes and organizes data from selected columns and rows to
                help you analyze your data. Pivot tables have the ability to
                compare various aspects of a data set and create custom
                calculations. They are typically built to summarize data
                numerically. For example, you might give a quiz and organize the
                results by grade level, class period, or another criteria.
                Whether by date, score, grade level, or year, you can quickly
                switch the inputs and axes of the data being analyzed.
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  6 seCTION */}

      {/* 7 seCTION */}
      {/* Useful functions
       */}
      <div className="sm:pt-20 pt-12 md:pb-16 pb-12 bg-[#F9F9FA] top-shadow">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">Useful functions</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article
              data-aos-delay="60"
              data-aos-duration="1900"
              data-aos="fade-up"
            >
              <h1 className="function leading-[2.4rem]">COUNTIF</h1>
              <div className="flex flex-col gap-10 p-2">
                <img src="./assets/data6.png" alt="" />
                <p className="paragraph">
                  The{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.google.com/docs/answer/3093480"
                    className="text-[blue] underline"
                  >
                    COUNTIF function&nbsp;
                  </a>
                  tallies how many times something appears in your data set
                  based on set criteria. For example, you might count how many
                  students have turned in an assignment or the number of times a
                  specific assessment question was answered correctly. You can
                  also use the COUNTIF function to count the number of times
                  that a string of text appears in your spreadsheet, such as a
                  student’s name.
                </p>
              </div>
            </article>
            <article
              data-aos-delay="65"
              data-aos-duration="2000"
              data-aos="fade-up"
            >
              <h1 className="function leading-[2.4rem]">SUMIF</h1>
              <div className="flex flex-col gap-10 p-2">
                <img src="./assets/data7.png" alt="" />
                <p className="paragraph">
                  The{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://support.google.com/docs/answer/3093583"
                    className="text-[blue] underline"
                  >
                    SUMIF function&nbsp;
                  </a>
                  totals the values of a range of cells based on set criteria.
                  For example, you could find the total of a specific student’s
                  scores by setting the criteria to match the student’s last
                  name. Or, If you have a list of a student’s formative and
                  summative assessments, you could use the SUMIF function to
                  find the total formative and summative points the student has
                  earned. The SUMIF function only allows you to set one
                  criterion at a time, so in the second example you would need
                  to use two separate SUMIF functions, one for summative and
                  another for formative.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/*end oF  7 seCTION */}
    </div>
  );
};

export default AnalyzeDataSection;
