async function api() {
    const url =
      "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10";
   const response =  await fetch(url)
   console.log(typeof response);
   console.log(response);
   if (!response.ok) {
     throw new Error("City Not found");
   }
   const data = await response.json();
   console.log(data);
   
   
   
   
}
api();