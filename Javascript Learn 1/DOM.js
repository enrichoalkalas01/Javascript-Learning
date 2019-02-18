// DOM Selection Method
// + getElementById()			Mencari element dari id
// + getElementsByTagName()		Mencari element dari nama tag
// + getElementsByClassName()	Mencari element dari kelas tertentu
// + querySelector()			Mencari	element berdasarkan selector
// + querySelectorAll()			Mencari element berdasarkan selector 

// Return nya :  						
// + getElementById()				= element
// + getElementsByTagName()			= HTML Collection
// + getElementsByClassName()		= HTML Collection
// + querySelector()				= element
// + querySelectorAll()			 	= nodeList

// document = node root
// const = variable yang tidak akan di ubah
const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = '#dedede';
judul.innerHTML = 'Ini H1';

// getElementsByTagName() -> HTML Collections
const p = document.getElementsByTagName('p');

for ( let i = 0; i < p.length; i++ ) {
	p[i].style.backgroundColor = "#dedede";
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '25px';
h1.style.textTransform = 'uppercase';

// getElementsByClassName() -> HTML Collections
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini dirubah dari javascript';

// querySelector() -> element
// query = menanyakan , Selector
const p4 = document.querySelector('#b p');
p4.style.color = 'orange';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// querySelectorAll() -> nodelist
const p = document.querySelectorAll('p');
for ( let i = 0; i < p.length; i++ ) {
	p[i].style.color = 'lightblue';	
}

// Pilihan Tanpa Merubah Struktur HTML = query
// Pilihan Untuk Proses Tercepat = id & tagname