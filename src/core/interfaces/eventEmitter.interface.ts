export interface DataEvent {
  [key: string]: any;
}

export type CallbackEvent = (arg: DataEvent) => void;
