const urlBase64Decode = (str) => {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0: {
      break;
    }
    case 2: {
      output += "==";
      break;
    }
    case 3: {
      output += "=";
      break;
    }
    default: {
      throw new Error("Illegal base64url string");
    }
  }

  return window.decodeURIComponent(escape(window.atob(output)));
};

const decodeToken = (token) => {
  const parts = token.split(".");

  if (parts.length !== 3) {
    throw new Error("JWT must have 3 parts");
  }

  const decoded = urlBase64Decode(parts[1]);
  if (!decoded) {
    throw new Error("Cannot decode the token");
  }

  return JSON.parse(decoded);
};

const isTokenExpired = (token, offsetSeconds) => {
  const d = getTokenExpirationDate(token);

  offsetSeconds = offsetSeconds || 0;
  if (d === null) {
    return false;
  }

  return !(d.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
};

const getTokenExpirationDate = (token) => {
  const decoded = decodeToken(token);

  if (typeof decoded.exp === "undefined") {
    return null;
  }

  const d = new Date(0);
  d.setUTCSeconds(decoded.exp);
};

export const jwtHelper = {
  decodeToken,
  isTokenExpired,
};
