import {
  composeMozaic,
  getData,
  log,
  searchImages,
  sendToServer,
} from './cbAPI';

async function exo3(descr: string): Promise<void> {
  // Récupérer les URL des images
  const imageUrls: readonly string[] = await new Promise((resolve, reject) => {
    searchImages(descr, (urlList) => {
      resolve(urlList);
    });
  });
  // Récupérer les images à partir des URL
  const imageDataList: ImageData[] = await Promise.all(
    imageUrls.map(
      (url) =>
        new Promise((resolve, reject) => {
          getData(url, (data) => {
            resolve(data);
          });
        })
    )
  );
  // Générer la mosaïque à partir des images
  const mozaic = await new Promise<ImageData>((resolve, reject) => {
    composeMozaic(imageDataList, (mozaic) => {
      resolve(mozaic);
    });
  });
  //   Envoie la mozaic au server
  const response: string = await new Promise((resolve, reject) => {
    sendToServer(mozaic, (response) => {
      // Affiche la reponse du server
      log('La reponse du server est', response);
    });
  });
}

const bt3 = document.querySelector('#bt3') as HTMLElement;
bt3.onclick = () => exo3('chats');
