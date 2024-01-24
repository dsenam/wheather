import { getData } from "@/services/request.service";
import { MESSAGES } from "../../constants/messages.constants";
import showToast from "../showToastify";
import { API_PATHS } from "../../constants/apiPaths.constants";

export async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error(MESSAGES.ERRORS.GEOLOCATION.NOT_SUPPORTED));
    }
  });
}

export async function showPosition(position: TPosition) {
  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
}

export function showPositionError(error: TError) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      showToast.error(MESSAGES.ERRORS.GEOLOCATION.PERMISSION_DENIED);
      break;
    case error.POSITION_UNAVAILABLE:
      showToast.error(MESSAGES.ERRORS.GEOLOCATION.POSITION_UNAVAILABLE);
      break;
    case error.TIMEOUT:
      showToast.error(MESSAGES.ERRORS.GEOLOCATION.TIMEOUT);
      break;
    case error.UNKNOWN_ERROR:
      showToast.error(MESSAGES.ERRORS.GEOLOCATION.UNKNOWN_ERROR);
      break;
  }
}
