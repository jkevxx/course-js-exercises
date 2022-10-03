class Course {
  constructor({ id, name, teacher }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
  }
}

const basicCSS = new Course({
  id: "basic-css",
  name: "Basic CSS",
  teacher: "Teacher Css",
});

const introJS = new Course({
  id: "intro-js",
  name: "Introduction JavaScript",
  teacher: "Teacher Js",
});

const python = new Course({
  id: "intro-python",
  name: "Introduction Python",
  teacher: "Teacher python",
});

const logic = new Course({
  id: "logic",
  name: "Introduction Logic",
  teacher: "Teacher logic",
});

/**
 * LEARNING PATHS
 */
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const webSchool = new LearningPath({
  name: "Web School",
  courses: [basicCSS, introJS, logic],
});

const dataScience = new LearningPath({
  name: "Data Science",
  courses: [python, logic],
});

/**
 * STUDENT
 */
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const kevin = new Student({
  name: "kevin",
  email: "kevin@gmail.com",
  username: "kevin123",
  twitter: "kevin",
  learningPaths: [webSchool, dataScience],
});
