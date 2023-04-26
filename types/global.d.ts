export interface User {
	_id: number;
	username: string;
	password: string;
	balance: number;
}
  
export interface Bet {
	_id: string;
	userId: number;
  studyId: number;
	outcome: Outcome;
	amount: number;
	result: { success: boolean };
}
  
export interface Outcome {
  result: 'success' | 'failure';
  date: Date;
}

export interface Study {
	id: number;
	name: string;
	url: string,
	description: string;
	likelihood: number;
	effectSize: number;
	replicationData: any;
	outcome: Outcome | null;
	bets: Bet[];
}