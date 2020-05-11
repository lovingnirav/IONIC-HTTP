import { Component} from '@angular/core';
import { ActivatedRoute} from "@angular/router"; 
import { DatousuarioService } from '../datousuario.service';  
@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage{
  //Id album Seleccionado
  id: any;
  //lista de Fotos
  Photos;
  ///inicializar service 
  constructor(private actRoute: ActivatedRoute,public api:DatousuarioService) {
    ///accedo al los parametros de la ruta y obtengo el id del album  seleccionado
    this.id = this.actRoute.snapshot.paramMap.get('id');  
     //obtengo las fotos del album seleccionado llamando la funcion fetchPhotosId
    this.fetchPhotosId(this.id);
  } 
  //funcion que hereda la funcion de el service datousuarios que contiene los Usuarioa/Albumes/Fotos
  //Funcion Obtener las Fotos del album seleccionado
  fetchPhotosId(id){
    this.api.getphotosid(id).subscribe(
      (data)=>{ this.Photos=data; },
      (error)=>{ console.log(error) } 
  )};

}
