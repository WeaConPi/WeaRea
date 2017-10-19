import { privateHosts } from "./network-local";

export const hosts = {
  weaper: privateHosts.weaper,
  weacore: privateHosts.weacore,
  weagql: privateHosts.weagql,
};

const defaultHeader = (json, body) => ({
  async: true,
  crossDomain: true,
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': `${json
      ? 'application/json'
      : 'application/x-www-form-urlencoded; charset=UTF-8'}`,
  },
  processData: false,
  contentType: false,
  mimeType: 'multipart/form-data',
});

export const doIt = (
  host: string,
  path: string,
  method: string,
  body = {},
  json = false,
) => {
  const received = {
    url: `${host}/${path}`,
    method: method,
    body,
  };
  const header = defaultHeader(json, body);
  return Object.assign(received, header);
};
