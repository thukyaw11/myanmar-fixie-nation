import { useState, useEffect } from "react";
import { galleryContent } from "../content/gallery";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";


const Activities = () => {
  const [images, setImage] = useState(galleryContent);
  const [currentTab, setcurrentTab] = useState('stunt');
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true); 
  }


  const filterImage = (cateImage) => {
   
    const updatedImage = galleryContent.filter((curImg) => {
      return curImg.tag === cateImage;
    });
    setImage(updatedImage);
    setcurrentTab(cateImage)
  };

  useEffect(() => {
    filterImage('stunt')
    },[]);

  return (
    <>
    <div className={model? 'model open' : 'model'}>
      <img src={tempimgSrc} alt="" />
      <IonIcon
        onClick={() => setModel(false)}
              icon={close}
              className="text-3xl cursor-pointer text-white close-icon"
            ></IonIcon>
    </div>
    <div className="mt-16">
      <p className="text-center text-3xl text-black font-semibold dark:text-white">
        Activities
      </p>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          onClick={() => filterImage("stunt")}
          type="button"
          className= {`${currentTab === 'stunt' ? 'text-white bg-black': 'text-black bg-white'} hover:text-white border border-black-600 transition duration-300 hover:bg-black focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3`}
        >
          Stunt
        </button>

        <button
          onClick={() => filterImage("long_ride")}
          type="button"
          className= {`${currentTab === 'long_ride' ? 'text-white bg-black': 'text-black bg-white'} hover:text-white border border-black-600 transition duration-300 hover:bg-black focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}
         >
          Long Ride
        </button>
        <button
          onClick={() => filterImage("donation")}
          type="button"
          className= {`${currentTab === 'donation' ? 'text-white bg-black': 'text-black bg-white'} hover:text-white border border-black-600 transition duration-300 hover:bg-black focus:ring-4 focus:outline-none rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 `}

        >
          Donation
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((gallery, index) => (
          <div key={index} onClick={() => getImg(gallery.imageURL)}>
            <img
              className="w-96 h-72 rounded-lg object-cover animate__animated animate__fadeIn transition duration-300 hover:scale-90 hover:cursor-pointer"
              src={gallery.imageURL}
              alt=""
            />
          </div>
        ))}
      </div>
      
    </div>
    </>
  );
};

export default Activities;
