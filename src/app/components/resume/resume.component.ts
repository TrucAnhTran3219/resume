import { Component, OnInit } from '@angular/core';
import information from './models/information';
import Social from './models/social';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  vinovaResponsibilities: Array<string> = [""];

  aesResponsibilities: Array<string> = ["",
  ""];

  thaisonResponsibilities: Array<string> = [""];

  information: information = {
    name: "Tran Thi Truc Anh",
    address: "114/15 Bui Quang La streeet, ward 12, Tan Binh district, HCMC",
    phone: "+84 366 113 219",
    email: "trucanh.imex@gmail.com",
    coverInfo: "I have over two years of working with manual testing. My projects are e-commerce, estate, and logictis domain." +
               "I've tested the Mobile App, Web, CMS, and virtual environments."
  }

  social: Social={
    linkedin: "https://www.linkedin.com/in/truanhtester/",
    gitHub:"",
    twitter:"",
    resume:""
  }

  constructor() { }

  ngOnInit(): void {}

}
