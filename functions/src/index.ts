import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("こんにちはファイアベース！！");
 });

 export const Hukuoka = functions.https.onRequest((request, response) => {
     response.send("nasitoーto");
 });

 export const Osaka = functions.https.onRequest((request, response) =>{
     response.send("なにしてんねん");
 });

