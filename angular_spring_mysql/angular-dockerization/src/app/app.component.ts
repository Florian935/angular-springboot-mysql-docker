import { environment } from './../environments/environment';
import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: Array<User>;
  env = environment.production;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.postUser(new User('Toto1', 'TOTO1')).subscribe(
      () => this.httpService.getUsers().subscribe(
        (users: Array<User>) => this.users = users
      )
    );
  }
}
