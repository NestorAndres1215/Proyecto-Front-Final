import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private repoOwner = 'Drest12'; // Reemplaza con el propietario del repositorio
  private repoName = 'Proyecto Front Final'; // Reemplaza con el nombre de tu repositorio
  private apiUrl = '|https://api.github.com/repos/Drest12/Proyecto-Front-Final/commits';


  constructor(private http: HttpClient) { }

  getCommitCount(): Observable<number> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(commits => commits.length)
    );
  }
}
