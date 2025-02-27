import { Component } from '@angular/core';

import {Observable} from "rxjs"

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {
  Observable = new Observable(observer => observer.next("hello"))

}
