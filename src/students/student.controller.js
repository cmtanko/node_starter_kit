import studentService from './student.service';
import Student from '../models/student';

const studentController = () => {
  const getAllStudents = (req, res) => {
    const query = parseInt(req.query['q']) || undefined;
    try {
      if (query) {
        studentService.getStudent(query, (err, data) => {
          if (err) {
            handleError(err, res);
          }

          let student = new Student(data);
          onSuccess(student, res);
        });
      } else {
        studentService.getStudentList((err, data) => {
          if (err) {
            handleError(err, res);
          }

          let students = [];
          data.forEach(function(s) {
            let student = new Student(s);
            students.push(student);
          }, this);

          onSuccess(students, res);
        });
      }
    } catch (error) {
      handleError(error, res);
    }
  };

  return {
    getAllStudents: getAllStudents,
  };
};

const handleError = (error, res) => {
  return res.send({
    success: false,
    message: 'Unable to get data ' + error,
  });
};

const onSuccess = (result, res) => {
  res.send({
    success: true,
    results: result,
  });
};

export default studentController;
