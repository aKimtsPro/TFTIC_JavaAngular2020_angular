import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { ApiConsumeService } from '../../services/api-consume.service'

@Component({
  selector: 'app-demo-service-http',
  templateUrl: './demo-service-http.component.html',
  styleUrls: ['./demo-service-http.component.css']
})
export class DemoServiceHttpComponent implements OnInit {

  postList: Post[] = [];

  constructor(private service: ApiConsumeService) {}

  ngOnInit(): void {
  }

  onClick(){
    // this.service.getPosts().subscribe(
    //   (posts) => this.postList = posts,
    //   (err) => console.log(err),
    //   () => console.log("COMPLETED")
    // );

    this.service.getPost(101).subscribe(console.log, console.log);
  }
}
