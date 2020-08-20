import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('email', {
  ...email,
  message: 'This is not a valid email'
});
extend('password', {
  params: ['target'],
  validate(value, params: Record<string, any>) {
    return value === params.target;
  },
  message: 'Password confirmation does not match'
});
export { ValidationObserver, ValidationProvider };
