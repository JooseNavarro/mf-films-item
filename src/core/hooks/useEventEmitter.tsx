import {CallbackEvent, DataEvent} from "../interfaces/eventEmitter.interface";

export const useEventEmitter = () => {
  const emit = (eventName: string, data: DataEvent) => {
    const event = new CustomEvent(eventName, {detail: data});
    window.dispatchEvent(event);
  };

  const on = (eventName: string, callback: CallbackEvent) => {
    window.addEventListener(eventName, (event) => {
      callback((event as CustomEvent).detail);
    });
  };

  const onChange = (eventName: string) => {
    window.addEventListener(eventName, (event) =>
      Promise.resolve((event as CustomEvent).detail),
    );
  };

  return {
    emit,
    on,
    onChange,
  };
};
