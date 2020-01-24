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
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email:"email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  {
    nome: "Nome Teste",
    cpf: "496.333.518-20",
    email: "email@teste.com",
    telefone: "(11) 95888-5825",
    grauParentesco: "Filho",
    sexo: "Masculino",
    dataNascimento: new Date(),
    status: "Aprovado"
  },

  
]
