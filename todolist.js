function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
  
            var response = JSON.parse(this.responseText);
            var datas= response;
            console.log(datas);
            var output="<h2 style='font-family:cursive;'>"+"Your Todo-List:"+"</h2>"+"<table>"+"<tr>"+"<th>"+"User Id"+"</th>"+"<th>"+"Id"+"</th>"+
                            "<th>"+"Title"+"</th>"+"<th>"+"Completed"+"</th>"+"</tr>";
            for(var i=0;i<datas.length;i++){
                output += "<tr><td>"+datas[i].userId+"</td>";
                output += "<td>"+datas[i].id+"</td>";
                output += "<td>"+datas[i].title+"</td>";
                output += `<td><input type="checkbox" id="checkbox ${i+1}" value="completed ${i+1}"></td>`;
            }
            output+="</table>";
            document.getElementById("content").innerHTML=output;
        }
  
        
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
  
  }
  
  var total=0;
  document.querySelector('#content').onclick = function(tick) {
    let j=0;  
    
    if(tick.target.checked==true) {
      console.log('Checked '+ tick.target.id);
      total++;
    }
    else if(tick.target.checked==false){
      console.log('Unchecked '+ tick.target.id);
      total--;
    }
    else {
      j=1;
    }
  
    var promise = new Promise(function(done,ndone){
      if(total==5 && j==0){
        done();
      }
      else if(j==0){
        ndone(total)
      }
    })
    
    promise
    .then(function(){
      alert("Task Done");
      console.log("Task Done");
    })
    .catch(function(c){
      console.log(`${c} tasks completed`);
      
    })
  }