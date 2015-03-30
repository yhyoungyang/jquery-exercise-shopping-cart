$(document).ready(function(){
	$(document).on('click', '#calc-prices', function() {
		var total = 0;
		for (var i = 0; i < 9; i ++) {
			var price = $($('.item-price')[i]).text().replace('$', ''); // all set
			var quantity = $($('.quantity')[i]).val(); //Undefined results 
			var subtotal = price * quantity;
			var all = total += subtotal;
		};
		$('#total-price').text(all);
	});

	var newName = $($("#new-name")).val();
	$('.items').prepend(newName);


				// quantity[i]
				// rawValue.push(parseInt(extract));

				//separation of units
				// merging loops --> loop within loop; loop after loop; esp if array length is the same.
				//get used to error code; expecting a bracket; 
				//read the error message; 
				//get use to the syntax; 
				// jquery library --> look for things that will be useful; 
				// ajax: giving data to another request;
				// 

				// $(document).on('click', '#button',function(){
				// 	console.log("asdf");
			
			// //parseInt()
			// var valuePrice = parseInt(rawValue)


			// eval(rawValue); 
			// x = "10" y = "10"
			// z = x + ' + ' + y
			// eval(z) 
			// "20"

	//  eval(): changing string to values put in strings
	// // parseInt()

		// var price = a.text().replace('$', ''); 
		// function ($("total-price")) {
	// 	var a = $('.item-price'); 
	// 	var b = $('.item-qty');
	// 	for ( var i = 0; i < 10; i ++ ) {
	// 		var sum = 0;
	// 		sum += a[i] * b[i];
	// 	}		

	// }

	//append(): insert an element dynamically (automatically appear at the bottom)
	// preprend(): insert an element dynamically (automatically appear at the top)

});

// 1. get subtotal of each category: item-qty * item-price
// 2. total price: sum up all the subtotals of each category 
// 3. create cancel button for each category