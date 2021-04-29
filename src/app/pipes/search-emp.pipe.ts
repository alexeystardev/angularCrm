import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchEmp'
})
export class SearchEmpPipe implements PipeTransform {

transform(emp,value){
			return emp.filter(emp => {
				if (value === undefined) { return emp; }
				return (emp.fullName.toLowerCase().includes(value.toLowerCase()) || emp.role.toLowerCase().includes(value.toLowerCase()) || emp.email.toLowerCase().includes(value.toLowerCase())) //  || customers.
			})
		}

}
