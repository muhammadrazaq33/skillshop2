import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const ExploreFooter = () => {
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
              <h1 className="text-[20px]">
                Select which <strong>three</strong> of the following statements
                about Add-ons is correct.
              </h1>

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
                    The best add-ons require you to have a basic understanding
                    of JavaScript to use
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
                    The best add-ons are designed to be easy enough for anyone
                    to use
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
                    Many add-ons can help you automate classroom tasks, like
                    grading quizzes and tests
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
                    Add-ons are additional features created by third-party
                    developers to address certain needs
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

        {/* last footer  */}
        {/* FOOtER SEctioN */}
        <div className="pt-16 pb-24 bg-[#3C4043] grid place-items-center">
          <div className="grid place-items-center gap-y-3">
            {/*  */}
            <FaRegCheckCircle className="text-white text-[3.3rem]" />
            <p className="text-white">
              It looks like you've completed this lesson.
            </p>
          </div>
        </div>
        {/*End of FOOtER SEctioN */}
        {/* end of last footer  */}
      </div>
    </div>
  );
};

export default ExploreFooter;
