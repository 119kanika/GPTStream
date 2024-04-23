/* eslint-disable react/prop-types */

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12 bg-zinc-300">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="p-6 text-lg w-1/4">{overview}</p>
        <div className="flex">
            <button className="bg-white text-black p-2 px-10 text-xl">▶️ Play</button>
            <button className="bg-gray-400 text-black mx-2 p-2 px-10 text-xl bg-opacity-50">ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle