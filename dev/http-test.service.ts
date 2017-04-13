import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService{
    constructor(private _http:Http){ }

    getCurrentTime(){
        return this._http.get('http://date.jsontest.com')
            .map((res)=>{
                res.json()
            });
    }

    postJSON(){
        var json=JSON.stringify({
            var1:'test',
            var2:3
        });
        var params='json='+json;
        var headers=new Headers();
        headers.append('Content-Typpe',
            'application/x-www-form-urlencoded');
        
    }
}