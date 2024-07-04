"use client";
import React, { useState, useEffect, useRef } from 'react';
import CardPopup from './CardPopup';
import "../app/globals.css";

const HomePage = ({ setSearchQuery }: any) => {
  const [showPopup, setShowPopup] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dropDownOpen2, setDropDownOpen2] = useState(false);
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const toggleDropDown2 = () => {
    setDropDownOpen2(!dropDownOpen2);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target as Node)
    ) {
      setDropDownOpen(false);
    }
    if (
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target as Node)
    ) {
      setDropDownOpen2(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="pt-36 min-h-screen w-full md:py-16 py-8 px-4 md:px-16 bg-[url('/images/bgGradient.png')] bg-no-repeat bg-[#d6b3d2] overflow-x-hidden box-border">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
        <div className="font-semibold text-2xl lg:text-6xl leading-10 lg:leading-[79px] uppercase text-[#4428F2] clash mb-8 md:w-[56%]">
          <h1 className="text-white">Discover The</h1>
          <h1>WOMEN & NON-BINARY WEB3 ECOSYSTEM.</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:mr-28 w-full lg:w-auto">
          <div className="flex items-center justify-center mb-4 lg:mb-0 lg:mr-12 gap-5 w-full lg:w-auto">
            <p className="fira-mono-regular text-[#4428F2] text-lg flex gap-2 items-center">
              Info
              <i className="far fa-question-circle w-6 h-6"></i>
            </p>
          </div>
          <button
            className="fira-mono-regular uppercase rounded-lg text-white px-7 py-2 bg-black w-full lg:w-auto"
            onClick={togglePopup}
          >
            Add a community
          </button>
          <CardPopup show={showPopup} handleClose={togglePopup} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:mr-28 mt-8 gap-4 lg:gap-12 w-full">
        <div className="relative flex items-center border border-white px-4 py-2 rounded-lg w-full lg:w-[42vw]">
          <div className="w-6 h-6 mr-2 flex items-center">
            <img
              src={'/images/bigSearch.png'}
              className="object-fit w-full h-full"
            />
          </div>
          <input
            className="w-full bg-transparent leading-6 placeholder-white fira-mono-regular outline-none text-white"
            placeholder="Search By Name, Location, Description, Values."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-between w-full gap-4">
          <div
            className="flex items-center relative border border-white text-white px-4 py-2 rounded-lg w-full cursor-pointer"
            onClick={toggleDropDown}
            ref={dropdownRef1}
          >
            <p className="mr-3">Community Type</p>
            <img src={'/arrow-down.svg'} className="w-6 h-6" />
            <div
              className={`dropdown ${
                dropDownOpen ? 'block' : 'hidden'
              } w-60 absolute top-full mt-1 text-black p-5 bg-white border border-gray-300 rounded-md shadow-lg z-10`}
            >
              <ul className="fira-mono-regular leading-7 text-lg">
                <li>Education</li>
                <li className="mt-4">Regional</li>
                <li className="mt-4">NFT Collections</li>
                <li className="mt-4">DAO's</li>
              </ul>
            </div>
          </div>

          <div
            className="flex items-center relative border border-white text-white px-4 py-2 rounded-lg w-full cursor-pointer"
            onClick={toggleDropDown2}
            ref={dropdownRef2}
          >
            <p className="mr-3">Community Location</p>
            <img src={'/arrow-down.svg'} className="w-6 h-6" />
            <div
              className={`dropdown ${
                dropDownOpen2 ? 'block' : 'hidden'
              } w-60 absolute top-full mt-1 text-black p-5 bg-white border border-gray-300 rounded-md shadow-lg z-10`}
            >
              <ul className="fira-mono-regular leading-7 text-lg">
                <li>Canada</li>
                <li className="mt-4">U.S.A</li>
                <li className="mt-4">LATAM</li>
                <li className="mt-4">Europe</li>
                <li className="mt-4">Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 py-6 bg-[#D574B633] bg-[url('/images/rectangle.png')] bg-no-repeat bg-cover bg-center bg-opacity-30 min-h-[30vh] rounded-lg flex flex-col justify-center items-center text-center p-6 w-full">
        <p className="clash text-[#4428F2] text-lg lg:text-3xl font-medium leading-8 lg:leading-[68px] mb-4">JOIN OUR COMMON GROUND.</p>
        <p className="text-[#1C1B22] text-sm lg:text-lg leading-5 lg:leading-6 fira-mono-regular mb-10">
          If you want to get tips for UX job searching, subscribe to my UX Jetpack newsletter. <br /> View at https://uxjetpack.com/newsletter
        </p>
        <button className="bg-[#1C1B22] text-white px-6 py-4 rounded-lg leading-6 text-sm lg:text-lg fira-mono-regular">
          COMMON GROUND
        </button>
      </div>
    </div>
  );
}

export default HomePage;
