import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import "../app/globals.css";

interface CardPopupProps {
  show: boolean;
  handleClose: () => void;
}
const CardPopup: React.FC<CardPopupProps> = ({ show, handleClose }) =>  {
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
    communityLogo: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleLogoChange = (event) => {
    const file = event.target.files[0]; // Get the first file selected by the user
    if (file) {
      // Perform upload to Sanity or your backend here
      // After upload, update formData with the asset details received from Sanity
      const imageUrl = "https://cdn.sanity.io/images/1bxi5lj1/production/695df5a756ee22bdc65d4a68883d75e673ef4457-87x87.svg"; // Replace with actual URL received from Sanity
      const dimensions = {
        height: 87,
        width: 87,
        aspectRatio: 1,
      };
      setFormData({
        ...formData,
        communityLogo: {
          asset: {
            url: imageUrl,
            metadata: {
              dimensions: dimensions,
            }
          }
        }
      });

      // Optional: Log the updated formData for verification
      console.log("Updated Form Data:", formData);
    }
  };
  
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
      const token = 'skNefpUYEpO7zEVO0BrXoWlqrwPCHv4P2EKFHGeCteGWaS5apHyICYhD6nLNwvPF4Re9T8VaElM3BzY303kFoVmYXozalErYFWndWRMX3uJWDh7N0QZTSuxIK0zHK6ax920EQyzMkBFwDHD0fWLQGJcw6jdhmTI03Qopvf7GDu9p7KIy6axt';
      const config = {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
  
      const data = {
        _type: 'cards',
        ...formData
      };
  
      console.log('Submitting data to Sanity:', data); // Log data before submission
  
      const response = await axios.post(
        'https://1bxi5lj1.api.sanity.io/v2021-06-07/data/mutate/production',
        { mutations: [{ create: data }] },
        config
      );
  
      console.log('Sanity Response:', response.data);
      
      setIsSubmitted(true); // Set the submitted state to true to show the confirmation message
    } catch (error:any) {
      console.error('Error submitting form', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
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
        <div className={`relative bg-white mb p-6 rounded-lg shadow-lg w-full max-w-lg ${isSubmitted ? 'm-5' : 'mt-[450px] '}`}>
          <img src="/images/circleBg.png" alt="" className="absolute inset-0 z-20 mt-10 w-full h-[70%]" />
          <div className="flex justify-between items-center mb-4">
          <h2
          id="popup-title"
          className={`text-2xl clash font-bold leading-6 text-[20px] ${
            isSubmitted ? 'hidden' : ''
          }`}
        >Add Community</h2>
          <i className=" fas fa-times text-gray-600 text-lg cursor-pointer absolute top-2 right-4" onClick={handleClose}></i>
          </div>
          {isSubmitted ? (
            <div className="text-center relative">
              
              <img src="/images/waiting.png" alt="" />
              <p className="text-[14px] leading-5 fira-mono-regular text-center text-[#696969] ">Thanks for submitting! A member of our team will be in touch soon.</p>
              

            </div>
          ) : (
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
              <div className="mb-4">
                <label className="block text-[#404040] fira-mono-medium leading-6 text-[16px]">Community Logo<span className='text-[#FF99F3] '>*</span></label>
                <input
                  type="file"
                  name="communityLogo"
                  onChange={handleLogoChange}
                  accept="*"
                  className="w-full p-2 border text-[#717171] rounded mt-1 relative z-30 fira-mono-regular text-[16px] leading-6 opacity-[60%]"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded focus:outline-none focus:ring-2 float-end clash font-medium text-[20px]"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  );
};

export default CardPopup;
