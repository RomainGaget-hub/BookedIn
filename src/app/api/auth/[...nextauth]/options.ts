import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize() {
                // This is where you would add your own authentication logic
                // In this example, we are just returning a hardcoded user
                //todo: add your own authentication logic here
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
                return user;
            }
        })
    ],
};