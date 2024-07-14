import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  selecterUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => '../assets/users/' + this.selecterUser().avatar);
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selecterUser.set(DUMMY_USERS[randomIndex]);
  }

  // get imagePath() {
  //   return '../assets/users/' + this.selecterUser().avatar;
  // }
}
