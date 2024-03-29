import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Walk the doug'),
  ];

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    console.log(this.newWishText);
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

  deleteSpecificWish(index: number) {
    this.items = this.items.filter(
      (item) => this.items[index].wishText !== item.wishText
    );
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
}
