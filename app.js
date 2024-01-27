//! CTRL+SHIFT+D Tüm konsol loglarını temizle
//! CTRL + Ö console loglarını yorum yap

window.onload = function (){
    //localStorage.setItem("key","value");
    //localStorage.getItem("key");
    //localStorage.removeItem("key");
    //localStorage.clear();
    //let array = ["1","2","3","4","5"];
    //localStorage.setItem("keyArray",array);//Hepsini tek bir string olarak yazar
    //localStorage.setItem("keyArray",JSON.stringify(array));//array formatında yazar.
    //let getArray = JSON.parse(localStorage.getItem("keyArray"));//array olarak alır.
    questions = questions.concat(cSharpBasicPreparingList);
    questions = questions.concat(cSharpBasicVariablesList);
    questions = questions.concat(cSharpBasicOperatorsList);
    questions = questions.concat(cSharpBasicflowControlList);
    questions = questions.concat(cSharpBasicErrorControlList);
    questions = questions.concat(cSharpBasicLoopsList);
    questions = questions.concat(cSharpBasicHelperCommandsList);
    questions = questions.concat(cSharpBasicArraysList);
    questions = questions.concat(cSharBasicStringsList);

    localStorage.setItem("stored_questions",JSON.stringify(questions));

    if("stored_questions" in localStorage)
        questions = JSON.parse(localStorage.getItem("stored_questions"));
    else
        localStorage.setItem("stored_questions",JSON.stringify(questions));

    
    console.log(questions);
};


let random = 0;

function RandomQuestion() {
    document.getElementById("button_answer").style.display = "none";
    document.getElementById("p_answer").style.display = "none";
    document.getElementById("button_yes").style.display = "none";
    document.getElementById("button_no").style.display = "none";
    document.getElementById("p_subject").style.display = "none";

    FindQuestion();
    document.getElementById("p_question").innerHTML = questions[random].question;
    document.getElementById("p_subject").innerHTML = "Konu: " + questions[random].subject;
    document.getElementById("p_subject").style.display = "block";
    document.getElementById("p_question").style.display = "block";
    document.getElementById("button_answer").style.display = "block";
    document.getElementById("button_answer").style.margin = "auto";
}

function ShowAnswer(){
    document.getElementById("p_answer").innerHTML = questions[random].answer;
    document.getElementById("p_answer").style.display = "block";
    document.getElementById("button_yes").style.display = "block";
    document.getElementById("button_yes").style.margin = "auto";
    document.getElementById("button_no").style.display = "block";
    document.getElementById("button_no").style.margin = "auto";
}

function Yes() {
    if(questions[random].difficulty !== 2) questions[random].difficulty++;
    UpdateLocalStorage();
    if(questions.filter(x => x.difficulty === 2).length === questions.length)
        alert("Tebrikler, bu konudaki tüm soruları en az 2 kez bildiniz!")
    RandomQuestion();
}

function No() {
    if(questions[random].difficulty !== -1) questions[random].difficulty--;
    UpdateLocalStorage();
    RandomQuestion();
}

function FindQuestion(){
    //random = Math.floor(Math.random() * questions.length);
    questions.sort((a,b) => a.difficulty - b.difficulty);
    let minDiffValue = questions[0].difficulty;
    let minDifQuestions = questions.filter(x => x.difficulty === minDiffValue);
    random = Math.floor(Math.random() * minDifQuestions.length);
}

function UpdateLocalStorage(){
    localStorage.removeItem("stored_questions");
    localStorage.setItem("stored_questions",JSON.stringify(questions))
}

let questions = [  
]

let cSharpBasicPreparingList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"Programlama dillerinde seviye nedir?",
    "answer":"Okunabilirlik. Yükseldikçe okunabilirlik artar. Makine dili -> Assembly -> C#, Java -> Pascal, Fortran -> Visual Basic"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"C# hangi seviyede bir dildir?",
    "answer":"Orta"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":".Net vs .Net Core?",
    "answer":".Net sadece windows, core her yerde çalışır, modüler, opensource."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"Compiler ne yapar?",
    "answer":"Yazdığımız kodu bilgisayarın/makinenin anlayabileceği dile (assembly) çevirir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"C# kodunun makine diline çevrilene kadarki süreci nedir?",
    "answer":"C# -> Compiler -> MSIL(Microsoft Intermediate Language) -> CLR(Common Languge Runtime) -> Machine Code"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"Derleme Sonucu oluşan dosyalar",
    "answer":".exe ve .dll"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"help",
    "answer":"dotnet --help: yapılabilecek aksiyonları gösterir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"new",
    "answer":"dotnet new .. :yeni proje oluşturur. <br>Her proje türünün keywordu bulunur; console, webapi.. <br>--name ile isim verilir.<br>Dizinde aynı isimde proje bulunuyorsa --force ile varolanı ezer.<br><br>dotnet new console --name NewConsoleProject "
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"restore",
    "answer":"dotnet restore => Eklenen ya da kaldırılan referansları/paketleri günceller."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"build",
    "answer":"dotnet build => Projeyi derler. Öncesinde restore eder. Proje çıktılarını bin/debug/net5.0 yoluna çıkarır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"publish",
    "answer":"dotnet publish => Projeyi yayınlanabilir hale getirir. <br>Önce derler (build) <br>Çıktılar;<br>.dll'ler<br>.deep.json => bağımlılıklar<br>runtimeconfig.json => bağımlılık dll'leri<br><br>Çıktıları bin/Debug/net5.0/publish dosyasına çıkarır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"run",
    "answer":"dotnet run => Projeyi çalıştırır<br>Önce derler (build)<br>Derlemeden çalıştırmasını istersek --no-build eklenir"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"Developer Command promptan derleme",
    "answer":"csc [ProjectName]"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Dotnet CLI",
    "difficulty":0,
    "question":"Dotnet CLI Proje Modifikasyon Komutları",
    "answer":"add/remove Package/reference, list reference"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"main fonksiyonunun işlevi",
    "answer":"Program.cs uygulamanın ayağa kaldırılabilmesi için gerekli başlangıç kodlarını barındırır. İşletim sistemi ile iletişim kurar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"string[] args parametresinin işlevi",
    "answer":"dotnet run arif -> args[0] a alınır"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"Top-Level Statements c#9.0 ",
    "answer":"Kod kalabalığını önler. (Boilerplate)<br>Sadece using System; yazılır.<br>Using ile namespace arasına kodlar yazılabilir.<br>Sadece Program.cs'de geçerli."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hazırlık-->Genel Bilgi",
    "difficulty":0,
    "question":"TODO işlevi",
    "answer":"Yapılacakları belirlememizi sağlar.<br>TaskList penceresinde gözükür."
    }
]

let cSharpBasicVariablesList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Value Type - Primitive Type  ",
    "answer":"Değer tutan değişkenler value type'dır.<br>Bunların en ilkel halleri de primitive türdür. Derleyici seviyesinde bilinen türler. Diğer türlerin temelde yapı taşı. <br><br>Primitive türler: Boolean, Byte, SByte, Int16, UInt16, Int32, UInt32, Int64, UInt64, IntPtr, UIntPtr, Char, Double, Single"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"type-safe",
    "answer":"RAM'e veri koymadan önce onun tipini bildirmek."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Primitive Type-IsPrimitive ",
    "answer":"Bir tipin primitive olup olmadığını söyler.<br><br>typeof(type).IsPrimitive"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Değişken türleri ve aralıkları ve kaç byte/bit ",
    "answer":"sbyte,byte => 1 byte => 2^7<br>short,ushort => 2 byte => 2^15<br>int,uint => 4 byte => 2^31<br>long,ulong => 8 byte => 2^63<br>float => 4 byte<br>double => 8 byte<br>decimal => 12 byte<br>char => 2 byte"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"value type değişkenlerin stack'dehangi bilgileri tutulur ",
    "answer":"Türü, adı,değeri"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"metot isimleri (bellek adresleri) nerde tutulur ",
    "answer":"Stackde tutulur"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"@ operatorü ile değişken tanımlama ",
    "answer":"Programatik keywordleri değişken ismi olarak kullanmak istersek @ operatörü ile kullanırız."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"sayısal ve ondalıklı türlerin default değerleri ",
    "answer":"Sayısal ve ondalık türler default olarak iteger kabul edilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"float, double, decimal değer atarken eklenecek karakterler ",
    "answer":"Float => f ya da F<br>Double => d ya da D (Zorunlu değil, çünkü ondalıklıların default tipi double dır)<br>Decimal => m ya da M"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Tuple değişken ",
    "answer":"(int a, string b) tupleVar => bu şekilde çoklu değişkenler.<br>Erişirken tupleVar.a şeklinde erişilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Literal düzenleme ",
    "answer":"Uzun sayıları _ ile ayırabiliriz. 1_000_000 şeklinde."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Deafult değer atama ve default keyword ",
    "answer":"Default değerler:<br>string => null<br>char => '\0'<br>sayısal => 0<br>bool => false<br><br>default keywordu ile default değer atanabilir. int a = default(int);"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Deafult Literals ",
    "answer":"C# 7.1 ile default değer atama => int a = default;"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Değeri olmayan değişkenler ",
    "answer":"Metot içinde tanımlanan değişkenlere tanımlanırken default değer verilmez. Bu sebeple değer verilmediği sürece kullanılamaz."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Scope - Custom Scope ",
    "answer":"Scope erişilebilirlik sınırını belirler. <br>Custom scope ise istediğimiz yerde {} ile oluşturulur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Sabitler - const,static,readonly ",
    "answer":"Değişmeyen değerleri tutmak için kullanılır.<br>Const => static tir. Sadece oluşturulurken değer atanabilir.<br>(static => uygulama bazlı (global) veri tutabileceğimiz ramin bir bölümü, heryerden erişilir.)<br>const static olmasına ek olarak bir de değiştirilemezdir.(staticler değiştirilebilir.)<br>static bir class instance üretmeden kullanılabilir.<br>readonly => sadece okunabilir. consttan farklı olarak; sadece tanımlanırken değil, bir de constructor içinde de değer atanabilir.<br>readonly static değildir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Global değişkenler ",
    "answer":"Class içindeyse global, metot içindeyse local."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Değer atama - Deep Copy - Shallow Copy ",
    "answer":"\"=\" operatörü kullanıldığında;<br>Deep Copy => veri çoğaltılır, value type değişkenlerde default atama yöntemidir, veri değişikliği birbirini etkilemez.<br>Shallow Copy => veri çoğaltılmaz, referans türlü değişkenler için atama bu şekilde yapılır. Aynı veri birden fazla referansla işaretlenmiş olur. Veri değişikliği diğerlerini de etkiler.<br>ref keywordü ile value type değişkenlerde de shallow copy yapılabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"object türü - boxing - unboxing ",
    "answer":"object türü => tüm türlerin atası, tüm türler object ten türetilmiştir(value type lar dahil)<br>object referans türlüdür.<br>Object içinde veri kendi türünde tutulur.<br>Boxing => bir türü object türünün içine koymak. Object a = 5;<br>Unboxing => object içindeki tür üzerinden işlem yapmak istersek kendi türünde dışarı çıkarmamız gerekir. int b = (int)a;<br>Unboxing de casting operatörü () kullanılır.<br>Cast operatörü ayrıca tür dönüşümleri ve kalıtımsal işlemlerde kullanılır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"var keyword ",
    "answer":"Tutulacak verinin türünü compiler belirler.<br>Compilerın anlayabilmesi için tanımlanırken değer ataması yapılmalıdır.<br>Aslında amacı farklı diller arasında desteklenmeyen/olmayan veri türlerini karşılayabilmektir.<br>Anonim türleri de karşılayabilir.<br>Ufak da olsa daha maliyetlidir kendi türünü yazmaya göre."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"var vs object ",
    "answer":"var'da boxing-unboxing yapılmaz.<br>Var operasyonel bir keyword, object bir türdür."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"dynamic keyword ",
    "answer":"var'ın runtime versiyonu gibi<br>var compile time da atanan türe bürünürken, dynamic compile time da türe bürünmez, runtime da bürünür.<br>Türü compile da belli olmadığı için bürüneceği türün özelliklerini getirmez. Compiler bu özellikleri önermez. Ancak var olduğundan emin olduğumuz memberları manuel yazabiliriz, compiler hata da vermez. Olmayan bir member yazarsak runtime da hata verir.<br>GetType() türü getirir. dynamic a = \"5\"; GetType() => System.String<br>Tür runtimeda belirlenir ama kararlı değildir. Yeni değer atarsak yeni türe bürünür. a=5; dersek GetType System.Int32 olur.<br>Dışardan gelen türünü bilmediğimiz türlerde kullanılır. Mesela bu durumda var kullanılamaz."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Kodun senkron ve asenkron çalışması",
    "answer":"Yazılım varsayılan olarak senkrondur. Senkronda işlemlerden birisi bitmeden diğeri başlamaz. ->->->->->->->->->-><br>Asenkronda ise aynı anda birden fazla işlem paralel olarak yürür.<br>Senkronda herhangi bir t anında hangi işlemin yapıldığı bellidir ama asenkronda anlamak zordur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Tür dönüşümleri-Parse-Convert-ToString",
    "answer":"Parse sadece string türleri hedefe dönüştürür. Yani parametre olarak sadece string alır. int x = int.Parse(\"1235\");<br>Convert her şeyi her şeye dönüştürür. Convert.To[type1](type2) -> type2 yi type1'e dönüştürür.<br>Diğer türleri stringe dönüştürürken Convert de kullanılabilir ama her türün ToString metodu vardır, o kullanılır çoğunlukla. "
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Tür dönüşümleri-implicit-explicit",
    "answer":"Sayısal türler kendi aralarında dönüştürülürken aralığı daha büyük olana dönüşürken bilinçsiz (implicit). İnt a = 3000; float f = a;<br>Daha küçük olana dönüşürken de bilinçli(explicit) dönüşüm olur. Çünkü veri kaybı ihtimali söz konusudur. İnt a = 3000; short b = (short) a;"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Tür dönüşümleri-checked-unchecked ",
    "answer":"explicit dönüşümde veri kaybı olursa hata fırlatan yapıdır. Checked {} scobu.<br>Kod bloğu default olarak unchecked durumundadır. Yani veri kaybı olduğunda hata fırlatılmamasını sağlamak için unchecked scobuna almak ile almamak arasında fark yoktur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Sayısal to bool & bool to Sayısal ",
    "answer":"bool to int => false:0, true:1'e dönüşür.<br>İnt to bool => 0: false, geri kalan her şey true'ya dönüşür."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Değişkenler",
    "difficulty":0,
    "question":"Sayısal to char & char to Sayısal ",
    "answer":"char to sayısal => karakterin ascii kodunu getirir.<br>Sayısal to char => ascii koduna karşılık gelen char ı getirir."
    }
]

cSharpBasicOperatorsList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Aritmetik Operatörler(+-*/%) ",
    "answer":"Aritmetik işlemleri yapar.<br>Operatörün üstüne geldiğimizde hangi türlerle hangi sonuç döndüğü overloadlarda yazar.<br>"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Aritmetik Operatörler Aynı türde dönüş değeri ",
    "answer":"Aynı türlerde dönüş değeri de aynıdır.<br>İstisna: byte-byte sonucu int döner"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Aritmetik Operatörler Farklı türde dönüş değeri ve operatörün davranışı  ",
    "answer":"Farklı türlerde dönüş türü aralığı büyük olan türden olur. Aslında küçük olan tür implicit dönüşüme uğrar, operatör ikisini de büyük türden alıp işlem yapar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Aritmetik işlemlerde işlem önceliği ",
    "answer":"Matematikle aynı sırada."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Karşılaştırma Operatörleri(<,>,<=,>=,==) ",
    "answer":"Her zaman boolean döner."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Mantıksal Operatörler(&&,||,^) ",
    "answer":"&& => ve<br>|| => veya<br>^ => ya da (birisi ya da diğeri, ikisinin de true ve ikisinin de false olduğu durumlar false, birisi true diğerinin false olduğu durumlar true döner)"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"\"++ ve --\" operatörleri - öncesinde ve sonrasında yazılırsa ne olur ",
    "answer":"\"++i\" => önce değer artırılır, sonra değişken kullanılır.<br>\"i++\" => önce değişken kullanılır, sonra değer artırılır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Ekleme Yığma Operatörleri (+=,-=,*=,/=,%=) ",
    "answer":"\"++\" üzerine bir ekler, \"+=n\" üzerine n ekler. Diğer operatörlerde de geçerlidir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Metinsel ifadelerde operatörler ",
    "answer":"İki string + ile birleştirilebilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"string + int ",
    "answer":"String + int durumunda + operatörü int değişkeni boxing yaparak object türüne alır"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"stringlerde +=,-=,==,!= ",
    "answer":"\"+=\" ile stringler de birleştirilebilir.<br>\"==\" veya \"!=\" ile kıyaslanabilirler."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"! operatörü ",
    "answer":"İfadenın zıddını/değilini alır.<br>Bir de C# 8.0 ile birlikte Null reference özelliği de sağlar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Ternary Operatörü ?: ",
    "answer":"[Şart] ? [Şart doğruysa yapılacaklar] : [Şart yanlışsa yapılacaklar]<br>C# 9.0 ile birlikte dönen değerler birbirinden türeyen değerler olduğunda da ternary desteklemektedir.<br>Ternary yapısı içiçe de kullanılır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Assign Operatörü = ",
    "answer":"değer türlerde değer, referans türlerde referans ataması."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Member Access Operatörü (.)  ",
    "answer":"Türe uygun memberları çağırabilmemizi sağlar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Cast Operatörü () ",
    "answer":"Boxing - Unboxing<br>Explicit tür dönüşümü<br>char - int dönüşümleri<br>Polimorfizmde base class referansıyla işaretlenen nesneyi kendi türünde elde etmek"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"sizeof ",
    "answer":"Türün kaç byte olduğunu int olarak verir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"typeof-Reflection ",
    "answer":"içine yazılanın türünü getirir, içine tür yazılır<br>Type adında bir sınıf döner. Bu da bir türdür.<br>Reflectionda da kullanılır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"default ",
    "answer":"türün default değeri."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"is ",
    "answer":"boxinge uğramış bir değerin öz türünü verir. Object x = 15; x is Int -> true false döner"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"is null - is not null ",
    "answer":"Sadece null olabilen değerlerin null olup olmadığını kontrol eder."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"as - farklı türlerdeki davranışı, hangi türlerle çalışır  ",
    "answer":"Cast operatörünün unboxing işlemine bir alternatif.<br>Object x = 15; (int) x -> uygundur, (short)x -> uygun değil hata verir, (string)x -> uygun değil hata verir.<br>X as int -> uygun, uygun olmayanlarda ise hata vermez null döner. Null dönme ihtiali olduğu için referans tiplerle çalışır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Nullable ? ",
    "answer":"value type bir değişkeni nullable yapabilmek için int? Şeklinde kullanılır.<br>Bu sayede sadece nullable değerlerle işlem yapabilen operatörleri de value type lar için kullanabiliriz -> is null, is not null, as"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Null Coalescing ?? ",
    "answer":"CW(a ?? \"Merhaba\") -> Eğer a null değilse a nın değerini, null ise Merhaba"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Operatörler",
    "difficulty":0,
    "question":"Null Coalescing Assignment ??= ",
    "answer":"CW(a ??= \"Merhaba\") -> Eğer a null değilse anın değeri, null ise Merhaba değerini a ya atayp Merhaba değerini döner."
    }     
]

let cSharpBasicflowControlList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikleri",
    "answer":"Eşitlik durumuna göre bir kontrol ihtiyacı varsa kullanılır.<br>Her durum için ayrı case [şart] : tanımlanır.<br>Tanımlanan durumların hiçbirisiyle eşleşmeme ihtimali varsa default case de tanımlanabilir, ancak zorunlu değildir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"when keyword ",
    "answer":"eşitliğin dışında başka birşey daha kontrol etmemizi sağlar.<br>case 1 when [şart] :"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"goto keyword  ",
    "answer":"Farklı case durumları için aynı kod çalışması gerekiyorsa case'lerden birisinden diğerine goto ile gidilir.<br>goto kullanıldığında break kullanılmaz.<br><br>case 5:<br>    //Kodlar<br>   break;<br>case 7:<br>    goto case 5;<br><br>Birden fazla case aynı case'e goto yapacaksa altalta yazılabilir.<br><br>case 7:<br>case 8:<br>   goto case 5;"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"switch expression (C# 8.0) ",
    "answer":"Tek satırlık işlemler için kodu kısaltan, daha kullanışlı haline getiren bir yapı.<br>string message = day switch{<br>   Monday => \"Monday\",<br>   ...<br>   Sunday => \"Sunday }<br><br>=> ifadesi (mantıkta olduğu gibi) ise anlamında kullanılır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"switch expression with when ",
    "answer":"when ile expression'lara da ikinci bir şart eklenebilir.<br>Monday when (şart) => \"Monday\"<br><br>ya da değişkene atanarak da kullanılabilir.<br>var x when x == 10 && x%2==1 => \"Herhangi bir şey\"<br><br>default seçenek de eklenebilir.<br>var x => \"Hiçbiri\""
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Tuple Patterns ",
    "answer":"Tuple değişkenleri de switch case yapılarında kullanabilmeye olanak sağlar.<br>Hem standart kullanımda, hem de expression yapısında mümkündür.<br><br>switch(name,age){<br>   case (\"Test\",24): ...<br><br>string message = (name,age) switch{<br>   (\"Test\",24) => \"Test\" ..."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Tuple with when ",
    "answer":"Tuple değişkenlerle when ile ekstra bir kontrol daha yapılabilir.<br>   (\"Test\",24) when (şart) => ..."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Positional Pattern  ",
    "answer":"Deconstruct özelliği olan nesneleri kıyaslamak ya da değerlerini karşılaştırmak için kullanılır.<br>Deconstruct(out string name, out string surname)...<br>Student student = new Student{name:\"Arif,surname:\"Tazegüllü\"}<br>var nameSurname = student switch {<br>   (\"Arif\",Tazegüllü\") => \"Arif Tazegüllü\",<br>   (_,_) => \"\" } <br>(_,_) ifadesi de hiç bir durumla eşleşmediği durumda çalışır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Positional Pattern with when ",
    "answer":"Positional pattern when ile kullanılıp ekstra bir şart daha kontrol edilebilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Property Pattern  ",
    "answer":"Nesnenin propertylerine girerekbelirli durumları hızlı kontrol edebilmeyi, farklı değerler için birde fazla kez tekrarlı kontrol yapmayı sağlar.<br>Student sınıfı name property'si olduğunu varsayalım.<br>int grade = student switch{<br>   {name: \"Arif\"} => 100..."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Switch-Case",
    "difficulty":0,
    "question":"Property Pattern with when ",
    "answer":"Property pattern when ile kullanılıp ekstra bir şart kontrolü yapabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->If-Else Yapısı",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikleri",
    "answer":"switch-case'de sadece eşitlik kontrolü yapılabilirken, if-else yapısı ile eşitlik durumu dahil her türlü kıyaslama yapılabilir.<br>Tek satırlık işlemlerde scope {} gerekmez."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching(C#7.0)",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikleri",
    "answer":"Genel kullanımdaki bazı yapıları daha kullanışlı ve spesifik haline getiren yapılardır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching(C#7.0)",
    "difficulty":0,
    "question":"Type Pattern ",
    "answer":"is operatörünün daha işlevsel hale getirilmesi.<br>if(x is string xx) -> bu ifade eğer x int ise içindeki int değerini xx değişkenine alır.<br>xx değişkeni ifin içinde kullanılabilir. Ifin dışında erişilebilir ama kullanılamaz. Çünkü null olma ihtimali var.<br>aynı mantıkla if e bağlı else if içinde de kullanmak istersek değişken isimleri aynı olamaz(xx)"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching(C#7.0)",
    "difficulty":0,
    "question":"Constant Pattern ",
    "answer":"is operatörü ile veriyi sabit bir değer ile kıyaslayabilmemizi sağlar.<br>if(x is \"Arif\") şeklinde.<br>C#7.0 öncesi sadece x is int şeklinde kontrol yapabiliyorken, sonrasında x is 123 şeklinde de kontrol edilebilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching(C#7.0)",
    "difficulty":0,
    "question":"Var Pattern ",
    "answer":"is operatörü ile veriyi var aracılığı ile elde eder.<br>if(x is var a) -> x'in türü ne olursa olsun veriyi a değişkenine alır ve a değişkeni verinin türüne bürünür.<br>Normalde var keywordu compile time da verinin türüne bürünürken, burada run-time da türü belirleyip bürünür.<br>dynamic ile benzer bir davranış sergiler ancak dynamic keywordu bu durumda kullanılamaz."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching(C#7.0)",
    "difficulty":0,
    "question":"Recursive Pattern ",
    "answer":"switch bloğunda referans türlü değişkenleri de kontrol edebilmeyi sağlar.<br>c#7.0'a kadar switchde sadece değer türlüler kontrol edilebiliyordu.<br>tür kontrolü yapabildiği için type patterni kapsar.<br>null kontrolü yapabildiği için Constant pattern i de kapsar.<br>Genel anlamda diğer pattern'ların birleşimi gibi düşünülebilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching(C#7.0)",
    "difficulty":0,
    "question":"Pattern ların if dışında kullanımı ",
    "answer":"Pattern'lar illa ki if bloğu içinde kullanılmak zorunda değildir.<br>bool result = x is string xx; -> burada hem x'in string olup olmadığını bool olarak result değerine attık, hem de x eğer string ise içindeki değer ile yeni bir değişken tanımlamış olduk.<br>Ancak yeni oluşan değişkeni kullanamayız çünkü null olma ihtiali var.<br>Dolayısıyla teknik olarak pattern yapısını if dışında kullanabiliyor olsak da dışarda kullanmanın pek anlamı olmaz.<br>Ancak var pattern dışarda kullanılması da mantıklı olabilecek bir pattern. Çünkü var ile hangi tür olursa olsun çıkar ve null olma ihtimali olmaz."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching C#9.0 Enhencements",
    "difficulty":0,
    "question":"Simple Type Pattern ",
    "answer":"Type patternin gelişmiş hali.<br>Type patternde tür bildiriminin yanına değişken adı tanımlanması ya da discard(_) kullanılması zorunluydu, artık bu zorunluluk kalkmıştır.<br>case Person p: .. -> Eski hali<br>case Person : .. -> Yeni hali"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching C#9.0 Enhencements",
    "difficulty":0,
    "question":"Relational Pattern ",
    "answer":"switch expression'larda <,>,<=,>= operatörlerini kullanabilmeyi sağlayan pattern.<br><50 => \"50'den küçük\",<br>_ => \"50ye eşit\" ... (_ -> discard)<br>Bu gelişmeyle birlikte switch case'ler sadece eşitlik kontrolü yapan mekanizmalar olmaktan çıkmış artık her türlü kontrolü yapabilir hale gelmiştir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching C#9.0 Enhencements",
    "difficulty":0,
    "question":"Logical Pattern ",
    "answer":"and, or, not gibi mantıksal operatörleri kullanabilir hale gelinmiştir.<br>Technologies or Computer => \"Teknolojik ürün\", ...<br><br>Relational Pattern ile çok uyumlu kullanılabilirler.<br>>10 and <50 => \"10 ile 50 arasında\", ..."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Akış Kontrol-->Pattern Matching C#9.0 Enhencements",
    "difficulty":0,
    "question":"Not Pattern",
    "answer":"not operatörünü kullanabilmeyi sağlar.<br>not 50 => \"50 değil\",..."
    }        
]

let cSharpBasicErrorControlList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"Derleme/Syntax Hataları ",
    "answer":"Programlama dili kurallarına aykırı durumlar.<br>IDE hatayı nokta atışı bildirir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"Runtime Hataları ",
    "answer":"Kod derlenir, runtime da alına hatalar.<br>Kullanıcıya ulaşabilir, o yüzden kullanıcıya ulaşmadan çözüp manipüle etmek gerekir.<br>Hata mesajı mimaride öntanımlı (dilde ya da custom oluşturulmuş) da olabilir, eğer ön tanımlı değilse işletim sistemi düzeyinde bir hata fırlatılır. Bu da kullanıcıya çok komplex ve anlaşılmayan bir hata göstermek olur.<br>Süreçte loglama yapıları ve kullanıcı geri bildirimleriyle zamanla arındırılır.<br>Olmayan bir dosyaya erişmeye çalışmak, yanlış format veya anlık db bağlantısı kopması gibi durumlar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"try-catch  ",
    "answer":"runtime hatalarını manipüle edebilmek için kullanılan yapılardır.<br>try bloğunda hata alınırsa catch bloğuna düşer ve orada fırlatılması gereken hatayı ele almış oluruz ve manipüle edebiliriz.<br>Kod bloğunu sürekli kontrol ettiği için maliyetli bir yapıdır. O yüzden sadece hata olma ihtimali olan kodları almak gerekir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"Çoklu catchlerde sıralama ",
    "answer":"try catch lerde catch de yakalanacak exception türüne göre birden fazla catch yazılabilir.<br>Compiler yazılan catch bloklarını yukardan aşağı sırayla kontrol eder. O yüzden genel Exception catch'i en sona yazılır.<br>Öngöremediğimiz bir exception türü gelirse en son Exception ile yakalanmış olur.<br>Zaten Exception catch'ini daha yukarıya yazmak mümkün değildir, compiler hata verecektir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"finally ",
    "answer":"try ve catch'lerde hata alınsa da alınmasa da çalışmasını istediğimiz kodlar finally bloğuna yazılır.<br>En sona yazılır.<br>"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"when(C# 6.0) ",
    "answer":"catch bloklarına ekstra bir şart daha verebilmemizi sağlar. Böylelikle aynı tür exception durumlarından farklı when şartlarıyla birden fazla yazabiliriz.<br>catch overload gibi bir mantık oluşur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Hata Kontrol",
    "difficulty":0,
    "question":"Logical Hatalar ",
    "answer":"Compile ve runtime da her hangi bir hata olmayan, ancak yazılımın mantığında, akışında, algoritmalarda, stratejide yapılmış olan mantıksal hatalardır.<br>Bulunması en zor olan hata türüdür. Bulabilmek için Debug yapmak gerekir."
    }
]

let cSharpBasicLoopsList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"Foreach bir döngü müdür? ",
    "answer":"Foreach bir döngü değildir, bir iterasyondur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler-->For Döngüsü",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikler",
    "answer":"for([1];[2];[3]) şeklinde 3 bölümden oluşur. <br>Bu bölümlerin hiçbiri zorunlu değildir.<br>1: başlangıç değişkeni tanımlama alanı, kullanıldığında ilk değer verilmek zorundadır.<br>2: Döngünün hangi durumda biteceğini belirleyen şart bölümü<br>3: Başlangıç değerini nasıl değiştirip 2. bölümdeki şarta ulaştıracağımız bölümdür."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler-->For Döngüsü",
    "difficulty":0,
    "question":"Varyasyonlar  ",
    "answer":"1. (int i = 0 ; i<10;i++)<br>2. int i =0;<br>( ; i<10;i++)<br>3. int i = 0;<br>(i = 0 ; i<10;i++) -> i değişkeni dışarda tanımlanıp başlangıç değeri verilmiş olsa dahi for içinde de başlangıç değeri verilmek zorundadır.<br>4. int i=0;<br>(; i<10;){i++}<br>5. (int i = 0 ;finishLoop==true;i++) -> fordaki şart illa ki i değişkenine bağlı değildir.<br>6. ( ; ; ) -> Sonsuz döngü<br>7. (int i = 0 ; ;i++) -> Sonsuz döngü<br>8. (int i = 0, j =10 ; i<10 && j>0;i++,j--) -> birden fazla değişkenle kontrol edilebilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"While Döngüsü ",
    "answer":"while(şart){} -> şart doğru olduğu sürece çalışır.<br>En temel döngü, tüm dillerde var.<br>kaç kez döneceği belirsiz olan durumlarda kullanılır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"Do-While Döngüsü ",
    "answer":"while önce şarta bakar sonra çalışır,<br>do-while önce çalışır sonra şarta bakar -> En az 1 kez çalışmayı garanti eder."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"Scopesuz DÖngü ",
    "answer":"döngülerde de işlem tek satır ise scope'suz yazılabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"Sonsuz Döngüler ",
    "answer":"for(;;)<br>while(true)<br>do{}while(true)"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"İçiçe Döngüler ",
    "answer":"Döngüler içiçe kullanılabilir.<br>Yapılacak işlem döngü sayılarının çarpımı kadar olacağı için maliyet çok artar"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Döngüler",
    "difficulty":0,
    "question":"ForEach ",
    "answer":"Bir döngü değil, iterasyondur.<br>iterasyon -> sonraki veri ile bağlantılı olacak şekilde tasarlanmış yapılardır.<br>foreach için bir veri kümesi olmak zorundadır. Mesela sonsuz kez çalıştırılamaz."
    }
]

let cSharpBasicHelperCommandsList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Yardımcı Komutlar",
    "difficulty":0,
    "question":"keyword vs operator ",
    "answer":"keyword -> derleyici için önceden tanımlanmış ve özel anlamlara gelen sözcüklerdir.<br>operator -> bir operasyonu yapmaya üstlenen yapılardır.<br>her operator bir keyworddür ancak her keyword bir operator değildir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Yardımcı Komutlar",
    "difficulty":0,
    "question":"break ",
    "answer":"switch, döngü ve foreach de, içinde bulunduğu yapıyı 1. seviyeden(en yakın olanı, direk içinde olduğu) sonlandırır.<br>Mesela içiçe döngülerde içteki döngüde buluna break, iç döngüyü sonlandırır, ancak dış döngüde index devam ediyorsa bir sonraki index için döngüye tekrar girer."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Yardımcı Komutlar",
    "difficulty":0,
    "question":"continue ",
    "answer":"Sadece döngülerde, döngünün içinde bulunduğu turu sonlandırıp bir sonraki tura geçirir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Yardımcı Komutlar",
    "difficulty":0,
    "question":"return ",
    "answer":"metot içinde her yerde kullanılabilir.<br>kullanıldığı yerde metodu sonlandırır ve geri dönüş değeri varsa döndürür."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Yardımcı Komutlar",
    "difficulty":0,
    "question":"goto ",
    "answer":"Kodun senkronizasyonunu bozup akışı geri doğru çevirir.<br>Davranışsal olarak aslında döngülere benzer ancak daha kontrolsüzdür.<br>switch case de kullanılır, ayrıca metot içinde heryerde kullanılabilir.<br>döneceği yeri belirleyecek referans tanımlamak gerekir.<br><br>a:<br>...<br>goto a:<br><br>Performansı düşürür, maliyeti fazladır.<br>Diller geliştikçe artık bu komuta ihtiyaç kalmaz.<br>scope kuralları yoktur, istediği her yere gider.<br>kodu karmaşıklaştırır."
    }
]

let cSharpBasicArraysList = [
    {
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikler",
    "answer":"Aynı türde birden fazla değer tutar.<br>RAM'de birden fazla değeri tek bir değişkenle gösterir.<br>Collection'ların temeli<br>Referans türlüdür, nesnel yapıdadır, özünde classdır.<br>Veri RAM'de heap de tutulur.<br>Elemanları value ya da reference türlü olabilir.<br>Elemanlar sıralıdır, her elemanın index numarası vardır.<br>[] ifadesi indexer'dır.<br>type[] myArray = new type[n]; şeklinde tanımlanır. n: eleman sayısı<br>Elelmanları value type ise, aslında elemanların kendileri yine stack de tutulur, ancak elemanların tutulduğu nesne heap'dedir ve dizi referansı o nesneyi işaretler.<br>Dizi tanımlanırken eleman sayısı verilmek zorundadır, tanımlandığı anda değer ataması yapılmasa bile bellekte o kadar elemana göre yer alır. Çünkü elemanlara otomotik olarak türün default değerini atar.<br>Eleman sayısı : myArray.Length ile bulunur.<br>Kullanım zorluğu ve sınırlamaları olsa da en hızlı çalışan yapılardır.<br>Bu sınırlamalardan dolayı dizilerin daha gelişmiş versiyonu olan Collection'lar oluşturulmuştur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler",
    "difficulty":0,
    "question":"Dizilerdeki sınırlamalar ",
    "answer":"1. Eleman sayısı bildirme zorunluluğu<br>2. İçini doldurmasak da bellekde yer alması, fazladan bellek kullanımı<br>3. Eleman sayısının değiştirilememesi, eleman ekleme çıkarma yapılamaması<br>4. Indexer üzerinden değer atama ve okumanın (kompleksleştikçe) zorluğu"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler",
    "difficulty":0,
    "question":"Tanımlama Varyasyonları",
    "answer":"1. int[] arr = new int[10];<br>2. int[] arr = {30,40,50};<br>3. int[] arr = new int[]{20,30,40};<br>4. int[] arr = new int[3]{20,30,40};<br>5. int[] arr = new[]{20,30,40};<br>6. var arr = new[]{20,30,40}; -> türü ve eleman sayısını tanımlanan elemanlardan alır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikler",
    "answer":"Diziler aslında bir Array sınıfdır. dizi = Array<br>int[] yerine Array kullanabiliriz, aynı şey.<br>Dizi olarak tanımlanan değişkenler Array sınıfından türemektedir, yani referansını karşılayabilir (ata tür)<br>Dolayısıyla da diziler Array sınıfından gelen özellikleri kullanabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Array sınıfı metotları ve propertyleri",
    "answer":"Metot -> Clear,Copy,IndexOf,Reverse,Sort<br>Property -> IsReadOnly,IsFixedSize,Length,Rank"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Dizinin kecdi türünde tanımlanması vs Array türünde tanımlanması",
    "answer":"Dizi kendi türünde yani int[] myArray şeklinde tanımlanırsa indexer[] özelliğini kullanabilir. Ancak Array türünde taımlanırsa kullanamaz. Array'de tanımlı fonksiyonlar üzerinden yapılır.<br>Genelde kullanım; eğer operasyonel işlemlerlerle elemanların birbirleriyle etkileşimde olduğu bir yapı tasarlanıyorsa kendi türünde, elemanların kendileri üzerinden işlem yapılacaksa Array türünden tanımlamak daha mantıklı olabilir.<br><br>Array tanımlama: Array myArray = new int[]{}<br>Array myArray = {...} şeklinde kullanılamaz.<br>Değer atama ve okuma için SetValue ve GetValue metotları kullanılır.<br>GetValue içine değer boxing edilmiş object döner."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Clear ",
    "answer":"Tüm elemanları default yapar, silmez.<br>Array.Clear(myArray,[başlangıç indexi], [n]); -> başlangıç indexinden itibaren n tane eleman."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Copy ",
    "answer":"Değerleri başka bir diziye kopyalamak, klonlamak değil, değer aktarımı.<br>Array.Copy(array1,array2,3) -> array1'deki ilk 3 elemanı array2'ye gönderir.<br>Array.Copy(array1, 2, array2, 0, 3); array1'in 2. indexinden başlayıp, 3 elemanı, array2'nin 0. indeksinden itibaren kopyalar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"IndexOf ",
    "answer":"Dizide bir elemanın var olup olmadığını, eğer varsa da indexini verir.<br>Array.IndexOf(myArray,\"Arif\") -> Eğer varsa elemanın indeksi, yoksa -1 döner.<br>Array.IndexOf(myArray,\"Arif\",0,2) -> 0.indexten başlayıp 2 tane içinde arar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Reverse ",
    "answer":"Elemanları tersine sıralar.<br>Array.Reverse(myArray);<br>Array.Reverse(myArray,0,3) -> 0. indeksten başlayıp 3 elemanı ters çevirir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Sort ",
    "answer":"Diziyi sayısal değerlerde küçükten büyüğe, alfanumerik değerlerde A'dan Z'ye sıralar.<br>Array.Sort(myArray)<br>Icomparer interface'i ile farklı türden sıralamalar. yapılabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"IsReadonly ",
    "answer":"Dizinin readonly olup olmadığıni verir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"IsFixedSize ",
    "answer":"Dizinin eleman sayısının sabit olup olmadığını söyler.<br>Tüm diziler için bu true dur.<br>Ancak Array den türeyen ArrayList türünde false olur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Length ",
    "answer":"Eleman sayısını verir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Array Sınıfı",
    "difficulty":0,
    "question":"Rank ",
    "answer":"Dizinin derecesini, boyutunu verir. Matris -> 2"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler",
    "difficulty":0,
    "question":"CreateInstance metodu ile dizi tanımlama ",
    "answer":"Array.CreateInstance(typeof(int),3,4,2) -> 3 boyutlu ve boyutlarda sırasıyla 3,4,2 eleman olan Array türünde dizi oluşturur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Ranges and Indices (C# 8.0) ",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikler",
    "answer":"Direk hedef veri üzerinde çalışabilmek için yeni tipler ve operatörlerdir. Ekstra algoritmalara gerek bırakmazlar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Ranges and Indices (C# 8.0) ",
    "difficulty":0,
    "question":"Sysem.Index",
    "answer":"index kavramı bir tip olarak sunulmuştur.<br>^ operatörüyle dizinin index değerlerini tersten almamızı sağlar. Ancak tersten alındığında sıfırdan değil 1'den başlar.<br>Index i = 3; ->   0 1 2 [3]<br>Index i = ^3; -> 4 [3] 2 1 ( Sıfır yok )<br>^ operatörü sondan n'inci elemanı getirir.<br>Indexer içine tamsayı verdiğimiz gibi Index değişkeni de verebiliriz.<br>"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler-->Ranges and Indices (C# 8.0) ",
    "difficulty":0,
    "question":"System.Range",
    "answer":"Hangi değer aralığında çalışacağımızı belirlemek için index üzerinden bir aralık vermemizi .. operatörü ile sağlar.<br>string names[] = {\"aa\",\"bb\",\"cc\",\"dd\",\"ee\",\"ff\"}<br>index               ->    0 1 2 3 4 5<br>sıra                  ->    1 2 3 4 5 6<br>ters sıra(^)      ->    6 5 4 3 2 1<br><br>Range range = 2..5; -> Bu ifadede ilk sayı index, ikinci sayı ise sırayı getiri, 2. sayıda ^ olursa tersten sıra kuralına göre getirir. Yani 2. index'ten başla, 5. sıra(dahil)ya kadar getir -> {\"cc\",\"dd\",\"ee\"}<br>Hedeflenen veriyi range ile alıp diziymiş gibi üzerinde çalışabiliriz.<br><br>Range range = 2..^3; -> {\"cc\"} -> 2. indexten başla, tersten 3. sıraya kadar. Tersten sayma ifadesini kullandığımızda tersten sıranın denk geldiği eleman dahil edilmez. Düz sırada dahil edilir. Tersten sıra 3 ifadesi \"dd\" elemanına denk gelir ama o değeri kapsamaz.<br><br>Ters operatörü ilk sayıda kullanılırsa dahil olur.<br>^2..^1 -> {\"ee\"} <br><br>.. operatörü iki tarafına Index türünden değerler de alabilir.<br><br>Range range = .. ; -> Bu ifade dizinin tamamını alır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler",
    "difficulty":0,
    "question":"Çok boyutlu diziler ",
    "answer":"Birden fazla boyutlu diziler tanımlamamıza olanak sağlar.<br>type[,] -> 2 boyutlu <br>type[,,] -> 3 boyutlu -> virgülle ayırdığımızda oluşan bölüm sayısı.<br>Tanımlama -> int[,] myMatrix = new int[2,3] -> 2ye 3lük bir matris oluşturur.<br>Değer atama -> myMatrix[1,2] = 5;<br><br>Length -> Toplam hücre sayısı, boyutlarım çarpımı<br>Belirli bir boyuttaki length istersek -> [2,3,4] şeklinde 3 boyutlu dizide, boyut eleman sayılalrını gösteren değerle 2,3,4 ve bunların indeksleri 0,1,2 olur. Burada mesela 3. boyuttaki dizi eleman sayısı için onun indexi olan 2 yi kullanmak gerekir.<br>myArrat.GetLength(2);"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->Diziler",
    "difficulty":0,
    "question":"Düzensiz Diziler ",
    "answer":"Çok boyutlu dizilerde her hücre tek bir değer alır, ve bu değerlerin oluşturduğu yapı boyutlu dizi oluşturur.<br>Düzensiz diziler ise her bir hücresinde başka bir dizi barındıran dizilerdir. Dolayısıyla her hücredeki dizinin eleman sayısı farklı olabilir. Bu yüzden düzensiz diye adlandırılır.<br>type[][] -> burada aslında type[] kısmı ayrıca bir tip ifade eder. Yani bize type[] türünden bir dizi oluştur anlamına gelir.<br>Tanımlama -> int[][] myArray = new int[3][];<br>myArray[0] = new int[5];<br>myArray[1] = new int[3];<br>myArray[2] = new int[4]; -> içerdeki dizilerin hepsini de ayrı ayrı tanımlıyoruz.<br><br>Değer atama ve okuma myArray[2][3] şeklinde<br><br>Length -> burada 3 getir. Çünkü aslında ana dizimizin lengt'i 3 tür. İçinde 3 tane eleman bulunur ancak elemanların her biri ayrıca bir dizidir.<br>Toplam eleman sayısı için myArray[0].Length + myArray[1].Length+..."
    }
]

let cSharBasicStringsList = [
    {
    "level":"Düzey 1",
    "subject":"Düzey 1-->Ana Başlık 1-->Alt Başlık 1",
    "difficulty":0,
    "question":"Soru 1",
    "answer":"Cevap 1"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikler",
    "answer":"Value type gibi gözükse de aslında referans türlüdür, yani bir nesnedir. <br>Referans türlü olup keywordu olan tek tiptir.<br>Değeri heap de tutulur."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"null vs Empty ",
    "answer":"null ->bir değişken nullable ise ancak null değer alabilir, null olduğunda karşılığı yok demektir, yani RAM de yer tutaz, herhangi bir ram bölgesini göstermez/işaretlemez.<br>Empty -> ramde yer tutar ama içi boş gibi düşünülebilir. İçinde türün default değeri bulunur.<br>null değer kullanılmaya çalışılırsa runtime da hata alınır, ancak Emptyde hata alınmaz."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"IsNullOrEmpty ",
    "answer":"stringlerde null ve empty kontrolü yapar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"string vs char dizisi ",
    "answer":"string aslında bir char dizisidir. indexlidir. Indexer[] kullanabiliyoruz.<br>Lenght özelliği kullanılır, döngülerde kullanılabilir, foraech ile kullanılabilir -> Neden? Çünkü o bir char dizisi.<br>Yapısal olarak string olduğu için Array ile işaretlenemez."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"stringlerde + operatörü ",
    "answer":"İki stringi birleştirir.<br>string + int -> string (left string, right object) -> int ifadeyi boxing ile object olarak alır.<br>Herhangi bir türü +\"\" ile stringe dönüştürebilir. Ancak bu maliyetlidir, ToString() kullanılmalı."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->String Format",
    "difficulty":0,
    "question":"\"+\" ile",
    "answer":"Tüm değerleri + ile birbirine ekleyerek yapılır.<br>Efektif değildir, birleştirilecek değerlerin sayısı arttıkça kompleksleşir, maliyeti de çok artar, tavsiye edilmez.<br>içerde ternary operatörü kullanılabilir, kullanılırsa parantez içine alınması gerekir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->String Format",
    "difficulty":0,
    "question":"string.Format",
    "answer":"(\"...{0}....{1}....{2}....{3}...\", var0,var1,var2,var3..)"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->String Format",
    "difficulty":0,
    "question":"string interpolation c#6.0",
    "answer":"Formattsüslü parantezleri place holder olarak kullanıyorduk, burada ise direk programatik olarak değişkenlerimizi yerleştirebiliriz.<br>Format kullanımında stringin başın $ konursa interpolation kullanılabilir hale gelir.<br>($\"...{var0}....{var1}....{var2}....{var3}...\")<br>teranry kullanılırsa parantez içine alınmalı.<br>En kullanışlı, performanslı ve az maliyetli formatlama yöntemidir. Aslında arka planda string.Format'ı kullanır.<br>string içinde {} kullanılmak istenirse çift yazılır -> {{}}"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"string kaçış karakterleri ",
    "answer":"string içinde çift tırnak \" kullanmak istersek kaçış karakteri \ kullanmamız gerekir.<br>\ -> özel karakteri özel karakter olmaktan çıkarır.<br>string içine \ yazmak istersek çift yazılır -> \\<br>özel bazı kullanımlar -> \n yeni satır, \a bilgisayar sesi<br>char a = '\'' -> \ ifadesi"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->Verbatim Strings (@)",
    "difficulty":0,
    "question":"keyword",
    "answer":"Programlama dilinde tanımlı keywordleri kullanmak istersek verbatim operatörü ile kullanılabilir.<br>string string = \"Arif\"; -> Bu hatalı<br>string @string = \"Arif; -> Hata vermez"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->Verbatim Strings (@)",
    "difficulty":0,
    "question":"kaçış",
    "answer":"Verbatim operatörü kullanılan stringlerde bu operatör özel karakterleri kendisi ile ezerek kaçış karakteri olarak kullanır.<br>\"\" --> \"<br>\\-->\ "
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->Verbatim Strings (@)",
    "difficulty":0,
    "question":"çoklu satır",
    "answer":"Normalde stringler tek satırda yazılmak zorundadır.<br>Çoklu satır istersek her satır için + ile birleştirebiliriz ama çok maliyetli.<br>Verbatim kullanarak herhangi bir operatör kullanmadan çoklu satır yazılabilir.<br><br>@\"Select<br>*<br>from<br>Accounts\""
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"string interpolation verbatim birlikte kullanımı C# 8.0 ",
    "answer":"C#8.0 ile birlikte string interpolation ve verbatim operatörü birlikte kullanılabilir hale gelmiştir.<br>Stringin önüne ekleme sırası önemlidir, @$ sırası ile eklenmeli.<br>Böylelikle hem çoklu satır yazabilirken hem de içinde değişkenleri kullanabilmekteyiz.<br><br>@$\"Select<br>*<br>from<br>{tableName}\"<br><br>Önemli: Verbatim kullanıldığında artık satır başlarındaki tab boşluklarını da string içi boşluk olarak alacağı için beklenmedik çıktılara sebep olabilir. O yüzden string satırlarını sola yaslı bir şekilde kullanmak bu durumu çözecektir.<br><br>Ayrıca verbatim kullandıktan sonra kaçış karakteri de bir anlam ifade etmez. Mesela \n ile yeni satıra geçmeye gerek yoktur, zaten alt satıra geçince bunu algılayacaktır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"String Fonksiyonları",
    "answer":"string str1 = \"Arif Tazegüllü\";<br><br>Contains->str1.Contains(\"rif\") -> true <br>StartsWith->str1.StartsWith(\"Ar\") -> true<br>EndsWith -> str1.EnsWith(\"üllü\") -> true<br>Equals->str1.Equals(\"Arif Tazegüllü\")-> true<br>Compare->string.Compare(str1,\"Arif Tazegüllü\") -> 0:eşit,1:ilki büyük,-1:ilki küçük<br>Compare overload -> (str1,5,str2,4,3) ->str1in 5. , str2nin 4. karakterden başla 3 karakter karşılaştır.<br>        CompareTo-> Compare ile aynı, sadece bir string üzerinden yapmamızı sağlar. str1.CompareTo(str2)<br>IndexOf->aranan ifadenin ilk karakterinin indexini döner, yoksa -1 döner. Birden fala eşleşen varsa ilkini döner. str1.IndexOf(\"rif\")<br>Insert->str1.Insert(5,\"hello\") -> 5. karakterden itibaren verilen ifadeyi ekler, eklenmiş halini döner ancak orjinal string(str1) değişmez.<br>Remove->str1.Remove(5) -> 5.karakterden sonrasını sil. (5,3) -> 5. karakterden sonra 3 karakter sil. orjinal string değişmez, silinmiş halini döner.<br>Replace->str1.Replace('a','b')-> char değişimi, (\"rif\",\"fir\") string değişimi. Orjinal string değişmez, yerdeğişim yapılmış halini döner.<br>Split->Verilen ifadeye göre stringi parçalayıp geriye string dizisi döner. Birden fazla karaktere göre parçalama yapabilir. str1.Split('a','b') bu karakterlerden herhangi birini gördüğü yerden ayırır.<br>SubString-> Stringin belirli bir aralığını alır. str1.SubString(5) -> 5. karakterden sonrasını al, (5,3)-> 5. karakterden sonra 3 karakter al<br>ToLower->küçük harfe dönüştür<br>ToUpper->büyük harfe dönüştür<br>Trim->Baştaki ve sondaki boşlukları temizler. Ortalara dokunmaz<br>TrimEnd->Sondaki boşlukları temizler<br>TrimStart->Baştaki boşlukları temizler"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"Dizilerde Maliyet ",
    "answer":"Dizi davranışları genellikle maliyetli yapılardır. Örneğin Ranges and Indices yapısında üzerinde çalışmak istediğimiz Range aslında verileri klonlayarak yeni bir dizi oluşturur ve onun üzerinde çalışmamıza olanak sağlar. Aynı şekilde stringlerde SubString metodu dizinin belirlenen kısmını klonlayıp yeni bir dizi oluşturarak işlem yaptırır.<br>Dolayısıyla bu işlemler ekstra maliyet getirir, bellekte fazladan yer kaplar.<br>Ayrıca + operatörü de her seferinde yeni bir dizi oluşturarak devam eder.<br>Dizilerde bu maliyeti ortadan kaldırıp orjinal dizi üzerinde çalışmamızı sağlayarak daha performanslı çalışmamızı sağlayan ArraySegment ve String Segment yapıları bulunur.<br>Bu yapılar belirli bir alanı klonlamak yerine daha fazla değişkenle referans etmemizi sağlarlar.<br>Yapısal olarak struct'tır.<br>Orjinal dizi/string üzerinde bir bölümütemsil eden, ilgili veri kümesini parça parça birden fazla referans ile yönetmemizi sağlar."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"ArraySegment ",
    "answer":"ArraySegment<int> segment = new ArraySegment<int>();<br>(myArray) -> dizinin tamamı<br>(myArray,2,5) -> 2. indexten başlayıp 5 eleman kapsayacak bölümü referans alır, yeni dizi üretmez.<br>Dolayısyla asıl dizide ya da ArraySegment bölümünde yapılacak değişiklik diğerine de yansır. "
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"ArraySegment Slice ",
    "answer":"Bir dizinin birden fazla parçası üzerinde çalışılıyorsa her biri için ayrı segment tanımlanabilir.<br>Ancak Slice ile diziyi segment olarak alıp onu da slice ile bölüp istediğimiz kadar parçaya ayırabiliriz.<br>.... new ArraySegment<int>(); -> dizinin tamamını aldık<br>segment.Slice(0,3) -> bir parça<br>segment.Slice(2,5) -> başka bir parça."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"StringSegment ",
    "answer":"ArraySegment'in stringle için olan versiyonudur.<br>Analitik operasyonlardan kurtarır, SubString gibi fonksiyonlar yerine direk hedef kesit üzerinde çalışabilmemizi sağlar.<br>Kullanabilmek için Microsoft.Extensions.Primitives paketi yüklenmelidir.<br>StringSegment segment = new StringSegment();<br>(myString) -> stringin tamamı<br>(myString,2,5) -> 2. indeksten başlayıp 5 karakter al<br>StringSegment implicit tür dönüşümüne uğrayarak direk string gibi kullanılabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"StringBuilder  ",
    "answer":"Birden fazla string birleştirmek istediğimiz zaman +,format ya da interpolation kullanabiliriz.<br>Bir başka yöntem ise arkada StringSegment yapısı kullanarak daha az maliyetli olan StringBuilder'dır.<br>System.Text namespace'inde bulunur, framework dahilinde bulunur.<br>builder.Append(\"Benim\");<br>builder.Append(\" adım \");<br>builder.Append(\"Arif\");<br><br>kullanırken -> builder.ToString();"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"Span ",
    "answer":"RAM üzerinde bir alanı temsil etmektir.<br>ArraySegment(AS) ve StringSegment(SS) dizilerde çalışırken, Span tüm türlerde kullanılır.<br>RAM'deki belirli alan aslında ardışıl alan kaplayan Array değerleridir.<br>Normalde Array heap'de tutulur ancak stackalloc ile Stack'de de Array tanımlanabilir.<br>AS ve SS ile sadece heap'deki dizi veya string, Span ile stack ya da heap de istediğin türde alan alınabilir.<br>Tanmlanmış Array'lerin tümünü ya da parçasını temsil edebilir.<br>Yapısı Struct'tır, maliyeti düşüktür.<br>ReadonlySpan-> temsil edilen bölüm üzerinde değişiklik yapılamaz sadece okunabilir.<br>Sadece diziler ve/veya stringler üzerinde çalışılacaksa AS ve SS tavsiye edilir.<br><br>Span<int> span = new Span<int>(myArray); -> dizinin tamamı<br>Span<int> span = myArray; -> dizinin tamamı<br>Span<int> span = new Span<int>(myArray,3,5); -> 3den başla 5 adet <br><br>myArray.AsSpan();-> Span olarak döndürür.<br>myArray.AsSpan(3,5);-> Belirli aralığı Span olarak döndürür.<br><br>string üzerinde AsSpan kullandığımızda her zaman ReadOnlySpan döner. Tüm Span işlemlerinde böyledir. "
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String",
    "difficulty":0,
    "question":"Memory",
    "answer":"Span ref struct olarak tanımlanmıştır. O yüzden Heapde allocation yapamama, object, dynamic, interface türleriyle referans edilememe veya class içinde field/property olarak tanımlanamama gibi kısıtlamaları vardır.<br>Memory ise Span'ın bu kısıtlamalarında arındırılmış türdür.<br>ReadOnlyMemory->sadece okunabilir Memory"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"Genel Tanım ve Özellikler",
    "answer":"Stringlerde bir stringin belirli şartlara/pattern'lere uymasını istediğimiz zamanlarda, işlem kompleksleştikçe bunu yapmak zorlaşır.<br>Örneğin; ................@........com gibi bir formatta email almak istiyorsak bu formata uyup uymadığını normal yollarla kontrol etmek zorken, Regex ile kolay bir şekilde yapılabilir.<br>System.Text.RegularExpression namespace'inde Regex sınıfı kullanılır.<br><br>Regex regex = new Regex(pattern);<br>Match match = regex.Match(checkString);<br>match.Success -> string patterne uyuyor mu uymuyor mu<br>match.Value -> checkString doğrulanan kısmı<br>match.Index -> doğrulamanın hangi indexten başladığı<br>match.lengt -> doğrulanan kısım uzunluğu<br>mach.Text -> checkString tamamı<br><br><br>Yerinde kullanılırsamaliyeti düşürür, performansı artırır. Aynı işlemi algoritmayla yapmaya göre avantajlıdır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"^ operatörü",
    "answer":"^ ifadesi satır başının istenen ifadeyle başlamasını kontrol eder.<br>^9 -> verilen ifade 9 ile başlamalı"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"\ operatörü",
    "answer":"Kullanıldığı yerde belirli karakter gruplarını içermesini istiyorsak kullanılır<br>\D --> rakam olmayan tek karakter<br>\d --> tek bir rakam<br>\W --> alfanümerik olmayan(a-z A-Z 0-9)<br>\w --> alfanümerik<br>\S --> boşluk karakterleri (tab,space) olmayan<br>\s --> sadece boşluk karakterleri<br><br>\ karakterini kullanabilmek için verbatim(@) kullanılmalı.<br><br>Örnek: ^9\d\S --> 9 ile başlayan, 2. karakteri herhangi bir rakam, 3. karakteri boşluk olmayan<br><br>Genel olarak küçük ve büyüğü olanlarda küçük olumlu, büyük olumsuz anlamdadır."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"\"+\" operatörü",
    "answer":"Belirtilen gruptaki karakterlerden 1 ya da daha fazla olmasını istediğimiz durumda.<br>^9\d+\S -> Ortadaki \d rakam ifade eder, yanına + koyduğumuzda o kısımda istediğimiz kadar rakam olabileceğini söyler.<br>Uyan stringler ->9123a,9123b234l234, \"987 65\"(bu da patterne uyar çünkü \S yani boşluk olmama durumunu 7 karakterinde yakalar.)"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"\"|\" veya operatörü",
    "answer":"veya olarak kullanılır. Belirtilen yerde belirtilen karakterlerden birisi olursa doğrulanır. a|b|c"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"\"{adet}\" operatörü",
    "answer":"sabit sayıda karakteri ifade eder.<br>Cep No formatı: \d{3}-\d{7} -> 555-5555555"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"? Operatörü",
    "answer":"önüne geldiği karakterin en fazla 1 kez kullanılmasını sağlar.<br>\d{3}B?A -> 234BA(doğru), 543A(doğru->en fazla 1), 123BBA(yanlış"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":". Operatörü",
    "answer":"belirtilen yerde herhangi bir karakterin olabileceğini ifade eder(\n hariç)<br>\d{3}.A -> Adan önce herhangi bir şey olabilir."
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"\B ve \b operatörü",
    "answer":"\B -> kelimenin başında ya da sonunda olmaması gereken karakterler<br>\b -> kelimenin sonunda olması gereken karakterler<br>\d{3}dır\B -> 3 rakam olsun ama başta ya da sonra \"dır\" ifadesi olmasın<br>123dır(false) dır123(false) 123dır5(true)"
    }
    ,{
    "level":"C# Basic",
    "subject":"C# Basic-->String-->RegularExpression ",
    "difficulty":0,
    "question":"[n] operatörü",
    "answer":"Karakter aralığı belirtilebilir.<br>Ayrıca özel karakterlerin yerinde yazılmasını da ifade eder.<br><br>\d{3}[A-E] -> 123A(true) 123H(false)<br>parantezli telefon no formatı -> [(]\d{3}[)] -> özel karakterleri yerinde kullanma"
    }
]