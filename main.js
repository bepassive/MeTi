var store = document.getElementById('inputStore');
var off = document.getElementById('inputOff');
var month = document.getElementById('inputMonth');


var slugTable = document.getElementById('slugTable');
var titleTable = document.getElementById('titleTable');
var extraInfoTable = document.getElementById('extraInfoTable');
var descTable = document.getElementById('descTable');
var metaTable = document.getElementById('metaTable');
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
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Off '+store.value+' Coupon & Promo Code for '+month.value+'-'+year+'"></td>'+
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
			      '<td><input type="text" name="" class="form-control" value="'+off.value+' Off '+store.value+' Promo Code, Sale & Deal '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">7</th>'+
			      '<td><input type="text" name="" class="form-control" value="Up to '+off.value+' Off First Order With '+store.value+' Sign Up | '+month.value+'-'+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">8</th>'+
			      '<td><input type="text" name="" class="form-control" value="Get '+off.value+' Off '+store.value+' Coupon & Promo Code for '+month.value+' '+year+'"></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">9</th>'+
			      '<td><input type="text" name="" class="form-control" value="Save '+off.value+' Off '+store.value+' Coupons, Promo Codes & Deals | '+month.value+' '+year+'"></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';


	descTable.innerHTML = '<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-1">#</th>'+
			      '<th scope="col-11">Description</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get Up to '+off.value+' Off with '+store.value+' promotional codes and coupons for '+month.value+' '+year+'. Check out the '+store.value+' coupon page for all coupons, promotion codes, deals, and more offers!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">2</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">'+store.value+' Promo Code for '+month.value+' '+year+'. Get Instant '+off.value+' Discount with Special Coupon & 100% Valid Offer. Never Miss The Big Savings. Last Verified [dmy].</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">3</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Grab Special Discount on All Valid '+store.value+' Coupon Codes in '+month.value+' '+year+'. Including '+store.value+' Coupon Codes and More Deals. View The Following List of Coupons and Click to Get The Code. Never Miss The Big Savings. </textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">4</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get extra off with '+store.value+' coupons, promo codes & deals in '+month.value+' '+year+'. Check out the latest '+store.value+' coupons and apply them for instant savings. View the following list of coupons and click to get the code. Never miss the big savings.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">5</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Top '+store.value+' Discount: '+off.value+' Cash Back on Top Deals Products. More than 50 Coupons & Free Shipping Promo Codes for '+month.value+' '+year+'. Save Even More with Berry Deals. Never Miss The Big Savings. Last Verified [dmy].</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">6</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top '+store.value+' offer: Up to '+off.value+' Off '+store.value+' Promo Codes & Coupons | '+month.value+' '+year+' + Free Shipping. Save with '+store.value+' Promotions Code. Stay with Berry Deals & Save Your Money! Last Verified [dmy].</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">7</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top '+store.value+' offer: Up to '+off.value+' Off '+store.value+' Promo Codes & Coupons | '+month.value+' '+year+' + Free Shipping. Save with '+store.value+' Promotions at Berry Deals. Check Out Other Promo Codes and Discount Codes for More Offers.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">8</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s '+store.value+' offers you get up to '+off.value+' Off with 6-month membership. Get more than 20 coupons and promo codes for '+month.value+' '+year+'. Check out other promo codes and discount codes for more offers.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">9</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Save with '+store.value+' Coupons & Promo Codes for '+month.value+' '+year+'. Find Verified Coupons & Offers for '+store.value+' on Berry Deals. Apply These Coupons & Promo Codes for Extra Benefit. Last Verified [dmy].</textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';


		extraInfoTable.innerHTML = '<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-1">#</th>'+
			      '<th scope="col-11">Extra Info Table Code</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">'+
				      '<div class="inner shadow-box Coupon-extra-info">'+
						'<div class="inner-content clearfix">'+
							'<h2>Popular '+store.value+' Promo Codes & Sales</h2>'+
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
	
	
		metaTable.innerHTML = '<table class="table">'+
			  '<thead>'+
			    '<tr class="bg-primary text-white">'+
			      '<th scope="col-1">#</th>'+
			      '<th scope="col-11">Meta Table</th>'+
			    '</tr>'+
			  '</thead>'+
			  '<tbody>'+
			    '<tr>'+
			      '<th scope="row">1</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get Up To '+off.value+' Off with '+store.value+' promotional codes and coupons for %%month%% %%year%%. Check out the '+store.value+' coupon page for more verified offers!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">2</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">'+store.value+' Promo Code for %%month%% %%year%%. Get Instant '+off.value+' Discount with Special Coupons, Deals & 100% Verified Offer. Never miss the big savings.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">3</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Grab Special Discount on All Valid '+store.value+' Coupon Codes in %%month%% %%year%%. Including '+store.value+' Coupon, Promo Codes and Deals. 100% Verified!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">4</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Get extra off with '+store.value+' coupons, promo codes & deals in %%month%% %%year%%. Check out the latest '+store.value+' coupons and apply them for instant savings.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">5</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Top '+store.value+' Offer: Get '+off.value+' Cash Back with More than 15 Coupons & Promo Codes for %%month%% %%year%%. Save Even More With Berry Deals. Verified Offers!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">6</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top Offer: Up to '+off.value+' Off with '+store.value+' Promo Codes & Coupons for %%month%% %%year%%. Stay with Berry Deals & Save Your Money! 100% Verified Offers.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">7</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top '+store.value+' offer: Up to '+off.value+' Off '+store.value+' Promo Codes & Coupons %%month%% %%year%%! Stay with Berry Deals & Save Your Money! </textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">8</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s top '+store.value+' offer: Up to '+off.value+' Off with Promo Codes & Coupons for %%month%% %%year%%. Stay with Berry Deals & Save Your Money. 100% Verified Offer!</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">9</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Today\'s '+store.value+' offers you, get up to '+off.value+' Off for %%month%% %%year%%. Check out other promo codes and discount codes for more verified offer.</textarea></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<th scope="row">10</th>'+
			      '<td><textarea name="" id="" cols="10" rows="3" class="form-control">Save with '+store.value+' Coupons & Promo Codes for %%month%% %%year%%. Find Verified Offers on Berry Deals. Apply These Coupons and Promo Codes for Extra Benefit.</textarea></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';

		
			
	}