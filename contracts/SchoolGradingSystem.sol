// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SchoolGradingSystem {
    address public teacher;

    struct Student {
        string name;
        mapping(string => uint8) grades;
    }

    mapping(address => Student) public students;

    event GradeAssigned(address indexed student, string subject, uint8 grade);
    event StudentAdded(address indexed student, string name);

    constructor() {
        teacher = msg.sender;
    }

    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only the teacher can perform this action");
        _;
    }

    function addStudent(address _studentAddress, string memory _studentName) public onlyTeacher {
        Student storage student = students[_studentAddress];
        student.name = _studentName;
        emit StudentAdded(_studentAddress, _studentName);
    }

    function assignGrade(address _studentAddress, string memory _subject, uint8 _grade) public onlyTeacher {
        require(bytes(students[_studentAddress].name).length != 0, "Student does not exist");
        require(_grade <= 100, "Grade must be between 0 and 100");

        students[_studentAddress].grades[_subject] = _grade;
        emit GradeAssigned(_studentAddress, _subject, _grade);
    }

    function getGrade(address _studentAddress, string memory _subject) public view returns (uint8) {
        require(bytes(students[_studentAddress].name).length != 0, "Student does not exist");
        return students[_studentAddress].grades[_subject];
    }

    function getStudentName(address _studentAddress) public view returns (string memory) {
        return students[_studentAddress].name;
    }
}
