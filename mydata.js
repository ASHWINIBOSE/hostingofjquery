$(document).ready(function(){
    $("#get").click(function(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/users",
            success:function(data){
               
                var output=""
             
         for(var i in data){
             
            output+="<div class='card'><div class='card-header'><div class='card-body'></div>"
        
                output+="<tr> <td>"+ data[i].id+"</td>"
                output+="<td>"+ data[i].name+"</td>" 
                output+="<td>"+ data[i].username+"</td>" 
                output+="<td>"+ data[i].address.street+"</td>"
                output+="<td>"+ data[i].address.suite+"</td>"
                output+="<td>"+ data[i].address.city+"</td>"
                output+="<td>"+ data[i].address.zipcode+"</td>"
                output+="<td>"+ data[i].address.geo+"</td></tr>"
             
                output+="</div>";
                $(".result").html(output);
              
            };
               
                
            }
        });
    });
})