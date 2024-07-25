import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FacsSnapListComponent } from './facs-snap-list/facs-snap-list.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

export const routes: Routes = [
    {path: 'facesnap/:id', component: SingleFaceSnapComponent},
    {path: '', component: LandingpageComponent},
    {path: 'facesnaps', component: FacsSnapListComponent}
];
