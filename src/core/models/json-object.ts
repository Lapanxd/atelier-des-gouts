export interface JSONObject {
  [key: string]: string | number | boolean | null | JSONObject | Array<string | number | boolean | null | JSONObject>;
}