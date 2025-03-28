import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule]

})
export class AppComponent implements OnInit {
  title = 'FSD';
  users: any = [];
  newUser = {
    name: '',
    email: '',
    department: '',
    exam: ''
  };

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getData().subscribe((data: any) => {
      this.users = data;
    });
  }

  addUser(user: any) {
    const formattedUser = {
      name: user.name,
      email: user.email,
      department: user.department,
      assignedExams: user.exam, 
    };
  
    this.usersService.SaveData(formattedUser).subscribe(
      (response: any) => {
        this.fetchUsers();
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error); 
      }
    );
  }

  // deleteUser(id: string, ) {
  //   if (confirm('Are you sure you want to delete this examiner?')) {
  //     this.usersService.deleteUserById(id).subscribe(
  //       () => {
  //         this.users = this.users.filter((user: { id: string; }) => user.id !== id);
  //         console.log(`User with ID ${id} deleted.`);
  //       },
  //       (error) => {
  //         console.error('Error deleting user:', error);
  //       }
  //     );
  //   }
  // }

  deleteUser(examinerID: any) {
    if (!examinerID) {
      console.error("Error: Examiner ID is undefined");
      return;
    }
    
    this.usersService.deleteUserById(examinerID).subscribe(
      () => {
        console.log(`User with ID ${examinerID} deleted`);
        this.fetchUsers(); 
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }






}
