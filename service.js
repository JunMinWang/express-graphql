const { coursesData } = require("./dummy");

const getCourse = ({ id }) =>
  coursesData.filter((course) => course.id === id)[0];

const getCourses = ({ topic }) =>
  topic ? coursesData.filter((course) => course.topic === topic) : coursesData;

const updateCourseTopic = ({ id, topic }) =>
  coursesData
    .filter((c) => c.id === id)
    .map((course) => ({ ...course, topic }))[0];

module.exports = {
  getCourse,
  getCourses,
  updateCourseTopic,
};
