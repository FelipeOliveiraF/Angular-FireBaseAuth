import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSingedIn = false //flag pra controle
  constructor(private router: Router,public firebaseService:FirebaseService) { }
  

  
  ngOnInit(): void { 
    if(localStorage.getItem('user')!== null) //se o valor de user não for nulo... tem um user => está logado
    this.isSingedIn = true 
    else
    this.isSingedIn = false // não esta logado, valor de user é nulo
}


  public esqueceuSenha(): void {
   
    this.router.navigate(['/esqueceu']);
  }


  
  async entrar(email:string,password:string){
 
  
    await this.firebaseService.entrarlogin(email,password)//chama o metodo do services(api do firebase) passando email e password
    if(this.firebaseService.isLoggedIn)
      this.isSingedIn = true


    if(this.isSingedIn){
      alert('Login efetuado')
      this.router.navigate(['/dashboard'])
     
    }else{
      alert('Usuario ou senha não encontrados')
    }

    
  
    
    //não existe else pra esse problema pois o usuário vai estar logado, iremos inserir manualmente

  
    

  }


 /* async Cadastrar(email:string,password:string){
    await this.firebaseService.cadastrar(email,password) //chama o metodo do services(api do firebase) passando email e password
    if(this.firebaseService.isLoggedIn)
    this.isSingedIn = true 
  }

  async Entrar(email:string,password:string){
    await this.firebaseService.entrarlogin(email,password)//chama o metodo do services(api do firebase) passando email e password
    if(this.firebaseService.isLoggedIn)
    this.isSingedIn = true
  }*/

}
