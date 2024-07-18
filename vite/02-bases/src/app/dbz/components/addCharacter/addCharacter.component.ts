import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {

  public character: Character = {
    name : '',
    power : 0
  }

  public emitCharacter(){
    console.log(this.character);
  }
}
