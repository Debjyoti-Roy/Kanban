// export type Columns={
//     [key:string]: any;
// }

// export type TaskT = {
// 	id: string;
// 	title: string;
// 	description: string;
// 	priority: string;
// 	deadline: number;
// 	image?: string;
// 	alt?: string;
// };

type Column = {
	name: string;
	items: any;
};

export type Columns = {
	[key: string]: Column;
};