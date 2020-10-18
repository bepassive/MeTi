var store = document.getElementById('inputStore');
var off = document.getElementById('inputOff');
var month = document.getElementById('inputMonth');

var titleTable = document.getElementById('titleTable');
var metaTable = document.getElementById('metaTable');
var year = '2020';
function MeTi_generator(){
	titleTable.innerHTML='<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-1">#</th>'+
			      '<th scope="col-11">Title</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off '+store.value+' Promo Codes & Coupons | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">2</th>'+
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Off '+store.value+' Coupons & Promo Codes | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">3</th>'+
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Cash Back For '+store.value+' Online Purchases Sitewide | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">4</th>'+
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off First Order With '+store.value+' Sign Up | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">5</th>'+
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off '+store.value+' with Fast & Free Shipping on Sitewide Order | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			  '</tbody>'+
			'</table>';


	metaTable.innerHTML = '<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-1">#</th>'+
			      '<th scope="col-11">Title</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get Up To '+off.value+' Off with '+store.value+' promotional codes and coupons. Check out the '+store.value+' coupon page for all offers, coupon codes, promotions, deals, sales, and more!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">'+store.value+' Promo Code for '+month.value+' '+year+'. Get Instant '+off.value+' Discount. Special Coupon & 100% Valid Offer. Last Verified '+month.value+' '+year+'. Offer Ends Soon.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control"></textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control"></textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control"></textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';
}