/**
 * searchImages permet de récupérer une liste d'URL d'images correspondant à la description passée en paramètre.
 * Ici la fonction ne fait que renvoyer la même liste au bout de 500ms.
 * @param description : la description des images recherchées (ex: "chats rigolo")
 * @param cb : la callback qui sera appelée avec la liste d'URL quand on aura obtenu cette liste.
 */
export function searchImages (
	description: string,
	cb: (urlList: readonly string[]) => void
) {
	setTimeout( () => {
    const res = ["http://A", "http://B", "http://C", "http://D"];
    log("searchImages =", res);
    cb(res);
  }, 500);
}

/**
 * getData récupère l'image correspondant à l'URL passée en paramètre.
 * Ici la fonction ne fait que renvoyer une image vide au bout d'un temps compris entre 0 et 500ms.
 * @param url : L'URL de l'image à télécharger
 * @param cb : la callback qui sera appelée avec l'image téléchargée quand on l'aura obtenu.
 */
export function getData (
	url: string,
	cb: (data: ImageData) => void
) {
	setTimeout( 
		() => {
      log("data received for", url);
      cb(new ImageData(10, 10));
    },
		500 * Math.random() 
	);
}

/**
 * composeMozaic génère une image mosaïque à partir d'un tableau d'images.
 * Ici la fonction ne fait que renvoyer une image vide au bout d'un temps compris entre 0 et 500ms.
 * @param data : Un tableau d'images.
 * @param cb : La callback qui sera appelée avec l'image mosaïque.
 */
export function composeMozaic (
	data: readonly ImageData[],
	cb: (data: ImageData) => void
) {
	setTimeout( () => {
    log("ComposeMozaic is done");
    cb(new ImageData(20, 20));
  }, 500 * Math.random());
}

/**
 * sendToServer envoie une image au serveur.
 * @param image : L'image a envoyer
 * @param cb : La callback qui sera appelé avec un code réponse du serveur
 */
export function sendToServer(
	image: ImageData,
	cb: (response: string) => void
) {
	setTimeout( () => {
    log("sendToServer is done!");
    cb("banco");
  }, 500 * Math.random());
}


/**
 * log permet d'afficher dans la console et dans la page les arguments passés en paramètre.
 * @param Largs : une liste de paramètre à afficher. Ces paramètres doivent pouvoir être sérialiser avec JSON.stringify.
 */
export function log(...Largs: unknown[]) {
  console.log(...Largs);
  const code = document.querySelector("#logs") as HTMLElement;
  const str = Largs.map(e => typeof e === "string" ? e : JSON.stringify(e)).join(" ")
  code.textContent += `${Date.now()} = ${str}\n`;
}