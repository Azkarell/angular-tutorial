import { Routes } from "@angular/router";


export const routes: Routes = [

    {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full'
    },
    {
        path: 'introduction',
        loadChildren: 'app/tutorial1/tutorial1.module#Tutorial1Module',
        data: {
            linkText: "Übersicht"
        }
    }

]