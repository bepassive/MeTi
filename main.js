var store = document.getElementById('inputStore');
var off = document.getElementById('inputOff');
var month = document.getElementById('inputMonth');


var slugTable = document.getElementById('slugTable');
var titleTable = document.getElementById('titleTable');
var metaTable = document.getElementById('metaTable');
var extraInfoTable = document.getElementById('extraInfoTable');
var year = '2020';

function MeTi_generator(){
	
	
	slugTable.innerHTML='<table class="table">'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">Slug</th>'+
			      '<td><input type="text" name="" class="form-control" value="'+store.value.toLowerCase()+' promo"></td>'+
			    '</tr>'+
			    '<tr>'+
			  '</tbody>'+
			'</table>';


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
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off '+store.value+' Promo Code & Coupon | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">2</th>'+
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Off '+store.value+' Coupon & Promo Code | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">3</th>'+
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Cash Back For '+store.value+' Online Purchases Sitewide |'+month.value+'-'+year+'"></td>'+
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
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Off '+store.value+' Promo Code, Sale & Deal '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">7</th>'+
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off First Order With '+store.value+' Sign Up | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">8</th>'+
			      '<td><input type="text" name="" class="form-control" value="Get '+off.value+' Off '+store.value+' Coupon & Promo Code, '+month.value+' '+year+'"></td>'+
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
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get Up To '+off.value+' Off with '+store.value+' promotional codes and coupons. Check out the '+store.value+' coupon page for all coupons, promotion codes, deals, and more offers!</textarea></td>'+
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
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Top '+store.value+' Discount: '+off.value+' Cash Back on Top Deals Products. More than 50 Coupons & Free Shipping Promo Codes for [my]. Save Even More With Berry Deals. Never Miss The Big Savings. </textarea></td>'+
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
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s '+store.value+' offers you get up to '+off.value+' Off with 6-month membership. Get more than 20 coupons and promo codes for [my]. Check out other promo codes and discount codes for more offers.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">9</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Save with '+store.value+' Coupons & Promo Codes for [my]. Find Verified Coupons & Offers for '+store.value+' on Berry Deals. Apply These Coupons And Promo Codes for Extra Benefit.</textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';


		extraInfoTable.innerHTML = '<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-1">#</th>'+
			      '<th scope="col-11">Title</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">'+
				      '<div class="inner shadow-box Coupon-extra-info">'+
						'<div class="inner-content clearfix">'+
							'<h3>Popular '+store.value+' Promo Codes & Sales</h3>'+
							'<table class="info-Table">'+
							   '<thead>'+
							      '<tr class="">'+
							        '<th>Discount</th>'+
							        '<th>Description</th>'+
							        '<th>Coupon</th>'+
							        '<th>Expires</th>'+
							      '</tr>'+
							   '</thead>'+
							   '<tbody>'+
							      '<tr class="">'+
							         '<td>Discount 1</td>'+
							         '<td>Description 1</td>'+
							         '<td>cupon 1</td>'+
							         '<td> [short_m-y] </td>'+
							      '</tr>'+
							      '<tr class="">'+
							         '<td>Discount 2</td>'+
							         '<td>Description 2</td>'+
							         '<td>cupon 2</td>'+
							         '<td> [short_m-y] </td>'+
							      '</tr>'+
							      '<tr class="">'+
							         '<td>Discount 3</td>'+
							         '<td>Description 3	</td>'+
							         '<td>cupon 3</td>'+
							         '<td> [short_m-y] </td>'+
							      '</tr>'+
							      '<tr class="">'+
							         '<td>Discount 4</td>'+
							         '<td>Description 4	</td>'+
							         '<td>cupon 4</td>'+
							         '<td> [short_m-y] </td>'+
							      '</tr>'+
							      '<tr class="">'+
							         '<td>Discount 4</td>'+
							         '<td>Description 4	</td>'+
							         '<td>cupon 5</td>'+
							         '<td> [short_m-y] </td>'+
							      '</tr>'+
							   '</tbody>'+
							'</table>'+
						'</div>'+
					  '</div>'+
					'</textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';
	}