// Events != Even

/*
	Events = javascript merepresentasikan sebuah kejadian yang terjadi
			 didalam DOM, kejadian tersebut bisa dilakukan oleh user ( mouse event,keyboard event,dll ), 
			 bisa dilakukan secara otomatis ole API ( animasi selesai dijalankan, halaman selesai di load, dll).

	Cara menerapkan / mendengarkan event
	+ Event Handler
		- Inline HTML Attribute
		- Element Method
	+ addEventListener()
*/

// cara membuat event handler
// on <event>

// tangkap element nya
// const p3 = document.querySelector('.p3');

// Inline HTML Attribute ( Tidak Di Sarankan )
// onclick berada di html

// function ubahWarna() {
// 	p2.style.backgroundColor = 'lightblue';	
// }

// // Element Method
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna;


// // Method addEventListener
// // menambahkan item list
// // tangkap paragraph / parent

// // kalau sudah ada kelas '.p4'
// // kalau tidak ada kelas 'section#b p'
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
	
// 	// alert('ok');
	
// 	const ul = document.querySelector('section#b ul');
// 	const liBaru = document.createElement('li');
// 	const textLiBaru = document.createTextNode('Item Baru')

// 	liBaru.appendChild(textLiBaru);
// 	ul.appendChild(liBaru);

// }); // 2 parameter

/*
	Perbedaan Event Handler & Event Listener

	Event Handler = cara lama
	Event Handler = lebih dari satu perubahan dapat menimpa perubahan sebelumnya

	Event Lister = Menambah perubahannya
*/

// Contoh Event Handler

// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
// 	p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
// 	p3.color.backgroundColor = 'red';
// }


// Contoh Event Listener
p3.addEventListener('click', function() {
	p3.style.color = 'red';
});

p3.addEventListener('click', function() {
	p3.style.backgroundColor = 'lightblue';
});

/*
	Daftar Event DOM Events
	https://developer.mozilla.org/en-US/docs/Web/Events
*/

// mouse enter & mouse leave = hover css