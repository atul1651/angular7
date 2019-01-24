import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PatientComponent } from './patient/patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: '',
    component: DoctorComponent
  },
  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
