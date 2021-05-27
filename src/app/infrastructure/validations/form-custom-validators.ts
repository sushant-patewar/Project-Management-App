import { ValidatorFn, AbstractControl } from '@angular/forms';

export class FormCustomValidators {
    static valueSelected(myArray: any[], value: string): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            let selectboxValue = c.value;
            let pickedOrNot = myArray.filter(alias => alias[value] === selectboxValue);

            if (pickedOrNot.length > 0) {
                // everything's fine. return no error. therefore it's null.
                return null;

            } else {
                //there's no matching selectboxvalue selected. so return match error.
                return { 'match': true };
            }
        }
    }
}


export function RequireMatch(control: AbstractControl) {
    const selection: any = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}