import { Component, OnInit } from '@angular/core';
import { SupervisorService } from '../../service/supervisor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supervisor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supervisor.component.html',
  providers: [SupervisorService],
})
export class SupervisorComponent implements OnInit {
  supervisor: any[] = [];

  newSupervisor: any = {
    name: '',
    email: '',
    department: '',
    assignedHall: ''
  };


  constructor(private supervisorService: SupervisorService) {}

  ngOnInit(): void {
    this.getSupervisor();
  }

  getSupervisor() {
    this.supervisorService.getAllSupervisor().subscribe({
      next: (data) => {
        this.supervisor = data;
      },
      error: (error) => {
        console.error("Error fetching supervisor:", error);
      }
    });
  }

  addSupervisor() {
    this.supervisorService.addSupervisor(this.newSupervisor).subscribe({
      next: () => {
        alert("Supervisor added successfully!");
        this.getSupervisor();
        this.resetForm();
      },
      error: (error) => {
        console.error("Error adding supervisor:", error);
      }
    });
  }

  deleteSupervisor(SupervisorID: number) {
    this.supervisorService.deleteSupervisorById(SupervisorID).subscribe({
      next: () => {
        alert("Supervisor deleted successfully!");
        this.getSupervisor();
      },
      error: (error) => {
        console.error("Error deleting supervisor:", error);
      }
    });
  }

  resetForm() {
    this.newSupervisor = {
      name: '',
      email: '',
      department: '',
      assignedHall: ''
    };
  }
}
