import { Component, OnInit } from '@angular/core';

import { ServerService } from '../services/server.service';
import { Clan } from '../data/models/clan';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	clan: Clan;

	constructor(private server: ServerService) { }

	ngOnInit() {
		this.getClanInfo();
	}

	getClanInfo(): void {
		this.server.getClanInfo().subscribe(c => this.clan = c);
	}
}
