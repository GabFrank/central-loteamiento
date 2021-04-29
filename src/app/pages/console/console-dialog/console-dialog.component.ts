import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Lote } from '../console.component';


export interface LoteData {
  data: any;
}
@Component({
  selector: 'app-console-dialog',
  templateUrl: './console-dialog.component.html',
  styleUrls: ['./console-dialog.component.scss']
})
export class ConsoleDialogComponent implements OnInit {

  formGroup: any;
  isEditing = false;
  constructor(
    public dialogRef: MatDialogRef<ConsoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
      observacion: new FormControl(null)
    })
    this.formGroup.disable();
    this.loadData();
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
    console.log(this.formGroup)
    var docRef = this.store.collection("lotes").doc(this.data.id);
    // Set the "capital" field of the city 'DC'
    return docRef.update({
        lote: this.formGroup.get('lote').value ? this.formGroup.get('lote').value : '',
        manzana: this.formGroup.get('manzana').value ? this.formGroup.get('manzana').value : '',
        precio: this.formGroup.get('precio').value ? this.formGroup.get('precio').value : '',
        estado: this.formGroup.get('estado').value ? this.formGroup.get('estado').value : '',
        observacion: this.formGroup.get('observacion').value ? this.formGroup.get('observacion').value : ''
    })
    .then(() => {
        this.openSnackBar('Guardado con éxito', '')
        this.dialogRef.close()
    }).catch((error)=>{
        this.openSnackBar('Ocurrio un error', '')
    })
  }

  loadData(){
    this.formGroup.get('lote').setValue(this.data.lote)
    this.formGroup.get('manzana').setValue(this.data.manzana)
    this.formGroup.get('precio').setValue(this.data.precio)
    this.formGroup.get('estado').setValue(this.data.estado)
    this.formGroup.get('observacion').setValue(this.data.observacion)
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

}
