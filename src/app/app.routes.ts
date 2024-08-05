import { Routes } from "@angular/router";
import { FormLoginComponent } from "./form-login/form-login.component";
import { guardGuard } from "./interceptors/guard.guard";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";

export const routes: Routes = [
  {
    path: "newFaceSnap",
    loadComponent: () =>
      import("./new-face-snap/new-face-snap.component").then(
        (m) => m.NewFaceSnapComponent
      ),
    canActivate: [guardGuard]
  },
  {
    path: "facesnap/:id",
    component: SingleFaceSnapComponent,
    canActivate: [guardGuard],
  },
  { 
    path: "", 
    component: LandingpageComponent,
    canActivate: [guardGuard],
  },
  {
    path: "facesnaps",
    loadComponent: () =>
      import("./facs-snap-list/facs-snap-list.component").then(
        (m) => m.FacsSnapListComponent
      ),
    canActivate: [guardGuard]
  },
  {
    path: "login",
    loadComponent: () =>
      import("./form-login/form-login.component").then(
        (m) => m.FormLoginComponent
      ),
  },
  // {path: 'facesnaps', component: FacsSnapListComponent}
];
