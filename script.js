function getInputValue(){
    var one = parseFloat(document.getElementById("one").value);
    var two = parseFloat(document.getElementById("two").value);
    var three = parseFloat(document.getElementById("three").value);
    var four = parseFloat(document.getElementById("four").value);
    var five = parseFloat(document.getElementById("five").value);
    var six = parseFloat(document.getElementById("six").value);
    var seven = parseFloat(document.getElementById("seven").value);
    var eight = parseFloat(document.getElementById("eight").value);
    var nine = parseFloat(document.getElementById("nine").value);
    

    var one_f= one*4;
    var two_f= two*4;
    var three_f= three*2;
    var four_f= four*4;
    var five_f= five*2;
    var six_f= six*3;
    var seven_f= seven*3;
    var eight_f= eight*3;
    var nine_f= nine*3;
    
    var result=(one_f+two_f+three_f+four_f+five_f+six_f+seven_f+eight_f+nine_f)/28;

    var final_result= parseFloat(result).toFixed(2);
//  alert(`কোথাও ভুল করেছেন। আবার চেষ্টা করুন।`);
// alert(`মাশাআল্লাহ আপনি CGPA: ${final_result} পাইসেন। মিষ্টি খাওয়াবেন`);
    if(final_result==='NaN'){
        alert(`কোথাও ভুল করেছেন। আবার চেষ্টা করুন।`);
    }else{
        if(0<result && result<=4){
            alert(`আপনি CGPA: ${final_result} পেয়েছেন।`);
        }else{
        alert(`কোথাও ভুল করেছেন। আবার চেষ্টা করুন।`);
        }
    }
    
console.log(typeof(result));
console.log(typeof(final_result));
console.log(result);
console.log(final_result);
}