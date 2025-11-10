import Card from "../Card/Card";
import imageUrl from "../../../assets/react.svg";
import Button from "../button/Button";
import axios from "../../../config/axiosConfig.js";

export default function Template() {
  function handleOnClick() {
    axios.post("/api/v1/projects");
  }

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
          Hello, Jugtar
        </h1>
        <p className="text-xl bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
          What do you want to build?
        </p>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-3/4 max-w-4xl bg-[#1e1e1e]/80 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(255,140,0,0.15)] p-10 border border-white/10">
        <div className="text-green-300 font-mono mb-6">
          <p className="text-lg">Start coding an app</p>
        </div>

        {/* Button + Card */}
        <div className="flex justify-start">
          <Button
            onClick={handleOnClick}
            styleClass="m-4 hover:scale-105 transition-all duration-200"
            text={
              <Card
                title="React"
                description="A JavaScript library for building user interfaces"
                imageUrl={imageUrl}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
