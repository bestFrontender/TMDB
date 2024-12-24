import { useQuery } from '@tanstack/react-query';

import * as Types from '../types.ts';
import * as Constants from '../constants.ts';
import * as Api from '../api.ts';
import * as Mappers from '../mappers.ts';
import { get } from 'radash';

interface IParams {
  params?: Types.IApi.Params.Request;
}

const useUpcoming = ({ params }: IParams = {}) => {
  const initialData = { items: Mappers.Movies() || [], meta: Mappers.Meta() || {} } as Types.IQuery.Movies;
  const queryKey = [Constants.UPCOMING, params?.page];

  const paramWithDefault = {
    params: {
      page: params?.page || '1'
    }
  };

  const { data = initialData, ...args } = useQuery<Types.IQuery.Movies>({
    queryKey,
    queryFn: async () => {
      const { data } = await Api.Upcoming(paramWithDefault);

      return {
        items: get(data, 'results').map(item => Mappers.Movies(item)),
        meta: Mappers.Meta(data)
      };
    }
  });

  return { ...data, ...args };
};

export default useUpcoming;
