import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  createCharacter(character: any) {
    return this.http.post(
      'http://localhost:3000/api/characters/save',
      character
    );
  }
}
