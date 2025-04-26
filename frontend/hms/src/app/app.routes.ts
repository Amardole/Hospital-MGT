import { RouterModule, Routes } from '@angular/router';
// import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MedicinesComponent } from './medicines/medicines.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientsComponent } from './patients/patients.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    { path: 'patients', component: PatientsComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'medicines', component: MedicinesComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
