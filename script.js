function result(){
    const one= parseFloat(document.getElementById("one").value);
    const two= parseFloat(document.getElementById("two").value);
    const three= parseFloat(document.getElementById("three").value);
    const four= parseFloat(document.getElementById("four").value);
    const five= parseFloat(document.getElementById("five").value);
    const six= parseFloat(document.getElementById("six").value);
    const seven= parseFloat(document.getElementById("seven").value);
    const eight= parseFloat(document.getElementById("eight").value);
    const nine= parseFloat(document.getElementById("nine").value);


    const one_f= one*4;
    const two_f= two*4;
    const three_f= three*2;
    const four_f= four*4;
    const five_f= five*2;
    const six_f= six*3;
    const seven_f= seven*3;
    const eight_f= eight*3;
    const nine_f= nine*3;
    
    const result=(one_f+two_f+three_f+four_f+five_f+six_f+seven_f+eight_f+nine_f)/28;
    const final_result= parseFloat(result).toFixed(2);
    
    
    if(final_result==='NaN'){
        document.getElementById("result").innerHTML=`কোথাও ভুল করেছেন। আবার চেষ্টা করুন।`;
        document.getElementById("result").style.visibility="visible";
        document.getElementById("display").style.width="100%";
        document.getElementById("try").style.visibility="visible";
        
        
    }else{
        if(0<=result && result<=4){
            document.getElementById("result").innerHTML=`আপনি CGPA: ${final_result} পেয়েছেন।`;
            document.getElementById("result").style.visibility="visible";
            document.getElementById("display").style.width="100%";
            document.getElementById("try").style.visibility="visible";

        }else{
            document.getElementById("result").innerHTML=`কোথাও ভুল করেছেন। আবার চেষ্টা করুন।`;
            document.getElementById("result").style.visibility="visible";
            document.getElementById("display").style.width="100%";
            document.getElementById("try").style.visibility="visible";
    }
    }
}

function fresh(){
    document.getElementById("display").style.width="0%";
    document.getElementById("result").style.visibility="hidden";
    document.getElementById("try").style.visibility="hidden";
    
}
