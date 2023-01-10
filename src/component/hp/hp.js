import { Link } from "react-router-dom";

export default function Hp() {
  return (
    <>
      <div>
        <div className="flex flex-row justify-center items-center pt-20 ">
          <div className="flex gap-12">
            <Link to="/allCharacter">
              <div className="basis-6/12">
                <div className="bamax-w-sm  overflow-hidden shadow-lg border border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <img
                    className="w-full h-[400px]"
                    src="https://img.buzzfeed.com/store-an-image-prod-us-east-1/3rWBbcKQw.png?output-format=jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">
                      All Character
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/spells">
              <div className="basis-6/12">
                <div className="bamax-w-sm  overflow-hidden shadow-lg border border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <img
                    className="w-[400px]  h-[400px]"
                    src="http://assets.mugglenet.com/wp-content/uploads/2019/03/The-Most-Searched-For-Harry-Potter-Spell-In-Every-State.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">
                      Spells
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <a href="/">
            <button class="animate-bounce inline-block py-4 px-8 bg-[#5F021F] text-teal-100 rounded-lg">
              Back
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
