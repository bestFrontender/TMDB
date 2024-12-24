import { useQuery } from '@tanstack/react-query';

import * as Mappers from '../mappers.ts';
import * as Types from '../types.ts';
import * as Constants from '../constants.ts';
import * as Api from '../api.ts';

interface IProps {
  id?: number;
}

const useSingle = ({ id }: IProps) => {
  const initialData = { item: Mappers.Single() } as Types.IQuery.Single;
  const queryKey = [Constants.SINGLE, id];

  const { data = initialData, ...args } = useQuery<Types.IQuery.Single>({
    queryKey,
    queryFn: async () => {
      const { data } = await Api.Single({ id });

      return {
        item: Mappers.Single(data)
      };
    },
    enabled: !!id
  });

  return { ...data, ...args };
};

export default useSingle;
