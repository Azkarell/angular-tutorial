import { Routes } from "@angular/router";


export const routes: Routes = [



    {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
    },
    {
        path: 'overview',
        loadChildren: 'app/tutorial1/tutorial1.module#Tutorial1Module',
        data: {
            linkText: "Übersicht"
        }
    },
    {
        path: 'installation',
        loadChildren: 'app/introduction/introduction.module#IntroductionModule',
        data: {
            linkText: "Installation"
        }
    },


]