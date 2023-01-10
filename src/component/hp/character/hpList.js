import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../redux/action";
import { useEffect } from "react";
import HpCards from "./hpCards";
export default function HpList() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  console.log("stu", students);
  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div>
      <div className="flex flex-wrap gap-12 justify-center pt-10 ">
        {students.map((student) => (
          <div className="" key={student.name}>
            <HpCards student={student} />
          </div>
        ))}
      </div>
    </div>
  );
}
