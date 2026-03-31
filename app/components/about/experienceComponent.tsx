"use client";

import { useState } from "react";
import Modal from "../modal";
import type { Experience } from "./experience";

type Props = {
  experience: Experience;
};

export default function ExperienceComponent({ experience }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = experience.photoUrl.filter((url) => url !== "#");

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col gap-4 mt-[15px] font-larken">
      <div
        id="exp-header"
        className="flex flex-row  items-center gap-5 justify-between"
      >
        <div id="exp-left-header" className="flex flex-row gap-5 items-center">
          <p className="text-white font-larken bg-[#809FDF] w-fit p-2.5 rounded-4xl border-black border">
            {experience.company}
          </p>
          <p>
            <b>{experience.position}</b>
          </p>
        </div>
        <div id="exp-right-header">
          <p>{experience.date}</p>
        </div>
      </div>
      <div id="exp-photos" className="m-auto">
        <ul className="flex flex-row gap-3 max-w-[620px]">
          {/* <li className="w-[150px] h-[150px] border"> */}
          {images.length > 0 && (
            <div className="flex flex-row gap-3 overflow-scroll pb-2">
              {images.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsModalOpen(true);
                  }}
                  className="cursor-pointer w-[150px] h-[150px] border border-white/20 hover:border-white/50 transition-all overflow-hidden flex-shrink-0"
                >
                  <img
                    src={url}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
          {/* </li> */}
          {/* <li className="w-[150px] h-[150px] border"></li>
          <li className="w-[150px] h-[150px] border"></li>
          <li className="w-[150px] h-[150px] border"></li> */}
        </ul>
      </div>
      <div id="exp-body">
        {experience.tools && (
          <p>
            <b>tools:</b> {experience.tools}
          </p>
        )}

        <p>
          <b>description:</b> {experience.description}
        </p>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col items-center gap-6">
          <img
            src={images[currentIndex]}
            className="max-h-[75vh] w-[400px] object-cover shadow-2xl border border-white/10"
            alt="Full view"
          />

          {/* Controls inside the Modal */}
          <div className="flex items-center gap-8 text-white">
            <button
              onClick={prevImage}
              className="cursor-pointer px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
            >
              ← Prev
            </button>
            <span className="font-mono text-sm">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={nextImage}
              className="cursor-pointer px-4 py-2 bg-white/10 rounded-full hover:bg-white/20"
            >
              Next →
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
