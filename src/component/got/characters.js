import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/action";
import React, { useState } from "react";

export default function Characters() {
  const character = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-center pt-10 pb-10">
        <a href="/got">
          <button class="animate-bounce inline-block py-4 px-8 bg-[#5F021F] text-teal-100 rounded-lg">
            Back
          </button>
        </a>
      </div>
      <div className="flex flex-wrap gap-12 justify-center pt-10 ">
        {character.map((character) => (
          <div className="text-white" key={character.name}>
            <div class="max-w-sm w-full lg:flex">
              <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div class="mb-8">
                  <p class="text-sm text-gray-600 flex items-center">
                    {character.name}
                  </p>
                  <div class="text-gray-900 font-bold text-xl mb-2">
                    {character.house
                      ? character.house.name
                      : "No house information available"}
                  </div>
                  <p class="text-black text-base">
                    {/* {(character?.quotes || []).map((quotes, index) => {
                      return (
                        <div className="text-black " key={index}>
                          {quotes}
                        </div>
                      );
                    })} */}
                    {isExpanded
                      ? character.quotes
                      : `${character.quotes.slice(0, 1)}...`}
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                      {isExpanded ? "Show Less" : "Read More"}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
