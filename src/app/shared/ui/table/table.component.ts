import { Component, input } from '@angular/core';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { Adn } from '../../interfaces/adn';

@Component({
  selector: 'app-table',
  imports: [DateformatPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  adns = input.required<Adn[]>();
}
