import { Injectable } from "@nestjs/common";
import axios from "axios";

interface IFbUser {
  id: string;
  name: string;
  email: string;
  picture: {
    data: {
      url: string;
    };
  };
  birthday?: string;
  location?: {
    id: string;
    name: string;
  };
}
@Injectable()
export class FbService {
  async verifyFacebookToken(accessToken: string) : Promise<IFbUser | null> {
    const { data } = await axios.get("https://graph.facebook.com/me", {
      params: {
        access_token: accessToken,
        fields: "id,name,email,picture,birthday,location",
      },
    });

    return data; // { id, name, email, picture, birthday, location }
  }
}
