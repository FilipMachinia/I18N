import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {Router, RouterOutlet} from "@angular/router";
import {TabMenuModule} from "primeng/tabmenu";
import {MenuItem} from "primeng/api";
import {LanguageService} from "../language.service";
import {FormsModule} from "@angular/forms";
import {TestingChildComponent} from "./testing-child/testing-child.component";

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [
    ButtonModule,
    DropdownModule,
    RouterOutlet,
    TabMenuModule,
    FormsModule,
    TestingChildComponent
  ],
  templateUrl: './testing.component.html',
  styleUrl: './testing.component.css'
})
export class TestingComponent {
  languageSelected: { code: string, label: string } = {code: '', label: ''};
  languageList: any[] = [
    {code: 'en', label: 'English'},
    {code: 'de', label: 'Deutsch'}
  ];

  header: string = $localize`:@@HeaderTS:Header TS!`;
  button: string = $localize`:@@buttonTS:Label TS`;
  items: MenuItem[];

  constructor(private router: Router, private languageService: LanguageService) {
    this.items = [
      {label: $localize`:@@Home:Home`, icon: 'pi pi-fw pi-home'},
      {label: $localize`:@@Second:Second`, icon: 'pi pi-fw pi-calendar'},
      {label: $localize`:@@Third:Third`, icon: 'pi pi-fw pi-pencil'}
    ];
  }

  ngOnInit() {
    // take language from local storage, if not found set to english
    if (this.languageService.language) {
      this.languageSelected = this.languageList.find(f => f.code === this.languageService.language);
    } else {
      this.languageService.language = 'en';
    }
  }

  changeLanguage() {
    this.languageService.language = this.languageSelected.code;
    window.location.reload();
  }
}
