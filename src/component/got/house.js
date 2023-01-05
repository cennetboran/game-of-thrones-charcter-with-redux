import MemberLists from "./movieList";
export default function House() {
  return (
    <>
      <div className="flex justify-center pt-10 pb-10">
        <a href="/got">
          <button class="animate-bounce inline-block py-4 px-8 bg-[#5F021F] text-teal-100 rounded-lg">
            Back
          </button>
        </a>
      </div>

      <MemberLists />
    </>
  );
}
