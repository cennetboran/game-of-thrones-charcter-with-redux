export default function HomePage() {
  return (
    <>
      <a href="/characters">
        <div className="flex flex-row justify-center items-center pt-20">
          <div className="flex gap-12">
            <div className="basis-6/12">
              <div class="bamax-w-sm rounded overflow-hidden shadow-lg border">
                <img
                  class="w-full"
                  src="https://www.sideshow.com/storage/product-images/909724/iron-throne_game-of-thrones_square.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-white">
                    Characters
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-6/12">
              <div class="max-w-sm rounded overflow-hidden shadow-lg border">
                <img
                  class="w-full"
                  src="https://pyxis.nymag.com/v1/imgs/028/c95/9998bd19a44092f589f7cf53281bc738bf-28-got-questions.rsquare.w700.jpg"
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2 text-white">House</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
