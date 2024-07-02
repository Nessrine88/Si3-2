import React from 'react';
import { getCards } from '@/lib/types/cards';
export const revalidate = 3;

// import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";

const Cards = async () => {
  const cards = await getCards();
  return (
    <div className="bg-[url('/images/bottombg.png')] bg-no-repeat bg-left-bottom bg-[length:80vw_130vh] ">
      <div className="md:flex md:justify-center  bg-[url('/images/rightBg.png')] bg-[length:80vw_300vh] bg-no-repeat bg-right-top">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 md:m-[4rem] md:mb-10 gap-[30px] ">
          {cards.map((card, index) => (
            <div key={index} className="relative p-[25px]  w-[412px] h-[549px] h-max-fit border-[2px] border-[#FAB7D0] rounded-xl">
              <div className="flex">
                <div className="shadaw iconCard relative bg-gradient-to-b from-[#3E21F333] to-[#A020F0] p-[1.15px]  w-[87px] h-[87px] rounded-md">
                  <img
                    src={card.cardIcon.asset.url}
                    alt=""
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
                <div className="mx-4">
                  <p className="clash uppercase font-medium text-[#404040] w-full text-[30px] leading-[36px] ">{card.title}</p>
                  <p className="text-[16px] leading-[25px]  bg-[#A2FF9324] bg-opacity-[14%] rounded-[10px] mt-3 px-4  text-center w-fit roboto-mono">{card.status}</p>
                </div>
              </div>
              <div>
                <p className="text-[#696969] text-[16px] leading-[20px] fira-mono-regular pt-5  h-[114px]">
                  {card.description}
                </p>
              </div>
              <div className=" mt-32 max-h-36 flex flex-col  ">
                {card.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="flex items-center  ">
                    <div className="w-[20px] h-[20px] mr-2 ">
                      <img className="w-full h-full object-cover" src={link.icon.asset.url} alt="" />
                    </div>
                    <p className="text-[#4428F2] leading-[30px] font-medium -tracking-normal text-[16px] clash">{link.name}</p>
                  </div>
                ))}
                <div className='absolute w-[85%] bottom-0 py-5 mx-auto'>
                <div className="p-[1px]">
                  <button className="z-10 clash font-medium text-[20px] leading-[30px] border-gradient text-center py-[8px] custom-border-gradient w-full rounded-lg">
                    App List’s Common Ground
                  </button>
                </div>
                </div>
              </div>

              
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-7 justify-center pb-32 mx-20">
      {/* <Pagination showControls loop  total={3} initialPage={1} style={{borderColor:"#FAB7D0"}} /> */}
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
