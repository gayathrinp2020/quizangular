import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent {
  @Input() participantName: string = '';
  @Input() quizTitle: string = '';
  @Input() score: number = 0;

  printCertificate(): void {
    const printContents = document.getElementById(
      'certificate-template'
    )?.outerHTML;
    const popupWin = window.open('', '_blank');
    popupWin?.document.open();
    popupWin?.document.write(`
      <html>
        <head>
          <title>Certificate</title>
          <link rel="stylesheet" type="text/css" href="certificate.component.css">
          <style>
            @media print {
              body {
                padding: 20px;
              }
              .certificate-container{
                width: 800px;
                height: 400px;
                background-color: #e8edef;
                padding: 30px;
                color: #333;
                font-family: 'Open Sans', sans-serif;
                box-shadow: 0 0 5px rgba(0, 0, 0, .5);
                border: 5px solid #3b95a3;
                text-align: center;
            }
            .title{
                font-style: italic;
                font-family: serif;
            }
          </style>
        </head>
        <body>${printContents}</body>
      </html>
    `);
    popupWin?.document.close();
    popupWin?.print();
    popupWin?.close();
  }
}
