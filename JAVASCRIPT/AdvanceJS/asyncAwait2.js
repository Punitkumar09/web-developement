function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout( () => {
               resolve("Post Data fetched")
        }, 2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment Data fetched");
      }, 3000);
    });
}

async function getBlogData() {
    try {
        console.log("fetching blog data....");
        // const blogdata = await fetchPostData();
        // const Commentdata = await fetchCommentData();
       const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(postData);
        console.log(commentData);
        
        
        console.log("fetch complete" );
        
        
    } catch (error) {
        console.error("Error fetching blog data", error)
    }
}
getBlogData();