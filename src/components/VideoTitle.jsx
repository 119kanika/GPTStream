/* eslint-disable react/prop-types */

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[18%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-zinc-900 ">
        <h1 className="font-bold text-2xl md:text-3xl">{title}</h1>
        <p className="hidden md:inline-block p-4  text-lg w-1/4">{overview}</p>
        <div className="flex">
            <button className="bg-white text-black py-1 md:py-4 px-10 md:text-2xl hover:bg-opacity-80 rounded-md">Play</button>
            <button className="hidden md:inline-block bg-gray-400 text-black mx-2 p-2 px-10 text-xl bg-opacity-50 hover:bg-opacity-80 rounded-md">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle