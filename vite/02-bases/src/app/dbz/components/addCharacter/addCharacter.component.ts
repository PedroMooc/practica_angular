import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name : '',
    power : 0
  }

  public emitCharacter(){
    console.log(this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character.name = "";
    this.character.power = 0;
  }
}
