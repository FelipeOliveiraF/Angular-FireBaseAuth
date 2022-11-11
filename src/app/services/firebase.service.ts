import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {


  isLoggedIn = false
  constructor(public firebaseAuth:AngularFireAuth) { }

  //https://firebase.google.com/docs/auth/web/password-auth


  async entrarlogin(email:string, password:string){
      //para o projeto da singular, caso façamos o cadastro manual, essa flag tem que começar o metodo de entrar como true

    await this.firebaseAuth.signInWithEmailAndPassword(email,password)//Metodo do firebase para entrar com email e senha
    .then(res=>{ // se entrar com email e senha
      // esta logado no sistema
      this.isLoggedIn = true
       localStorage.setItem('user',JSON.stringify(res.user))//armazenar o 'valor' do usuario
    })
     .catch(error=>{ 
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      console.log('Nao conseguiu logar');
     })

    
  }

  async cadastrar(email:string, password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)//Metodo do firebase para entrar com email e senha
    .then(res=>{ // se entrar com email e senha
      this.isLoggedIn = true // esta logado no sistema
      localStorage.setItem('user',JSON.stringify(res.user))//armazenar o 'valor' do usuario
    })
  }

  /*logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')//remove o valor do usuario do navegador
  }*/

}
