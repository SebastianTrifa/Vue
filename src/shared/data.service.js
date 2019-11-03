import * as axios from 'axios';

import { format } from 'date-fns';
import { inputDateFormat } from './constants';

import { API } from './config';

const getFilms = async function() {
  try {
    const response = await axios.get(`${API}/films`);

    let films = parseList(response);
    return films;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getFilm = async function(id) {
  try {
    const response = await axios.get(`${API}/films/${id}`);
    let film = parseItem(response, 200);
    return film;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateFilm = async function(film) {
  try {
    const response = await axios.put(`${API}/films/${film.id}`, film);
    const updatedFilm = parseItem(response, 200);
    return updatedFilm;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
  getFilms,
  getFilm,
  updateFilm,
};
