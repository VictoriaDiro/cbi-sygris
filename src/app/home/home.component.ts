import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   cardsContent: any = [
      {
         urlImage: '../../assets/icons/files/file-alt.svg',
         title: 'Modelo de negocio',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página',
      },
      {
         urlImage: '../../assets/icons/files/file-invoice-dollar.svg',
         title: 'Factores y tendencias',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      },
      {
         urlImage: '../../assets/icons/files/file-edit.svg',
         title: 'Políticas de la compañía y resultados',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      },
      {
         urlImage: '../../assets/icons/files/file-chart-line.svg',
         title: 'Cuestiones medioambientales',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      },
      {
         urlImage: '../../assets/icons/files/file-spreadsheet.svg',
         title: 'Sociales y de personal',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      },
      {
         urlImage: '../../assets/icons/files/file-archive.svg',
         title: 'Derechos Humanos',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      },
      {
         urlImage: '../../assets/icons/files/file-user.svg',
         title: 'Corrupción y soborno',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      },
      {
         urlImage: '../../assets/icons/files/file-invoice.svg',
         title: 'Sociedad',
         text: 'Breve descripción, instrucción, guía, o introducción al contenido dentro de esta sección o página'
      }

   ];

   constructor() { }

   ngOnInit(): void {
      console.log(this.cardsContent);
   }

}
