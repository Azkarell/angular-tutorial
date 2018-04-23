import { Routes } from "@angular/router";
import { Tutorial1Component } from "./tutorial1.component";



export const routes: Routes = [
    {
        path: '',
        component: Tutorial1Component,
        data: {
            linkText: "Einführung"
        }
    }
]