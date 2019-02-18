// // Kasus 1
// const tUbahWarna = document.getElementById('tUbahWarna');

// // Events
// tUbahWarna.onclick = function() {
// 	// document.body.setAttribute('class', 'biru-muda');
// 	document.body.classList.toggle('biru-muda');
// }

// // Kasus 2
// // Membuat Sebuah HTML Baru
// // Membuat Tombol
// const tRandomWarna = document.createElement('button');
// const textTombol = document.createTextNode('Acak Warna');

// tRandomWarna.appendChild(textTombol);
// tRandomWarna.setAttribute('type','button');

// tUbahWarna.after(tRandomWarna);

// tRandomWarna.addEventListener('click', function(){
// 	// random variable
// 	const r = Math.round(Math.random() * 255 + 1);
// 	const g = Math.round(Math.random() * 255 + 1);
// 	const b = Math.round(Math.random() * 255 + 1);

// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// Kasus 3
// Slider Warna 1

// const sMerah = document.querySelector('input[name=sMerah]');
// const sHijau = document.querySelector('input[name=sHijau]');
// const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('input', function(){
// 	const r = sMerah.value;
// 	const g = sHijau.value;
// 	const b = sBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sHijau.addEventListener('input', function(){
// 	const r = sMerah.value;
// 	const g = sHijau.value;
// 	const b = sBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// sBiru.addEventListener('input', function(){
// 	const r = sMerah.value;
// 	const g = sHijau.value;
// 	const b = sBiru.value;
// 	document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
// });

// Slider Warna 2
// const warna = document.querySelectorAll("input[type='range']");

// warna.forEach(function(slider){
//     slider.addEventListener("input",function(){
//         const r = document.querySelector("input[name='merah']").value;
//         const g = document.querySelector("input[name='hijau']").value;
//         const b = document.querySelector("input[name='biru']").value;
//         console.log(r,g,b);
//         document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
//     });
// });

// Kasus 3
// Pointer

document.body.addEventListener('mousemove', function(event) {
	// Posisi mouse
	// console.log('x : ' + event.clientX);
	// console.log('y : ' + event.clientY);
	// console.log(window.innerWidth);

	const xPosition = Math.round((event.clientX / window.innerWidth) * 255);
	console.log(xPosition);

	const yPosition = Math.round((event.clientY / window.innerHeight) * 255);
	console.log(yPosition);

	document.body.style.backgroundColor = 'rgb('+ xPosition +','+ yPosition +',100)'
});
