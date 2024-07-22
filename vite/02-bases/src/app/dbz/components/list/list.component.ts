import { CommonModule } from '@angular/common';
import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void{
    //TODO:  Emitir Id de pesonaje
    console.log({index});
    this.onDeleteId.emit(index);

  }
}
