package com.project.studentsystem.service;

import com.project.studentsystem.moodle.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
