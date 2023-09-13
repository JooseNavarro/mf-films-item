import {useEventEmitter} from "./core/hooks/useEventEmitter";
import rickandmorty from "./core/data/rickandmorty.json";
import i18n from "./core/data/i18n.json";
import marvel from "./core/data/marvel.json";
import {EventEmitter} from "./core/constants/event.constant";
import {FILMS} from "./core/constants/films.constant";
import {useEffect, useState} from "react";
type LENGUAGUE = "es" | "en";

export function useApp() {
  const [translate, setTranslate] = useState(i18n["en"]);
  const {emit, on} = useEventEmitter();

  useEffect(() => {
    on(EventEmitter.LENGUAGE, ({data}) => {
      const i18next = i18n;
      setTranslate(i18next[data.code as LENGUAGUE]);
    });
  }, []);

  const selectedFilm = (id: number) =>
    emit(EventEmitter.FILMS, {
      data: {
        1: rickandmorty,
        2: marvel,
      }[id],
    });

  return {selectedFilm, FILMS, translate};
}
