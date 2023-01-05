import { Link } from "react-router-dom";

export default function Got() {
  return (
    <>
      <div>
        <div className="flex flex-row justify-center items-center pt-20 ">
          <div className="flex gap-12">
            <Link to="/house">
              <div className="basis-6/12">
                <div className="bamax-w-sm  overflow-hidden shadow-lg border border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <img
                    className="w-full h-96"
                    src="https://i.pinimg.com/originals/30/f5/6a/30f56afed91cad769ca6e6a6ae7fd7de.png"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white">
                      House
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/hp">
              <div className="basis-6/12">
                <div className="max-w-sm  overflow-hidden shadow-lg  border border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                  <img
                    className="w-full"
                    src="https://i.pinimg.com/736x/ed/85/8f/ed858fd1afd2411fa2f6b1da3bcb80d1.jpg"
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-white pt-9">
                      Charecters
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
