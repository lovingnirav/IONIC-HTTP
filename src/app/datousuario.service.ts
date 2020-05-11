import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
///https://jsonplaceholder.typicode.com/users
///https://jsonplaceholder.typicode.com/albums
///https://jsonplaceholder.typicode.com/photos
@Injectable({
  providedIn: 'root'
})
export class DatousuarioService {
  ///inicializar import http
  constructor(public http:HttpClient) { }
  ///funcion obtener todos los usuarios
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  ///funcion obtener todos los albumes por medio del id del usuario seleccionado
  getalbumsid(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId='+userId);
  }
  ///funcion obtener todos las fotos por medio del id del album seleccionado
  getphotosid(albumId){
    return this.http.get('https://jsonplaceholder.typicode.com/photos?albumId='+albumId);
  }
}
