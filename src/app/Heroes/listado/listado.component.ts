import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent{
 heroes:string[]=['Spiderman','Iroman','Hulk','Thor','Capitán America']
 heroeBorrado:string='';
 
eliminarHeroe(){
 this.heroeBorrado = this.heroes.shift()|| '';
 
}
}
