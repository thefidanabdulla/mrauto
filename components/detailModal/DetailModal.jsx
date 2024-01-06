import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DetailModal = ({ isModalShow, setIsModalShow }) => {
  if (isModalShow) {
    return (
      <div className="w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-[100] flex justify-center items-center">
        <div className="relative max-w-[1024px] w-full bg-[rgba(0,0,0,0.6)] m-4 h-[450px] md:h-[600px] lg:h-[500px] transparent overflow-hidden rounded-2xl">
          <button
            onClick={() => setIsModalShow(false)}
            className="p-3 bg-[rgba(0,0,0,0.6)] rounded-full text-white border border-[rgba(255,255,255,.5)] text-xl absolute top-4 right-4 z-[200]"
          >
            <AiOutlineClose />
          </button>
          <iframe
            width="810"
            height="450"
            className="w-full h-full"
            src="https://www.youtube.com/embed/FtiaSn5iCg8?si=FnFmEm9KFgwetsfM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  } else return null;
};

export default DetailModal;
