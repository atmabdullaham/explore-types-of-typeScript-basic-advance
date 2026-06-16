// constraints -> means inforece kora,
const addCourseToStudent = <
  T extends { id: number; name: string; email: string },
>(
  student: T,
) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};

const studnet3 = addCourseToStudent({
  id: 444,
  name: "jo",
  email: "a@gmail.com",
});

const student1 = addCourseToStudent({
  id: 12,
  name: "mr",
  email: "mr@gmail.com",
  devType: "Next",
});
const student2 = addCourseToStudent({
  id: 33,
  name: "ms",
  email: "so@gmail.com",
});
