import { Component} from '@angular/core';
import { ActivatedRoute} from "@angular/router"; 
import { DatousuarioService } from '../datousuario.service'; 

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage {
  //Id usuario Seleccionado
  id: any;
  //lista de Albumes
  Albums;
  ///inicializar service 
  constructor(private actRoute: ActivatedRoute,public api:DatousuarioService) {
    ///accedo al los parametros de la ruta y obtengo el id del usuario seleccionado
    this.id = this.actRoute.snapshot.paramMap.get('id');  
    //obtengo los albumes de ese usuario llamando la funcion
    this.fetchAlbumsId(this.id);
  } 
  //funcion que hereda la funcion de el service datousuarios que contiene los Usuarioa/Albumes/Fotos
  //Funcion Obtener los Albumes del usuario seleccionado
  fetchAlbumsId(id){
    this.api.getalbumsid(id).subscribe(
      (data)=>{ this.Albums=data; },
      (error)=>{ console.log(error) } 
  )};

}
