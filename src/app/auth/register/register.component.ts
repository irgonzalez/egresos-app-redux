import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styles: [
	]
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup

	constructor(
		private fb: FormBuilder
	) {  
		this.registerForm = this.fb.group({
			name: ['', [ Validators.required ] ],
			email: ['', [ Validators.required, Validators.email ] ],
			password: ['', [ Validators.required ] ],
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
		console.log(this.registerForm.value)
	}

}
