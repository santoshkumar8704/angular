import { Injectable, OnInit } from '@angular/core';
import { Observable,of,from,interval, map, switchMap } from 'rxjs';
import { BehaviorSubject,ReplaySubject } from 'rxjs';



interface userDetail{
  name:string
  age:number
}

@Injectable({
  providedIn: 'root'
})
export class RxjsService{
  private newObservable:Observable<any>= new Observable(observer => {observer.next("hi"); observer.next("namaste");observer.complete()})
  private userDetails = new BehaviorSubject<userDetail[]>([])
  private UserReplay = new ReplaySubject<number>(0)
  constructor() { 
    this.subscribeToObservable()
    this.operators()
    this.userDetails.subscribe((value) => console.log(value))
    setTimeout(() => {this.userDetails.next([{name:"santosh",age:21}])},2000)
    setTimeout(() => {this.userDetails.next([{name:"ramya",age:21}]);console.log("inside a timeout",this.userDetails.getValue())},5000)
    this.UserReplay.next(1)
    this.UserReplay.next(2)
    this.UserReplay.next(3)
    this.UserReplay.subscribe((value) => console.log("replay",value))
    
  }

  
private operators(){
  of("Teja","Ramya","sri").subscribe(value => console.log(value))
  from(["Teju","Ramu","sri"]).subscribe(value => console.log(value))
  of("Teja","Ramya","Sri").pipe(map(x => x+"santosh")).subscribe(value => console.log(value))
  //interval(1000).pipe(switchMap(() => from(["a","b","c"]))).subscribe(value => console.log(value))
  // interval(1000).subscribe(value => console.log(value))
}

  private subscribeToObservable(){
    this.newObservable.subscribe(value => console.log(value))

  }

  
}
