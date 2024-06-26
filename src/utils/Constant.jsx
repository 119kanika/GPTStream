/* eslint-disable no-undef */
export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const BG_IMG = "https://maven-uploads.s3.amazonaws.com/120386748/projects/netflix%20image.jpg"
export const PHOTO_URL = "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_TMDB_KEY,
    }
  };
  
export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY

export const GEMINI_API = import.meta.env.VITE_GEMINI_API;