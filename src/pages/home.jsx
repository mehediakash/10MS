import React from "react";
import { FaStar } from "react-icons/fa";
import Containar from "../Components/Container";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";

const home = () => {
  return (
    <>
      <div
        className="bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')",
        }}
      >
        <Containar className={"relative"}>
          <div className="block  md:hidden pt-4">
            <div className="relative">
              <div>
                <img
                  name="IELTS Course by Munzereen Shahid"
                  alt="IELTS Course by Munzereen Shahid"
                  className="w-full"
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                ></img>
              </div>
              <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  fill="none"
                  viewBox="0 0 56 56"
                >
                  <circle
                    cx="28"
                    cy="28"
                    r="28"
                    fill="#fff"
                    fill-opacity="0.5"
                  ></circle>
                  <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                  <path
                    fill="#1CAB55"
                    d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                  ></path>
                </svg>
              </span>
              <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-[0px] left-0 "></div>

              <RiArrowLeftSLine
                size={25}
                className=" rounded-full absolute left-10 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white"
              />

              <RiArrowRightSLine
                size={25}
                className=" rounded-full absolute right-5 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white"
              />
            </div>
            <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
              <div className="relative youtubeVideofile  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
                <div className="rounded  transition-opacity duration-300 ease-in-out">
                  <img
                    name="preview_gallery"
                    alt="preview_gallery"
                    src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  ></img>
                </div>
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <img
                    name="Play The Video"
                    alt="Play The Video"
                    src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                  ></img>
                </div>
              </div>
              <div className="onlyimagefile relative   w-[55px] rounded cursor-pointer overflow-hidden  ">
                <div className="rounded  transition-opacity duration-300 ease-in-out">
                  <img
                    name="preview_gallery"
                    alt="preview_gallery"
                    src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div className="md:py-10 py-5 md:w-[720px] ">
            <h1 className="text-white  text-[21px] font-semibold md:text-4xl mb-2">
              IELTS Course by Munzereen Shahid
            </h1>
            <div className=" flex md:flex-row flex-col text-white gap-x-2 mb-2">
              <div className="flex gap-x-1 md:mb-0 mb-2">
                <FaStar className="text-[#FFA500]" size={20} />
                <FaStar className="text-[#FFA500]" size={20} />
                <FaStar className="text-[#FFA500]" size={20} />
                <FaStar className="text-[#FFA500]" size={20} />
                <FaStar className="text-[#FFA500]" size={20} />
              </div>
              <p>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
            </div>

            <p className="text-gray-400 text-base ">
              Academic IELTS এবং General Training IELTS- এর কমপ্লিট প্রিপারেশন
              নিন একটি কোর্সেই! দেশসেরা IELTS Instructor এর গাইডলাইনে আপনার
              কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করতে আজই জয়েন করুন আমাদের IELTS
              Course-এ।{" "}
            </p>
          </div>

          <div
            className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute
            right-0 md:top-[50px] md:absolute"
          >
            <div className="md:sticky md:top-[112px] ">
              <div className="md:border border-[#dbe1eb]">
                <div className="hidden p-1 md:block">
                  <div className="relative">
                    <div>
                      <img
                        name="IELTS Course by Munzereen Shahid"
                        alt="IELTS Course by Munzereen Shahid"
                        className="w-full"
                        src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                      ></img>
                    </div>
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="28"
                          fill="#fff"
                          fill-opacity="0.5"
                        ></circle>
                        <circle
                          cx="27.999"
                          cy="28"
                          r="25.415"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        ></path>
                      </svg>
                    </span>
                    <div className="bg-[rgba(0,0,0,0.5)] w-full h-full absolute top-[0px] left-0 "></div>

                    <RiArrowLeftSLine
                      size={25}
                      className=" rounded-full absolute left-10 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white"
                    />

                    <RiArrowRightSLine
                      size={25}
                      className=" rounded-full absolute right-5 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-white"
                    />
                  </div>
                  <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
                    <div className="relative youtubeVideofile  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
                      <div className="rounded  transition-opacity duration-300 ease-in-out">
                        <img
                          name="preview_gallery"
                          alt="preview_gallery"
                          src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                        ></img>
                      </div>
                      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <img
                          name="Play The Video"
                          alt="Play The Video"
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                        ></img>
                      </div>
                    </div>
                    <div className="onlyimagefile relative   w-[55px] rounded cursor-pointer overflow-hidden  ">
                      <div className="rounded  transition-opacity duration-300 ease-in-out">
                        <img
                          name="preview_gallery"
                          alt="preview_gallery"
                          src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737298483.png"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 mb-3 mt-4 flex items-center">
                  <p className=" text-2xl noto font-semibol flex items-center">
                    ৳3850
                  </p>{" "}
                  <del className="ml-2 noto text-base font-normal md:text-xl flex items-center">
                    ৳ 5000{" "}
                  </del>{" "}
                  <div class="c-Tukmu inline-block">
                    <p class="card-price">1150 ৳ ছাড়</p>
                  </div>
                </div>
                <div className="px-4">
                  <button class="  bg-[#1CAB55] noto rounded-md py-2 text-white whitespace-nowrap button primary text-center w-full centered-buttons">
                    কোর্সটি কিনুন
                  </button>
                </div>
                <div className=" noto p-1 md:block px-4">
                  <h2 className="my-5  text-xl noto font-semibold leading-[30px] text-black ">
                    এই কোর্সে যা থাকছে
                  </h2>
                  <div className="flex items-center mb-3 leading-5">
                    <div className="inline-block h-[20px] w-[20px]  ">
                      <img
                        name="icon"
                        alt="icon"
                        src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png"
                      ></img>
                    </div>
                    <h4 class="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                      কোর্সটি করছেন ৩২৯৯৫ জন
                    </h4>
                  </div>
                  <div className="flex items-center mb-3 leading-5">
                    <div className="inline-block h-[20px] w-[20px]  ">
                      <img
                        name="icon"
                        alt="icon"
                        src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                      ></img>
                    </div>
                    <h4 class="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                      সময় লাগবে ৫০ ঘন্টা
                    </h4>
                  </div>
                </div>
              </div>
              <p class="justify-between noto hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                <span class="flex items-center justify-center ml-2 underline cursor-pointer text-[#1CAB55]">
                  <IoIosCall size={20} />

                  <span class="ml-1">ফোন করুন (16910)</span>
                </span>
              </p>
            </div>
          </div>
        </Containar>
      </div>
      <Containar>
        <div className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div class="sticky top-[65px] z-20 hidden bg-white md:block">
            <div class="tenms-carousel relative  light right">
              <div class="w-full overflow-hidden">
                <div class="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 cursor-pointer mx-lg:hidden ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    fill="none"
                    viewBox="0 0 33 32"
                    class="xl:mr-[-40px]"
                  >
                    <path
                      fill="#000"
                      fill-opacity="0.5"
                      fill-rule="evenodd"
                      d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div class="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 cursor-pointer mx-lg:hidden pointer-events-none opacity-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    fill="none"
                    viewBox="0 0 33 32"
                    class="rotate-180 xl:ml-[-40px]"
                  >
                    <path
                      fill="#000"
                      fill-opacity="0.5"
                      fill-rule="evenodd"
                      d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                <ul class="flex my-4 border-b border-[#dbe1eb] flex-nowrap">
                  <li class="text-nowrap  p-2 text-base  text-gray-600 ">
                    <button></button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button></button>
                  </li>
                  <li class="text-nowrap p-2 text-base   border-b-2 border-[#1CAB55] text-[#1CAB55]">
                    <button>কোর্স ইন্সট্রাক্টর</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>কোর্সটি যেভাবে সাজানো হয়েছে</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button></button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>কোর্সটি করে যা শিখবেন</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>কোর্স সম্পর্কে বিস্তারিত</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>কোর্স এক্সক্লুসিভ ফিচার</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>এই কোর্সের সাথে ফ্রি পাচ্ছেন–</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>শিক্ষার্থীরা যা বলছে</button>
                  </li>
                  <li class="text-nowrap p-2 text-base  text-gray-600 ">
                    <button>সচরাচর জিজ্ঞাসা</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2000px]"></div>
      </Containar>
    </>
  );
};

export default home;
