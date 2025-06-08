import { body } from "express-validator";

export const loginValidation = [
  body("email",'Bad formate email').isEmail(),
  body("password",'Password must to be more then 5 symbols').isLength({ min: 5 }),
];


export const registerValidation = [
  body("email",'Bad formate email').isEmail(),
  body("password",'Password must to be more then 5 symbols').isLength({ min: 5 }),
  body("fullName",'Write name').isLength({ min: 3 }),
  body("avatarUrl",'Bad url for avatar').optional().isURL(),
];

export const postCreateValidation = [
  body("title",'Enter title').isLength({min:3}).isString(),
  body("text",'Enter text').isLength({ min: 3 }).isString(),
  body("tags",'Invalid formate(write array)').optional().isArray(),
  body("imageUrl",'Bad url for image').optional().isString(),
];