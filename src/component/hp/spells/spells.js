import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpells } from "../../../redux/action";
import SpellsCard from "./spellsCard";

export default function Spells() {
  const spells = useSelector((state) => state.spells);
  const dispatch = useDispatch();
  console.log("ss", spells);

  useEffect(() => {
    dispatch(fetchSpells());
  }, [spells]);
  return (
    <div>
      <div className="flex justify-center pt-10 pb-10">
        <a href="/hp">
          <button class="animate-bounce inline-block py-4 px-8 bg-[#5F021F] text-teal-100 rounded-lg">
            Back
          </button>
        </a>
      </div>
      <div className="flex flex-wrap gap-12 justify-center pt-10 ">
        {spells.map((spells) => (
          <div className="" key={spells.name}>
            <SpellsCard spells={spells} />
          </div>
        ))}
      </div>
    </div>
  );
}
