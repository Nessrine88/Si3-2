import React, { useEffect, useState } from 'react';
import { getCards } from '@/lib/types/cards';

const Cards = async() => {
  const cards = await getCards();

  return (
    <div className="bg-[url('/images/bottombg.png')] bg-no-repeat bg-left-bottom bg-[length:100%_auto] md:bg-[length:80vw_130vh]">
      <div className="flex flex-col md:flex-row md:justify-center bg-[url('/images/rightBg.png')] bg-[length:100%_auto] md:bg-[length:80vw_300vh] bg-no-repeat bg-right-top">
        <div className="grid gap-6 md:gap-[30px] p-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="relative p-6 w-full h-full border-2 border-[#FAB7D0] rounded-xl">
              <div className="flex items-center">
                <div className="shadow iconCard relative bg-gradient-to-b from-[#3E21F333] to-[#A020F0] p-[1.15px] w-[87px] h-[87px] rounded-md">
                  <img
                    src={card.cardIcon.asset.url}
                    alt=""
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <p className="clash uppercase font-medium text-[#404040] text-lg md:text-[30px] leading-tight">{card.title}</p>
                  <p className="text-sm md:text-[16px] leading-[25px] bg-[#A2FF9324] bg-opacity-20 rounded-[10px] mt-3 px-4 py-1 text-center roboto-mono">{card.status}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[#696969] text-sm md:text-[16px] leading-[20px] fira-mono-regular">
                  {card.description}
                </p>
              </div>
              <div className="mt-8 flex flex-col space-y-4">
                {card.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex items-center">
                    <div className="w-5 h-5 mr-2">
                      <img className="w-full h-full object-cover" src={link.icon.asset.url} alt="" />
                    </div>
                    <p className="text-[#4428F2] leading-[30px] font-medium tracking-normal text-sm md:text-[16px] clash">{link.name}</p>
                  </div>
                ))}
                <div className="mt-4 flex justify-center">
                  <button className="clash font-medium text-sm md:text-[20px] leading-[30px] border-gradient text-center py-2 custom-border-gradient w-[80%] rounded-lg">
                    App List’s Common Ground
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 md:gap-7 justify-center py-8">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">
          <i className="fas fa-chevron-left text-xs md:text-sm"></i>
        </div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">1</div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">2</div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">3</div>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-md border-[#FAB7D0] border flex justify-center items-center hover:bg-black hover:text-white">
          <i className="fas fa-chevron-right text-xs md:text-sm"></i>
        </div>
      </div>
    </div>
  );
}

export default Cards;
