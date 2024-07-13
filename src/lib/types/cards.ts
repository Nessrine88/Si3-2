import { client } from "../../../sanity/lib/client";
import { Card } from "./interfaces";
import groq from "groq";
export async function getCards(){
    const query=groq`
   *[_type == "cards"] {
      _id,
      communityLogo {
        asset->{url, metadata {dimensions}}
      },
      communityName,
      communityLocation,
      communityType,
      communityDescription,
      xHandle,
      warpastHandle,
      communityWebsite
    }

    `
    const data = await client.fetch(query);
    
    return data as Card[]
}