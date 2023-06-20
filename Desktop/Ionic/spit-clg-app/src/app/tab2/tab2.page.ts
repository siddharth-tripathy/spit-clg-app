import { Component } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  
  public buttonMClicked: boolean = false; 

    public onButtonMClick() {

        this.buttonMClicked = !this.buttonMClicked;
    }

    academics(){
      this.router.navigate(['/academics']);
    }

    hideMe: boolean = false;

  public buttonKClicked: boolean = false; //Whatever you want to initialise it as

  public Kalbande() {

      this.buttonKClicked = !this.buttonKClicked;
  }

  public buttonRClicked: boolean = false;

  public Raundale() {

    this.buttonRClicked = !this.buttonRClicked;
}

public buttonAKClicked: boolean = false;

public Karande() {

  this.buttonAKClicked = !this.buttonAKClicked;
}

public buttonHKClicked: boolean = false;

public Kanakia() {

  this.buttonHKClicked = !this.buttonHKClicked;
}

public buttonManClicked: boolean = false;

public Mangaonkar() {

  this.buttonMClicked = !this.buttonMClicked;
}

public buttonTClicked: boolean = false;

public Thakur() {

  this.buttonTClicked = !this.buttonTClicked;
}

public buttonVClicked: boolean = false;

public Vaidya() {

  this.buttonVClicked = !this.buttonVClicked;
}
}
