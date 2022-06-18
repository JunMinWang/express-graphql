const { coursesData } = require("./dummy");

const getCourse = ({ id }) =>
  coursesData.filter((course) => course.id === id)[0];

const getCourses = ({ topic }) =>
  topic ? coursesData.filter((course) => course.topic === topic) : coursesData;

module.exports = {
  getCourse,
  getCourses,
};
