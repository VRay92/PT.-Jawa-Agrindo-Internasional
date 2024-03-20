import * as React from "react";

interface IVideoProps {}

const Video: React.FunctionComponent<IVideoProps> = (props) => {
  return (
    <iframe
      className="w-full md:max-w-[40rem] md:w-[40rem] md:ml-0 md:h-[25rem] h-full relative object-cover"
      src="video1.mp4"
      allowFullScreen
      title="room-tour"
    ></iframe>
  );
};

export default Video;
