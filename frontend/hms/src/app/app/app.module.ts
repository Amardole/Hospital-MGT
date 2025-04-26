import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
// import { PatientsComponent } from './patients/patients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientsComponent } from '../patients/patients.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    // AppComponent,
    // PatientsComponent,  // ✅ Make sure this is here
  ],
  imports: [
    BrowserModule,
    FormsModule,         // ✅ Needed for [(ngModel)]
    HttpClientModule,    // ✅ Needed if you are calling APIs (PatientService)
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
