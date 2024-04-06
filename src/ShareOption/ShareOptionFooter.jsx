import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const ShareOptionFooter = () => {
  return (
    <div>
      {/* check box */}
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
                  Select <strong>two</strong> benefits of personalizing student
                  learning with Google Workspace for Education.
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
                    You can reach and engage students with different learning
                    styles
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
                    Forms must be responded to in one setting to minimise
                    cheating{" "}
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
                    You can provide students with choices on how they would like
                    to explore content
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
                    You can create a public drive where students can go to print
                    out assignments
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
      {/*end of check box */}

      <div className="bg-[url('/assets/share6.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* ​​Additional Resources​​ */}
      <div className="sm:pb-16 pb-12  pt-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col sm:gap-12 gap-4">
          <div className="flex flex-col sm:gap-12 gap-8">
            <h1 className="leading-[2.4rem] text4">​​Additional Resources​​</h1>
            <p className="paragraph">
              To learn more about this topic, click the links below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-12">
            <article className="flex flex-col justify-start md:justify-center gap-6">
              <div className="flex flex-col gap-4 md:items-start items-center">
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://support.google.com/docs/answer/1696711"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Insert table in Docs</span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://support.google.com/docs/answer/97447"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Insert image in Docs</span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://support.google.com/docs/answer/45893"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Add a hyperlink</span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://workspaceupdates.googleblog.com/2022/02/new-smart-canvas-features-in-google-docs.html"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Work with pageless format</span>
                  </a>
                </button>
                <button className="bg-[#1a73e8] text-white py-2 px-4 font-medium">
                  <a
                    href="https://workspaceupdates.googleblog.com/2021/05/images-above-or-behind-text-in-google-docs.html"
                    className="ev-links-item-link ev-button"
                    target="_blank"
                    role="button"
                  >
                    <span>Create documents with images behind text</span>
                  </a>
                </button>
              </div>
            </article>
            <article className="">
              <img
                src="./assets/share7.png"
                className="cursor-zoom-in"
                alt=""
              />
            </article>
          </div>
        </div>
      </div>
      {/* end of Additional Resources */}

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

export default ShareOptionFooter;
