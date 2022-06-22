
const host = "https://beewell.tk"


const headers = {
 "Content-Type":"application/json"
}

export const signIn = async (data,CB)=>{
    const url = "/patient/sign_in";
    await fetch(host + url,{body: JSON.stringify(data), method : "POST", headers: headers})
    .then((data)=>data.json())
    .then((data)=>{
     CB(true, data)
    })
    .catch(err=>{
      CB(false,err)
    })

}
