import { Component } from '@angular/core';
//Importamos la clase HttpClient de la librería de Angular
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//Guardará los datos que nos van a llegar desde el documento json (contendrá las personas)
  //Va a ser de tipo OBJETO: any (tipo objeto)
  companies: any = []; //en la variable companies any estarían todos los proveedores (array)
  anio: number = 2020; // Variable UNIDIRECCIONAL (sólo se muestra)
  filtro: string = "";//Variable para hacer búsqueda (debe coincidir) BIDIRECCIONAL

  //Librería para descargarnos desde internet algo (client http)
  //Lo ponemos en el constructor para que cuando arranque la aplicación se descargue
  //Lo inyectamos en el método constructor
  /*Creamos una variable httpClient: objeto de la clase HttpClient.
  Hay que importarla porque no la coge directamente */
  /* OJO!!! HttpClient debe ser un PROVEEDOR de datos para la aplicación: en "hom.moduel.ts"*/

  
  constructor(private httpClient: HttpClient) {
    /*Le decimos que guarde en la variable que hemos creado todo el contenido de el
    documento de internet (personas) */
    //Método get para coger el contenido de una dirección
    //Contenido del ARRAY RESULTS, reconduciendo con una tubería (pipe) todos los datos al map para que nos mapee sólo el contenido de results
    //Necesitamos importar map
    this.companies = this.httpClient.get('https://raw.githubusercontent.com/juanics2020/responsiveJC/master/datos/MOCK_DATA.json');
  }

}
