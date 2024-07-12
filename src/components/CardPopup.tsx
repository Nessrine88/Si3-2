import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import "../app/globals.css";

const CardPopup = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    communityName: '',
    communityLeaderName: '',
    communityLeaderEmail: '',
    xHandle: '',
    warpastHandle: '',
    communityWebsite: '',
    communityLocation: '',
    communityType: '',
    communityDescription: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const token = 'YOUR_SANITY_API_TOKEN'; // Replace with your actual API token
      const config = {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const data = {
        _type: 'community', // Assuming you have a 'community' schema in Sanity
        ...formData
      };

      await axios.post('https://<your-sanity-project-id>.api.sanity.io/v1/data/mutate/production', { mutations: [{ create: data }] }, config);

      alert('Form submitted successfully!');
      handleClose();
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    show && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-8 overflow-auto"
        aria-labelledby="popup-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative bg-white mt-96 mb p-6 rounded-lg shadow-lg w-full max-w-lg">
          <img src="/images/circleBg.png" alt="" className="absolute inset-0 z-20 mt-10 w-full h-[70%]" />
          <div className="flex justify-between items-center mb-4">
            <h2 id="popup-title" className="text-2xl clash font-bold leading-6 text-[20px]">Add Community</h2>
            <i className="fas fa-times text-[#404040] text-lg" onClick={handleClose}></i>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Name<span className='text-[#FF99F3] '>*</span></label>
              <input
                type="text"
                name="communityName"
                value={formData.communityName}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                placeholder=""
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Leader Name<span className='text-[#FF99F3] '>*</span></label>
              <input
                type="text"
                name="communityLeaderName"
                value={formData.communityLeaderName}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                placeholder=""
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Leader Email<span className='text-[#FF99F3] '>*</span></label>
              <input
                type="text"
                name="communityLeaderEmail"
                value={formData.communityLeaderEmail}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                placeholder=""
              />
            </div> 

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">X Handle</label>
              <input
                type="text"
                name="xHandle"
                value={formData.xHandle}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                placeholder=""
              />
            </div>         

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Warpast Handle</label>
              <input
                type="text"
                name="warpastHandle"
                value={formData.warpastHandle}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                placeholder=""
              />
            </div>    

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Website</label>
              <input
                type="text"
                name="communityWebsite"
                value={formData.communityWebsite}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                placeholder=""
              />
            </div>   

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Location<span className='text-[#FF99F3] '>*</span></label>
              <select 
                name="communityLocation"
                value={formData.communityLocation}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]" 
              >
                <option value="" disabled>Community Location</option>
                <option value="Canada" className='fira-mono-regular hover:bg-pink-200 p-2 rounded-lg text-black'>Canada</option>
                <option value="U.S.A" className='rounded-lg text-black'>U.S.A</option>
                <option value="LATAM" className='rounded-lg text-black'>LATAM</option>
                <option value="Europe" className='rounded-lg text-black'>Europe</option>
                <option value="Africa" className='rounded-lg text-black'>Africa</option>
              </select>     
            </div>  

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Type<span className='text-[#FF99F3] '>*</span></label>
              <select
                name="communityType"
                value={formData.communityType}
                onChange={handleChange}
                className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
              >
                <option value="" disabled>Community Type</option>
                <option value="Education" className="rounded-lg text-black">Education</option>
                <option value="Regional" className="rounded-lg text-black">Regional</option>
                <option value="NFT Collection" className="rounded-lg text-black">NFT Collections</option>
                <option value="DAOs" className="rounded-lg text-black">DAO&apos;s</option>
              </select>
            </div>  

            <div className="mb-4">
              <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Description</label>
              <textarea
                name="communityDescription"
                value={formData.communityDescription}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 float-end clash font-medium text-[20px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default CardPopup;
