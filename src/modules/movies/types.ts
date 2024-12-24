export declare namespace IApi {
  export namespace Movies {
    export interface Response {
      results: Array<{
        id: number;
        title: string;
        poster_path: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        popularity: number;
        original_language: string;
        original_title: string;
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        overview: string;
        release_date: string;
      }>;
    }
  }
  export namespace Single {
    export interface Response {
      id: number;
      imdb_id: string;
      title: string;
      original_title: string;
      backdrop_path: string;
      budget: number;
      homepage: string;
      adult: boolean;
      belongs_to_collection: string | null;
      original_language: string;
      overview: string;
      popularity: number;
      poster_path: string;
      vote_average: number;
      vote_count: number;
      video: boolean;
      genres: Array<{
        id: number;
        name: string;
      }>;
      production_companies: Array<{
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }>;
      production_countries: Array<{
        iso_3166_1: string;
        name: string;
      }>;
      revenue: number;
      runtime: number;
      tagline: string;
      release_date: string;
      status: string;
    }
  }
  export namespace Credits {
    export interface Response {
      id: number;
      cast: Array<{
        id: number;
        name: string;
        gender: number;
        character: string;
        profile_path: string;
        known_for_department: string;
        original_name: string;
        order: number;
        adult: boolean;
        popularity: number;
        credit_id: string;
        cast_id: number;
      }>;
      crew: Array<{
        id: number;
        name: string;
        gender: number;
        profilePath: string;
        knownForDepartment: string;
        department: string;
        job: string;
        popularity: number;
        adult: boolean;
        originalName: string;
        creditId: string;
      }>;
    }
  }
  export namespace Params {
    export interface Request {
      page?: string;
      language?: string;
    }
  }
}

export declare namespace IEntity {
  export interface Movies {
    id: number;
    title: string;
    posterPath: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
    popularity: number;
    originalLanguage: string;
    originalTitle: string;
    adult: boolean;
    backdropPath: string;
    genreIds: number[];
    overview: string;
    releaseDate: string;
  }
  export interface Single {
    id: number;
    imdbId: string;
    title: string;
    originalTitle: string;
    backdropPath: string;
    budget: number;
    homepage: string;
    adult: boolean;
    belongsToCollection: {
      id: number;
      name: string;
    } | null;
    originalLanguage: string;
    overview: string;
    popularity: number;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
    video: boolean;
    genres: Array<{
      id: number;
      name: string;
    }>;
    productionCompanies: Array<{
      id: number;
      logoPath: string;
      name: string;
      originCountry: string;
    }>;
    productionCountries: Array<{
      iso_3166_1: string;
      name: string;
    }>;
    revenue: number;
    runtime: number;
    tagline: string;
    releaseDate: string;
    status: string;
  }
  export interface Credits {
    id: number;
    cast: Array<{
      id: number;
      name: string;
      gender: number;
      character: string;
      profilePath: string;
      knownForDepartment: string;
      originalName: string;
      order: number;
      adult: boolean;
      popularity: number;
      creditId: string;
      castId: number;
    }>;
    crew: Array<{
      id: number;
      name: string;
      gender: number;
      profilePath: string;
      knownForDepartment: string;
      department: string;
      job: string;
      popularity: number;
      adult: boolean;
      originalName: string;
      creditId: string;
    }>;
  }
  export interface Meta {
    page?: string;
    totalPages?: number;
  }
}

export declare namespace IQuery {
  export interface Movies {
    items: IEntity.Movies[];
    meta: IEntity.Meta;
  }
  export interface Single {
    item: IEntity.Single;
  }
  export interface Credits {
    item: IEntity.Credits;
  }
}
