var x=document.getElementById("submit");
x.addEventListener("click",function(){
  var y=document.getElementById('here').value;
  var z=document.getElementById('num');
  z.style.background=color="#AAF";
  return z.innerHTML=numberToWord(y);
})

function numberToWord(a){
  var arp = []; 
  var b = a.toString(); var numbers = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen"]; var tens =["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"]; var huns = ["hundred","thousand","hundred thousand","million","hundred million","billion"];
 
  //catch too small
    if(a<0){
    arp.push("Number is too small...");
      return arp;
    }
  
  //catch all zeros
  if(a==0){
    arp.push("zero");
    return arp;
  }
    if (a<14){
      arp.push(numbers[a-1]);
      return arp;
    }

    b.split(); 
    //b=[num,num]
    var c = b.length;
   //clean up
    var nu = numbers[b[1]-1];
    var te = tens[b[0]-2];
    //catch too large
    if(c>4){
      arp.push("Your number exceeds 9999.");
      return arp;
    }

    if (a>13 && a<20){
      arp.push(nu + "teen");
      return arp;
    }

    if ([b[1]] == "0" && a>19 && a<100){
      arp.push(te);
      return arp;
    }

    if(a>19 && a<100){
      arp.push(te+"-"+nu);
      return arp;
    }

    if(c==3){
      var nu = numbers[b[0]-1]
      var hu = huns[0]
        if(a[1]==0 && a[2]==0){
          arp.push(nu+" "+hu); 
          return arp;
        }
        //isolates the tens and ones
          var g = [b[1] + b[2]];
          var h = g.join();
        if(h<14){
          arp.push(nu+" "+hu+" and "+numbers[h-1]);
          return arp;
        }
        if(h>13 && h<20){
          arp.push(nu+" "+hu+" and "+numbers[b[2]-1]+"teen");
          return arp;
        }
        //for the tens
        if([b[2]]=="0"){
          arp.push(nu+" "+hu+" and "+tens[b[1]-2]);
          return arp;
        }
        else
          arp.push(nu+" "+hu+" and "+tens[b[1]-2]+"-"+numbers[b[2]-1]);
        return arp;
    }
    if(c==4){
      //clean up
      var nu = numbers[b[0]-1]
      var tho = huns[1]
      //isolate the tens and ones
      var g = [b[2] + b[3]];
      var h = g.join();
        if(a[1]==0 && a[2]==0 && a[3]==0){
          arp.push(nu+" "+tho); 
          return arp;
        }
        if([b[1]]<1){
          if(h<14){
            arp.push(nu+" "+tho+" and "+numbers[h-1]);
            return arp;
          }
          if(h>13 && h<20){
            arp.push(nu+" "+tho+" and "+numbers[b[3]-1]+"teen");
                           return arp;
          }
      }
      //fancy for the huns
      if([b[2]]=="0" && [b[3]]=="0"){
        var k = [b[0]+b[1]];
        var m = k.join();
          if(m<14){
          arp.push(numbers[[m]-1]+" "+huns[0]);
            return arp;
          }
          if(m>13 && m<20){
            arp.push(numbers[b[1]-1]+"teen "+huns[0]);
            return arp;
          }
          if(m>19){
            arp.push(tens[b[0]-2]+"-"+numbers[b[1]-1]+ " " +huns[0]);
            return arp;
          }
      }
      if([b[1]]=="0" && [b[3]]!="0"){
        arp.push(nu+" "+tho+" and "+tens[b[2]-2]+"-"+numbers[b[3]-1]);
        return arp;
      }
      //for the tens
      if([b[1]]!="0" && [b[3]]=="0" && h<10){
        arp.push(nu+" "+tho+ " " + numbers[b[1]-1]+" "+huns[0] + " and "+tens[b[2]-2]);
        return arp;
      }
      //for num end with 0, tens, and huns
      if([b[1]]>0&&[b[3]]==0&&h>10){
        arp.push(nu+" "+tho+ " " + numbers[b[1]-1]+" "+huns[0] + " and "+tens[b[2]-2]);
        return arp;
      }
      //for the huns with low num
      if(h<14){
        arp.push(nu+" "+tho+ " " + numbers[b[1]-1]+" "+huns[0] + " and "+numbers[h-1]);
        return arp;
      }
      //to bridge the gap
      if(h<20){
        arp.push(nu+" "+tho+ " " + numbers[b[1]-1]+" "+huns[0] + " and "+numbers[b[3]-1]+"teen");
        return arp;
      }
      //for huns & tens
      if([b[1]]=="0" && [b[3]]=="0"){
        arp.push(nu+" "+tho+ " and "+tens[b[2]-2]);
        return arp;
      }
      if([b[2]]=="0"){
        arp.push(nu+" "+tho+ " " +numbers[b[1]-1]+ " " +huns[0]+" and "+numbers[b[3]-1]); 
        return arp;
      }
      else
        arp.push(nu+" "+tho+ " " + numbers[b[1]-1]+" "+huns[0] + " and "+tens[b[2]-2]+"-"+numbers[b[3]-1]);
      return arp;
    }
  }

  
  