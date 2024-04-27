/* eslint-disable react/prop-types */

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-neutral-900 ">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="p-6 text-lg w-1/4">{overview}</p>
        <div className="flex">
            <button className="bg-white text-black p-2 px-10 text-2xl hover:bg-opacity-80">▶ Play</button>
            <button className="bg-gray-400 text-black mx-2 p-2 px-10 text-xl bg-opacity-50 hover:bg-opacity-80">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle