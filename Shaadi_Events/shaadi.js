        function shaadi() 
        {
            var d=document.getElementById("a11").value;
            document.getElementById("a1").innerHTML=d;
            document.getElementById("aa1").innerHTML=d;
            var c=document.getElementById("a13").value;
            document.getElementById("a2").innerHTML=c;
            document.getElementById("aa2").innerHTML=c;
            var s=document.getElementById("a12").value;
            document.getElementById("a3").innerHTML=s;
            document.getElementById("aa3").innerHTML=s;
            var dt=document.getElementById("a15").value;
            document.getElementById("a4").innerHTML=dt;
            document.getElementById("aa4").innerHTML=dt;
            var n=document.getElementById("a14").value;
            document.getElementById("a5").innerHTML=n;
            var b=n*200;
            document.getElementById("a6").innerHTML=b;       
            document.getElementById("aa6").innerHTML=b;   
            document.getElementById("a7").innerHTML=200;
        }
        function shaadi1() 
        {
            
            var d=document.getElementById("a22").value;
            document.getElementById("b1").innerHTML=d;
            document.getElementById("bb1").innerHTML=d;
            var c=document.getElementById("a23").value;
            document.getElementById("b2").innerHTML=c;
            document.getElementById("bb2").innerHTML=c;
            var s=document.getElementById("a21").value;
            document.getElementById("b3").innerHTML=s;
            document.getElementById("bb3").innerHTML=s;
            var dt=document.getElementById("a24").value;
            document.getElementById("b4").innerHTML=dt;
            document.getElementById("bb4").innerHTML=dt;
            var n=document.getElementById("a25").value;
            document.getElementById("b5").innerHTML=n;
            var a=n*200;
            document.getElementById("b6").innerHTML=a;
            document.getElementById("bb6").innerHTML=a;  
            document.getElementById("b7").innerHTML=200;
        };

function cal(){
    var x = parseInt(document.getElementById('a25').value);
    var y = parseInt(document.getElementById('a14').value);
    var z=x+y;
    var z1=z.toString();
    document.getElementById("amount").innerHTML=z1*200;
    document.getElementById("amount1").innerHTML=z1*200;

};
function cal1(){
    var x = parseInt(document.getElementById('a25').value);
    var y = parseInt(document.getElementById('a14').value);
    var z=x+y;
    var z1=z.toString();
    document.getElementById("profit").innerHTML=z1*80;

};

