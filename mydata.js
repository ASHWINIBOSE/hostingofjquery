$(document).ready(function(){
    $("#get").click(function(){
        $.ajax({
            type:"GET",
            url:"mydata.json",
            success:function(data){
               
               var output="<table class='table'><thead><tr><th>NAME</th><th>D.O.B</th><th>COLLEGE</th><th>MOBILE</th></tr></thead><t/able>"
            for(var i in data){
                output+="<tr> <td>"+ data[i].name+"</td>"
                output+="<td>"+ data[i].dob+"</td>" 
                output+="<td>"+ data[i].college+"</td>" 
                output+="<td>"+ data[i].mob+"</td></tr>"
            }
                output+="</table>";
                $(".result").html(output);
                
            }
        });
    });
})