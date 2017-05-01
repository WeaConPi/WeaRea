export const weaPerHost = process.env.weaper || 'http://localhost:3000'
export const weaNenHost = process.env.weanen || 'http://localhost:5000'

export const hosts = {

  weaper: weaPerHost,
  weanen: weaNenHost

};

const defaultHeader = (json, body) => ({
  async: true,
  crossDomain: false,
  headers: {
    'cache-control': 'no-cache',
    'Content-Type': `${json
      ? 'application/json'
      : 'application/x-www-form-urlencoded; charset=UTF-8'}`
  },
  processData: false,
  contentType: false,
  mimeType: 'multipart/form-data',
});

export const doIt = (host: string, path: string, method: string, body = {}, json = false) => {
  const received = {
    url: `${host}/${path}`,
    method: method,
    body,
  };
  const header = defaultHeader(json, body);
  return Object.assign(
    received,
    header,
  );
};
