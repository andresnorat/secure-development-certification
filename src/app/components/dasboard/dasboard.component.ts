import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [],
  templateUrl: './dasboard.component.html',
  styleUrl: './dasboard.component.scss'
})
export class DasboardComponent {
  downloadExcel() {
    const link = document.createElement('a');
    link.href = '../../../assets/DesarrolloSeguro.xlsx';
    link.download = 'Banco de preguntas.xlsx';
    link.click();
  }
}
