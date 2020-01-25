import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.scss']
})
export class MinhaContaComponent implements OnInit {
  public lstDependentes = listTest;
  constructor() { }

  ngOnInit() {
    console.log("DEPENDENTES", this.lstDependentes)
  }

}

export const listTest = [
  {
    nome: "Nome 1",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 5",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 1",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 4",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 2",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 6",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 7",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome 8",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },


]
