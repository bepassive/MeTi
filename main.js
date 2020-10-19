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
			      '<th scope="row">6</th>'+
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Off '+store.value+' Promo Codes, Sales & Deals '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">7</th>'+
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off First Order With '+store.value+' Sign Up | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">8</th>'+
			      '<td><input type="text" name="" class="form-control" value="Get '+off.value+' Off '+store.value+' Coupons & Promo Codes, '+month.value+' '+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">9</th>'+
			      '<td><input type="text" name="" class="form-control" value="Save '+off.value+' Off '+store.value+' Coupons, Promo Codes & Deals | '+month.value+' '+year+'"></td>'+
			    '</tr>'+
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
			      '<th scope="row">2</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">'+store.value+' Promo Code for [my]. Get Instant '+off.value+' Discount. Special Coupon & 100% Valid Offer. Offer Ends Soon. Last Verified [dmy].</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">3</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Grab Special Discount on All Valid '+store.value+' Coupon Codes in [my] Including '+store.value+' Coupon Codes and more Deals. View The Following List of Coupons and Click to Get The Code. Never Miss The Big Savings. </textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">4</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get extra off with '+store.value+' coupons, promo codes & deals in [my]. Check out the latest '+store.value+' coupons and apply them for instant savings. View the following list of coupons and click to get the code. Never miss the big savings.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">5</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Top '+store.value+' Discount: '+off.value+' Cash Back on Top Deals Products. More than 50 Coupons & Free Shipping Promo Codes for October. Save Even More With Berry Deals. Never Miss The Big Savings. </textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">6</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top '+store.value+' offer: Up to '+off.value+' Off '+store.value+' Promo Codes & Coupons | [my] + Free Shipping. Save with '+store.value+' promotions code. Stay with Berry Deals & Save Your Money!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">7</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top '+store.value+' offer: Up to '+off.value+' Off '+store.value+' Promo Codes & Coupons | [my] + Free Shipping. Save with '+store.value+' promotions at Berry Deals. Check out other promo codes and discount codes for more offers.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">8</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s '+store.value+' offers you get up to '+off.value+' Off with 6-month membership. Get more than 20 '+off.value+' coupons and promo codes for [my]. Check out other promo codes and discount codes for more offers.</textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';
}