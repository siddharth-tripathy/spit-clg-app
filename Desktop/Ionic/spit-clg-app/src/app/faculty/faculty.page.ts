import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.page.html',
  styleUrls: ['./faculty.page.scss'],
})
export class FacultyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  public buttonKClicked: boolean = false;

  
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

public buttonMClicked: boolean = false;

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
