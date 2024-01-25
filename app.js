//! CTRL+SHIFT+D Tüm konsol loglarını temizle
//! CTRL + Ö console loglarını yorum yap


let random = 0;

function RandomQuestion() {
    document.getElementById("answer_button").style.display = "none";
    document.getElementById("answer_text").style.display = "none";
    document.getElementById("yes_button").style.display = "none";
    document.getElementById("no_button").style.display = "none";

    random = Math.floor(Math.random() * questions.length);
    document.getElementById("question_text").innerHTML = questions[random].q;
    document.getElementById("question_text").style.display = "block";
    document.getElementById("answer_button").style.display = "block";
    document.getElementById("answer_button").style.margin = "auto";
}

function ShowAnswer(){
    document.getElementById("answer_text").innerHTML = questions[random].a;
    document.getElementById("answer_text").style.display = "block";
    document.getElementById("yes_button").style.display = "block";
    document.getElementById("yes_button").style.margin = "auto";
    document.getElementById("no_button").style.display = "block";
    document.getElementById("no_button").style.margin = "auto";
}

function Yes() {
    RandomQuestion();
}

function No() {
    RandomQuestion();
}

let questions = [
    {
        "q":"Programlama dillerinde seviye nedir?",
        "a":"Okunabilirlik. Yükseldikçe okunabilirlik artar. Makine dili -> Assembly -> C#, Java -> Pascal, Fortran -> Visual Basic"
        }
        ,{
        "q":"C# hangi seviyede bir dildir?",
        "a":"Orta"
        }
        ,{
        "q":".Net vs .Net Core?",
        "a":".Net sadece windows, core her yerde çalışır, modüler, opensource."
        }
        ,{
        "q":"Compiler ne yapar?",
        "a":"Yazdığımız kodu bilgisayarın/makinenin anlayabileceği dile (assembly) çevirir."
        }
        ,{
        "q":"C# kodunun makine diline çevrilene kadarki süreci nedir?",
        "a":"C# -> Compiler -> MSIL(Microsoft Intermediate Language) -> CLR(Common Languge Runtime) -> Machine Code"
        }
        ,{
        "q":"Derleme Sonucu oluşan dosyalar",
        "a":".exe ve .dll"
        }
        ,{
        "q":"help",
        "a":"dotnet --help: yapılabilecek aksiyonları gösterir."
        }
        ,{
        "q":"new",
        "a":"dotnet new .. :yeni proje oluşturur. . Her proje türünün keywordu bulunur; console, webapi.. . --name ile isim verilir.. Dizinde aynı isimde proje bulunuyorsa --force ile varolanı ezer.. . dotnet new console --name NewConsoleProject "
        }
        ,{
        "q":"restore",
        "a":"dotnet restore => Eklenen ya da kaldırılan referansları/paketleri günceller."
        }
        ,{
        "q":"build",
        "a":"dotnet build => Projeyi derler. Öncesinde restore eder. Proje çıktılarını bin/debug/net5.0 yoluna çıkarır."
        }
        ,{
        "q":"publish",
        "a":"dotnet publish => Projeyi yayınlanabilir hale getirir. . Önce derler (build) . Çıktılar;. .dll'ler. .deep.json => bağımlılıklar. runtimeconfig.json => bağımlılık dll'leri. . Çıktıları bin/Debug/net5.0/publish dosyasına çıkarır."
        }
        ,{
        "q":"run",
        "a":"dotnet run => Projeyi çalıştırır. Önce derler (build). Derlemeden çalıştırmasını istersek --no-build eklenir"
        }
        ,{
        "q":"Developer Command promptan derleme",
        "a":"csc [ProjectName]"
        }
        ,{
        "q":"Dotnet CLI Proje Modifikasyon Komutları",
        "a":"add/remove Package/reference, list reference"
        }
        ,{
        "q":"main fonksiyonunun işlevi",
        "a":"Program.cs uygulamanın ayağa kaldırılabilmesi için gerekli başlangıç kodlarını barındırır. İşletim sistemi ile iletişim kurar."
        }
        ,{
        "q":"string[] args parametresinin işlevi",
        "a":"dotnet run arif -> args[0] a alınır"
        }
        ,{
        "q":"Top-Level Statements c#9.0 ",
        "a":"Kod kalabalığını önler. (Boilerplate). Sadece using System; yazılır.. Using ile namespace arasına kodlar yazılabilir.. Sadece Program.cs'de geçerli."
        }
        ,{
        "q":"TODO işlevi",
        "a":"Yapılacakları belirlememizi sağlar.. TaskList penceresinde gözükür."
        }
        ,{
        "q":"Value Type - Primitive Type  ",
        "a":"Değer tutan değişkenler value type'dır.. Bunların en ilkel halleri de primitive türdür. Derleyici seviyesinde bilinen türler. Diğer türlerin temelde yapı taşı. . . Primitive türler: Boolean, Byte, SByte, Int16, UInt16, Int32, UInt32, Int64, UInt64, IntPtr, UIntPtr, Char, Double, Single"
        }
        ,{
        "q":"type-safe",
        "a":"RAM'e veri koymadan önce onun tipini bildirmek."
        }
        ,{
        "q":"Primitive Type-IsPrimitive ",
        "a":"Bir tipin primitive olup olmadığını söyler.. . typeof(type).IsPrimitive"
        }
        ,{
        "q":"Değişken türleri ve aralıkları ve kaç byte/bit ",
        "a":"sbyte,byte => 1 byte => 2^7. short,ushort => 2 byte => 2^15. int,uint => 4 byte => 2^31. long,ulong => 8 byte => 2^63. float => 4 byte. double => 8 byte. decimal => 12 byte. char => 2 byte"
        }
        ,{
        "q":"value type değişkenlerin stack'dehangi bilgileri tutulur ",
        "a":"Türü, adı,değeri"
        }
        ,{
        "q":"metot isimleri (bellek adresleri) nerde tutulur ",
        "a":"Stackde tutulur"
        }
        ,{
        "q":"@ operatorü ile değişken tanımlama ",
        "a":"Programatik keywordleri değişken ismi olarak kullanmak istersek @ operatörü ile kullanırız."
        }
        ,{
        "q":"sayısal ve ondalıklı türlerin default değerleri ",
        "a":"Sayısal ve ondalık türler default olarak iteger kabul edilir."
        }
        ,{
        "q":"float, double, decimal değer atarken eklenecek karakterler ",
        "a":"Float => f ya da F. Double => d ya da D (Zorunlu değil, çünkü ondalıklıların default tipi double dır). Decimal => m ya da M"
        }
        ,{
        "q":"Tuple değişken ",
        "a":"(int a, string b) tupleVar => bu şekilde çoklu değişkenler.. Erişirken tupleVar.a şeklinde erişilir."
        }
        ,{
        "q":"Literal düzenleme ",
        "a":"Uzun sayıları _ ile ayırabiliriz. 1_000_000 şeklinde."
        }
        ,{
        "q":"Deafult değer atama ve default keyword ",
        "a":"Default değerler:. string => null. char => '\0'. sayısal => 0. bool => false. . default keywordu ile default değer atanabilir. int a = default(int);"
        }
        ,{
        "q":"Deafult Literals ",
        "a":"C# 7.1 ile default değer atama => int a = default;"
        }
        ,{
        "q":"Değeri olmayan değişkenler ",
        "a":"Metot içinde tanımlanan değişkenlere tanımlanırken default değer verilmez. Bu sebeple değer verilmediği sürece kullanılamaz."
        }
        ,{
        "q":"Scope - Custom Scope ",
        "a":"Scope erişilebilirlik sınırını belirler. . Custom scope ise istediğimiz yerde {} ile oluşturulur."
        }
        ,{
        "q":"Sabitler - const,static,readonly ",
        "a":"Değişmeyen değerleri tutmak için kullanılır.. Const => static tir. Sadece oluşturulurken değer atanabilir.. (static => uygulama bazlı (global) veri tutabileceğimiz ramin bir bölümü, heryerden erişilir.). const static olmasına ek olarak bir de değiştirilemezdir.(staticler değiştirilebilir.). static bir class instance üretmeden kullanılabilir.. readonly => sadece okunabilir. consttan farklı olarak; sadece tanımlanırken değil, bir de constructor içinde de değer atanabilir.. readonly static değildir."
        }
        ,{
        "q":"Global değişkenler ",
        "a":"Class içindeyse global, metot içindeyse local."
        }
        ,{
        "q":"Değer atama - Deep Copy - Shallow Copy ",
        "a":"\"=\" operatörü kullanıldığında;. Deep Copy => veri çoğaltılır, value type değişkenlerde default atama yöntemidir, veri değişikliği birbirini etkilemez.. Shallow Copy => veri çoğaltılmaz, referans türlü değişkenler için atama bu şekilde yapılır. Aynı veri birden fazla referansla işaretlenmiş olur. Veri değişikliği diğerlerini de etkiler.. ref keywordü ile value type değişkenlerde de shallow copy yapılabilir."
        }
        ,{
        "q":"object türü - boxing - unboxing ",
        "a":"object türü => tüm türlerin atası, tüm türler object ten türetilmiştir(value type lar dahil). object referans türlüdür.. Object içinde veri kendi türünde tutulur.. Boxing => bir türü object türünün içine koymak. Object a = 5;. Unboxing => object içindeki tür üzerinden işlem yapmak istersek kendi türünde dışarı çıkarmamız gerekir. int b = (int)a;. Unboxing de casting operatörü () kullanılır.. Cast operatörü ayrıca tür dönüşümleri ve kalıtımsal işlemlerde kullanılır."
        }
        ,{
        "q":"var keyword ",
        "a":"Tutulacak verinin türünü compiler belirler.. Compilerın anlayabilmesi için tanımlanırken değer ataması yapılmalıdır.. Aslında amacı farklı diller arasında desteklenmeyen/olmayan veri türlerini karşılayabilmektir.. Anonim türleri de karşılayabilir.. Ufak da olsa daha maliyetlidir kendi türünü yazmaya göre."
        }
        ,{
        "q":"var vs object ",
        "a":"var'da boxing-unboxing yapılmaz.. Var operasyonel bir keyword, object bir türdür."
        }
        ,{
        "q":"dynamic keyword ",
        "a":"var'ın runtime versiyonu gibi. var compile time da atanan türe bürünürken, dynamic compile time da türe bürünmez, runtime da bürünür.. Türü compile da belli olmadığı için bürüneceği türün özelliklerini getirmez. Compiler bu özellikleri önermez. Ancak var olduğundan emin olduğumuz memberları manuel yazabiliriz, compiler hata da vermez. Olmayan bir member yazarsak runtime da hata verir.. GetType() türü getirir. dynamic a = \"5\"; GetType() => System.String. Tür runtimeda belirlenir ama kararlı değildir. Yeni değer atarsak yeni türe bürünür. a=5; dersek GetType System.Int32 olur.. Dışardan gelen türünü bilmediğimiz türlerde kullanılır. Mesela bu durumda var kullanılamaz."
        }
        ,{
        "q":"Kodun senkron ve asenkron çalışması",
        "a":"Yazılım varsayılan olarak senkrondur. Senkronda işlemlerden birisi bitmeden diğeri başlamaz. ->->->->->->->->->->. Asenkronda ise aynı anda birden fazla işlem paralel olarak yürür.. Senkronda herhangi bir t anında hangi işlemin yapıldığı bellidir ama asenkronda anlamak zordur."
        }
        ,{
        "q":"Tür dönüşümleri-Parse-Convert-ToString",
        "a":"Parse sadece string türleri hedefe dönüştürür. Yani parametre olarak sadece string alır. int x = int.Parse(\"1235\");. Convert her şeyi her şeye dönüştürür. Convert.To[type1](type2) -> type2 yi type1'e dönüştürür.. Diğer türleri stringe dönüştürürken Convert de kullanılabilir ama her türün ToString metodu vardır, o kullanılır çoğunlukla. "
        }
        ,{
        "q":"Tür dönüşümleri-implicit-explicit",
        "a":"Sayısal türler kendi aralarında dönüştürülürken aralığı daha büyük olana dönüşürken bilinçsiz (implicit). İnt a = 3000; float f = a;. Daha küçük olana dönüşürken de bilinçli(explicit) dönüşüm olur. Çünkü veri kaybı ihtimali söz konusudur. İnt a = 3000; short b = (short) a;"
        }
        ,{
        "q":"Tür dönüşümleri-checked-unchecked ",
        "a":"explicit dönüşümde veri kaybı olursa hata fırlatan yapıdır. Checked {} scobu.. Kod bloğu default olarak unchecked durumundadır. Yani veri kaybı olduğunda hata fırlatılmamasını sağlamak için unchecked scobuna almak ile almamak arasında fark yoktur."
        }
        ,{
        "q":"Sayısal to bool & bool to Sayısal ",
        "a":"bool to int => false:0, true:1'e dönüşür.. İnt to bool => 0: false, geri kalan her şey true'ya dönüşür."
        }
        ,{
        "q":"Sayısal to char & char to Sayısal ",
        "a":"char to sayısal => karakterin ascii kodunu getirir.. Sayısal to char => ascii koduna karşılık gelen char ı getirir."
        }
        ,{
        "q":"Aritmetik Operatörler(+-*/%) ",
        "a":"Aritmetik işlemleri yapar.. Operatörün üstüne geldiğimizde hangi türlerle hangi sonuç döndüğü overloadlarda yazar.. "
        }
        ,{
        "q":"Aritmetik Operatörler Aynı türde dönüş değeri ",
        "a":"Aynı türlerde dönüş değeri de aynıdır.. İstisna: byte-byte sonucu int döner"
        }
        ,{
        "q":"Aritmetik Operatörler Farklı türde dönüş değeri ve operatörün davranışı  ",
        "a":"Farklı türlerde dönüş türü aralığı büyük olan türden olur. Aslında küçük olan tür implicit dönüşüme uğrar, operatör ikisini de büyük türden alıp işlem yapar."
        }
        ,{
        "q":"Aritmetik işlemlerde işlem önceliği ",
        "a":"Matematikle aynı sırada."
        }
        ,{
        "q":"Karşılaştırma Operatörleri(<,>,<=,>=,==) ",
        "a":"Her zaman boolean döner."
        }
        ,{
        "q":"Mantıksal Operatörler(&&,||,^) ",
        "a":"&& => ve. || => veya. ^ => ya da (birisi ya da diğeri, ikisinin de true ve ikisinin de false olduğu durumlar false, birisi true diğerinin false olduğu durumlar true döner)"
        }
        ,{
        "q":"\"++ ve --\" operatörleri - öncesinde ve sonrasında yazılırsa ne olur ",
        "a":"\"++i\" => önce değer artırılır, sonra değişken kullanılır.. \"i++\" => önce değişken kullanılır, sonra değer artırılır."
        }
        ,{
        "q":"Ekleme Yığma Operatörleri (+=,-=,*=,/=,%=) ",
        "a":"\"++\" üzerine bir ekler, \"+=n\" üzerine n ekler. Diğer operatörlerde de geçerlidir."
        }
        ,{
        "q":"Metinsel ifadelerde operatörler ",
        "a":"İki string + ile birleştirilebilir."
        }
        ,{
        "q":"string + int ",
        "a":"String + int durumunda + operatörü int değişkeni boxing yaparak object türüne alır"
        }
        ,{
        "q":"stringlerde +=,-=,==,!= ",
        "a":"\"+=\" ile stringler de birleştirilebilir.. \"==\" veya \"!=\" ile kıyaslanabilirler."
        }
        ,{
        "q":"! operatörü ",
        "a":"İfadenın zıddını/değilini alır.. Bir de C# 8.0 ile birlikte Null reference özelliği de sağlar."
        }
        ,{
        "q":"Ternary Operatörü ?: ",
        "a":"[Şart] ? [Şart doğruysa yapılacaklar] : [Şart yanlışsa yapılacaklar]. C# 9.0 ile birlikte dönen değerler birbirinden türeyen değerler olduğunda da ternary desteklemektedir.. Ternary yapısı içiçe de kullanılır."
        }
        ,{
        "q":"Assign Operatörü = ",
        "a":"değer türlerde değer, referans türlerde referans ataması."
        }
        ,{
        "q":"Member Access Operatörü (.)  ",
        "a":"Türe uygun memberları çağırabilmemizi sağlar."
        }
        ,{
        "q":"Cast Operatörü () ",
        "a":"Boxing - Unboxing. Explicit tür dönüşümü. char - int dönüşümleri. Polimorfizmde base class referansıyla işaretlenen nesneyi kendi türünde elde etmek"
        }
        ,{
        "q":"sizeof ",
        "a":"Türün kaç byte olduğunu int olarak verir."
        }
        ,{
        "q":"typeof-Reflection ",
        "a":"içine yazılanın türünü getirir, içine tür yazılır. Type adında bir sınıf döner. Bu da bir türdür.. Reflectionda da kullanılır."
        }
        ,{
        "q":"default ",
        "a":"türün default değeri."
        }
        ,{
        "q":"is ",
        "a":"boxinge uğramış bir değerin öz türünü verir. Object x = 15; x is Int -> true false döner"
        }
        ,{
        "q":"is null - is not null ",
        "a":"Sadece null olabilen değerlerin null olup olmadığını kontrol eder."
        }
        ,{
        "q":"as - farklı türlerdeki davranışı, hangi türlerle çalışır  ",
        "a":"Cast operatörünün unboxing işlemine bir alternatif.. Object x = 15; (int) x -> uygundur, (short)x -> uygun değil hata verir, (string)x -> uygun değil hata verir.. X as int -> uygun, uygun olmayanlarda ise hata vermez null döner. Null dönme ihtiali olduğu için referans tiplerle çalışır."
        }
        ,{
        "q":"Nullable ? ",
        "a":"value type bir değişkeni nullable yapabilmek için int? Şeklinde kullanılır.. Bu sayede sadece nullable değerlerle işlem yapabilen operatörleri de value type lar için kullanabiliriz -> is null, is not null, as"
        }
        ,{
        "q":"Null Coalescing ?? ",
        "a":"CW(a ?? \"Merhaba\") -> Eğer a null değilse a nın değerini, null ise Merhaba"
        }
        ,{
        "q":"Null Coalescing Assignment ??= ",
        "a":"CW(a ??= \"Merhaba\") -> Eğer a null değilse anın değeri, null ise Merhaba değerini a ya atayp Merhaba değerini döner."
        }
        ,{
        "q":"Switch-Case ",
        "a":""
        }
        ,{
        "q":"when keyword ",
        "a":"eşitliğin dışında başka birşey daha kontrol etmemizi sağlar. Case 1 when (şart):"
        }
        
        
]

let test = [
    
]


