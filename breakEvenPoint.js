function win()  {
    /** 고정비용 */
    const a = Number(document.getElementById('a').value);

    /** 제작비용 */
    const b = Number(document.getElementById('b').value);

    /** 이익률 */
    const c = Number(document.getElementById('c').value);
    
    /** 정가 */
    var r1 = ((100 + c) * b * 100)/10000;

    const a_ = a * 100;
    const b_ = b * 100;
    const r2_ = Math.floor(r1 * 10000)/100;

    if(r1 == 0) {r1 = "-"}
    document.getElementById("result1").innerText = String(r1) + "만 원";

    var r2 = Math.round((a_/(r2_ - b_)*100))/100
    if(a_/(r2_ - b_) == Infinity) {r2 = "-"}
    document.getElementById("result2").innerText = String(r2) + "만 원";

    //console.log(a_, b_, r1, r2, r2_)
}