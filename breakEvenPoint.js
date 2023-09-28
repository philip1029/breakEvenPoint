function fun()  {
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
    const r1_ = Math.round(r1 * 10000)/100;

    document.getElementById("result1").innerText = String(r1) + "만 원";

    const r3_ = Math.round((a_/(r1_ - b_)*100));
    var r2 = (r1_ * r3_)/10000;

    var r3 = r3_/100;

    document.getElementById("result2").innerText = String(r2) + "만 원";

    document.getElementById("result3").innerText = String(r3) + "개";

    //console.log("a_:", a_, "b_:", b_, r1, r3, "r1_:", r1_, "r3_:", r3_)
}