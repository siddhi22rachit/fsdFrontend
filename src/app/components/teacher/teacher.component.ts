import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../service/teacher.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher.component.html',
  providers: [TeacherService],
})
export class TeacherComponent implements OnInit {

  teachers: any[] = [];
  teacher: any = {
    name: '',
    email: '',
    department: '',
    subjectsTaught: ''
  };

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.getTeachers();
  }

  // ✅ Fetch all teachers using modern subscribe
  getTeachers() {
    this.teacherService.getAllTeachers().subscribe({
      next: (data) => {
        this.teachers = data;
      },
      error: (error) => {
        console.error("Error fetching teachers:", error);
      }
    });
  }

  // ✅ Add a new teacher
  addTeacher() {
    this.teacherService.addTeacher(this.teacher).subscribe({
      next: () => {
        alert("Teacher added successfully!");
        this.getTeachers();
        this.resetForm();
      },
      error: (error) => {
        console.error("Error adding teacher:", error);
      }
    });
  }

  // ✅ Delete a teacher by ID
  deleteTeacher(teacherID: number) {
    this.teacherService.deleteTeacherById(teacherID).subscribe({
      next: () => {
        alert("Teacher deleted successfully!");
        this.getTeachers();
      },
      error: (error) => {
        console.error("Error deleting teacher:", error);
      }
    });
  }

  // ✅ Reset the form
  resetForm() {
    this.teacher = {
      name: '',
      email: '',
      department: '',
      subjectsTaught: ''
    };
  }
}
