import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { profiles } from "../../constants/data";

export default function HeroSection() {
  const [leftVideoPlaying, setLeftVideoPlaying] = useState(false);
  const [rightVideoPlaying, setRightVideoPlaying] = useState(false);

  return (
    <div className=" pt-10 px-4 flex flex-col tracking-wider items-center text-center">
      <h1 className="text-3xl md:text-[2rem] font-bold text-[#420075]">
        CУБРАМАНИАН Сомасундарам
      </h1>
      <p className="text-xl font-semibold mt-2 text-[#420075]">
        хирург-онколог и онкологический пациент
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-8">
        {/** Left Video */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-84 aspect-video rounded-2xl shadow-lg overflow-hidden"
        >
          {leftVideoPlaying ? (
            <ReactPlayer
              url="https://video.wixstatic.com/video/e6f22e_a776009ce7114bee8fbcfd5c049cbab7/720p/mp4/file.mp4"
              width="100%"
              height="100%"
              playing
              controls
            />
          ) : (
            <div
              onClick={() => setLeftVideoPlaying(true)}
              className="relative bg-black w-full h-full flex items-center justify-center cursor-pointer"
            >
              <Play className="text-white w-10 h-10" />
            </div>
          )}
        </motion.div>

        <img
          src="https://static.wixstatic.com/media/e6f22e_5e866c4c42e643099cc60be0ec2a5f0e~mv2.png/v1/fill/w_250,h_370,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC_6089_edited.png"
          alt="Doctor"
          className="w-60 h-auto rounded-2xl shadow-md"
        />

        {/** Right Video */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-84 aspect-video rounded-2xl shadow-lg overflow-hidden"
        >
          {rightVideoPlaying ? (
            <ReactPlayer
              url="https://video.wixstatic.com/video/e6f22e_310dbe16029a43079d4c5a0d07cfae91/1080p/mp4/file.mp4"
              width="100%"
              height="100%"
              playing
              controls
            />
          ) : (
            <div
              onClick={() => setRightVideoPlaying(true)}
              className="relative bg-black w-full h-full flex items-center justify-center cursor-pointer"
            >
              <Play className="text-white w-10 h-10" />
            </div>
          )}
        </motion.div>
      </div>
      <div className="flex  flex-wrap items-center justify-between px-2 md:px-16 gap-y-8 mt-14 w-full max-w-5xl mx-auto">
        {" "}
        <img
          src="https://static.wixstatic.com/media/e6f22e_0d85db60e80f4c3dba541969cea6010c~mv2.png/v1/fill/w_350,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EAFO_logo_horizont_slogan.png"
          alt="EAFO"
          className="w-auto object-contain h-9 md:h-14"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_30e2510e27a84677a82bf3c8ca91f2aa~mv2.png/v1/fill/w_189,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ECRC.png"
          alt="ECRC"
          className="w-auto object-contain h-13 md:h-18"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_05679ffe1f6b46fd8dfbdc733c319524~mv2.png/v1/fill/w_189,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FIRMST_Dark_Blue_Logo_edited.png"
          alt="FIRMST"
          className="w-auto object-contain h-20"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_42259c251d1f408f834d78a7978c196a~mv2.png/v1/fill/w_144,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EGPM_Logo_Var_003.png"
          alt="EGPM"
          className="w-auto object-contain h-28 md:h-30"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_c4415a102b83479b90226ed3de9e7b1e~mv2.png/v1/fill/w_318,h_79,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%20%D0%BF%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B4%D0%B6%D0%B8%D0%BA%D0%B8%20%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9.png"
          alt="PathoLogica"
          className="w-auto object-contain h-10 md:h-18"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_df68cf687b194af8a6848c8870c768e3~mv2.png/v1/fill/w_366,h_46,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%D0%BB%D0%BE%D0%B3%D0%BE_HD_%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82.png"
          alt="HealthDirect"
          className="w-auto object-contain h-5 md:h-9"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_8efc946ce3e44ee3aac0ae8ac50024b4~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EASHNO_Logo.png"
          alt="EACHMO"
          className="w-auto object-contain h-26"
        />
        <img
          src="https://static.wixstatic.com/media/e6f22e_2c208aba4029489db115cd9c7805ee8b~mv2.png/v1/fill/w_174,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EACF.png"
          alt="EACF"
          className="w-auto object-contain h-18"
        />
      </div>
      <div className="max-w-5xl md:pl-24  mt-10 text-left py-6 text-gray-900">
        <p className=" font-bold text-[#420075] text-justify">
          Онколог – хирург,
          <span className="text-black font-normal">
            {" "}
            [специальности: онкология, хирургия, челюстно-лицевая хирургия,
            оториноларингология, пластическая хирургия, общественное здоровье и
            организация здравоохранения, хирургическая онкология (Евросоюз)]
          </span>
        </p>

        <div className="mt-6 tracking-normal text-black space-y-5">
          {profiles.map((profile, index) => (
            <p key={index}>
              <span className="">{profile.title},</span>
              <br />
              <span className="text-[#420075] font-bold">
                {profile.organization}
              </span>
              {profile.location && <br />}
              {profile.location && <span>{profile.location}</span>}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
