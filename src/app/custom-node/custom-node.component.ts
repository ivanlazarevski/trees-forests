import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'custom-node',
  standalone: true,
  imports: [CommonModule, MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './custom-node.component.html',
  styleUrl: './custom-node.component.css',
})
export class CustomNodeComponent implements OnInit {
  @Input() node: any;
  @Input() control: any;

  ngOnInit(): void {
    
  }

  filterGames(sport: string): void {
    console.log('Sport', sport);
  }

  pinNode() {
    this.node.pinned = !this.node.pinned;
  }
}
