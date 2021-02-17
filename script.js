//document.getElementById('filter').innerHTML='';
//document.getElementById('table').innerHTML='';

function contacts(){
  var h1=document.getElementById('h2');
  var h2=document.getElementById('h3');
  var h3=document.getElementById('h4');
  var h4=document.getElementById('h5');

  h1.innerHTML='Country';
  h2.innerHTML='Region';
  h3.innerHTML='Demonym';
  h4.innerHTML='Currency';
 var table1=document.getElementById('table1');
 var table2=document.getElementById('table2');
 
 var tbody=document.createElement('tbody');
 var arr = [];
var request=new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.send();
request.onload = function(){
var data = JSON.parse(this.response);
function print(x) {
  tbody.innerHTML='';
  for (var i = ((x-1)*20);i<(20*x);i++) {

  console.log(data[i].name);
  var tr=document.createElement('tr');
var td1=document.createElement('td');
td1.setAttribute('id','td1');
var td2=document.createElement('td');
td2.setAttribute('id','td2');
var td3=document.createElement('td');
td3.setAttribute('id','td3');
var td4=document.createElement('td');
td4.setAttribute('id','td4');
  td1.innerHTML=data[i].name;
  console.log(data[i].demonym);
  td2.innerHTML=data[i].demonym;
  console.log(data[i].region);
  td3.innerHTML=data[i].region;
  console.log(data[i].cioc);
  td4.innerHTML=data[i].cioc;
  tr.append(td1,td2,td3,td4);
  tbody.append(tr);
  table2.append(tbody);
  table1.append(table2);
}
console.log(data);
}
  var buttons=document.getElementById('buttons');
for (var j = 0; j <= (data.length / 20) - 1; j++) {
  
  var button=document.createElement('button');
  button.setAttribute('type','button');
  button.setAttribute('class','btn btn-secondary');
  button.innerHTML=j+1;
  buttons.append(button);
  //document.body.appendChild(button);
  arr.push(button);
  
  console.log(arr[arr.length-1], arr[arr.length-1].innerHTML);
}
console.log(arr[arr.length-1], arr[arr.length-1].innerHTML);
arr.forEach(element => {element.onclick=()=>print(element.innerHTML);                                                      
});

}
}

