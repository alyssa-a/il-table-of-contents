const tocList = document.getElementById('test-toc');;
	ReactDOM.render(<li>Develop. Preview. Ship. 🚀</li>, tocList);

jQuery(document).ready(function( $ ) {
	




	// let headings = [];
	// $('#primary .wp-block-heading').each(function(index) {
	// 	let id = $(this).attr('id');
	// 	let text = $(this).text().trim();
	// 	let level = parseInt(this.tagName.substring(1));
	// 	let secNumber = '1';
		
	// 	if(id == undefined) {
	// 		id = text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')
	// 		$(this).attr('id', id);
	// 	}

	// 	if (index > 0) {
	// 		let prevLevel = headings[index-1].level;
	// 		let prevSecNumber = headings[index-1].secNumber;
	// 		let prevSecNumberArray = [];

	// 		if (prevSecNumber.includes('.')) {
	// 			prevSecNumberArray = prevSecNumber.split('.').map(Number);
	// 		} else {
	// 			prevSecNumberArray.push(parseInt(prevSecNumber));
	// 		}

	// 		let curSecNumberArray = prevSecNumberArray.slice(0, -1);

	// 		if (level == prevLevel) {
	// 		//curent heading is a sibling
	// 			curSecNumberArray.push(prevSecNumberArray[prevSecNumberArray.length - 1] + 1);
	// 			console.log(curSecNumberArray);
	// 			// console.log((parseInt(prevSecNumberArray[prevSecNumberArray.length - 1]) + 1).toString());
	// 			// console.log(text + ': ' + curSecNumberArray[curSecNumberArray.length - 1]);
	// 			// curSecNumberArray[curSecNumberArray.length - 1] = (parseInt(prevSecNumberArray[prevSecNumberArray.length - 1]) + 1).toString();
	// 			// console.log(curSecNumberArray);
	// 			// secNumber = curSecNumberArray.join('.');
	// 		} else if (level > prevLevel) {
	// 		// current heading is a child
	// 			curSecNumberArray.push(1);
	// 		} else if (level < prevLevel) {
	// 			// current heading starts a new section or subsection
	// 			let diff = prevLevel - level;
	// 		}

	// 		secNumber = curSecNumberArray.join('.');
	// 	}

	// 	headings.push({
	// 		id: id,
	// 		text: text,
	// 		level: level,
	// 		secNumber: secNumber
	// 	});
	// });



  	let currentDepth = 2;
	let list = '';
	$('#primary .wp-block-heading').each(function() {
		let id = $(this).attr('id');
		let text = $(this).text().trim();
		
		if(id == undefined) {
			id = text.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '')
			$(this).attr('id', id);
		}
		
		let li = '<li><a href="#' + id + '">' + text + '</a></li>';

		let depth = parseInt(this.tagName.substring(1));
		
		if (depth > currentDepth) { // going into nested headings
			list = list.slice(0,-5);
			list += '<ol>' + li;
		} else if (depth < currentDepth) { // coming out of nested headings
			let diff = currentDepth - depth;
			for (let i = 0; i < diff; i++) {
				list += '</ol></li>';
			}
			list += li;
		} else {
			list += li;
		}
		currentDepth = depth;
	});

	$('#toc-list').append(list);

	$('#toc-list li')
	
	$('#toc-list a').click(function(){
		let id = $(this).attr('href');
		$('#toc-modal').modal('hide');
		$('#toc-btn').blur();
		$('html, body').animate({
			scrollTop: $(id).offset().top - 20
		}, 500);
	});
	
	$('#toc-modal').on('shown.bs.modal', function(e){
		$('#toc-btn').one('focus', function(e){$(this).blur();});
	});
	
  });


