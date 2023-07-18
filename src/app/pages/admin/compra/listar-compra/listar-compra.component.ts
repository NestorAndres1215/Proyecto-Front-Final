import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/services/compra.service';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.css']
})
export class ListarCompraComponent implements OnInit {
  compras: any;
  compra: any = [];
  constructor(private http: HttpClient,
    private compraService: CompraService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }
  obtenerCategorias() {
    this.compraService.listarCompra().subscribe(
      (compras: any) => {
        this.compras = compras;
      },
      (error: any) => {
        console.log("Error al obtener las categorías: ", error);
      }
    );
  }

  downloadPDF() {
    const DATA = document.getElementById('htmlData');

    if (DATA) {
      const doc = new jsPDF('p', 'pt', 'a4');
      const options = {
        background: 'white',
        scale: 3
      };

      html2canvas(DATA, options).then((canvas) => {
        const img = canvas.toDataURL('image/png');
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = doc.getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      
        // Agregar título al PDF
        const title = 'Listado de Compras';
        const titleFontSize = 18;
        const titleMarginTop = 20;
        const titleX = doc.internal.pageSize.getWidth() / 2;
        const titleY = titleMarginTop;
        doc.setFontSize(titleFontSize);
        doc.text(title, titleX, titleY, { align: 'center' });
      
        // Personalizar el diseño del PDF
        const footerText = '© 2023 Retro Futbol'; // Texto del pie de página
        const footerFontSize = 10; // Tamaño de fuente del pie de página
        const footerMarginTop = 10; // Margen superior del pie de página
        const footerX = doc.internal.pageSize.getWidth() / 2; // Posición X del pie de página
        const footerY = doc.internal.pageSize.getHeight() - footerMarginTop; // Posición Y del pie de página
        doc.setFontSize(footerFontSize);
        doc.text(footerText, footerX, footerY, { align: 'center' });
      
        // Guardar el documento PDF
        doc.save(`${new Date().toISOString()}_compras.pdf`);
      });
    } else {
      console.log('El elemento HTML no se encontró');
    }
  }


}
