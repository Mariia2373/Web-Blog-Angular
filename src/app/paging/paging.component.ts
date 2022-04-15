import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  
  @Input() 'page':number; 
  @Output() newPage = new EventEmitter<number>();
  viewChild: any;


  lastPage() {
    if(this.page > 1){
      this.newPage.emit(this.page - 1);
    }else {
      this.newPage.emit(this.page);
    }
  }

  nextPage(){
    this.newPage.emit(this.page + 1); 
  }


  constructor() { }

  ngOnInit(): void {
  }

}
