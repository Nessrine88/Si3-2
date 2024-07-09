import { client } from "../../../sanity/lib/client";
import { Card } from "./interfaces";
import groq from "groq";
export async function getCards(){
    const query=groq`
   *[_type == "cards"] {
      _id,
      cardIcon {
        asset->{url, metadata {dimensions}}
      },
      title,
      communityLocation,
      status,
      description,
      links[]{
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