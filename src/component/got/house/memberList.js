import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers } from "../../../redux/action";
import { useEffect } from "react";
import MemberCards from "./memberCards";
export default function MemberLists() {
  const members = useSelector((state) => state.members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-wrap gap-12 justify-center pt-10 ">
        {members.map((member) => (
          <div className="" key={member.name}>
            <MemberCards member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
