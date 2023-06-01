//string'lerde çift tırnak kullanmak zorunda değiliz

//tek tırnak da kullanabiliriz

//ama gerekli durumlarda kaçış \ konusuna dikkat etmemiz gerekir

let ad = "nebahat"; 

let ad_2 = 'aysel'; //tek tırnak kullandık!

let myWeb = '<a href="http://www.akiss.org" >My Web</a>'; //tek ve çift tırnaklar birlikte

const benimIstegim = 'Mustafa, "Hadi, Aysel\'e kahveye gidelim!" dedi.' //Aysel ve e arasında \ kullandığımıza dikkat ettik mi

//aşağıdaki kullanımlar da gerekli olabilir. her ifadeye Türkçe karşılık aramayacağım bundan sonra; çünkü yazılımın küresel dili ingilizce. gerçek bu:(

//\'	single quote
//\"	double quote
//\\	backslash
//\n	newline
//\t	tab
//\r	carriage return
//\b	backspace
//\f	form feed

//karmaşık bir örnek yapalım

let hepsi = "ilkSatir\n\t\\ikinciSatir\nucuncuSatir"; 

console.log(hepsi);

/*
ilkSatir
	\ikinciSatir
ucuncuSatir
*/
