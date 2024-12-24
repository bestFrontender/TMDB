import { useQuery } from '@tanstack/react-query';

import * as Mappers from '../mappers.ts';
import * as Types from '../types.ts';
import * as Constants from '../constants.ts';
import * as Api from '../api.ts';
import { get } from 'radash';

interface IParams {
  params?: Types.IApi.Params.Request;
}

const useNowPlaying = ({ params }: IParams = {}) => {
  const initialData = { items: Mappers.Movies() || [], meta: Mappers.Meta() } as Types.IQuery.Movies;
  const queryKey = [Constants.MOVIE_NOW_PLAYING, params?.page];

  const paramWithDefault = {
    params: {
      page: params?.page || '1'
    }
  };

  const { data = initialData, ...args } = useQuery<Types.IQuery.Movies>({
    queryKey,
    queryFn: async () => {
      const { data } = await Api.NowPlaying(paramWithDefault);

      return {
        items: get(data, 'results').map(item => Mappers.Movies(item)),
        meta: Mappers.Meta(data)
      };
    }
  });

  return { ...args, ...data };
};

export default useNowPlaying;
