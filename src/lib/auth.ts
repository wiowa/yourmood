import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_APP_CLIENT_ID as string,
    //   clientSecret: process.env.GITHUB_APP_CLIENT_SECRET as string,
    // }),
  ],
};