import axios from "axios";

export default class Discord {
  private discordBaseUrl: String;
  private discordAccessToken: String;

  constructor(discordBaseURL: String, discordAccessToken: String) {
    this.discordBaseUrl = discordBaseURL;
    this.discordAccessToken = discordAccessToken;
  }

  async sendMessageToChannel(channelId: String, message: String) {
    try {
      const { data } = await axios({
        method: "POST",
        url: `${this.discordBaseUrl}/channels/${channelId}/messages`,
        headers: {
          Authorization: `Bot ${this.discordAccessToken}`,
        },
        data: message,
      });

      return data;
    } catch (err) {
      throw err;
    }
  }
}

