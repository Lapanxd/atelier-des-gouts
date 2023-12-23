import { JSONObject } from './json-object.ts';

export interface ICreateSession {
  title: string;
  users: string[];
  duoImages: { data: [string] };
}