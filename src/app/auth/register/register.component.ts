import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loading, showError, stopLoading } from 'src/app/utils/utils';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styles: [
	]
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup

	constructor(
		private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
	) {  
		this.registerForm = this.fb.group({
			name: ['', [ Validators.required ] ],
			email: ['', [ Validators.required, Validators.email ] ],
			password: ['', [ Validators.required, Validators.minLength(6) ] ],
		})
	}

	ngOnInit(): void {
		
	}

	// Getters
	get name() {
		return this.registerForm.get('name')
	}

	get email() {
		return this.registerForm.get('email')
	}

	get password() {
		return this.registerForm.get('password')
	}
	

	createUser(){
		if(this.registerForm.invalid) return;
        
        loading('Wait a moment please...')
        this.authService.createUser(this.name.value, this.email.value, this.password.value)
        .then(userCredential => {
            stopLoading()
            this.router.navigateByUrl('/')
        })
        .catch( error => {
            showError(error.message)
        })
	}

}
