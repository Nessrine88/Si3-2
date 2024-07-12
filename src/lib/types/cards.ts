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
      communityWebsite[]{
        icon {
          asset->{url, metadata {dimensions}}
        },
        name
      }
    }

    `
    const data = await client.fetch(query);
    
    return data as Card[]
}