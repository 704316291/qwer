let data=null;
let  xhr=new XMLHttpRequest();
xhr.open("get","./json/data.json",false);
xhr.onreadystatechange=function () {
    if(/^2\d{2}$/.test(xhr.status)&&xhr.readyState==4 ){
        data=JSON.parse(xhr.responseText);
    }
};
xhr.send(null);
console.log(data);

let list=document.getElementsByClassName("list")[0];
let str="";
data.forEach((item)=>{
    if(item.ShowType==="1"){
        str+=`<li class="left">
                <img src="img/head1.png" alt="">
                <div class="asd">
                    <p class="msg">${item.Name}</p>
                    <p class="msg1">   ${item.Content}</p>
                    <div class="arrow"></div>
                </div>
            </li>`
    }else{
        str+=`   <li class="right">
                <img src="img/1.png" alt="">
                <div class="asd">
                    <p class="msg">${item.Name}</p>
                    <p class="msg1">   ${item.Content}</p>
                    <div class="arrow"></div>
                </div>
            </li>`
    }
});

list.innerHTML=str;


