let promError = false;

function getPromise() {
    return myPromise = new Promise((resolve, reject) => {
          if(promError) {
            reject("hat nicht geklappt");
          }else{
            resolve("hat geklappt");
          }
      });
}

async function usePromise() {
  try{
    let prom = await getPromise();
    console.log(prom)
    console.log("prom2");
    console.log("prom");
  } catch (error) {
    console.error(error);
  }

}

