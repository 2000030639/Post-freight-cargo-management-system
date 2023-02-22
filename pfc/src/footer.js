import React from 'react';
import { Link } from "react-router-dom";

function footer() {
	return (
		<div>

			<footer class="footer-distributed">

				<div class="footer-left">

					<h3>INFINITY<span>CARGO</span></h3>

					<p class="footer-links">

						<Link to="/home" class="link-1">Home page</Link>

						
					</p>

					<p class="footer-company-name">Infinity Group © 2021</p>
				</div>

				<div class="footer-center">

					<div>
						<i class="fa fa-map-marker"></i>
						<p><span>522303 522501</span> vaddeswaram guntur, Guntur</p>
					</div>

					<div>
						<i class="fa fa-phone"></i>
						<p>9966110524</p>
					</div>

					<div>
						<i class="fa fa-envelope"></i>
						<p><a href="mailto:infinitygroup2911.com">infinitygroup2911.com</a></p>
					</div>

				</div>


				<div class="footer-right">

					<p class="footer-company-about">
						<span>About the company</span>
						company was founded and established by Infinity groups @ 2021 
					</p>

					<div class="footer-icons">

	<Link to="./charges" class="link-1">CHARGES&LOGISTICS<i class="fa fa-facebook"></i></Link>
 
					
					
					</div>

				</div>

			</footer>

		</div>
	);
}

export default footer;
