import { Component, OnInit } from '@angular/core';
import { HallticketService } from '../../service/hallticket.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hallticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hallticket.component.html',
  providers: [HallticketService],
})
export class HallticketComponent implements OnInit {

  halltickets: any[] = [];
  hallticket: any = {
    name: '',
    examName: '',
    examDate: '',
    academicYear: ''
  };

  constructor(private hallticketService: HallticketService) {}

  ngOnInit(): void {
    this.getHalltickets();
  }

  // ✅ Fetch all halltickets using modern subscribe
  getHalltickets() {
    this.hallticketService.getAllHalltickets().subscribe({
      next: (data) => {
        this.halltickets = data;
      },
      error: (error) => {
        console.error("Error fetching halltickets:", error);
      }
    });
  }

  // ✅ Add a new hallticket
  addHallticket() {
    this.hallticketService.addHallticket(this.hallticket).subscribe({
      next: () => {
        alert("Hallticket added successfully!");
        this.getHalltickets();
        this.resetForm();
      },
      error: (error) => {
        console.error("Error adding hallticket:", error);
      }
    });
  }

  // ✅ Delete a hallticket by ID
  deleteHallticket(hallticketID: number) {
    this.hallticketService.deleteHallticketById(hallticketID).subscribe({
      next: () => {
        alert("Hallticket deleted successfully!");
        this.getHalltickets();
      },
      error: (error) => {
        console.error("Error deleting hallticket:", error);
      }
    });
  }

  // ✅ Reset the form
  resetForm() {
    this.hallticket = {
      name: '',
      examName: '',
      examDate: '',
      academicYear: ''
    };
  }
}
