import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public titulo: string = "Crear cliente";
  constructor(private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public create(): void{
    console.log("Clicked");
    console.log(this.cliente);

  }

}
