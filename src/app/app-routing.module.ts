import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {
    path:"Dashboard", component:DashboardComponent
  },
  {
    path:"", redirectTo:"Dashboard", pathMatch:"full"
  },
  {
    path:"Employees", component:EmployeesComponent
  },
  {
    path:"Gallery", component:GalleryComponent
  },
  {
    path:"Contacts", component:ContactsComponent
  },
  {
    path:"Leads", component:LeadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
