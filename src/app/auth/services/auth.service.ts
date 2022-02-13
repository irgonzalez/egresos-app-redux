import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { getAuth, createUserWithEmailAndPassword, Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Firestore, collection, addDoc, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

    private _auth: Auth

	constructor(
        private firestore: Firestore
    ) { 
        initializeApp(environment.firebase)
        this._auth = getAuth(); 
    }

    initAuthListener(){
        onAuthStateChanged(this._auth, user => {
            console.log('Changes user', user)
        })
    }

    createUser(name: string, email: string, password: string){
        return createUserWithEmailAndPassword(this._auth, email, password).then( ({ user }) => {
            let userToCreate = {
                uid: user.uid,
                name: name,
                email: user.email
            }
            
            const document = doc(this.firestore, `${userToCreate.uid}/usuario`)
            return setDoc(document, userToCreate)
        })
    }

    login(email: string, password: string){
        return signInWithEmailAndPassword(this._auth, email, password)
    }

    logout(){
        return signOut(this._auth)
    }

    isAuth(): Promise<boolean>{
        return new Promise( (resolve, reject) => {
            onAuthStateChanged(this._auth, user => {
                if(user) resolve(true)
                else reject(false)
            })
        })
    }
}
