import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Trailer",
  },
  {
    _id: uuid(),
    categoryName: "PS5",
  },
  {
    _id: uuid(),
    categoryName: "Gameplay",
  },
  {
    _id: uuid(),
    categoryName: "PS4",
  },
  {
    _id: uuid(),
    categoryName: "Others",
  },
];
