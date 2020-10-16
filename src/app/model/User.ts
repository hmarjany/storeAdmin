export class User {
    name: string;
    email: string;
    password: string;
    tokens: [{ token: { type: string, requierd: true } }];
    token: string;
}