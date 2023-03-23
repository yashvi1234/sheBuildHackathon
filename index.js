import { saveAs } from 'file-saver'

$("#form").submit(function(e){
    e.preventDefault()

    var query=document.getElementById('inputting').value; 
    var api_key='720611ae5e97b92a2af7a7f1c5c95207'
    var result=''

    var url="https://api.scaleserp.com/search?api_key=AEEC309AA3964057AA4E74BEE99588B6&q="+query+"&location=India";
    console.log(url)

    const urls=[]
    $.get(url,function(data){
        $('#result').html('')
        //console.log(data)

        data.organic_results.forEach(res => {
            urls.push(res.link)
            result=`
            <h4>${res.position}. ${res.title}</h4><a target=_blank href="${res.link}">${res.link}</a>
            <p>${res.snippet}</p>
            `
            $("#result").append(result)
            
        });
        var urllist=JSON.parse(JSON.stringify(urls));
        saveAs(urllist, 'export.json')
})
})
