import { Component, OnInit } from '@angular/core';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: TabsPageRoutingModule) { }

  ngOnInit() {
  }

  
  
}
