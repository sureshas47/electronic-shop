import React from "react";
import { Img, ButtonAddToCart } from "./style/Style.Product";
import { SideCart } from "./style/Style.SidebarCart";

function SidebarCart() {
  return (
    <>
      <SideCart>
        <Img
          src="https://electronic-ecommerce.herokuapp.com/fantechHeadset.jpg"
          alt="cart"
        />
        <ButtonAddToCart>Checkout</ButtonAddToCart>
      </SideCart>
    </>
  );
}

export default SidebarCart;

// <!DOCTYPE html>
// <html>
// 	<head>
// 		<title></title>
// 		<style>
// 				/* The side navigation menu */
// 			done

// 			/* The navigation menu links */
// 			done

// 			/* When you mouse over the navigation links, change their color */
// 			done
//
//* Position and style the close button (top right corner) */
// 			.sidenav .closebtn {
// 			    position: absolute;
// 			    top: 0;
// 			    right: 25px;
// 			    font-size: 36px;
// 			    margin-left: 50px;
// 			}

// 			/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
// 			#main {
// 			    transition: margin-left .5s;
// 			    padding: 20px;
// 			}
// 			.sidenav {
// 			    right: 0;
// 			}
// 			/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
// 			@media screen and (max-height: 450px) {
// 			    .sidenav {padding-top: 15px;}
// 			    .sidenav a {font-size: 18px;}
// 			}
// 			.sidenav {
// 			    right: 0;
// 			}
// 		</style>
// 	</head>
// 	<body>

// 		<div id="mySidenav" class="sidenav">
// 		  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
// 		  <a href="#">ITEM 1</a>
// 		  <a href="#">ITEM 2</a>
// 		</div>

// 	</body>
// 	<script type="text/javascript">

// 	/* Simple appearence with animation AN-1*/
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }
// 	function closeNav() {
// 	    document.getElementById("mySidenav").style.width = "0";
// 	}
// 	/* Simple appearence with animation AN-1*/
// 	</script>
// </html>
