import Wrapper from "../Components/Wrapper";
import Accordian, { AccordianItem } from "../Components/Accordian";
import { NavLink } from "react-router-dom";

const CourseContent = () => {
  return (
    <section className="py-8">
      <Wrapper styles={"px-0"}>
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col space-y-8">
            <div>
              <Accordian className="flex flex-col space-y-4">
                <AccordianItem value="1" trigger="Automate classroom tasks">
                  <div className="flex flex-col space-y-4">
                    <p className="hero_text">
                      Between teaching and administrative tasks, you might find
                      it challenging to get everything done each day. Technology
                      can’t add more hours to the day, but it can help you make
                      better use of the time you have. In this unit, you’ll
                      learn how to automate certain tasks using digital tools,
                      so you can spend more time on the work that truly matters.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/BoosEfficiency"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Boost your efficiency in Gmail
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/ExploreAdd-ons"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Explore add-ons in Google Workspace for
                                Education
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="2"
                  trigger="Communicate with parents and guardians"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="hero_text">
                      This unit will focus on establishing and maintaining
                      contact between you and your students’ guardians. By using
                      Google Workspace for Education tools, you can improve
                      communications while saving time. By knowing which tools
                      to use and how they work together, you’ll be able to make
                      communication with guardians a smoother process.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/GuardianInfo"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Organize guardians information with Google Forms
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  10 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/GoogleTools"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Create a communication system with Google tools
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/ManageMeeting"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Manage meetings with Google Workspace for
                                Education
                              </h3>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="3"
                  trigger="Organize your class materials"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="hero_text">
                      Google tools offer simple yet powerful solutions for
                      organizing your teaching materials and sharing them with
                      colleagues, students, and guardians. They can also help
                      you empower students to collect and reflect on the work
                      they’ve done in your classroom. This unit explores how
                      Google tools enable you to organize and share important
                      information both in your classroom and beyond.
                    </p>
                    {/* links */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/DigitalSyllabus"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Create a digital syllabus in Google Docs
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  8 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/DigitalPortfolio"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Create digital portfolios with Google Drive and
                                Sites
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  10 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="4"
                  trigger="Create an interactive learning environment"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="hero_text">
                      Classroom technology is at its best when it supports
                      engagement, collaboration, and self-directed exploration.
                      This unit explores some ideas for achieving these goals
                      with applications like Google Slides and Docs. By taking
                      advantage of the features these tools have to offer, you
                      can learn to use them in new ways and create innovative,
                      interactive learning experiences.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul class="activitysection__list courselist">
                        <li class="activitysection__item courselist__item">
                          <NavLink
                            to="/GoogleSlides"
                            class="double_click_protection"
                          >
                            <div class="courselist__marker"></div>
                            <div class="courselist__itemcontent">
                              <h3 class="u-headingitem activitysection__itemname hover:underline">
                                Deliver interactive presentations with Google
                                Slides
                              </h3>
                              <ul class="activitymeta activitymeta--inline">
                                <li class="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li class="activitysection__item courselist__item">
                          <NavLink
                            to="/GoogleMeet"
                            class="double_click_protection"
                          >
                            <div class="courselist__marker"></div>
                            <div class="courselist__itemcontent">
                              <h3 class="u-headingitem activitysection__itemname hover:underline">
                                Use Google Meet to Connect to the World
                              </h3>
                              <ul class="activitymeta activitymeta--inline">
                                <li class="activitymeta__item text-[12px]">
                                  8 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem value="5" trigger="Personalize student learning">
                  <div className="flex flex-col space-y-4">
                    <p className="hero_text">
                      This unit will discuss personalized learning models and
                      useful digital tools to help you implement these models in
                      the classroom. It will demonstrate which tools you can use
                      help you incorporate more opportunities to meet the
                      individual needs and interests of your students.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/ShareOption"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Share personalization options using Google
                                Workspace for Education
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  6 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/VisualizeLearning"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Visualize learning using Google Workspace for
                                Education
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/PublishWork"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Publish work online using Google tools
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/BestPractices"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Teaching and learning best practice
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="6"
                  trigger="Analyze and interpret student data
"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="hero_text">
                      As an educator, you collect a lot of data from your
                      students. With this data, you can better understand how
                      your students learn so you can adjust your teaching to
                      better suit their needs. This unit will discuss ways that
                      you can collect and analyze student data to interpret it
                      more effectively.
                    </p>
                    {/* links ===========> */}
                    <div className="">
                      <ul className="activitysection__list courselist">
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to="/Assessment"
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Deliver formative assessments with Google
                                Classroom and Forms
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./StudentProgress"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Visualize student results with Google Sheets
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                        <li className="activitysection__item courselist__item">
                          <NavLink
                            to={"./StudentGrowth"}
                            className="double_click_protection"
                          >
                            <div className="courselist__marker"></div>
                            <div className="courselist__itemcontent">
                              <h3 className="u-headingitem activitysection__itemname hover:underline">
                                Analyze data in Google Sheets
                              </h3>
                              <ul className="activitymeta activitymeta--inline">
                                <li className="activitymeta__item text-[12px]">
                                  5 m
                                </li>
                              </ul>
                            </div>
                          </NavLink>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordianItem>
              </Accordian>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default CourseContent;
