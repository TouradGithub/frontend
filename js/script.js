let text;

let btn = document.querySelector('button');
btn.onclick = function(){
    let day = document.getElementById('day').value;
    let manth = document.getElementById('manth').value;
    let year = document.getElementById('year').value;
    if(day==""||manth==""||year==""){
    }else{
      console.log(writeHijri(new Date(year,manth-1,day), 'ar'));
    } 
    document.getElementById('result').innerHTML = text;

}
function writeHijri(date, lang) {
    var date = date || new Date();
    lang = lang || 'en';
    var options = {
      year: 'numeric', month: 'long', day: 'numeric'
    };
    text = date.toLocaleString(lang + '-u-ca-islamic', options);
    return date.toLocaleString(lang + '-u-ca-islamic', options);
}

// إجراء تغييرات بحيث إذا تغير اي قيمة من قيم ال input يتم تغير النتيجة
//عند تحميل الصفحة تكون هناك قيمة التاريخ الحالي
