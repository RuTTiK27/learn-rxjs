import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, from, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-learning.component.html',
  styleUrl: './rxjs-learning.component.css'
})
export class RxjsLearningComponent {
  //agents!: Observable<string>; //First Snippet for understaing observable
  
  //Second Snippet for understaing of operator START
  // student$: Observable<string> = of("KK");
  
  // students = ["Geeta","Meena","Varsha"];
  // studentList$: Observable<string[]> = of(this.students);

  // studentObj$: Observable<any> = of({id:10,name:'ram'}) // obj = {id:10,name:'ram'}
  //Second Snippet for understaing of operator END

  //Third Snippet for understaing from operator START
  // ordersArr = ["fashion","electric","house-hold"];
  // orders$: Observable<string> = from(this.ordersArr);
  //Third Snippet for understaing from operator END

  //Fourth snippet for understanding fromEvent Operator START
  @ViewChild('validate')
  validate!: ElementRef;
  //Fourth snippet for understanding fromEvent Operator END

  ordersArr = ["fashion","electric","house-hold"];
  orders$: Observable<string> = from(this.ordersArr);

  myObservable:Observable<any> = of(1,2,3);
  myObserver = {
    next: (x: any) =>console.log(x),
    error: (err: any) => console.error(err),
    complete: console.log("completed")
  }

  constructor(){}
  ngOnInit():void{
    // this.myObservable.subscribe(data=>{
    //   console.log(data)
    // });
    this.myObservable.subscribe(this.myObserver.next);
    
    

    //First Snippet for understaing observable START
    // this.agents = new Observable(
    //   function(observer){
    //     try {
    //       observer.next("Rutvik");
          
    //         observer.next("Krupal");
          
    //         observer.next("Preet");
          
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    // )
    // this.agents.subscribe(data=>{
    //   console.log(data);
    // })
    //First Snippet for understaing observable END

    //Second Snippet for understaing of operator START
    // try {
    //   this.studentList$.subscribe(data=>{
    //     console.log(data);  
    //   })
    //   this.student$.subscribe(data=>{
    //     console.log(data)
    //   })
    //   this.studentObj$.subscribe(data=>{
    //     console.log(data)
    //   })
    // } catch (error) {
    //   console.log(error);
    // }
    //Second Snippet for understaing of operator END

    //Third Snippet for understaing from operator START
    // try {
    //   this.orders$.subscribe(data=>{
    //     console.log(data)
    //   })
    // } catch (error) {
    //   console.log(error);
    // }
    //Third Snippet for understaing from operator END

    this.orders$.subscribe(data=>{
      const seqNum$ = interval(2000);

      seqNum$.subscribe(num => {
        if(num<6){
          console.log(data + num)
        }
      })
    })



  }

  //Fourth Snippet for understanding fromEvent operator START
  // btnValidateClick(){
  //   const btnValidate$ = fromEvent(this.validate?.nativeElement,'click');

  //   btnValidate$.subscribe(data=>{
  //     console.log(data)
  //   })
  // }
  //Fourth Snippet for understanding fromEvent operator END
}
