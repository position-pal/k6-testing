import faker from "k6/x/faker";

export function generateUserData() {
  return {
        "userData": {
            "name": faker.person.firstName(),
            "surname": faker.person.lastName(),
            "email": faker.zen.email()
        },
        "password": `Password${faker.strings.digitN(8)}!`
    };
}