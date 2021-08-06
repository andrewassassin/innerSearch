 async function sendToPage(){
    var input = document.getElementById("search").value;
    input=input.toLowerCase();
     //alert(input);
    let tabimgcontent ;
    let audio = "成績"
    audio=audio.toLowerCase();


    let tab = await
     fetch('./tabimg.html')
        .then(async function (response) {
            // console.log("res  ",response.text())
            // lan= response.text().then(ret => {console.log("ret!!",ret)});
            tabimgcontent= await response.text()
            console.log("tabimgcontent  ",tabimgcontent)
        return tabimgcontent;
        })

    // let tab =await
    //         Promise.all([
    //             fetch('./tabimg.html'),
    //             fetch('./calculator.html')
    //         ]).then(async function (responses) {
    //             // Get a JSON object from each of the responses
    //            lan = await  Promise.all(responses.map(function (response) {
    //                 console.log('res~~~~',response)
    //                 // console.log('resjson~~~~',response.json())
    //                 return response.text();
    //             }));
    //             console.log('lan',lan)
    //             return lan
    //         })
    // console.log('tab',tab)
    // let afterLower =tab.map(ele =>{
    //            return ele.toLowerCase()
    //         } )
    // console.log('afterLower',afterLower)

    // afterLower.forEach( (ele,idx) => {
    //     if (ele.includes(input)){
    //         console.log("include!!",idx)
    //         // location.href = "tabimg.html";
    //     }
    // });
        let tabcontent  =tab.toLowerCase()
    // console.log('tabcontent',tabcontent)

    if (tabcontent.includes(input)){
        console.log("include!!")
        // location.href = "tabimg.html";
        return false;
    }
    else if (audio.includes(input)){
        console.log("noinclude!!")
        // location.href = "calulator.html";
        return false;
    }
    else {
        console.log("no~!!!")
        // console.log("tabcontent  ",tabcontent)
    }
}

