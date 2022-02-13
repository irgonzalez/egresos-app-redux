import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loading, showError, stopLoading } from 'src/app/utils/utils';

import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
    ]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { 
        this.loginForm = this.fb.group({
			email: ['', [ Validators.required, Validators.email ] ],
			password: ['', [ Validators.required, Validators.minLength(6) ] ],
		})
    }

    ngOnInit(): void {
    }

    // Getters
    get email() {
		return this.loginForm.get('email')
	}

	get password() {
		return this.loginForm.get('password')
	}

    login(){
        if(this.loginForm.invalid) return;
        
        loading('Verifying credentials...')
        
        this.authService.login(this.email.value, this.password.value).then( credentials => {
            stopLoading()
            this.router.navigateByUrl('/')
        })
        .catch( error => {
            showError(error.message)
        })
    }

    showError(message: string){
        
    }
}
