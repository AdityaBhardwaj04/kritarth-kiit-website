import React from "react";
import { event } from "../Data";
import { useNavigate } from "react-router-dom";
import { imageslider } from "../Data";
import { useState } from "react";
import { useEffect } from "react";
import kritarthlogo from "../images/kritarth logo 1 1.png";
import cursor from "../images/cursor1.png";
import { Link } from "react-router-dom";
import bg from "../images/Background_Image.png"

const About = (props) => {
  const [currentState, setcurrentState] = useState(0);
  const navigate = useNavigate();
  let setleads = props.setleads;

  const handleClick = (abouts) => () => {
    setleads(abouts);
    navigate("/events");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 5000); // Set the desired interval time (in milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <div className="w-[100vw]">
        <div className="max-w-[1920px] p-3 xl:p-0 flex flex-col mx-auto">
          <div className="relative w-full xl:w-[1162px] h-[500px] mx-auto bg-transparent md:mt-[40px]">
            {/* <img src={img1} alt="Event image" className=' object-fill max-h-[700px] w-full' /> */}
            {imageslider.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.url}
                className={`animate-fade-in h-[500px] brightness-50  absolute inset-0 z-5 translatey-[30px] opacity-1 ease-out w-full rounded-lg object-cover transform
                            ${currentIndex === 2 ? "animate-from-bottom" : ""}
                            ${index === currentIndex ? "block" : "hidden"}
                        `}
              />
            ))}
            <div className="absolute flex md:flex-row flex-col justify-between items-center top-0 bottom-0 w-full h-full">
              <div className="w-[230px] md:w-[40%] h-full flex flex-col justify-center gap-8 md:gap-8 items-center">
                <div className="relative mt-2 md:mt-0 ml-[0px] md:ml-[15px]">
                  <img src={kritarthlogo} alt="" />
                  <h1 className="absolute bottom-[0px] right-[25px] text-xl md:text-2xl lg:text-4xl text-white leading-3 font-normal font-poppins">
                    HEARTS OF HOPE
                  </h1>
                </div>
                <Link to={"/commingsoon"}>
                  <button className="bg-[#3CA465] cursor-pointer text-[20px] text-white font-medium py-2 px-4 mt-[0px] md:mt-[40px] rounded-xl inline-flex items-center">
                    <span className="-translate-y-[2px] font-Rubik">
                      Register
                    </span>
                    <img
                      src={cursor}
                      alt=""
                      className="w-[18px] h-[18px] -translate-y-[2px] text-white fill-current ml-2"
                    />
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-[60%] flex items-center justify-center h-full">
                <div className="mx-1 ml:ml-0 md:mr-6 mb-1 md:mb-0 md:px-7 px-2 py-2 md:py-6 lg:py-9 xl:py-10 xl:px-12 rounded-[10px] md:rounded-[20px] flex items-center justify-center bg-black/20 shadow-md backdrop-blur-sm border-solid border-[0.795px] border-[#7F7F7F]">
                  <div className="text-white text-justify font-semibold text-xs sm:text-sm xl:text-lg md:leading-[27px] tracking-wide md:tracking-widest font-Mulish">
                  Hearts of Hope' depicts multiple hearts yearning for the same thing:
                  the hope of being absorbed into a family or being among loved ones,
                  and most importantly, the hope of being recognised, treasured, and
                  sincerely loved, possibly even enjoying a laugh together. In the face
                  of adversity, these hearts would beat with exquisite rhythms, nurturing
                  the seeds of opportunity that each of us carries. Setbacks would be
                  transformed into stepping stones, and the spirit of tenacity would
                  grow. Hearts of Hope is a place where triumph comes from adversity.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 xl:p-0 max-w-[1162px] w-full mx-auto md:mt-12">
            <div className="w-full grid lg:grid-cols-2 grid-cols-1 h-full gap-12 md:gap-[100px]">
              {event.map((abouts, i) => {
                return (
                  <div
                    key={i}
                    onClick={handleClick(abouts.id)}
                    className=" cursor-pointer rounded-xl "
                  >
                    <img src={abouts.url} alt="" className="w-full h-full rounded-xl hover:scale-105 translate-3 duration-200 object-cover" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 -z-20 left-0 w-[100vw] h-[100vh]">
      {/* {imageslider.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={image.url}
                        className={`animate-fade-in  brightness-50 bg-black h-[100vh] w-[100vw] absolute inset-0 z-5 opacity-1 ease-out object-cover transform
                            ${currentIndex === 2 ? "animate-from-bottom":""}
                            ${index === currentIndex ? "block" : "hidden"}
                        `}
                    />
                ))} */}
      {/* <img src={bg} alt="background" className='absolute object-cover top-0 left-0   w-[100vw]'/>  */}
      
      <img
        src={bg}
        alt="bg"
        className="  fixed top-0 object-cover -z-20 right-0 w-[100vw] h-[100vh]"
      />

      </div> 
    </div>
  );
};
export default About;
