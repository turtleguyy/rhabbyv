import Route from "@ember/routing/route";
import RSVP from "rsvp";
import fetch from "fetch";

export default Route.extend({
  model() {
    // twitch
    const client = "024qk9iatlx7hgmfkcj4dyt98xsaz7";
    const twitchURL =
      "https://api.twitch.tv/helix/users/follows?to_id=42296879";

    // youtube
    const base = "https://www.googleapis.com/youtube/v3/channels";
    const part = "statistics";
    const id = "UCefxyTMh1NVJ6ghLq89BzZQ";
    const key = "AIzaSyBCLOTnw_Uf_m3kYQxj25CnYN25NSajehE";
    const youtubeURL = `${base}?part=${part}&id=${id}&key=${key}`;

    return RSVP.hash({
      twitch: fetch(twitchURL, { headers: { "Client-ID": `${client}` } })
        .then((response) => response.json())
        .then((data) => data.total),

      youtube: fetch(youtubeURL)
        .then((response) => response.json())
        .then((data) => {
          if (data.items && data.items.length)
            return data.items[0].statistics.subscriberCount;
        }),
    });
  },
});
