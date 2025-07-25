import React from "react";
import { FaStar } from "react-icons/fa";
import Containar from "../Components/Container";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

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

          <div id="instructors">
            <div className="mb-7 xs:bg-[#EEF2F4] xs:pt-2">
              <div className="pt-4 pb-2 bg-white">
                <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                  কোর্স ইন্সট্রাক্টর
                </h2>
                <div className="flex items-center md:rounded-md md:border border-[#dbe1eb] md:p-5">
                  <div>
                    <div
                      className="rounded-[50%] overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: "0px", opacity: 1 }}
                    >
                      <img
                        name="Instructor Munzereen Shahid"
                        alt="Instructor Munzereen Shahid"
                        src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
                        loading="lazy"
                        width="73"
                        height="73"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex-1 ml-4 items-center justify-center">
                    <h3 className="text-lg">
                      <a
                        className="flex items-center hover:text-[#1CAB55]"
                        href="/skills/instructors/munzereen-shahid/"
                      >
                        Munzereen Shahid
                        <span className="ml-2 pb-[2px]">
                          <MdKeyboardArrowRight />
                        </span>
                      </a>
                    </h3>
                    <div className="text-sm">
                      <p>
                        MSc (English), University of Oxford (UK);
                        <br />
                        BA, MA (English), University of Dhaka;
                        <br />
                        IELTS: 8.5
                      </p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="features">
            <div className="flex flex-col gap-3">
              <h2 className=" text-xl font-semibold leading-[30px] text-black">
                কোর্সটি যেভাবে সাজানো হয়েছে
              </h2>
              <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
                {/* Feature 1 */}
                <div className="flex flex-row items-start gap-3 m-1 ">
                  <div>
                    <div
                      className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: "0px", opacity: 1 }}
                    >
                      <img
                        name="৫০+ ভিডিও লেকচার"
                        alt="৫০+ ভিডিও লেকচার"
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                      ৫০+ ভিডিও লেকচার
                    </h2>
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                      IELTS Academic ও General Training এর Overview, Format ও
                      প্রশ্নের ধরন নিয়ে in-depth আলোচনা
                    </h2>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-row items-start gap-3 m-1 ">
                  <div>
                    <div
                      className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: "0px", opacity: 1 }}
                    >
                      <img
                        name="৩৮টি লেকচার শিট"
                        alt="৩৮টি লেকচার শিট"
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_1684919669537.png"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                      ৩৮টি লেকচার শিট
                    </h2>
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                      Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের
                      উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary
                    </h2>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-row items-start gap-3 m-1 ">
                  <div>
                    <div
                      className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: "0px", opacity: 1 }}
                    >
                      <img
                        name="রিডিং এন্ড লিসিনিং মক টেস্ট"
                        alt="রিডিং এন্ড লিসিনিং মক টেস্ট"
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604652_1684919731714.png"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                      রিডিং এন্ড লিসিনিং মক টেস্ট
                    </h2>
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                      10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি
                      যাচাই
                    </h2>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-row items-start gap-3 m-1 ">
                  <div>
                    <div
                      className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: "0px", opacity: 1 }}
                    >
                      <img
                        name="ডাউট সল্ভিং লাইভ ক্লাস"
                        alt="ডাউট সল্ভিং লাইভ ক্লাস"
                        src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604649_%281%29_1684919813933.png"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="text-[18px] font-[500px] leading-[26px] text-white">
                      ডাউট সল্ভিং লাইভ ক্লাস
                    </h2>
                    <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                      সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং
                      এর সুযোগ
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="group_join_engagement">
            <div
              className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
              style={{
                backgroundImage:
                  'url("https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png")',
                backgroundSize: "cover",
              }}
            >
              <div className="w-full md:w-1/2">
                <img
                  src="https://cdn.10minuteschool.com/images/catalog/product/pointer/467478234_1276985680016189_8175110495169425888_n_1732621150265.png"
                  className="mb-4"
                  style={{ height: "40px" }}
                  alt="Guideline Banner"
                />
                <h2
                  className="text-xl font-semibold"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  IELTS Confirm 7+ Score (Guideline)
                </h2>
                <p
                  className="mt-2 text-base"
                  style={{ color: "rgb(237, 237, 237)" }}
                >
                  IELTS ভালো score করার সেরা Strategies জানুন সেরাদের গাইডলাইনে
                  ।
                </p>
                <button className="mt-6 button primary">
                  ফ্রি PDF Download করুন
                </button>
              </div>
              <div className="items-center hidden w-1/2 md:flex">
                <img
                  src="https://cdn.10minuteschool.com/images/catalog/product/pointer/Thumbnail_for_IELTS_Course_by_MS_1732621023962.jpg"
                  height="200"
                  alt="IELTS Course Thumbnail"
                />
              </div>
            </div>
          </div>
          <div id="pointers">
            <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
              <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
                <div className="">
                  <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                    কোর্সটি করে যা শিখবেন
                  </h2>
                  <div className="rounded-md md:border border-[#dbe1eb]">
                    <div className="pt-2 md:p-6">
                      <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                        <li className="flex items-start gap-2 mb-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(98, 148, 248)" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="flex-1">
                            IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের
                            ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস,
                            ট্রিকস ও স্ট্র্যাটেজি
                          </div>
                        </li>
                        <li className="flex items-start gap-2 mb-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(98, 148, 248)" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="flex-1">
                            IELTS Writing Task 1 ও IELTS Writing Task 2 এর
                            ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay
                            type
                          </div>
                        </li>
                        <li className="flex items-start gap-2 mb-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(98, 148, 248)" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="flex-1">
                            IELTS Speaking test-এ Advanced/ Power Words ব্যবহার
                            করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি
                          </div>
                        </li>
                        <li className="flex items-start gap-2 mb-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(98, 148, 248)" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="flex-1">
                            সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের
                            নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা
                          </div>
                        </li>
                        <li className="flex items-start gap-2 mb-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(98, 148, 248)" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="flex-1">
                            IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের
                            মাধ্যমে ভালো স্কোর অর্জনের কৌশল
                          </div>
                        </li>
                        <li className="flex items-start gap-2 mb-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="mr-1 mt-[2px]"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(98, 148, 248)" }}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="flex-1">
                            IELTS Reading এবং IELTS Listening Mock Test এর
                            মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band
                            Score সম্বন্ধে পরিপূর্ণ ধারণা
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content_preview">
            <div className="mb-6">
              <div className="flex justify-between w-full">
                <h2 className="mb-2 text-xl font-semibold md:mb-4">
                  কন্টেন্ট প্রিভিউ
                </h2>
              </div>
              <div className="relative mb-20">
                <div className="rounded-md md:border border-[#dbe1eb] md:px-5">
                  <details
                    open
                    className="border-b border-dashed border-[#dbe1eb] last:border-0"
                  >
                    <summary className="py-4 font-medium cursor-pointer">
                      <h3 className="font-semibold">Introduction</h3>
                    </summary>
                    <ul>
                      <li className="mb-4 flex cursor-pointer hover:text-[#1CAB55]">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#1CAB55]"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                            />
                            <path
                              fill="#fff"
                              d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          Video: IELTS: Introduction
                        </h4>
                        <span className="text-[#1CAB55]">ফ্রি দেখুন</span>
                      </li>
                      <li className="mb-4 flex cursor-pointer hover:text-[#1CAB55]">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#1CAB55]"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                            />
                            <path
                              fill="#fff"
                              d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          Video: IELTS: Overview
                        </h4>
                        <span className="text-[#1CAB55]">ফ্রি দেখুন</span>
                      </li>
                      <li className="mb-4 flex cursor-pointer hover:text-[#1CAB55]">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#1CAB55]"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                            />
                            <path
                              fill="#fff"
                              d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          Video: How to Prepare for IELTS?
                        </h4>
                        <span className="text-[#1CAB55]">ফ্রি দেখুন</span>
                      </li>
                      <li className="mb-4 flex cursor-pointer hover:text-[#1CAB55]">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#1CAB55]"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                            />
                            <path
                              fill="#fff"
                              d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          Video: Making a Daily Routine
                        </h4>
                        <span className="text-[#1CAB55]">ফ্রি দেখুন</span>
                      </li>
                      <li className="mb-4 flex">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#9CA3AF]"
                          >
                            <path
                              fill="currentColor"
                              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z"
                            />
                            <path
                              fill="#fff"
                              d="M14.217 10.886c.503-.448.503-1.324 0-1.772a17.547 17.547 0 00-5.024-3.166l-.33-.135c-.633-.26-1.3.234-1.386.987a28.617 28.617 0 000 6.4c.085.753.753 1.246 1.386.987l.33-.135a17.548 17.548 0 005.024-3.166z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          Video: Different Sentence Structures to Improve
                          Writing
                        </h4>
                      </li>
                      <li className="mb-4 flex">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#9CA3AF]"
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="currentColor"
                            />
                            <path
                              fill="#fff"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          IELTS General Facts
                        </h4>
                      </li>
                      <li className="mb-4 flex">
                        <span className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                            size="24"
                            className="text-[#9CA3AF]"
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="10"
                              fill="currentColor"
                            />
                            <path
                              fill="#fff"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.855 5h4.19c1.545 0 2.405.89 2.405 2.415v5.165c0 1.55-.86 2.42-2.404 2.42H7.855c-1.52 0-2.405-.87-2.405-2.42V7.415C5.45 5.89 6.335 5 7.855 5zm.135 2.33v-.005h1.494a.392.392 0 010 .785H7.99a.39.39 0 010-.78zm0 3.04h3.92a.39.39 0 000-.78H7.99a.39.39 0 000 .78zm0 2.285h3.92c.2-.02.35-.19.35-.39a.392.392 0 00-.35-.395H7.99a.397.397 0 00-.375.605c.08.125.225.2.375.18z"
                            />
                          </svg>
                        </span>
                        <h4 className="flex-1 text-sm text-gray-500">
                          IELTS Vocabulary
                        </h4>
                      </li>
                    </ul>
                  </details>

                  <details className="border-b border-dashed border-[#dbe1eb] last:border-0">
                    <summary className="py-4 font-medium cursor-pointer">
                      <h3 className="font-semibold">
                        IELTS Course by Munzereen Shahid | Exclusive Support
                        Group
                      </h3>
                    </summary>
                  </details>

                  <details className="border-b border-dashed border-[#dbe1eb] last:border-0">
                    <summary className="py-4 font-medium cursor-pointer">
                      <h3 className="font-semibold">Academic Reading</h3>
                    </summary>
                  </details>

                  <details className="border-b border-dashed border-[#dbe1eb] last:border-0">
                    <summary className="py-4 font-medium cursor-pointer">
                      <h3 className="font-semibold">
                        Academic Reading Mock Test
                      </h3>
                    </summary>
                  </details>

                  <details className="border-b border-dashed border-[#dbe1eb] last:border-0">
                    <summary className="py-4 font-medium cursor-pointer">
                      <h3 className="font-semibold">Listening</h3>
                    </summary>
                  </details>
                </div>

                <button className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                  সকল কন্টেন্ট
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div id="about">
            <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px]">
              <div className="mt-10 md:mt-0">
                <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
                  কোর্স সম্পর্কে বিস্তারিত
                </h2>
                <div className="rounded-lg py-2 md:border md:px-5">
                  <details
                    className="mb-0 border-b border-dashed last:border-none"
                    open
                  >
                    <summary className="py-4 cursor-pointer">
                      <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                        <h2>
                          <b>IELTS Course-টি যাদের জন্য</b>
                        </h2>
                      </div>
                    </summary>
                    <div className="px-0 pb-2 text-gray-500">
                      <div className="prose prose-ul:pl-4">
                        <li>
                          যারা উচ্চশিক্ষা, মাইগ্রেশন বা চাকরির জন্য বিদেশে যেতে
                          চান।
                        </li>
                        <li>
                          যারা উচ্চশিক্ষা শেষে বা দেশে বসবাসরত অবস্থায় বিদেশে
                          স্থায়ীভাবে বসবাসের জন্য আবেদন করতে চান।
                        </li>
                        <li>
                          IELTS পরীক্ষা যাদের জন্য ভীতিকর, কিংবা যারা IELTS
                          প্রস্তুতি কোথা থেকে শুরু করবেন তা জানেন না।
                        </li>
                        <li>
                          যারা আগে পরীক্ষা দিয়েছেন কিন্তু নিজের IELTS Band Score
                          বাড়াতে চান।
                        </li>
                        <li>
                          যারা চাকরি বা ব্যবসার কাজে কিংবা ব্যক্তিগত আগ্রহে
                          নিজেদের reading, writing, listening এবং speaking
                          দক্ষতা বাড়াতে চান।
                        </li>
                        <li>
                          স্টুডেন্ট কিংবা চাকরিজীবীদের মধ্যে যারা ব্যস্ততার
                          কারনে ঘরে বসেই IELTS এর জন্য সেরা প্রস্তুতি নিতে চান।
                        </li>
                      </div>
                    </div>
                  </details>

                  <details className="mb-0 border-b border-dashed last:border-none">
                    <summary className="py-4 cursor-pointer">
                      <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                        <h2>
                          <b>IELTS Course-টি কোর্স সম্পর্কে</b>
                        </h2>
                      </div>
                    </summary>
                    <div className="px-0 pb-2 text-gray-500">
                      <div className="prose prose-ul:pl-4">
                        <p>
                          যুক্তরাষ্ট্রের ৩,৪০০ প্রতিষ্ঠানসহ পৃথিবীর ১১ হাজারেরও
                          বেশি প্রতিষ্ঠানে IELTS exam score এর গ্রহণযোগ্যতা
                          রয়েছে। এই পরীক্ষায় অত্যন্ত সুনিপুণভাবে পরীক্ষার্থীর
                          ইংরেজি বলা, পড়া, শোনা ও লেখার ক্ষমতাকে যাচাই করা হয়।
                        </p>
                        <br />
                        <p>
                          বিদেশি ভাষা হওয়ায় অনেকেই ইংরেজি গ্রামার নিয়ে ভয়ে
                          থাকেন। তবে আনন্দের কথা হলো, IELTS পরীক্ষাটি
                          ব্যাকরণভিত্তিক নয়। এটি মূলত একটি ভাষাভিত্তিক নিরীক্ষা
                          পদ্ধতি। কাঙ্ক্ষিত স্কোর অর্জনের জন্য ইংরেজি ভাষার
                          চারটি দক্ষতা আপনার প্রয়োজন: পড়তে পারা, লিখতে পারা,
                          শুনে বুঝতে পারা, ও বলতে পারা। এই চারটি ক্ষেত্রে যিনি
                          যত দক্ষ হবেন, IELTS পরীক্ষায় তিনি তত ভালো স্কোর পাবেন।
                        </p>
                        <br />
                        <p>
                          ইংরেজি ভাষার এই চারটি অত্যাবশ্যক দক্ষতা বাড়াতে টেন
                          মিনিট স্কুল নিয়ে এসেছে{" "}
                          <a
                            href="https://10minuteschool.com/ielts"
                            style={{ color: "blue" }}
                          >
                            IELTS
                          </a>{" "}
                          পরীক্ষার্থীদের জন্য বিশেষভাবে সাজানো এই IELTS
                          Course-টি। কোর্সটির শিক্ষক মুনজেরিন শহীদ (IELTS
                          ব্যান্ড স্কোর 8.5/9) ইংল্যান্ডের বিশ্বখ্যাত অক্সফোর্ড
                          বিশ্ববিদ্যালয়ের Department of Education হতে Applied
                          Linguistics and Second Language Acquisition বিষয়ে
                          স্নাতকোত্তর ডিগ্রী গ্রহণ করেছেন।
                        </p>
                        <br />
                        <p>
                          আমাদের এই কোর্সটিতে এনরোল করলেই পাবেন মুনজেরিন শহীদের
                          “ঘরে বসে IELTS প্রস্তুতি” বইটি সম্পূর্ণ ফ্রিতে!
                          কোর্সের ভিডিও লেকচারের পাশাপাশি বই থেকে স্ট্র্যাটেজি
                          শিখে ও প্র্যাকটিস করে সম্পূর্ণ প্রস্তুতি নিতে পারবেন।
                          এই কোর্সটিতে আরও থাকছে IELTS Reading ও Listening Mock
                          Test, যা আপনাকে দিবে IELTS পরীক্ষার রিয়েল
                          এক্সপেরিয়েন্স এবং ব্যান্ড স্কোর সম্বন্ধে ধারণা। এছাড়াও
                          প্র্যাক্টিসের সময় যেকোনো প্রবলেমের সমাধানের জন্য রয়েছে
                          Expert Instructor-দের Problem Solving Live class।
                          সুতরাং এবার এক IELTS Course-এ থাকছে Complete IELTS
                          Preparation!
                        </p>
                        <br />
                        <p>
                          আপনার IELTS পরীক্ষাকে আরো সহজ, উপভোগ্য ও ফলপ্রসূ করতে
                          এবং কাঙ্ক্ষিত ব্যান্ড স্কোরটি পেতে আজই এনরোল করুন
                          “IELTS Course by Munzereen Shahid”-এ, আর নিজেকে এগিয়ে
                          নিয়ে যান আপনার স্বপ্নপূরণের দ্বারপ্রান্তে।
                        </p>
                      </div>
                    </div>
                  </details>

                  <details className="mb-0 border-b border-dashed last:border-none">
                    <summary className="py-4 cursor-pointer">
                      <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm">
                        <h2>
                          <b>এই IELTS Course-টি আপনাকে যেভাবে সাহায্য করবে</b>
                        </h2>
                      </div>
                    </summary>
                    <div className="px-0 pb-2 text-gray-500">
                      <div className="prose prose-ul:pl-4">
                        <li>
                          “Academic IELTS” ও “General Training IELTS” - উভয়
                          মডিউলের জন্যই কার্যকরভাবে ঘরে বসে প্রস্তুতি নিতে
                          পারবেন। এই IELTS Course টিতে দুটো মডিউলের জন্যই আলাদা
                          দুটো সেকশন রয়েছে।
                        </li>
                        <li>
                          IELTS speaking, reading, listening ও writing test-এর
                          প্রশ্নের ধরন অনুযায়ী টিপস, হ্যাকস ও টেকনিক শিখতে
                          পারবেন।
                        </li>
                        <li>
                          IELTS এর সব ধরনের প্রশ্ন সঠিকভাবে সমাধান করে হাতে কলমে
                          প্রস্তুতি নিতে পারবেন।
                        </li>
                        <li>
                          ভিডিও দেখার পাশাপাশি IELTS Course-এ থাকা লেকচার শিট,
                          “ঘরে বসে IELTS প্রস্তুতি” বই এবং Doubt Solving Live
                          Class-এর মাধ্যমে নিতে পারবেন কমপ্লিট প্রিপারাশন।
                        </li>
                        <li>
                          কোর্স শেষ করার পর IELTS Reading and Listening mock
                          test প্রশ্ন সল্‌ভ করার মাধ্যমে নিজের IELTS প্রস্তুতি
                          ঝালিয়ে নিতে পারবেন।
                        </li>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Containar>
    </>
  );
};

export default home;
