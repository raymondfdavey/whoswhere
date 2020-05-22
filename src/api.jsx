import axios from "axios";

export const fetchAllCurrentStudents = () => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students")
    .then(({ data: { students } }) => {
      return students;
    });
};

export const fetchAllGraduates = () => {
  return axios
    .get("https://nc-student-tracker.herokuapp.com/api/students?graduated=true")
    .then(({ data: { students } }) => {
      return students;
    });
};

export const fetchByCohort = cohort => {
  return axios
    .get(
      `https://nc-student-tracker.herokuapp.com/api/students?cohort=${cohort}`
    )
    .then(({ data: { students } }) => {
      return students;
    });
};
export const gradsFetchByCohort = cohort => {
  console.log("IN HERE GRADS Bit");

  return axios
    .get(
      `https://nc-student-tracker.herokuapp.com/api/students?graduated=true&cohort=${cohort}`
    )
    .then(({ data: { students } }) => {
      return students;
    });
};

export const fetchByBlock = block => {
  return axios
    .get(
      `https://nc-student-tracker.herokuapp.com/api/students?graduated=false&block=${block}`
    )
    .then(({ data: { students } }) => {
      return students;
    });
};

export const fetchStudentDetails = id => {
  return axios
    .get(`https://nc-student-tracker.herokuapp.com/api/students/${id}`)
    .then(({ data: { student } }) => {
      return student;
    });
};

export const postNewStudent = newStudent => {
  return axios
    .post("https://nc-student-tracker.herokuapp.com/api/students", newStudent)
    .then(({ data: { student } }) => {
      return student;
    });
};

export const deleteStudentById = id => {
  console.log(id);
  return axios.delete(
    `https://nc-student-tracker.herokuapp.com/api/students/${id}`
  );
};

export const graduateStudentById = id => {
  return axios
    .patch(
      `https://nc-student-tracker.herokuapp.com/api/students/${id}?progress=true`
    )
    .then(({ data: { student } }) => {
      return student;
    });
};
