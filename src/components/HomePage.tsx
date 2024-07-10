"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CardPopup from './CardPopup';
import Cards from './Cards';
import "../app/globals.css";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dropDownOpen2, setDropDownOpen2] = useState(false);
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleCommunityTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const handleCommunityLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchTerm(event.target.value);
  };
  
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
    <>
      <div className="relative pb-10 lg:pt-36 pt-24 min-h-screen w-full px-4 lg:px-16 lg:bg-[url('/images/bgGradient.png')] bg-no-repeat bg-[#d6b3d2]">
        <img
          src='/images/bgMobile.png'
          className='absolute z-20 inset-0 h-full w-full mobile'
        />
        
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col lg:flex-row justify-between items-start w-full"
        >
          <div className="z-20 font-semibold lg:text-[64px] text-[28px] lg:text-6xl leading-10 lg:leading-[79px] uppercase text-[#4428F2] clash mb-8 lg:w-[56%]">
            <h1 className="text-white">Discover The</h1>
            <h1>WOMEN & NON-BINARY WEB3 ECOSYSTEM.</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:mr-28 w-full lg:w-auto ">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-center justify-center mb-4 lg:mb-0 lg:mr-12 gap-5 w-full lg:w-auto"
            >
              <div className="group hover:cursor-pointer fira-mono-bold lg:fira-mono-regular text-[#4428F2] text-lg flex gap-2 items-center">
                Info
                <span
                  className="mt-5 info invisible group-hover:visible fira-mono-regular leading-[20px] tracking-wider text-[14px] text-[#696969] dropdown w-[272px] absolute top-full mr-7 mt-1 p-5 bg-white border border-gray-300 rounded-md shadow-lg z-30"
                >
                  Submit your community for our team&apos;s review. We will respond back to the email address provided in 1-2 business days and share any questions we may have before adding your community to our discovery page.
                </span>
                <div>
                  <i className="far fa-question-circle w-6 h-6"></i>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glow-on-hover text-center relative z-20 text-[14px] clash uppercase rounded-lg text-white px-7 py-2 bg-black w-full lg:w-auto md:text-[20px] leading-[30px] font-medium"
              onClick={togglePopup}
            >
              <p className='z-30 relative cursor-pointer '>Add a community</p>
            </motion.div>
            <CardPopup show={showPopup} handleClose={togglePopup} />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:text-[20px] text-[14px] flex flex-col lg:flex-row justify-between lg:mr-28 mt-5 gap-4 lg:gap-12"
        >
          <div className="relative flex items-center border border-white px-4 py-2 rounded-lg w-full">
            <div className="md:w-6 md:h-6 w-5 h-5 mr-2 flex items-center">
              <img
                src={'/images/bigSearch.png'}
                className="object-fit w-full h-full"
              />
            </div>
            <input
              className="z-20 w-full bg-transparent leading-6 placeholder-white fira-mono-regular outline-none text-white"
              placeholder="Search By Name, Location, Description, Values."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="custom-select flex flex-row justify-between w-full gap-4 rounded-lg">
            <select
              name="communityType"
              id="communityType"
              className="z-30 fira-mono-regular p-5 border border-white px-4 py-2 rounded-lg w-full cursor-pointer bg-transparent text-white outline-none"
              onChange={handleCommunityTypeChange}
              defaultValue={searchTerm}
            >
              <option value="" disabled>Community Type</option>
              <option value="Education" className="hover:bg-pink-200 p-2 rounded-lg text-black">Education</option>
              <option value="Regional" className="hover:bg-pink-200 p-2 rounded-lg text-black">Regional</option>
              <option value="NFT Collection" className="hover:bg-pink-200 p-2 rounded-lg text-black">NFT Collections</option>
              <option value="DAOs" className="hover:bg-pink-200 p-2 rounded-lg text-black">DAO&apos;s</option>
            </select>

            <select
              name="community location"
              id="community location"
              className="z-30 fira-mono-regular p-5 border border-white px-4 py-2 rounded-lg w-full cursor-pointer bg-transparent text-white outline-none"
              onChange={handleCommunityLocationChange}
              defaultValue={searchTerm}
            >
              <option value="" disabled>Community Location</option>
              <option value="Canada" className='fira-mono-regular hover:bg-pink-200 p-2 rounded-lg text-black'>Canada</option>
              <option value="U.S.A" className=' rounded-lg text-black'>U.S.A</option>
              <option value="LATAM" className=' rounded-lg text-black'>LATAM</option>
              <option value="Europe" className=' rounded-lg text-black'>Europe</option>
              <option value="Africa" className=' rounded-lg text-black'>Africa</option>
            </select>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-9 py-6 bg-[#D574B633] bg-[url('/images/rectangle.png')] bg-no-repeat bg-cover bg-center bg-opacity-30 min-h-[30vh] rounded-lg flex flex-col justify-center items-center text-center p-6 w-full"
        >
          <p className="clash text-[#4428F2] text-[24px] md:text-[30px] font-medium leading-8 lg:leading-[68px] mb-4">JOIN OUR COMMON GROUND.</p>
              <motion.p
              className="text-[#1C1B22] text-[14px] lg:text-[20px] leading-5 lg:leading-6 fira-mono-regular mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >
              Stay connected to Si3’s ecosystem in the community membership platform Common Ground.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className=" bg-[#1C1B22] text-white px-6 py-4 rounded-lg leading-6 text-sm lg:text-[20px] fira-mono-regular"
          >
            COMMON GROUND
          </motion.button>
        </motion.div>
      </div>
      <div className='relative'>
        {<Cards searchTerm={searchTerm} />}
      </div>
    </>
  );
}

export default HomePage;
