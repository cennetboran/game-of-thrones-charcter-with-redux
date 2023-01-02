export default function MemberCards({ member }) {
  return (
    <div className="w-full">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="https://www.linflux.com/wp-content/uploads/2018/10/18679295525_f39cc1bc70_z.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{member.name}</div>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-300  px-3 py-1 text-sm font-semibold  mr-2 mb-2">
            {(member?.members || []).map((members, index) => {
              return (
                <div className="text-black " key={index}>
                  {members.name}
                </div>
              );
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
