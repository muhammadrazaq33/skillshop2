import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const PublishWorkFooter = () => {
  return (
    <div>
      <div>
        {/* seCond LAST FOoTeR */}
        <div className="">
          <img src="./assets/clip2.png" alt="" />
        </div>
        {/* footer section =======> */}
        <div className="bg-[#F9F9FA] pt-[2.2rem] pb-[4rem]">
          <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
            <h1 className="footer_title">Knowledge check</h1>

            {/* TABLE  ========> */}
            <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
              <div className=" flex flex-col gap-5">
                <h1 className="text-[20px]">
                  Which <strong>one</strong> of the following is NOT a benefit
                  of using Google Sites to share student work?
                </h1>
              </div>

              {/* CHECKS  ========>*/}
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-1">
                <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5 rounded-md hover:bg-[#e37400] hover:text-white">
                  <input
                    type="checkbox"
                    className="form-checkbox flex-shrink-0 border-2 border-red-400  h-5 w-5"
                    name=""
                    id=""
                  />
                  <p className="text-[16px] font-medium">
                    You can control privacy with the website's visibility
                    settings
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
                    A site can increase student interest in an assignment
                  </p>
                </article>
                <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                  <input
                    type="checkbox"
                    name=""
                    className=" flex-shrink-0 h-5 w-5"
                    id=""
                  />
                  <p className="text-[16px] font-medium">
                    Sites are always public to encourage global collaboration
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
                    Sites can publish classwork and give students a voice{" "}
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
    </div>
  );
};

export default PublishWorkFooter;
