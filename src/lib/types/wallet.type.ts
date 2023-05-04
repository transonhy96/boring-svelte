export type Account = {
	address: Address;
	ens: Ens | null;
	uns: Uns | null;
	balance: Balances | null;
	truncated: Address;
};
export type Balances = Record<TokenSymbol, string> | null;
export interface Ens {
	name: string;
	avatar: Avatar | null;
	contentHash: string | null;
	getText: (key: string) => Promise<string | undefined>;
}
export interface Uns {
	name: string;
}
export type Avatar = {
	url: string;
	linkage: Array<{
		type: string;
		content: string;
	}>;
};
export type Address = string;
export type TokenSymbol = string;
