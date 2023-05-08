const form = document.querySelector('.adress__form')
const validator = new JustValidate(form);

validator
  .addField('#name', [
    {
      rule: 'required',
			errorMessage: 'Поле имя обязательно',
    },
    {
      rule: 'minLength',
      value: 2,
			errorMessage: 'Минимум 2 символа',
    },
    {
      rule: 'maxLength',
      value: 15,
			errorMessage: 'Максимум 3 символа',
    },
		{
			rule: 'customRegexp',
			value: /^[а-яёЁ\s]*$/i,
			errorMessage: 'Недопустимый формат'
		},
		],
		{
      errorsContainer: '#name-error',
    }
		)

		.addField('#tel', [
			{
				rule: 'required',
				errorMessage: 'Указать телефон обязательно',
			},
			{
				rule: 'minLength',
				value: 8,
				errorMessage: 'Минимум 8 символов',
			},
			{
				rule: 'maxLength',
				value: 15,
				errorMessage: 'Максимум 15 символов',
			},
			{
				rule: 'number',
				errorMessage: 'В номере телефона можно вводить только цифры',
			},
			],
			{
				errorsContainer: '#tel-error',
			}
			)