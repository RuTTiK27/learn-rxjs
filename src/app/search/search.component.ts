import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, debounceTime, distinct, elementAt, filter, first, from, last, max, min, skip, take, takeLast, takeWhile } from 'rxjs';
import { AppComponent } from '../app.component';
import { count } from 'console';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  SearchForm!: FormGroup;
  name!: FormControl;
  arr = ["mem1","mem2","mem3","mem1"];
  arrOb$:Observable<string> = from(this.arr);
  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.SearchForm = new FormGroup({
      name: new FormControl("Start Search")
    })

    this.SearchForm.get('name')?.valueChanges.pipe(
      //take(2),
      //takeWhile((v)=>this.checkCondition(v)),
      //takeLast(2), --never callled
      debounceTime(2000),
      filter((v)=> this.checkCharCount(v))
      
    )
    .subscribe(data=>{
      console.log(data);
      
      // this.arrOb$.pipe(
      //   takeLast(2)
      // ).subscribe(data=>{
      //   console.log(data)
      // })

      // this.arrOb$.pipe(
      //   first()
      // ).subscribe(data=>{
      //   console.log(data)
      // })
      // this.arrOb$.pipe(
      //   last()
      // ).subscribe(data=>{
      //   console.log(data)
      // })
      // this.arrOb$.pipe(
      //   elementAt(1)
      // ).subscribe(data=>{
      //   console.log(data)
      // })
      // this.arrOb$.pipe(
      //   distinct()
      // ).subscribe(data=>{
      //   console.log(data)
      // })
      // this.arrOb$.pipe(
      //   skip(2)
      // ).subscribe(data=>{
      //   console.log(data)
      // })
      // this.arrOb$.pipe(
      //   max()
      // ).subscribe(data=>{
      //   console.log(data)
      // })
      // this.arrOb$.pipe(
      //   min()
      // ).subscribe(data=>{
      //   console.log(data)
      // })
    })
  }
  checkCharCount(v:any){
    return v.length < 3? true: false;
  }
  checkCondition(value:any){
    // if(value>5){
    //   return false
    // }else{
    //   return true
    // }
    return value.length > 5? false:true
  }

  readValue(){

  }
}
