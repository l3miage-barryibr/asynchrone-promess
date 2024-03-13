import {searchImages, log, getData, composeMozaic, sendToServer} from "./cbAPI";

/* Avec les promesses */
export function searchImagesP(description: string): Promise<readonly string[]> {
  return new Promise( (resolve, _reject) => {
    // à compléter
  });
}

export function getDataP (url: string): Promise<ImageData> {
  return new Promise( (resolve, reject) => {
    // à compléter
  });
}

export function composeMozaicP(images: readonly ImageData[]): Promise<ImageData> {
  return new Promise( (resolve, reject) => {
    // à compléter
  });
}

export function sendToServerP(image: ImageData): Promise<string> {
  return new Promise( (resolve, reject) => {
    // à compléter
  });
}

