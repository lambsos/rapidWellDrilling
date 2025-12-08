import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { WaterWellDrillingComponent } from './pages/services/water-well-drilling/water-well-drilling.component';
import { AgriculturalWellsComponent } from './pages/services/agricultural-wells/agricultural-wells.component';
import { WellAbandonmentComponent } from './pages/services/well-abandonment/well-abandonment.component';
import { EmploymentComponent } from './pages/employment/employment.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'about-us', component: AboutComponent },
    { 
        path: 'sales-and-services', 
        component: ServicesComponent,
        children: [
            { path: '', redirectTo: 'water-well-drilling', pathMatch: 'full' },
            { path: 'water-well-drilling', component: WaterWellDrillingComponent },
            { path: 'agricultural-wells', component: AgriculturalWellsComponent },
            { path: 'well-abandonment', component: WellAbandonmentComponent }
        ]
    },
    { path: 'employment', component: EmploymentComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: '**', redirectTo: '' }
];
