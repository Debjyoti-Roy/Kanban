import React from "react";
import { useProductContext } from "../Context/productcontext/ProductContext";
import { Columns } from "../types/Types";
import {v4 as uuidv4} from "uuid";

const Board = ():Columns => {
  

  return {
    two: {
      name: "2",
      items: []
    },
    three: {
      name: "3",
      items: []
    },
    four: {
      name: "4",
      items: []
    },
    five: {
      name: "5",
      items: []
    },
    six: {
      name: "6",
      items: []
    }
  };
};

export default Board;



// const Board: Columns = {
// 	backlog: {
// 		name: "Backlog",
// 		items: [
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Front-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "medium",
// 				deadline: 50,
// 				alt: "task image",
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Back-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "low",
// 				deadline: 50,
// 			},
// 		],
// 	},
// 	pending: {
// 		name: "Pending",
// 		items: [
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Back-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "high",
// 				deadline: 50,
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Front-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "low",
// 				deadline: 50,
// 				alt: "task image",
// 			},
// 		],
// 	},
// 	todo: {
// 		name: "To Do",
// 		items: [
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Front-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "medium",
// 				deadline: 50,
// 				alt: "task image",
// 			},
// 		],
// 	},
// 	doing: {
// 		name: "Doing",
// 		items: [
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Front-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "low",
// 				deadline: 50,
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Back-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "medium",
// 				deadline: 50,
// 			},
// 		],
// 	},
// 	done: {
// 		name: "Done",
// 		items: [
// 			{
// 				id: uuidv4(),
// 				title: "Admin Panel Front-end",
// 				description: "Lorem ipsum dolor sit amet ..",
// 				priority: "high",
// 				deadline: 50,
// 				alt: "task image",
// 			},
// 		],
// 	},
// };

// export default Board;