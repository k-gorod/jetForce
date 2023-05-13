import { ErrorResponse, SwapiPeople } from 'types';

export const swapiQuery = async (url: string): Promise<SwapiPeople | ErrorResponse> => {
  try {
    const response: SwapiPeople = await fetch(url).then((res) => res.json());
    return await response;
  } catch (err: ErrorResponse) {
    return err;
  }
};

export const asd = 0;
