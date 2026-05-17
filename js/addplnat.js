        async function camra(){

    try{
        const stream=await navigator.mediaDevices.getUserMedia({video:true});

        const video=document.getElementById("video");

        video.srcObject=stream;

    }

    catch(err){
        alert("camra acces denid");
    }
}

