let promError = false;

function getPromise() {
    return new Promise((resolve, reject) => {
        
    setTimeout(() => {
        if(promError){
            reject("hat nicht geklappt");
        }else{
            resolve("hat geklappt");
        }
        }, 1000);
      });
}

async function usePromise() {
    let prom = "nothing happend";
    try {
        prom = await getPromise();
    } catch (error) {
        
    }
    console.log(prom)
}