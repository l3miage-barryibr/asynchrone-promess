import {
  searchImages,
  log,
  getData,
  composeMozaic,
  sendToServer,
} from './cbAPI';

/**
 * La fonction exo1 utilise l'API à base de callback pour :
 *   - demander les URL des images correspondant à description passée en paramètre
 *   - Obtenir les images à partir des URL
 *   - Générer une mosaïque à partir de ces images
 *   - Envoyer cette mosaïque au serveur
 *   - Afficher avec log le code renvoyé par le serveur
 *
 * Vérifiez dans les logs que tout se déroule comme prévu,
 * en particulier que vous composez bien la mosaïque après avoir reçu les images.
 */
function exo1(description: string): void {
  searchImages(description, (urlList) => {
    const imageList: ImageData[] = [];

    let imageRecive = 0;
    //recuperer tous les images a partire d'une url
    for (const url of urlList) {
      getData(url, (data) => {
        imageList.push(data);
        imageRecive++;
        // verifier que tous les images ont été réçu
        if (imageRecive === urlList.length) {
          // Composer la mozaic
          composeMozaic(imageList, (mozaic) => {
            sendToServer(mozaic, (respone) => {
              log('voici la reponse du server', respone);
            });
          });
        }
      });
    }
  });
}

const bt1 = document.querySelector('#bt1') as HTMLElement;
bt1.onclick = () => exo1('chats');
