import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrencyMask } from 'src/app/utils/currency/currency';


export interface LoteData {
  data: any;
  cambio: number;
}
@Component({
  selector: 'app-console-dialog',
  templateUrl: './console-dialog.component.html',
  styleUrls: ['./console-dialog.component.scss']
})
export class ConsoleDialogComponent implements OnInit {

  formGroup: any;
  formGroup2: any;
  isEditing = false;
  currency: CurrencyMask =  new CurrencyMask;
  constructor(
    public dialogRef: MatDialogRef<ConsoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoteData,
    private store: AngularFirestore,
    private snackBar: MatSnackBar
    ) { 
    }

  ngOnInit(): void {
    console.log(this.data)
    this.formGroup = new FormGroup({
      lote: new FormControl(null),
      manzana: new FormControl(null),
      estado: new FormControl(null),
      precio: new FormControl(null),
      precioFinanciado: new FormControl(null),
      observacion: new FormControl(null),
      plazo: new FormControl(null),
      porcentaje: new FormControl(null),
      entregaGs: new FormControl(null),
      entregaDs: new FormControl(null),
      cuotaGs: new FormControl(null),
      cuotaDs: new FormControl(null),
      m2: new FormControl(null),
    })
    this.formGroup2 = new FormGroup({
      entregaGs: new FormControl(null),
      entregaDs: new FormControl(null),
      cuotaGs: new FormControl(null),
      cuotaDs: new FormControl(null)
    })
    this.formGroup.disable();
    this.formGroup2.disable();
    this.loadData();

    this.formGroup.valueChanges.subscribe((res: any)=>{
      this.calcularValores()
    })
  }

   titleCaseWord(word: string) {
    if (!word) return word;
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
  }

  formStateChange(e: String){
    switch (e) {
      case 'editar':
        this.isEditing = true;
        this.formGroup.enable();
        break;
      case 'cancelar':
        this.isEditing = false;
        this.formGroup.disable();
        break;
      default:
        break;
    }
  }

  onSubmit(){
    var docRef = this.store.collection("lotes").doc(this.data.data.id);
    this.formGroup.disable()
    this.isEditing = false;

    // Set the "capital" field of the city 'DC'
    return docRef.update({
        lote: this.formGroup.get('lote').value ? this.formGroup.get('lote').value : '',
        manzana: this.formGroup.get('manzana').value ? this.formGroup.get('manzana').value : '',
        precio: this.formGroup.get('precio').value ? this.formGroup.get('precio').value : '',
        estado: this.formGroup.get('estado').value ? this.formGroup.get('estado').value : '',
        observacion: this.formGroup.get('observacion').value ? this.formGroup.get('observacion').value : '',
        precioFinanciado: this.formGroup.get('precioFinanciado').value ? this.formGroup.get('precioFinanciado').value : '',
        plazo: this.formGroup.get('plazo').value ? this.formGroup.get('plazo').value : '',
        porcentaje: this.formGroup.get('porcentaje').value ? this.formGroup.get('porcentaje').value : '',
        m2: this.formGroup.get('m2').value ? this.formGroup.get('m2').value : ''
    })
    .then(() => {
        this.openSnackBar('Guardado con éxito', '')
        this.calcularValores()
    }).catch((error)=>{
      this.formGroup.enable()
      this.isEditing = true;
        this.openSnackBar('Ocurrio un error', '')
    })
  }

  loadData(){
    this.formGroup.get('lote').setValue(this.data.data.lote)
    this.formGroup.get('manzana').setValue(this.data.data.manzana)
    this.formGroup.get('precio').setValue(this.data.data.precio)
    this.formGroup.get('estado').setValue(this.data.data.estado)
    this.formGroup.get('observacion').setValue(this.data.data.observacion)
    this.formGroup.get('precioFinanciado').setValue(this.data.data.precioFinanciado)
    this.formGroup.get('plazo').setValue(this.data.data.plazo)
    this.formGroup.get('porcentaje').setValue(this.data.data.porcentaje)
    this.formGroup.get('m2').setValue(this.data.data.m2)

    this.calcularValores()
    
  }

  calcularValores(){
    if(this.data.data.plazo!=null && this.data.data.porcentaje){
      let entregaDs = this.formGroup.get('precioFinanciado').value * (this.formGroup.get('porcentaje').value / 100)
      let entregaGs = entregaDs * this.data.cambio;
      let cuotaDs = (this.data.data.precioFinanciado - entregaDs) / this.data.data.plazo;
      let cuotaGs = ((this.data.data.precioFinanciado - entregaDs) / this.data.data.plazo) * this.data.cambio;
      this.formGroup2.controls.entregaDs.setValue(entregaDs)
      this.formGroup2.controls.entregaGs.setValue(entregaGs)
      this.formGroup2.controls.cuotaDs.setValue(cuotaDs)
      this.formGroup2.controls.cuotaGs.setValue(cuotaGs)
      console.log('hola')
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

}
