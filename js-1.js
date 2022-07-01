
const service = [
    ["إنشاء المباني","image06-5v","header6-5r"],
    ["اعمال الألمونيوم والزجاج","image06-62","header6-63"],
    ["الصيانة والتشغيل","image06-65","header6-64"],
    ["اعمال الانترلوك و البلدورات","image06-67","header6-66"],
    ["اعمال الترميم والتشطيبات","image06-69","header6-68"],
    ["اعمال التكيف والتبريد","image06-6b","header6-6a"],
    ["اعمال الديكورات","image06-6d","header6-6c"],
    ["اعمال الطرق","image06-6j","header6-6i"],
    ["اعمال الكتروميكانيك","image06-6f","header6-6e"],
    ["اعمال الليزر و البلازما","image06-6l","header6-6k"],
    ["الاعمال الهياكل المعدنية","image06-6n","header6-6m"],
    ["تصميم وتنفيذ النظم الميكانيكية","image06-6p","header6-6u"],
    ["تركيب المصدات والحواجز الخراسانية","image06-6r","header6-6o"],
    ["اعمال الاستانلس ستيل للمصاعد والمباني","image06-6t","header6-6s"],
    [ "تنفيذ الانظمة الكهربائية","image06-6v","header6-6q"],
    ["مضلات السيارات والحدائق والمرافق العامة","image06-6x","header6-6w"],
    ["اعمال الكلادينج","image06-6z","header6-6y"],
    ["تأجير المعدات البحرية والبرية","image06-71","header6-70"]
]; 

function getOneService(){
    var url = new URL(window.location.href);
    var s = url.searchParams.get("s");
    if (s != null || service.findIndex(arr => arr.includes(s)) != -1  ) {

    var y = service.findIndex(arr => arr.includes(s));
    document.getElementById('ServiceLink').href = "request_service.html?s="+s.replace(" ","+")+"";
    for(let i = 0; i < service.length; i++) {
        for(let j = 1; j < service[i].length; j++) {
            if (!(service[i][j] == service[y][1]||service[i][j] == service[y][2])){
           // console.log(service[i][j]);
            document.getElementById(service[i][j]).remove();
            }
          }
       }
    } else { document.getElementById("header02-77").remove(); }
    
}
function selectS(){  var url = new URL(window.location.href);document.querySelector('#select-form2-y').value = url.searchParams.get("s");}
  