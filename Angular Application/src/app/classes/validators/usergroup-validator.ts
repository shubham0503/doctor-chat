import { Validators } from '@angular/forms';

export class UsergroupValidator {
	constructor() {
		return [
			'',
			Validators.compose(
				[
					Validators.required
				],
			),
		];
	}
}
