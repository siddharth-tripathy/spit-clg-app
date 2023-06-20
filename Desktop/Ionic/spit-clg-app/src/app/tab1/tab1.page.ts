import { Component } from '@angular/core';
import { AcademicsPage } from '../academics/academics.page';
import { NavController } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {

  constructor(private router: Router) {}

  public buttonMClicked: boolean = false; 

    public onButtonMClick() {

        this.buttonMClicked = !this.buttonMClicked;
    }

    academics(){
      this.router.navigate(['/academics']);
    }

    profile(){
      this.router.navigate(['/profile']);
    }

    logout(){
      this.router.navigate(['/faculty']);
    }

    score(){
      this.router.navigate(['/score']);
    }

    openUrlpa(){
      window.open('https://moodle.spit.ac.in/course/view.php?id=1857','_system');
    }
    openUrlml(){
      window.open('https://moodle.spit.ac.in/course/view.php?id=1855','_system');
    }
    openUrlmp(){
      window.open('https://moodle.spit.ac.in/course/view.php?id=1858','_system');
    }
    openUrljp(){
      window.open('https://moodle.spit.ac.in/course/view.php?id=1851','_system');
    }
    openUrldaa(){
      window.open('https://moodle.spit.ac.in/course/view.php?id=1853','_system');
    }
}
