import React, { useEffect, useState } from "react";
import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = () => {
  const [enrolled, setEnrolled] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("enrollments");
    if (stored) setEnrolled(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("enrollments", JSON.stringify(enrolled));
  }, [enrolled]);

  const handleDrop = (course) => {
    const updated = enrolled.filter((c) => c.id !== course.id);
    setEnrolled(updated);
  };
  
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem("enrollments");
      if (stored) {
        setEnrolled(JSON.parse(stored));
      }
    };
  
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  

  const totalCredits = enrolled.reduce((sum, c) => sum + (c.credit || 3), 0);

  return (
    <section className="enrollment-section">
      <h2 className="page-title">Enrolled Courses</h2>
      {enrolled.length === 0 ? (
        <p className="enrollment-empty">You are not enrolled in any courses yet.</p>
      ) : (
        <>
          {enrolled.map((course) => (
            <EnrolledCourse key={course.id} course={course} onDrop={handleDrop} />
          ))}
          <p><strong>Total Credit Hours:</strong> {totalCredits}</p>
        </>
      )}
    </section>
  );
};

export default EnrollmentList;