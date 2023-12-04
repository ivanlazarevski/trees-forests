import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NestedTreeControl } from '@angular/cdk/tree';
import { CustomNodeComponent } from './custom-node/custom-node.component';

type TreeNode = {
  name: string;
  children?: TreeNode[];
  mainNode?: boolean;
  icon?: string;
  pinned: boolean;
  expanded: boolean;
};

const TREE_DATA: TreeNode[] = [
  {
    name: 'Football',
    mainNode: true,
    icon: 'sports_soccer',
    pinned: false,
    expanded: false,
    children: [
      { name: 'International', mainNode: false, pinned: false, expanded: false },
      {
        name: 'England',
        mainNode: false,
        pinned: false,
        expanded: false,
        children: [
          {
            name: 'Premier League',
            mainNode: false,
            pinned: false,
            expanded: false,
          },
          {
            name: 'EFL Championship',
            mainNode: false,
            pinned: false,
            expanded: false,
          },
          { name: 'EFL One', mainNode: false, pinned: false, expanded: false },
          { name: 'EFL Two', mainNode: false, pinned: false, expanded: false },
        ],
      },
      { name: 'Germany', mainNode: false, pinned: false, expanded: false },
    ],
  },
  {
    name: 'Basketball',
    mainNode: true,
    icon: 'sports_basketball',
    pinned: false,
    expanded: false,
    children: [
      {
        name: 'England',
        pinned: false,
        expanded: false,
        children: [
          {
            name: 'First League',
            mainNode: false,
            pinned: false,
            expanded: false,
          },
          {
            name: 'Second League',
            mainNode: false,
            pinned: false,
            expanded: false,
          },
        ],
      },
    ],
  },
  {
    name: 'American Football',
    icon: 'sports_football',
    mainNode: true,
    pinned: false,
    expanded: false,
    children: [
      { name: 'Australia', mainNode: false, pinned: false, expanded: false },
      { name: 'USA', mainNode: false, pinned: false, expanded: false },
    ],
  },
  {
    name: 'Boxing',
    icon: 'sports_mma',
    mainNode: true,
    pinned: false,
    expanded: false,
  },
  {
    name: 'Tennis',
    icon: 'sports_tennis',
    mainNode: true,
    pinned: false,
    expanded: false,
  },
  {
    name: 'Volleyball',
    icon: 'sports_volleyball',
    mainNode: true,
    pinned: false,
    expanded: false,
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
    CustomNodeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'trees-forests';
  treeControl = new NestedTreeControl<TreeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeNode) =>
    !!node.children && node.children.length > 0;
}
