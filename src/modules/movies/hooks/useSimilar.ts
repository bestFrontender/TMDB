import { useQuery } from '@tanstack/react-query';

import * as Types from '../types.ts';
import * as Constants from '../constants.ts';
import * as Api from '../api.ts';
import * as Mappers from '../mappers.ts';
import { get } from 'radash';

interface IParams {
  id?: number;
  params?: Types.IApi.Params.Request;
}

const useSimilar = ({ id, params }: IParams) => {
  const initialData = { items: Mappers.Movies() || [], meta: Mappers.Meta() || {} } as Types.IQuery.Movies;
  const queryKey = [Constants.SIMILAR, params?.page];

  const paramWithDefault = {
    id,
    params: {
      page: params?.page || '1'
    }
  };

  const { data = initialData, ...args } = useQuery<Types.IQuery.Movies>({
    queryKey,
    queryFn: async () => {
      const { data } = await Api.Similar(paramWithDefault);

      return {
        items: get(data, 'results').map(item => Mappers.Movies(item)),
        meta: Mappers.Meta(data)
      };
    }
  });

  return { ...data, ...args };
};
export default useSimilar;
