import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContain: string;
  @Input() lastUpdate: Date;
  @Input() like: number;
  @Input() dislike: number;

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
