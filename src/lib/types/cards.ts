import { client } from "../../../sanity/lib/client"
import { Card } from "./interfaces";
export async function getCards(){
    const query=`
   *[_type == "cards"] {
  _id,
  cardIcon {
    asset->{url, metadata {dimensions}}
  },
  title,
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
    console.log(data);
    
    return data as Card[]
}