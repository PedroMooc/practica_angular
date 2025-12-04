import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialogModule, } from '@angular/material/dialog';
import { Articulo } from '../articulo';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialogoarticulo',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatDialogActions, MatDialogModule],
  templateUrl: './dialogoarticulo.component.html',
  styleUrl: './dialogoarticulo.component.css'
})
export class DialogoarticuloComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogoarticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Articulo
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
