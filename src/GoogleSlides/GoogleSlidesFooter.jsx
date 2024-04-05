import React from "react";

const GoogleSlidesFooter = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF]">
        {/* seCond LAST FOoTeR */}
        <div className="">
          <img src="./assets/clip1.png" alt="" />
        </div>
        {/* footer section =======> */}
        <div className="pt-[2.2rem] pb-[4rem]">
          <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
            <h1 className="footer_title">Knowledge check</h1>

            {/* TABLE  ========> */}
            <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-[20px]">
                  Which <strong>two</strong> of the following is true when
                  students create their own private copy of your Google Slides?
                </h1>
              </div>

              {/* CHECKS  ========>*/}
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
                <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5 rounded-md hover:bg-[#e37400] hover:text-white">
                  <input
                    type="checkbox"
                    className="form-checkbox border-2 flex-shrink-0   h-5 w-5"
                    name=""
                    id=""
                  />
                  <p className="text-[16px] font-medium">
                    All students can type in the same file at the same time.
                  </p>
                </article>
                <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                  <input
                    type="checkbox"
                    name=""
                    className="flex-shrink-0 h-5 w-5"
                    id=""
                  />
                  <p className="text-[16px] font-medium">
                    Changes they make do not affect your original file.
                  </p>
                </article>
                <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                  <input
                    type="checkbox"
                    name=""
                    className="flex-shrink-0 h-5 w-5"
                    id=""
                  />
                  <p className="text-[16px] font-medium">
                    Students can take notes directly in the slides without
                    affecting anyone else's file.
                  </p>
                </article>
                <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                  <input
                    type="checkbox"
                    name=""
                    className="flex-shrink-0 h-5 w-5"
                    id=""
                  />
                  <p className="text-[16px] font-medium">
                    Changes you make are automatically made in all other
                    students' copies.
                  </p>
                </article>
              </div>

              {/* bUTtONS */}
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-white py-2 table-container1 border border-black font-medium">
                  Submit
                </button>
                <button className="bg-white py-2 table-container1 border border-black font-medium">
                  Show Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* END OF SECOND LasT fOoter */}
      </div>
    </div>
  );
};

export default GoogleSlidesFooter;
