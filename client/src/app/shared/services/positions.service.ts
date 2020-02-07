import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  constructor(private http: HttpClient) {}

  fetch(categoryId: string) {
    this.http.get(`api/position/${categoryId}`);
  }

}
