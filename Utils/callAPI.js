
const host = "https://beewell.tk"


const headers = {
 "Content-Type":"application/json"
}

export const signIn = async (data,CB)=>{
    const url = "/patient/sign_in";
    await fetch(host + url,{body: JSON.stringify(data), method : "POST", headers: headers})
    .then((data)=>{
      if (!data.ok) {
        // create error object and reject if not a 2xx response code
        let err = new Error("HTTP status code: " + data.status)
        err.data = data
        err.status = data.status
        throw err
      }
      return data.json()})
    .then((data)=>{
     CB(true, data)
    })
    .catch(err=>{
      CB(false,err)
    })

}

export const signUp = async (data,CB)=>{
  const url = "/patient/sign_up";
  await fetch(host + url,{body: JSON.stringify(data), method : "POST", headers: headers})
  .then((data)=>{
    if (!data.ok) {
      // create error object and reject if not a 2xx response code
      let err = new Error("HTTP status code: " + data.status)
      err.data = data
      err.status = data.status
      throw err
    }
    return data.json()})
  .then((data)=>{
   CB(true, data)
  })
  .catch(err=>{
    console.log(err)
    CB(false,err)
  })

}
