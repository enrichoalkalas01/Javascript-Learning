// DOM Manipulation Method
// + Manipulasi Element
// + Manipulasi Node

// Manipulasi Element
// - element.innerHTML
// - element.style.< property >
// - element.setAttribute()
// - element.classList
// - Dll

// const judul = document.getElementById('judul');

// judul.innerHTML = 'Ini Judul';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'hello world';

// element.getAttribute(), element.setAttribute(), element.removeAttribute()
// attribut = sesuatu yang menempel di element html
// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');
// a.getAttribute('href');
// a.removeAttribute('href');

// element.classList
/*
	element.classList.add()
	element.classList.remove()
	element.classList.toggle() 		= jika sebuah element tidak memiliki kelas tertentu, makan dia akan menambahkan. Sedangkan sudah punya, toggle akan menghilangkan class tertentu
	element.classList.item() 		= untuk mengetahui class tertentu
	element.classList.contains()	= untuk mengecek class tertentu
	element.classList.repalce()
*/

// const p2 = document.querySelector('.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label'); // Jika true maka akan ditambahkan, jika false akan dihilangkan ( biasa digunakan untuk tombol )
// p2.classList.item(2) // urutan class nya
// p2.classList.contains('label') // jika true maka ada class nya, jika false tidak ada class nya

// Manipulasi Node
// + document.createElement()		create element
// + document.createTextNode()		create isi element
// + node.appendChild()				simpan dimana, ke akhir element
// + node.insertBefore()			simpan dimana, ke tengah element
// + parentNode.removeChild()
// + parentNode.replaceChild()
// + DLL

// buat element baru
// const pBaru = document.createElement('p');
// const textPBaru = document.createTextNode('Paragraph Baru 1');

// // simpan tulisa kedalam paragraph
// pBaru.appendChild(textPBaru); // mengisi pBaru dengan textPBaru

// // simpan pBaru di akhir Section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const textLiBaru = document.createTextNode("Item Baru 1");

// liBaru.appendChild(textLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('section#b li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// // Remove & Replace Child
// const link = document.getElementByTageName('a')[0];

// sectionA.removeChild(link);

// tangkap parent or node
// const sectionB = document.getElementById('b');
// // sectionB membatasi pencarian p
// const p4 = sectionB.querySelector('p');

// // bikin element baru
// const h2Baru = document.createElement('h2');
// const textH2Baru = document.createTextNode('Ini H2 Baru');

// h2Baru.appendChild(textH2Baru);

// // 2 parameter
// sectionB.replaceChild(h2Baru, p4);


// Method Baru
/*
	parentNode.append();
	parentNode.prepend();
	childNote.before();
	childNote.after();
	childNote.remove();
	childNote.replaceWith();
	DLL
*/