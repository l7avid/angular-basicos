import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    // Componentes que quiero colocar en mi módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // elementos que quiero hacer visibles
    exports: [
        ListadoComponent
    ],
    // Usualmente sólo van módulos
    imports: [
        CommonModule
    ]
})
export class HeroesModule{

}