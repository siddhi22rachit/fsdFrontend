import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../service/enrollment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment.component.html',
  providers: [EnrollmentService],
})
export class EnrollmentComponent implements OnInit {
  enrollment: any[] = [];

  newEnrollment: any = {
    name: '',
    department: '',
    year: ''
  };


  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.getEnrollment();
  }

  getEnrollment() {
    this.enrollmentService.getAllEnrollment().subscribe({
      next: (data) => {
        this.enrollment = data;
      },
      error: (error) => {
        console.error("Error fetching enrollment:", error);
      }
    });
  }

  addEnrollment() {
    this.enrollmentService.addEnrollment(this.newEnrollment).subscribe({
      next: () => {
        alert("Enrollment added successfully!");
        this.getEnrollment();
        this.resetForm();
      },
      error: (error) => {
        console.error("Error adding enrollment:", error);
      }
    });
  }

  deleteEnrollment(EnrollmentID: number) {
    this.enrollmentService.deleteEnrollmentById(EnrollmentID).subscribe({
      next: () => {
        alert("Enrollment deleted successfully!");
        this.getEnrollment();
      },
      error: (error) => {
        console.error("Error deleting enrollment:", error);
      }
    });
  }

  resetForm() {
    this.newEnrollment = {
      name: '',
      
      department: '',
      year: ''
    };
  }
}
