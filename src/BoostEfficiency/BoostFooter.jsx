import React from "react";

const BoostFooter = () => {
  return (
    <div>
      {/* seCond LAST FOoTeR */}
      <div className="">
        <img src="./assets/clip.png" alt="" />
      </div>
      {/* footer section =======> */}
      <div className="bg-[#F9F9FA] pt-[2.2rem] pb-[4rem]">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-4">
          <h1 className="footer_title">Knowledge check</h1>

          {/* TABLE  ========> */}
          <div className="table-container px-6 pt-10 pb-6 flex flex-col gap-5">
            <div className=" flex flex-col gap-5">
              <h1 className="text-[20px]">
                When you delete or archive an email conversation, Gmail takes
                you back to your inbox. ___________ takes you to the next
                conversation instead, which saves time when you have a lot of
                unread emails.
              </h1>
              <h1 className="text-[20px]">
                Which advanced feature of Gmail is being described in this
                statement?
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
                  Custom keyboard shortcuts
                </p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">Auto-advance</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className=" flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">Unread message icon</p>
              </article>
              <article className="flex items-center gap-4 border-[#e37400] border-[2px] py-4 px-5  rounded-md hover:bg-[#e37400] hover:text-white">
                <input
                  type="checkbox"
                  name=""
                  className="flex-shrink-0 h-5 w-5"
                  id=""
                />
                <p className="text-[16px] font-medium">Templates</p>
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
  );
};

export default BoostFooter;
