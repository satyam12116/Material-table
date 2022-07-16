import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient) {
    }

    getSampleData(): Observable<any> {
        return this.httpClient.get<any>(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json`);
    }
}