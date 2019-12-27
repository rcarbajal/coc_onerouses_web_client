import { League } from './league';
import { Clan } from './clan';
import { Achievement } from './achievement';
import { Label } from './label';
import { Troop } from './troop';
import { Hero } from './hero';
import { Spell } from './spell';

export class Member {
	tag: string;
	name: string;
	townHallLevel: number;
	expLevel: number;
	trophies: number;
	bestTrophies: number;
	warStars: number;
	attackWins: number;
	defenseWins: number;
	builderHallLevel: number;
	versusTrophies: number;
	bestVersusTrophies: number;
	versusBattleWins: number;
	role: string;
	donations: number;
	donationsReceived: number;
	versusBattleWinCount: number;
	clanRank: number;
	previousClanRank: number;
	clan: Clan;
	league: League;
	achievements: Achievement[];
	labels: Label[];
	troops: Troop[];
	heroes: Hero[];
	spells: Spell[];
}