export default function MemberCards({ member }) {
  return (
    <div className="w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg"></div>
      <div class="h-72 md:h-96 w-full mb-4 lg:mb-0 ">
        <div class="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img
            src="https://img4.hulu.com/user/v3/artwork/6a787bf6-cc23-47a2-a2f3-747e22c30d1c?base_image_bucket_name=image_manager&base_image=8592e369-eb6a-4c7d-bfff-f8b749f238b7&size=458x687&format=jpeg"
            class=" z-0 object-cover w-96 h-72 md:h-96"
            alt="12"
          />
          <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
          <div class="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div class="h-1/2 relative">
              <div class="absolute bottom-0">
                <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
                  {member.name}
                </h2>
              </div>
            </div>
            <div class="h-1/2">
              <span className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100 bg-black">
                {(member?.members || []).map((members, index) => {
                  return (
                    <div className="text-white " key={index}>
                      {members.name}
                    </div>
                  );
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
