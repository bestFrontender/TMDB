import { useQuery } from '@tanstack/react-query';

import * as Mappers from '../mappers.ts';
import * as Types from '../types.ts';
import * as Constants from '../constants.ts';
import * as Api from '../api.ts';

interface IParams {
  id?: number;
  params?: {
    page?: string;
  };
}

const useCredits = ({ id, params }: IParams) => {
  const initialData = { item: Mappers.Credits() } as Types.IQuery.Credits;

  const paramWithDefault = {
    params: {
      page: params?.page || '1',
      language: 'ru'
    }
  };

  const { data = initialData, ...args } = useQuery<Types.IQuery.Credits>({
    queryKey: [Constants.CREDITS, id],
    queryFn: async () => {
      const { data } = await Api.Credits({ id, ...paramWithDefault });

      return {
        item: Mappers.Credits(data)
      };
    }
  });

  return { ...data, ...args };
};

export default useCredits;
