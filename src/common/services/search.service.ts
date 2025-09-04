import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);

  /**
   * Function to search nearby places
   * @param latitude
   * @param longitude
   * @returns List of places
   */
  suggestionByText({ latitude, longitude, keyword }: any) {
    const api_key = process.env.GOONG_API_KEY
    const baseUrl = process.env.GOONG_API_BASE_URL
    const params = {
      input: keyword,
      api_key,
      limit: 20,
    };
    if (latitude && longitude) {
      params['location'] = `${latitude},${longitude}`;
    }
    return axios.get(`${baseUrl}/place/autocomplete`, {
      params,
    });
  }

  /**
   * Function to get detail of the place
   * @param latitude
   * @param longitude
   * @returns List of places
   */
  async revGeoCode(place_id: string) {
    const api_key = process.env.GOONG_API_KEY
    const baseUrl = process.env.GOONG_API_BASE_URL
    return axios.get(`${baseUrl}/place/detail?place_id=${place_id}&api_key=${api_key}`);
  }
}
