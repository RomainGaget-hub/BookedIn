// // Import the core NextAuth function and types for better TypeScript integration
// import NextAuth, { NextAuthOptions } from "next-auth";
// // Import the CredentialsProvider for email/password-based authentication
// import CredentialsProvider from "next-auth/providers/credentials";
// // Import Prisma Client for database access
// import { PrismaClient } from "@prisma/client";
// // Import bcryptjs for comparing hashed passwords
// import { compare } from "bcryptjs";
// // Import NextAuth for authentication


// // Initialize Prisma Client instance
// const prisma = new PrismaClient();

// // Define the NextAuth configuration options with types
// export const authOptions: NextAuthOptions = {
//     // Configure the authentication providers (e.g., email/password, Google, GitHub, etc.)
//     providers: [
//         CredentialsProvider({
//             // Name of the provider (used internally and in UI)
//             name: "Credentials",
//             // Define the fields expected for credentials-based authentication
//             credentials: {
//                 email: { label: "Email", type: "text" },
//                 password: { label: "Password", type: "password" },
//             },
//             // The authorize function checks user credentials against the database
//             authorize: async (credentials) => {
//                 // Check if credentials are provided
//                 if (!credentials?.email || !credentials.password) {
//                     throw new Error("Invalid credentials");
//                 }

//                 // Fetch the user from the database based on the provided email
//                 const user = await prisma.user.findUnique({
//                     where: { email: credentials.email },
//                 });

//                 // If the user is not found, return an error
//                 if (!user) {
//                     throw new Error("No user found with the email provided");
//                 }

//                 // Compare the provided password with the hashed password stored in the database
//                 const isValidPassword = await compare(credentials.password, user.password);
//                 if (!isValidPassword) {
//                     throw new Error("Invalid password");
//                 }

//                 // If successful, return the user object (can include any user info needed in the app)
//                 return {
//                     id: user.id,
//                     name: user.name,
//                     email: user.email,
//                 };
//             },
//         }),
//     ],
//     // Customizing NextAuth pages (sign-in, sign-out, etc.)
//     pages: {
//         signIn: "/auth/login", // Set the custom sign-in page route
//     },
//     // Define the session strategy (default is `jwt` for JSON Web Token-based sessions)
//     session: {
//         strategy: "jwt", // Store session data in a JWT
//     },
//     // Callback functions allow customizing behavior at different stages of the authentication process
//     callbacks: {
//         // This callback runs whenever a JWT is created or updated
//         async jwt({ token, user }) {
//             // If the user is available (usually during sign-in), add user details to the token
//             if (user) {
//                 token.id = user.id;
//                 token.email = user.email;
//             }
//             return token; // Return the modified token
//         },
//         // This callback runs whenever a session is checked or updated
//         async session({ session, token }) {
//             // Attach user ID and email from the token to the session object
//             if (token) {
//                 if (session.user) {
//                     session.user.id = token.id; //todo: fix this
//                     session.user.email = token.email;
//                 }
//             }
//             return session; // Return the updated session
//         },
//     },
//     // Define a secret key for signing JWTs (use a secure random key in production)
//     secret: process.env.NEXTAUTH_SECRET,
// };

// // Export the NextAuth configuration as the default export
// export default NextAuth(authOptions);
