import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent {
  @Output() searchClicked = new EventEmitter<any>();

  onSearch(){
    this.searchClicked.emit(true);

  }

}
