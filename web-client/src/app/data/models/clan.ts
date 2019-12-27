import { Location } from './location';
import { ImageURLs } from './imageURLs';
import { Member } from './member';
import { Label } from './label';

export class Clan {
	tag: string;
	name: string;
	type: string;
	description: string;
	location: Location;
	badgeUrls: ImageURLs;
	clanLevel: number;
	clanPoints: number;
	clanVersusPoints: number;
	requiredTrophies: number;
	warFrequency: string;
	warWinStreak: number;
	warWins: number;
	warTies: number;
	warLosses: number;
	isWarLogPublic: boolean;
	members: number;
	memberList: Member[];
	labels: Label[];
}