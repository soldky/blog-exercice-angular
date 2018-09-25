import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContain: string;
  @Input() lastUpdate: date;
  @Input() like: int;
  @Input() dislike: int;

  constructor() { }

  ngOnInit() {
  }

  addLike() {
  	this.like += 1;
  }

  addDislike() {
  	this.dislike += 1;
  }

}
