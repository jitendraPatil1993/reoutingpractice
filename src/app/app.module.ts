import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { MongoComponent } from './mongo/mongo.component';
import { ExpressComponent } from './express/express.component';
import { NodeComponent } from './node/node.component';
import { GenaiComponent } from './genai/genai.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { GmapComponent } from './gmap/gmap.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { AddressComponent } from './address/address.component';
import { RestcallComponent } from './restcall/restcall.component';

import { HttpClientModule } from '@angular/common/http';

import { IUser } from './IUser';
import {UserapiService} from './userapi.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HomeComponent,
    CoursesComponent,
    RegistrationComponent,
    GallaryComponent,
    MeanComponent,
    MernComponent,
    MongoComponent,
    ExpressComponent,
    NodeComponent,
    GenaiComponent,
    ContactComponent,
    HeaderComponent,
    NavmenuComponent,
    FooterComponent,
    SliderComponent,
    GmapComponent,
    ContactFormComponent,
    VideoFrameComponent,
    AddressComponent,
    RestcallComponent, 
    

  ],
  imports: [
    BrowserModule,    
    routes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [UserapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
