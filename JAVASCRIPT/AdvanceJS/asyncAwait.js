function fetchUserData(){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
               resolve({name: "Punit", url: "https://google.com"})   
        }, 2000)
    })
}

async function getUserData() {
    try {
        console.log('Fetching user data....');
        const userData = await fetchUserData()
        console.log("User Data fetched successfully");
        
        console.log("User data : ",  userData);
        
        
    } catch (error) {
        console.log("Error fetching data", error);
        
    }
}

getUserData();