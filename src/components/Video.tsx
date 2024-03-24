import * as React from "react";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

interface IVideoProps {}

const Video: React.FunctionComponent<IVideoProps> = (props) => {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <div className="flex md:h-auto overflow-hidden bg-slate-400">
      <ReactPlayer
        url="video2.mp4"
        light={<img src="thumbnail-video.png" width="1280px" height="720px" />}
        controls
        width="1280px"
        height="100%"
      />
    </div>
  );
};

export default Video;
