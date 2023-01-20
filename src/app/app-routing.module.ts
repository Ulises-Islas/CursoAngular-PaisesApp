import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorContinenteComponent } from './paises/pages/por-continente/por-continente.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full',
    },
    {
        path: 'continente',
        component: PorContinenteComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent,
    },
    {
        path: '**', //Cualquier dirección que no esté especificada
        redirectTo: '', //Redirecciona al path '' pero se podría mostrar un componente por ejemplo, Code404Component
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule {

}