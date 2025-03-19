import { faker } from "@faker-js/faker";

export const registrationData = {
  username: faker.person.firstName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};

export const loginData = {
  email: "ivanna@gmail.com",
  password: "ivanna",
};

export const invalidLoginData = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

export const articleData = {
  articleTitle: faker.internet.userAgent(),
  articleDescription: faker.lorem.sentence(3),
  articleText: faker.lorem.sentence(5),
  articleTag: faker.string.numeric({ length: 1 }),
};

export const emptyArticleData = {
  articleTitle: " ",
  articleDescription: " ",
  articleText: " ",
  articleTag: " ",
};
