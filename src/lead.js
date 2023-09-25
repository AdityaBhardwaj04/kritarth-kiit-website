import React from "react";
import { Link } from "react-router-dom";
import { leadData } from "./leadData";
import insta from "./images/Insta.svg";
import linkedin from "./images/linkedin.svg";
import bg from "./images/Background_Image.png"

const Lead = () => {
  return (
    <section className="text-white font-Mulish">
      <div className="w-full">
        <h2 className="font-bold text-center text-3xl pt-9 pb-12">
          EVENT HEADS
        </h2>
      </div>
      <div className="flex flex-col items-center">
      <img
        src={leadData[0].image}
        alt={leadData[0].name}
        className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
        loading="lazy"
      />

        <h3 className="mt-4 font-bold">{leadData[0].name}</h3>
        <h4 className="mt-0 font-bold">{leadData[0].position}</h4>
        <ul className="mt-2 flex">
          <li className="pr-8">
            <Link to={leadData[0].igLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
                loading="lazy"
              />
            </Link>
          </li>
          <li>
            <Link to={leadData[0].linkedInLink} target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
                loading="lazy"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(1, 4).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/3 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <h4 className="mt-0 font-bold">{item.position}</h4>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="font-bold text-center text-3xl pt-5 pb-12">
          EVENT CO-HEADS
        </h2>
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(4, 8).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/4 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <h4 className="mt-0 font-bold">{item.position}</h4>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="font-bold text-center text-3xl pt-5 pb-12">
          DEPARTMENT HEADS
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={leadData[8].image}
          alt={leadData[8].name}
          className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
          loading="lazy"
        />
        <h3 className="mt-4 font-bold">{leadData[8].name}</h3>
        <h4 className="mt-0 font-bold">{leadData[8].position}</h4>
        <ul className="mt-2 flex">
          <li className="pr-8">
            <Link to={leadData[8].igLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
                loading="lazy"
              />
            </Link>
          </li>
          <li>
            <Link to={leadData[8].linkedInLink} target="_blank" rel="noreferrer">
              <img
                src={linkedin}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
                loading="lazy"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(9, 13).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/4 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <h4 className="mt-0 font-bold">{item.position}</h4>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {leadData.slice(13, 17).map((item) => (
          <div
            key={item.name}
            className="w-full md:w-1/4 p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
              loading="lazy"
            />
            <h3 className="mt-4 font-bold">{item.name}</h3>
            <h4 className="mt-0 font-bold">{item.position}</h4>
            <ul className="mt-2 flex">
              <li className="pr-8">
                <Link to={item.igLink} target="_blank" rel="noreferrer">
                  <img
                    src={insta}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
              <li>
                <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                  <img
                    src={linkedin}
                    alt="logo"
                    className="rounded-full w-6 h-6 object-cover"
                    loading="lazy"
                  />
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="font-bold text-center text-3xl pt-5 pb-12">
          WEB DEVELOPMENT TEAM
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={leadData[17].image}
          alt={leadData[17].name}
          className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
          loading="lazy"
        />
        <h3 className="mt-4 font-bold">{leadData[17].name}</h3>
        <h4 className="mt-0 font-bold">{leadData[17].position}</h4>
        <ul className="mt-2 flex">
          <li className="pr-8">
            <Link to={leadData[17].igLink} target="_blank" rel="noreferrer">
              <img
                src={insta}
                alt="logo"
                className="rounded-full w-6 h-6 object-cover"
                loading="lazy"
                />
              </Link>
            </li>
            <li>
              <Link to={leadData[17].linkedInLink} target="_blank" rel="noreferrer">
                <img
                  src={linkedin}
                  alt="logo"
                  className="rounded-full w-6 h-6 object-cover"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          {leadData.slice(18, 22).map((item) => (
            <div
              key={item.name}
              className="w-full md:w-1/4 p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover"
                loading="lazy"
              />
              <h3 className="mt-4 font-bold">{item.name}</h3>
              <h4 className="mt-0 font-bold">{item.position}</h4>
              <ul className="mt-2 flex">
                <li className="pr-8">
                  <Link to={item.igLink} target="_blank" rel="noreferrer">
                    <img
                      src={insta}
                      alt="logo"
                      className="rounded-full w-6 h-6 object-cover"
                    />
                  </Link>
                </li>
                <li>
                  <Link to={item.linkedInLink} target="_blank" rel="noreferrer">
                    <img
                      src={linkedin}
                      alt="logo"
                      className="rounded-full w-6 h-6 object-cover"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
  
        {/* <div className="fixed top-0 -z-20 right-0 w-screen h-screen back"></div> */}
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
      </section>
    );
  };
  
  export default Lead;
  