import { helpers } from '@vuelidate/validators'

export const numberOnly = helpers.regex('numberOnly', /^[0-9]*$/)
export const alphaWithSpaceDot = helpers.regex('alphaWithSpaceDot', /^[a-zA-Z .]*$/)
export const alphaWithSpace = helpers.regex('alphaWithSpace', /^[a-zA-Z ]*$/)
export const alphaWithDot = helpers.regex('alphaWithDot', /^[a-zA-Z.]*$/)
export const panCard = helpers.regex('panCard', /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)
export const aadharCard = helpers.regex('aadharCard', /^[2-9]{1}[0-9]{11}$/)
export const licenseNumber = helpers.regex('licenseNumber', /^[a-zA-Z]{2}\d{2}[1-9]{1}\d{3}\d{7}(?:\d{2})?$/)
export const alphaNumericOnly = helpers.regex('alphaNumericOnly', /([a-zA-Z0-9]+)$/)
export const alphaNumericWithSpaceDot = helpers.regex('alphaNumericWithSpaceDot', /([a-zA-Z0-9 .]+)$/)
export const alphaNumericWithSpaceHyphen = helpers.regex('alphaNumericWithSpaceHyphen', /([a-zA-Z0-9 .-]+)$/)
export const alphaNumericWithSpace = helpers.regex('alphaNumericWithSpace', /([a-zA-Z0-9 ]+)$/)
export const alphaNumericWithDot = helpers.regex('alphaNumericWithDot', /([a-zA-Z0-9.]+)$/)
export const passwordLength = helpers.regex('passwordLength', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
export const gstinNumber = helpers.regex('gstinNumber', /^([0][1-9]|[1-2][0-9]|[3][0-5])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/)

