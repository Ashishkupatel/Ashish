import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './banner/banner.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { RoutesComponent } from './routes/routes.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficeComponent } from './routes/office/office.component';
import { NewcourcesComponent } from './routes/newcources/newcources.component';
import { OffersComponent } from './routes/offers/offers.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import {CourseService}  from './services/course.service';
import { OffercodePipe } from './pipes/offercode.pipe';
import {FormsModule} from '@angular/forms';
import { FilterpricePipe } from './pipes/filterprice.pipe';

const routes=[{path:"",component:HomeComponent },
{path:"office",component:OfficeComponent},
{path:"newcources",component:NewcourcesComponent},
{path:"offers",component:OffersComponent},
{path:"vclass",component:VirtualclassComponent},
{path:"reviews",component:ReviewsComponent}]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    RoutesComponent,
    VirtualclassComponent,
    HomeComponent,
    OfficeComponent,
    NewcourcesComponent,
    OffersComponent,
    ReviewsComponent,
    CourselistComponent,
    CourseComponent,
    OffercodePipe,
    FilterpricePipe
 
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
