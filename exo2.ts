import {
  composeMozaic,
  getData,
  log,
  searchImages,
  sendToServer,
} from './cbAPI';

function exo2(description: string): void {
  new Promise<readonly string[]>((resolve) => {
    searchImages(description, (urlList) => {
      resolve(urlList);
    });
  })
    .then((urlList) => {
      const promises: Promise<ImageData>[] = [];

      for (const ul of urlList) {
        const promise = new Promise<ImageData>((resolve) => {
          getData(ul, (imageData) => {
            resolve(imageData);
          });
        });
        promises.push(promise);
      }
      return Promise.all(promises);
    })
    .then((imageDataList) => {
      return new Promise<ImageData>((resolve) => {
        composeMozaic(imageDataList, (mozaic) => {
          resolve(mozaic);
        });
      });
    })
    .then((mozaic) => {
      return new Promise<string>((resolve, reject) => {
        sendToServer(mozaic, (response) => {
          resolve(response);
        });
      })
        .then((response) => {
          log('Voici la reponse du server', response);
        })
        .catch((error) => {
          log('Erreur', error);
        });
    });
}

const bt2 = document.querySelector('#bt2') as HTMLElement;
bt2.onclick = () => exo2('chats');
