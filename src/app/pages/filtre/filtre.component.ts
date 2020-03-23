import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  @Output() filterChange: EventEmitter<string>;

  constructor() {
    this.filterChange = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  onChange(event: string) {
    this.filterChange.emit(event);
  }

}
