import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-row justify-center items-center pt-20">
        <div className="flex gap-12">
          <Link to="/got">
            <div className="basis-6/12">
              <div className="bamax-w-sm rounded overflow-hidden shadow-lg border border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  className="w-full h-96"
                  src="https://pbs.twimg.com/profile_images/1386711841410359298/Dqme1G0m_400x400.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white">
                    Game Of Thrones
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/hp">
            <div className="basis-6/12">
              <div className="max-w-sm rounded overflow-hidden shadow-lg border border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <img
                  className="w-full "
                  src="https://pbs.twimg.com/profile_images/498202852624330752/kUeefRWm_400x400.jpeg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-white pt-9">
                    Harry Potter
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
