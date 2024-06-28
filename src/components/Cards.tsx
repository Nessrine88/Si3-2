
import React from 'react';
import { getCards } from '@/lib/types/cards';

const Cards = async() => {
    const cards = await getCards();
  return (
    
    <div className='md:flex md:justify-center m-5'>
    <div className="md:grid md:grid-cols-3 md:m-[4rem] gap-11 ">
      {cards.map((card, index) => (
        <div key={index} className="relative p-[7%] mb-5 min-w-[25vw] w-fit h-max-fit rounded-[12px] border-[2px] border-[#FAB7D0]">
          <div className="flex">
            <div className="iconCard relative">
              <img
                src={card.cardIcon.asset.url}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mx-5">
              <p className="clash text-[#404040] font-500 text-[30px] leading-[36px]">{card.title}</p>
              <p className="text-[16px] leading-[25px] bg-[#A2FF9324] bg-opacity-[14%] rounded-[10px] mt-3 px-4 py-1 text-center">{card.status}</p>
            </div>
          </div>
          <div>
            <p className="text-[#696969] h-20 text-[16px] leading-[20px] font-mono pt-5">
              {card.description}
            </p>
          </div>
          <div className="my-20 min-h-36 flex flex-col justify-between">
            {card.links.map((link, index) => (
              <div key={index} className="flex items-center my-2">
                <div className="w-[20px] h-[20px] m-2">
                  <img className="w-full h-full object-cover" src={card.links[index].icon.asset.url} alt="" />
                </div>
                <p className="text-[#4428F2] leading-[30px] font-500 text-[16px] clash">{link.name}</p>
              </div>
            ))}
            <div className=" absolute bottom-0 py-5 mx-auto px-auto w-[85%] ">
              <button className="clash font-500 text-[20px] leading-[30px] text-center custom-border-gradient  py-[8px] w-full">
                App List’s Common Ground
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default Cards