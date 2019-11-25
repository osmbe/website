"use strict";

export default async function(method, url, data) {
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

  const response = await fetch(url, options);
  const json = await response.json();

  if (response.ok !== true) {
    throw new Error(json.detail);
  }

  return json;
}
