import {Component} from '@angular/core';
import {IngredientType} from '../../../module/IngredientType';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent {
  public IngredientType = IngredientType;
  ingredientForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UsersService) {
    this.ingredientForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.userService.saveIngredient(this.ingredientForm.get('name').value, this.ingredientForm.get('category').value).subscribe();
  }

}
