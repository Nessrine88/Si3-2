import React, { useEffect, useState } from 'react';
import { getCards } from '@/lib/types/cards';

const Cards = async() => {
  const cards = await getCards();

  return (
    <div className="md:bg-[url('/images/bottombg.png')] md:bg-no-repeat md:bg-left-bottom  md:bg-[length:80vw_130vh] bg-[url('/images/bgGreyMobile.png')] bg-[length:100%_80%] bg-no-repeat bg-center bg-[0.5]">
     <div className="flex justify-between bg-no-repeat bg-center bg-[url('/images/pinkyBg.png')] bg-[length:100%_100%] md:bg-[url('/images/rightBg.png')] md:bg-right-top md:bg-[length:80vw_300vh] md:clip-auto clip-path-mobile">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-4 md:m-[4rem] mb-10 gap-[30px]">
    {cards.map((card, index) => (
            <div key={index} className="p-[25px] flex flex-col justify-between md:w-[412px] md:h-[549px] w-full h-[446px] border-[2px] border-[#FAB7D0] rounded-xl">
              <div className='flex flex-col h-full justify-between '>
                <div>
              <div className="flex  ">
                <div className="shadow iconCard relative bg-gradient-to-b from-[#3E21F333] to-[#A020F0] p-[1.15px] w-[87px] h-[87px] rounded-md">
                  <img
                    src={card.cardIcon.asset.url}
                    alt=""
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="ml-4">
                  <p className="clash uppercase font-medium text-[#404040] text-[24px] sm:text-[30px] leading-[28px] sm:leading-[36px]">{card.title}</p>
                  <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[25px] bg-[#A2FF9324] bg-opacity-[14%] rounded-[10px] mt-3 px-4 text-center w-fit roboto-mono">{card.status}</p>
                </div>
              </div>
              <div>
                <p className="text-[#696969] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] fira-mono-regular pt-5 md:h-[114px] h-[90px] overflow-hidden">
                  {card.description}
                </p>
              </div>
              <div className="mt-8 sm:mt-32 flex flex-col">
                {card.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex items-center mb-2">
                    <div className="w-[20px] h-[20px] mr-2">
                      <img className="w-full h-full object-cover" src={link.icon.asset.url} alt="" />
                    </div>
                    <p className="text-[#4428F2] leading-[20px] sm:leading-[30px] font-medium tracking-normal text-[14px] sm:text-[16px] clash">{link.name}</p>
                  </div>
                ))}
                 </div>
                 </div>
                <div className="">
               
                  <button className="m-auto bottom-0 z-10 clash font-medium text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] border-gradient text-center py-[8px] custom-border-gradient w-full rounded-lg">
                    App List’s Common Ground
                  </button>
               
                </div>
                </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:gap-7 gap-2 justify-center pb-32 mx-20">
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white"><i className="fas fa-chevron-left text-sm"></i></div>
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">1</div>
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">2</div>
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">3</div>
        <div className="w-12 h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white"><i className="fas fa-chevron-right text-sm"></i></div>
      </div>
    </div>
  );
}

export default Cards;
