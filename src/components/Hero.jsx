import React, { useRef, useState, useEffect } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import tsaHeaderVideo from "../assets/tsa-header.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const value = (video.currentTime / video.duration) * 100;
      setProgress(value || 0);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const handleSliderChange = (e) => {
    const video = videoRef.current;
    if (video) {
      const newTime = (e.target.value / 100) * video.duration;
      video.currentTime = newTime;
      setProgress(e.target.value);
    }
  };

  return (
    <div
      id="hero"
      className="flex flex-col items-center gap-6 py-16 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full text-gray-700 dark:text-white"
    >
      {/* Trusted Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-gray-300 dark:border-white/40 p-1.5 pr-4 rounded-full bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm"
      >
        <img className="w-16 sm:w-20" src={assets.group_profile} alt="" />
        <p className="text-xs sm:text-sm font-medium">Trusted by 100+ people</p>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl"
      >
        <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
          TSA
        </span>{" "}
        Services
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-[80%] sm:max-w-lg"
      >
        Where Innovation Meets Exceptional Admin Skills.
      </motion.p>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        viewport={{ once: true }}
        className="relative w-full mt-10"
      >
        <video
          ref={videoRef}
          src={tsaHeaderVideo}
          autoPlay
          loop
          muted={false}
          playsInline
          controls={false}
          className="w-full rounded-xl shadow-2xl"
          style={{ height: "auto", maxHeight: "90vh" }} // ✅ full video visible, capped to viewport
          onContextMenu={(e) => e.preventDefault()}
        />

        {/* Video Controls */}
        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Play/Pause + Mute */}
          <div className="flex gap-4">
            <button
              onClick={togglePlay}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg hover:scale-105 transition-transform"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
              {isPlaying ? "Pause" : "Play"}
            </button>
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white shadow-lg hover:scale-105 transition-transform"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>

          {/* Modern Slider */}
          <div className="w-full max-w-lg relative">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSliderChange}
              className="w-full appearance-none bg-gray-300 dark:bg-gray-700 h-2 rounded-lg cursor-pointer"
            />
            <style jsx>{`
              input[type="range"]::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background: linear-gradient(135deg, #5044e5, #4d8cea);
                cursor: pointer;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
                transition: transform 0.2s ease, background 0.3s ease;
              }
              input[type="range"]::-webkit-slider-thumb:hover {
                transform: scale(1.2);
                background: linear-gradient(135deg, #4d8cea, #5044e5);
              }
              input[type="range"]::-moz-range-thumb {
                height: 18px;
                width: 18px;
                border-radius: 50%;
                background: linear-gradient(135deg, #5044e5, #4d8cea);
                cursor: pointer;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
                transition: transform 0.2s ease, background 0.3s ease;
              }
              input[type="range"]::-moz-range-thumb:hover {
                transform: scale(1.2);
                background: linear-gradient(135deg, #4d8cea, #5044e5);
              }
            `}</style>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;