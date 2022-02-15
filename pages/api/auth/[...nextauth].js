import NextAuth from "next-auth/next";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "../../../lib/mongo";

export default NextAuth({
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
   ],
   adapter: MongoDBAdapter(clientPromise),
   secret: process.env.JWT_SECRET,
   pages: {
      signIn: "/home",
   },
   session: {
      strategy: "jwt",
   },
   debug: true,
});
