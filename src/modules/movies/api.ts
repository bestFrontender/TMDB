import { AxiosPromise } from 'axios';

import { http } from '../../services';

import * as Types from './types.ts';

export const NowPlaying = async ({
  params
}: {
  params: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Movies.Response> =>
  http.get(`/movie/now_playing`, {
    params: params
  });

export const Popular = async ({
  params
}: {
  params: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Movies.Response> =>
  http.get(`/movie/popular`, {
    params: params
  });

export const TopRated = async ({
  params
}: {
  params: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Movies.Response> =>
  http.get(`/movie/top_rated`, {
    params: params
  });

export const Upcoming = async ({
  params
}: {
  params: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Movies.Response> =>
  http.get(`/movie/upcoming`, {
    params: params
  });

export const Single = async ({
  id,
  params
}: {
  id?: number;
  params?: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Single.Response> =>
  http.get(`/movie/${id}`, {
    params: params
  });

export const Recommendation = async ({
  id,
  params
}: {
  id?: number;
  params?: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Movies.Response> =>
  http.get(`/movie/${id}/recommendations`, {
    params: params
  });

export const Credits = async ({
  id,
  params
}: {
  id?: number;
  params?: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Credits.Response> =>
  http.get(`/movie/${id}/credits`, {
    params: params
  });

export const Similar = async ({
  id,
  params
}: {
  id?: number;
  params?: Types.IApi.Params.Request;
}): AxiosPromise<Types.IApi.Credits.Response> =>
  http.get(`/movie/${id}/similar`, {
    params: params
  });
