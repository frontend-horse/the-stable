import NextAuth from "next-auth";
import TwitchProvider from "next-auth/providers/twitch";

export default NextAuth({
  // Configure one or more authentication providers
  callbacks: {
    async signIn(props) {
      return true;
    },
  },
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
      authorizationUrl:
        "https://id.twitch.tv/oauth2/authorize?response_type=code",
    }),
  ],
});
