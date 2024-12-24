import { get } from 'radash';

import * as Types from './types.ts';

const imageUrl = `https://image.tmdb.org/t/p/w300`;

export const Movies = (item?): Types.IEntity.Movies => {
  return {
    id: get(item, 'id') || 0,
    title: get(item, 'title') || '',
    originalTitle: get(item, 'original_title') || '',
    posterPath: get(item, 'poster_path') ? `${imageUrl}${get(item, 'poster_path')}` : '',
    video: get(item, 'video') || false,
    voteAverage: get(item, 'vote_average') || 0,
    voteCount: get(item, 'vote_count') || 0,
    popularity: get(item, 'popularity') || 0,
    originalLanguage: get(item, 'original_language') || 'ru',
    adult: get(item, 'adult') || false,
    backdropPath: get(item, 'backdrop_path') ? `${imageUrl}${get(item, 'backdrop_path')}` : '',
    genreIds: get(item, 'genre_ids') || [],
    overview: get(item, 'overview') || '',
    releaseDate: get(item, 'release_date') || ''
  };
};

export const Meta = (item?): Types.IEntity.Meta => ({
  page: get(item, 'page') || '',
  totalPages: get(item, 'total_pages') || 0
});

export const Single = (item?): Types.IEntity.Single => ({
  id: get(item, 'id') || 0,
  imdbId: get(item, 'imdb_id') || '',
  title: get(item, 'title') || '',
  originalTitle: get(item, 'original_title') || '',
  backdropPath: get(item, 'backdrop_path') ? `${imageUrl}${get(item, 'backdrop_path')}` : '',
  budget: get(item, 'budget') || 0,
  homepage: get(item, 'homepage') || '',
  adult: get(item, 'adult') || false,
  belongsToCollection: {
    id: get(item, 'belongs_to_collection.id') || 0,
    name: get(item, 'belongs_to_collection.name') || ''
  },
  originalLanguage: get(item, 'original_language') || '',
  overview: get(item, 'overview') || '',
  popularity: get(item, 'popularity') || 0,
  posterPath: get(item, 'poster_path') ? `${imageUrl}${get(item, 'poster_path')}` : '',
  voteAverage: get(item, 'vote_average') || 0,
  voteCount: get(item, 'vote_count') || 0,
  video: get(item, 'video') || false,
  genres: (get(item, 'genres') || []).map(item => ({
    id: get(item, 'id') || 0,
    name: get(item, 'name') || ''
  })),
  productionCompanies: (get(item, 'production_companies') || []).map(item => ({
    id: get(item, 'id') || 0,
    logoPath: get(item, 'logo_path') ? `${imageUrl}${get(item, 'logo_path')}` : '',
    name: get(item, 'name') || '',
    originCountry: get(item, 'original_country') || ''
  })),
  productionCountries: (get(item, 'production_countries') || []).map(item => ({
    iso_3166_1: get(item, 'iso_3166_1') || '',
    name: get(item, 'name') || ''
  })),
  revenue: get(item, 'revenue') || 0,
  runtime: get(item, 'runtime') || 0,
  tagline: get(item, 'tagline') || '',
  releaseDate: get(item, 'release_date') || '',
  status: get(item, 'status') || ''
});

export const Credits = (item?): Types.IEntity.Credits => ({
  id: get(item, 'id') || 0,
  cast: (get(item, 'cast') || []).map(item => ({
    id: get(item, 'id') || 0,
    name: get(item, 'name') || '',
    gender: get(item, 'gender') || 0,
    character: get(item, 'character') || '',
    profilePath: get(item, 'profile_path') ? `${imageUrl}${get(item, 'profile_path')}` : '',
    knownForDepartment: get(item, 'known_for_department') || '',
    originalName: get(item, 'original_name') || '',
    order: get(item, 'order') || 0,
    adult: get(item, 'adult') || false,
    popularity: get(item, 'popularity') || 0,
    creditId: get(item, 'credit_id') || '',
    castId: get(item, 'cast_id') || 0
  })),
  crew: (get(item, 'crew') || []).map(item => ({
    id: get(item, 'id') || 0,
    name: get(item, 'name') || '',
    gender: get(item, 'gender') || 0,
    profilePath: get(item, 'profile_path') ? `${imageUrl}${get(item, 'profile_path')}` : '',
    knownForDepartment: get(item, 'known_for_department') || '',
    department: get(item, 'department') || '',
    job: get(item, 'job') || '',
    popularity: get(item, 'popularity') || 0,
    adult: get(item, 'adult') || false,
    originalName: get(item, 'original_name') || '',
    creditId: get(item, 'credit_id') || ''
  }))
});
