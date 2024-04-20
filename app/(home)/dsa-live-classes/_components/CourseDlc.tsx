import React from "react";

interface CourseDlcProps {
  courseDetails: {
    icon: React.ReactNode;
    description: string;
  }[];
}

const CourseDlc = ({ courseDetails }: CourseDlcProps) => {
  return courseDetails.map((course) => (
    <div key={course.description} className="border-2 hover:bg-gray-50 hover:scale-105 hover:cursor-pointer transition-all duration-300 p-4 border-opacity-30 rounded-md">
      <div className="fl-ic gap-2">
      <div className="min-w-12 min-h-12 rounded-full bg-white border border-black border-opacity-20 bg-border-dlc fl-ic justify-center text-lg">
        {course.icon}
      </div>
      <div>
        <p className="t text-base font-medium">{course.description}</p>
      </div>
    </div>
    </div>
  ));
};

export default CourseDlc;
