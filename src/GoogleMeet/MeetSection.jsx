import React, { useState } from "react";
import SingleStep from "../Components/SingleStep";
import { SlBadge } from "react-icons/sl";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const MeetSection = () => {
  const [open, setOpen] = useState(false);
  const [review, setReview] = useState(false);

  const toggle1 = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
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
                    <a
                      href="#GlobalConnections"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Make global connections
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ExpandClassroom"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Expand your classroom with Google Meet
                        </h3>
                      </div>
                    </a>
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#PlanEvent" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Plan an event with Meet
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a
                      href="#ConnectLearning"
                      className="double_click_protection"
                    >
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          Connect learning to location through Google Earth
                        </h3>
                      </div>
                    </a>{" "}
                  </li>
                  <li className="activitysection__item courselist__item">
                    <a href="#GoogleEarth" className="double_click_protection">
                      <div className="courselist__marker1"></div>
                      <div className="courselist__itemcontent">
                        <h3 className="sm:text-[22px] text-[11.8px] activitysection__itemname section_links">
                          How educators use Google Earth
                        </h3>
                      </div>
                    </a>{" "}
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
                  src="./assets/meet2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Earth
                </h1>
              </div>
              <div className="flex items-center justify-start gap-3 bg-white rounded-[60px] py-2 px-12 border-[2.5px]  max-w-[29rem]">
                <img
                  src="./assets/meeting2.png"
                  className="w-[3.2rem] h-[3.2rem]"
                  alt=""
                />
                <h1 className="tools max-w-[12rem] leading-[1.6rem]">
                  Google Meet
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
              <img src="./assets/explore3.png" alt="" />
              <p className="text-center">
                Plan educational events with Google Meet
              </p>
            </article>
            <article
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1200"
              // data-aos-easing="ease-in-out"
              className="bg-[#E6E7E9] max-w-[20rem] grid place-items-center py-4 rounded-lg gap-y-5 px-4"
            >
              <img src="./assets/explore4.png" alt="" />
              <p className="text-center">
                Use Google Earth for location-based learning
              </p>
            </article>
          </div>
        </div>
      </div>
      {/*end of first section */}

      {/* 2 seCTION */}
      {/* Make global connections
       */}
      <div id="GlobalConnections" className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">Make global connections</h1>
            <p className="paragraph">
              Google Meet and Google Earth may seem like very different tools,
              but they both make it possible to extend learning opportunities
              beyond the walls of your classroom. By enabling your students to
              learn from experts over Meet or explore cities through Google
              Earth, you can help spark their curiosity about the wider world.{" "}
            </p>
            <p className="paragraph">
              In addition, using Google’s GEO tools like Street View, Google
              Arts and Culture, and My Maps, students and teachers can create
              their own maps and virtual tours, and explore areas and locations
              across the globe.
            </p>
            <p className="paragraph">
              Here are some ways you can use Google tools to explore the world
              beyond your classroom walls:
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="flex flex-col gap-4 justify-center">
              <ol className="list-disc pl-8 paragraph flex flex-col gap-5">
                <li>
                  With{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/streetview/"
                    className="text-[blue] underline"
                  >
                    <strong>Street View</strong>
                  </a>
                  , students can identify the types of stones used to build the
                  pyramids of Giza.&nbsp;
                </li>
                <li>
                  With{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://mymaps.google.com/"
                    className="text-[blue] underline"
                  >
                    <strong>My Maps</strong>
                  </a>
                  , students can create a map of which countries they've visited
                  and calculate the distance travelled.
                </li>
                <li>
                  With{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://earth.google.com/"
                    className="text-[blue] underline"
                  >
                    <strong>Google Earth</strong>
                  </a>
                  , students can trace Marco Polo’s journey through Asia.
                  Similarly, with Lit Trips interactive journeys, students can
                  plot geographical elements from a story or text so readers can
                  see the landscapes they are reading about. Teachers can
                  download ready-made Lit Trips or create their own using Google
                  Earth.
                </li>
                <li>
                  With{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://artsandculture.google.com/"
                    className="text-[blue] underline"
                  >
                    <strong>Google Arts and Culture</strong>
                  </a>
                  , students can access high-resolution images, watch videos of
                  artworks and cultural artifacts from partner cultural
                  organizations, explore places in 360, or play educational
                  interactive games.&nbsp;
                </li>
                <li>
                  With{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://meet.google.com/"
                    className="text-[blue] underline"
                  >
                    <strong>Google Meet</strong>
                  </a>
                  , students can interview subject matter experts, sync with
                  another classroom in another country, witness live events, and
                  more.
                </li>
              </ol>
            </article>
            <article className="">
              <img src="./assets/meet4.png" alt="" />
            </article>
          </div>
          <p className="paragraph pt-4">
            Explore more below to see how to use Google Meet and Google Earth to
            broaden the scope of student learning.
          </p>
        </div>
      </div>
      {/*end oF  2 seCTION */}

      {/* 3 seCTION */}
      {/* Expand your classroom with Google Meet
       */}
      <div
        id="ExpandClassroom"
        className="sm:pt-32 pt-12 pb-10 top-shadow bg-[#FFFFFF]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="text1 leading-[2.4rem]">
                Expand your classroom with Google Meet
              </h1>
              <p className="paragraph">
                Google Meet allows you to expand learning experiences beyond
                your classroom without the need for travel. It lets you host
                meetings, lectures, and conversations to engage students and
                expose them to ideas that might be otherwise unavailable. Video
                chats in Google Meet are available only to invited participants
                by default, so they’re a great option when organizing events for
                your class.
              </p>
            </div>

            {/* Accordian div */}
            {/* Accordian */}
            <div className="flex flex-col justify-end gap-4 mt-10">
              <p className="Bold">Click below to expand each item.</p>
              {/* Accordian */}
              <div>
                {data.map((curEle) => {
                  return (
                    <SingleStep
                      key={curEle.id}
                      {...curEle}
                      open={curEle.id === open}
                      toggle1={() => toggle1(curEle.id)}
                    />
                  );
                })}
              </div>
              {/*end of Accordian */}
            </div>
            {/*end of Accordian div */}
          </div>

          {/* last div */}
          <div className="flex items-center sm:gap-12 gap-9 border-[3px] border-[#4285f4] rounded-2xl sm:px-8 px-4 sm:py-6 py-5 md:mt-6 mt-3">
            <div>
              <SlBadge className="text-[2.4rem] text-[#4285f4]" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="paragraph">
                Did you know that you can do more with Google Meet inside of the
                <strong> Teaching and Learning</strong>, and{" "}
                <strong> Education Plus </strong>
                editions of Google Workspace for Education? With Google Meet
                you'll be able to livestream meetings publicly via YouTube, but
                only when enabled by a domain admintrator.
              </p>
              <p className="paragraph">
                These upgrades also enable you to record meetings and save them
                in Drive for future viewing. Another available option is to
                auto-transcribe meetings directly in a document for later
                reference. These transcripts require less storage space than
                recordings and provide an easy way to edit, review, search, and
                share lessons with students.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  3 seCTION */}

      {/* 4 seCTION */}
      {/* Plan an event with Meet
       */}
      <div
        id="PlanEvent"
        className="sm:pt-32 pt-12 sm:pb-20 pb-12 shadow-top-bottom-inner bg-[#F9F9FA]"
      >
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-0">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="text1 leading-[2.4rem]">
                Plan an event with Meet
              </h1>
              <p className="paragraph">
                Once you know what kind of event you’d like to host with Meet,
                it’s time to make a plan. Here are some steps you can take to
                ensure that your event runs as smoothly as possible.
              </p>
            </div>
            <div className="flex justify-center m-auto max-w-[38rem] w-full">
              <img src="./assets/meet6.png" alt="" />
            </div>

            {/* Accordian div */}
            {/* Accordian */}
            <div className="flex flex-col justify-end gap-4 mt-10">
              <p className="Bold">Click below to expand each item.</p>
              {/* Accordian */}
              <div>
                {data1.map((curEle) => {
                  return (
                    <SingleStep
                      key={curEle.id}
                      {...curEle}
                      open={curEle.id === open}
                      toggle1={() => toggle1(curEle.id)}
                    />
                  );
                })}
              </div>
              {/*end of Accordian */}
            </div>
            {/*end of Accordian div */}
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      {/* 5 seCTION */}
      {/* Connect learning to location through Google Earth
       */}
      <div id="ConnectLearning" className="sm:pt-20 pt-12 sm:pb-20 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <h1 className="text1 leading-[2.4rem]">
              Connect learning to location through Google Earth
            </h1>
            <p>
              Like Google Meet,&nbsp;
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://earth.google.com/"
                className="text-[blue] underline"
              >
                Google Earth
              </a>{" "}
              is a great tool for bringing the world outside into your
              classroom. It lets you travel the globe virtually and explore the
              terrain in 3D through satellite imagery, aerial photography, maps,
              and more. It also allows you to create tours, share locations,
              measure distances, and learn about the scientific and cultural
              features of different places. With Google Earth, you can teach
              students the importance of place, geography, the environment, and
              other topics as you take them around the world.
            </p>
          </div>
          {/* video div */}
          <div className="mt-5">
            <div className="flex flex-col gap-2 mt-2 max-w-[38rem] m-auto ">
              <p className="Bold mb-4">Click play to watch the video below.</p>
              <iframe
                //   width="800"
                //   height="600"
                src="https://www.youtube.com/embed/7EHnQ0VM4KY?si=LtrXq2i2uzzHChqw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="max-w-[905px]  md:h-[350px] min-h-[350px] "
              ></iframe>
            </div>
          </div>

          {/* last div */}
          <div className="mt-3">
            <div className="flex flex-col gap-1 items-center">
              <HiOutlineSpeakerphone className="text-[8rem] text-[#2484fc]" />
              <p className="text-[#5f6368] text-[16px] font-medium">
                Useful tip
              </p>
            </div>
            <p>
              You can access Google Earth{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/earth/versions/"
                className="text-[blue] underline"
              >
                on the web, mobile, or desktop
              </a>
              . This lesson focuses on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/earth/versions/#earth-for-web"
                className="text-[blue] underline"
              >
                the web version
              </a>
              , but some features are available only through the desktop
              version,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/earth/versions/#earth-pro"
                className="text-[blue] underline"
              >
                Google Earth Pro
              </a>
              . To learn more about Google Earth Pro, visit the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/earth/topic/4363013?hl=en&amp;ref_topic=7357865"
                className="text-[blue] underline"
              >
                Help Center
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/*end oF  5 seCTION */}

      <div className="bg-[url('/assets/meet7.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 6 seCTION */}
      {/* Take it to work: Take a trip with Voyager
       */}
      <div className="sm:pt-20 pt-12 sm:pb-16 pb-12 bg-[#F9F9FA] shadow-inner-large">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <h1 className="text">Take it to work: Take a trip with Voyager</h1>
            <p className="paragraph">
              Voyager is a feature in Google Earth that offers location-based
              storytelling through interactive media, allowing you to explore
              the world from a new perspective. It includes everything from
              guided tours of natural and cultural features to explorations of
              the Earth’s geological layers. You can access Voyager through the
              sidebar menu in Google Earth.
            </p>
            <p className="paragraph">
              Here are some of the categories and types of content you can
              explore in Voyager:
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            <article className="">
              <img src="./assets/meet8.png" alt="" />
            </article>
            <article className="flex flex-col gap-4 justify-center">
              <ol className="list-disc pl-10 paragraph">
                <li>
                  <strong> Nature:</strong> Watch how Earth’s natural features
                  have changed over time with timelapse animations. You can also
                  explore nature through virtual tours, live cams, and other
                  interactive features.
                </li>
                <li>
                  <strong>Games:</strong> Test your knowledge with interactive
                  quizzes about nature, history, and cultural traditions all
                  over the world.
                </li>
                <li>
                  <strong>Layers:</strong> Explore data like seafloor depth,
                  weather patterns, and geological changes on a 3D model of the
                  globe.
                </li>
                <li>
                  <strong>Street View:</strong> Discover locations around the
                  world by exploring them at the ground level.
                </li>
                <li>
                  <strong>Culture:</strong> Learn how historical and cultural
                  events relate to the places where they occurred.
                </li>
                <li>
                  <strong>Travel:</strong> Visit fascinating places around the
                  world and learn about local traditions, like Diwali in India
                  and the Rio Carnival in Brazil.
                </li>
                <li>
                  <strong>Education:</strong> Explore topics from math to
                  reading to history through interactive articles developed with
                  partners like NASA and National Geographic.
                </li>
              </ol>
            </article>
          </div>
          <p>
            To learn more about Google Earth and its features, visit the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://support.google.com/earth#topic=7364880"
              className="text-[blue] underline"
            >
              Google Earth Help Center
            </a>
            .
          </p>
        </div>
      </div>
      {/*end oF  6 seCTION */}

      {/* 5 seCTION */}
      {/* How educators use Google Earth
       */}
      <div id="GoogleEarth" className="sm:pt-20 pt-12 sm:pb-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-6">
          {/* first div */}
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              How educators use Google Earth
            </h1>
          </div>
          {/* second div */}
          <div className="flex flex-col gap-7 mt-8">
            <p className="Bold">
              Click start to see more ideas from educators.
            </p>
            {/* cards ======> */}
            <div
              className={`grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-3 place-items-center ${
                review ? "hidden" : "block"
              }`}
            >
              <article
                // data-aos="fade-up"
                // data-aos-delay="50"
                // data-aos-duration="1200"
                className="grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4 max-w-[16rem] w-full"
              >
                <img src="./assets/meet20.png" className="w-12 h-12" alt="" />
              </article>
              <article
                // data-aos="fade-up"
                // data-aos-delay="50"
                // data-aos-duration="1200"
                className="max-w-[16rem] w-full grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4"
              >
                <img src="./assets/meet21.png" className="w-12 h-12" alt="" />
              </article>
              <article
                // data-aos="fade-up"
                // data-aos-delay="50"
                // data-aos-duration="1200"
                className="max-w-[16rem] w-full grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4"
              >
                <img
                  src="./assets/portfolio12.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
              <article
                // data-aos="fade-up"
                // data-aos-delay="50"
                // data-aos-duration="1200"
                className="max-w-[16rem] w-full grid place-items-center pt-6 pb-10 bg-[#DADCE0] rounded-lg gap-y-5 px-4"
              >
                <img
                  src="./assets/portfolio13.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
            </div>
            {/* button */}
            <button
              onClick={() => setReview(true)}
              className={`bg-[#4285F4] text-white m-auto py-3 px-4 font-bold mt-1 ${
                review ? "hidden" : "block"
              }`}
            >
              Start
            </button>
          </div>
          {/* usestate */}
          {/* third div */}
          <div className={`flex flex-col gap-1 ${review ? "block" : "hidden"}`}>
            {/* first card */}
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={`grid place-content-start max-w-[50rem] w-full`}
            >
              <article className="bg-[#DADCE0] flex justify-around  items-center rounded-lg sm:gap-x-10 gap-x-6 sm:pl-20 px-8 py-4 sm:py-6">
                <img src="./assets/meet20.png" className="w-12 h-12" alt="" />
                <p className="paragraph">
                  "In History class, we use Google Earth to track the routes of
                  explorers. We placemark important locations, draw the routes,
                  and we turn off the 3D buildings layer to see how the
                  landscape might have looked to the explorers."
                </p>
              </article>
            </div>
            {/* second card */}
            <div
              data-aos="fade-right"
              data-aos-delay="60"
              data-aos-duration="1200"
              className={`grid place-content-end w-full`}
            >
              <article className="bg-[#DADCE0] flex sm:gap-x-10 gap-x-6 px-8 py-4 sm:py-6 items-center sm:pr-20 rounded-lg justify-between max-w-[50rem]">
                <p className="paragraph">
                  "In Science, we use Google Earth to mark the locations of
                  earthquakes and volcanoes. Photos, islands, and geographic
                  features in satellite imagery help us to collect information
                  and learn about plate tectonics."
                </p>
                <img src="./assets/meet21.png" className="w-12 h-12" alt="" />
              </article>
            </div>
            {/* third card */}
            <div
              data-aos="fade-left"
              data-aos-delay="60"
              data-aos-duration="1300"
              className={`grid place-content-start w-full`}
            >
              <article className="bg-[#DADCE0] flex justify-around items-center sm:gap-x-10 gap-x-6 sm:pl-20 px-8 py-4 sm:py-6 rounded-lg max-w-[50rem]">
                <img
                  src="./assets/portfolio12.png"
                  className="w-12 h-12"
                  alt=""
                />
                <p className="paragraph">
                  "My students really enjoy using Google Earth to research
                  animal habitats. After students classify animals by habitat,
                  they use Google Earth to locate the specific habitat and
                  placemark it, and add pictures and information detailing how
                  the habitat is unique."
                </p>
              </article>
            </div>
            {/* fourth card */}
            <div
              data-aos="fade-right"
              data-aos-delay="60"
              data-aos-duration="1200"
              className={`grid place-content-end w-full`}
            >
              <article className="bg-[#DADCE0] flex sm:gap-x-10 gap-x-6 px-8 py-4 sm:py-6 items-center sm:pr-20 rounded-lg justify-between max-w-[50rem]">
                <p className="paragraph">
                  "Google Earth is a powerful tool that helps students
                  understand how to estimate distances. My students use the
                  ruler and path tools to measure how far familiar places are
                  from their homes."
                </p>
                <img
                  src="./assets/portfolio13.png"
                  className="w-12 h-12"
                  alt=""
                />
              </article>
            </div>
            {/* fifth card */}
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className={`grid place-content-start max-w-[50rem] w-full`}
            >
              <article className="bg-[#DADCE0] flex justify-around  items-center rounded-lg sm:gap-x-10 gap-x-6 sm:pl-20 px-8 py-4 sm:py-6">
                <img src="./assets/meet20.png" className="w-12 h-12" alt="" />
                <p className="paragraph">
                  "I use Google Earth with my students to learn about
                  sustainable development goals and apply them to project-based
                  learning. We look at what is happening in our community and
                  brainstorm on how we can make it healthier and more
                  sustainable. The students then map out where they would like
                  to see more green spaces, bike paths, protected watersheds …
                  they come up with a plan for their future!"
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/*end oF  4 seCTION */}

      <div className="bg-[url('/assets/meet22.png')] md:h-[120px] sm:h-[110px] h-[70px] bg-no-repeat bg-center bg-cover "></div>

      {/* 7 sEctIOn */}
      {/* Reflect on what you have learned */}
      <div className="sm:pt-20 pt-16 pb-12">
        <div className="max-w-[960px] w-[92vw] m-auto flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text1 leading-[2.4rem]">
              Reflect on what you have learned
            </h1>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
            {/* TEXt */}
            <article className="flex flex-col gap-4 md:col-span-2">
              <p className="paragraph">
                In this lesson, you've learned how to use to plan educational
                events and location-based learning using Google Earth and Google
                Meet.
              </p>
              <div className="flex flex-col gap-4 md:col-span-1">
                <p className="font-bold">
                  Consider the following and make a note of your answers.
                </p>
                <ol className="list-decimal pl-12 paragraph">
                  <li>
                    Who in your network might you invite into your classroom via
                    Google Meet for an expert talk or panel?
                  </li>
                  <li>
                    What might you explore in Google Earth to connect learning
                    to location in your classroom?
                  </li>
                </ol>
              </div>
            </article>
            <article className="md:mt-0 mt-3">
              <img src="./assets/portfolio16.png" alt="" />
            </article>
          </div>
        </div>
      </div>
      {/*END oF 7 sEctIOn */}
    </div>
  );
};

export default MeetSection;

const data = [
  {
    id: 1,
    title: "Invite experts to speak with your students about relevant topics",
    info: `For example, if your students are learning about anatomy, you could plan a meeting with a doctor to discuss what it’s like to work in that field. No matter what you teach, Meet makes it possible to talk to experts all over the world — not just those who can visit your school in person.`,
  },
  {
    id: 2,
    title: "Give students a way to present their work",
    info: `With Meet, your students can share their accomplishments with the school community and beyond. You could arrange for your class to present projects to parents, guardians, or others who may be interested. For instance, if your students have written essays about a book they’ve read, they could share some highlights with the author over Meet.`,
  },
  {
    id: 3,
    title: "Connect with classes around the world",
    info: `If your class corresponds with students in a different part of the world, they can learn more about each other over voice or video chat. Meet can also be a great way for students who are studying a language to practice their conversational skills.

`,
  },
];

const data1 = [
  {
    id: 4,
    title: "Review Policies",
    info: `Before you start planning the event, review your school’s policies on guest speakers and media permissions. Many schools require prior authorization for guests to interact with a class, whether virtually or in person. You may also need parent or guardian permissions if students will be on camera, so be sure to start this process early.`,
  },
  {
    id: 5,
    title: "Connect with Guests",
    info: `As you’re planning the event, it’s a good idea to discuss logistics and expectations with your guest(s). For example, they should know how to connect to the meeting, its timing, length, and other details well in advance. You could also consider collecting student questions ahead of time and sharing them with your guests. If everyone involved understands what’s happening, they’ll be able to have a more rewarding experience.`,
  },
  {
    id: 6,
    title: "Prepare the space",
    info: `Once you’ve planned and scheduled the event, it’s time to think about the meeting space. For example, you might arrange the seats differently if you’re using a laptop than if you’re projecting the meeting on a screen. You should also think about how your guest(s) will see the meeting. If you want them to have a view of your whole class, consider setting up a webcam in front of the room. There are also technical considerations, like the strength of the internet connection in the room, that you may want to check ahead of time.

`,
  },
  {
    id: 7,
    title: "Test the technology",
    info: `Testing the meeting ahead of time can help you avoid technical issues during the event. If possible, involve your guest(s) in the test call, so they can resolve any problems on their end. If they’re not available, you could ask someone else to help you check the technology or provide support.

`,
  },
  {
    id: 8,
    title: "Rehearse the event",
    info: `Make a rough outline of the event before it begins. Think about how much time introductions and questions might take. Then, review this schedule with your students. If they will contribute to the event, take some time to answer their questions and explain how and when they should participate. If they’re new to Meet, you could also have them practice speaking to the camera at a good volume.
`,
  },
];
