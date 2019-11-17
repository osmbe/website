"use strict";

export default function(method, url, data) {
  let options = {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8"
    },
    redirect: "follow",
    referrer: "no-referrer"
  };

  if (typeof data !== "undefined") {
    Object.assign(options, {
      body: JSON.stringify(data)
    });
  }

  return fetch(url, options);
}
