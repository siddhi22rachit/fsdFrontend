// import { Routes } from '@angular/router';
// import { TeacherComponent } from './components/teacher/teacher.component';

// export const routes: Routes = [
//   { path: '', redirectTo: '/teachers', pathMatch: 'full' },
//   { path: 'teachers', component: TeacherComponent }
// ];

import { Routes } from '@angular/router';
import { TeacherComponent } from './components/teacher/teacher.component';
import { HomeComponent } from './components/home/home.component'; // Import the new component
import { SupervisorComponent } from './components/supervisor/supervisor.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },      // Home route
  { path: 'teacher', component: TeacherComponent },  // Teacher route
  { path: 'supervisor', component: SupervisorComponent } , // Teacher route
  { path: 'enrollment', component: EnrollmentComponent }  // Teacher route

];
