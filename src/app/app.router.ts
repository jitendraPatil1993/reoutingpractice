import { Routes, RouterModule } from '@angular/router'; 

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { GenaiComponent } from './genai/genai.component';
import { MongoComponent } from './mongo/mongo.component';
import { ExpressComponent } from './express/express.component';
import { NodeComponent } from './node/node.component';
import { ContactComponent } from './contact/contact.component';
import { RestcallComponent } from './restcall/restcall.component';
export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'home', component: HomeComponent },

    { path: 'course', component: CoursesComponent },
    { path: 'mean', component: MeanComponent },
    { path: 'mern', component: MernComponent },
    { path: 'genai', component: GenaiComponent },
    { path: 'mongo', component: MongoComponent },
    { path: 'express', component: ExpressComponent },
    { path: 'node', component: NodeComponent },

    { path: 'register', component: RegistrationComponent },
    
    { path: 'gallary', component: GallaryComponent },    
    
    { path: 'contact', component: ContactComponent },    
    { path: 'restcall', component: RestcallComponent },    
];


export const routes = RouterModule.forRoot(router);
