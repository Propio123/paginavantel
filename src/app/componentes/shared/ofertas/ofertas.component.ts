import { Component, OnInit } from '@angular/core';
declare var window:any;
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})

export class OfertasComponent implements OnInit {
formModal:any;
constructor(){}
ngOnInit(): void {
  this.formModal=new window.bootstrap.Modal(document.getElementById('vModal'));
}
openFormModal(){
  this.formModal.show();
}
saveSomeThing(){
  this.formModal.hide();
}

}
