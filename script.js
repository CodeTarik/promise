let promError = false;

function getPromise() {
  return myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1")
    if(promError) {
    reject("hat nicht geklappt");
    }else{
    resolve("hat geklappt");
    }
    }, 100);
    });
}

function getPromise2() {
  return myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2")
    if(!promError) {
    reject("hat nicht geklappt");
    }else{
    resolve("hat geklappt");
    }
    }, 100);
    });
}

function getPromise3() {
  return myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if(promError) {
    reject("hat nicht geklappt");
    }else{
    resolve("hat geklappt");
    }
    }, 100);
    });
}

async function usePromise() {
  
  try{
    await getPromise();
    await getPromise2();
    await getPromise3();
    console.log("juhu")
  } catch (error) {
    console.log(error)
  }
    console.log("ende");

}

