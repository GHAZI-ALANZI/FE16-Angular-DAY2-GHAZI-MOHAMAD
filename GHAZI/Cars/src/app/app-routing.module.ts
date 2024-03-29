import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{
  path:"",component:ContentComponent,
},
{path:"contact",component:ContactComponent,
}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
