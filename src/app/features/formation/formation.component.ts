import { Component } from '@angular/core';
import { FormationBoardComponent } from "../formation-board/formation-board.component";

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [FormationBoardComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {

}
