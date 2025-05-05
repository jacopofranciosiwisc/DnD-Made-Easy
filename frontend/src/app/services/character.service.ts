import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  saveCharacter(characterInfo: any) {
    this.http.post(
      'http://localhost:3000/api/characters/save',
      characterInfo,
      {}
    );
  }
}
