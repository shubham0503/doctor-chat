import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsernameValidator } from './../../classes/validators/username-validator';
import { UsergroupValidator } from './../../classes/validators/usergroup-validator';
import { PasswordValidator } from './../../classes/validators/password-validator';
import { MessageValidator } from './../../classes/validators/message-validator';

@Injectable()
export class FormService {
	constructor() { }

	createLoginForm(): FormGroup {
		return new FormBuilder().group({
			username: new UsernameValidator(),
			password: new PasswordValidator(),
		});
	}

	createRegistrationForm(): FormGroup {
		return new FormBuilder().group({
			username: new UsernameValidator(),
			password: new PasswordValidator(),
			usergroup: new UsergroupValidator(),
		});
	}

	createMessageForm(): FormGroup {
		return new FormBuilder().group({
			message: new MessageValidator
		});
	}
}
