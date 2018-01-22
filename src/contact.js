import React, { Component } from 'react';
import './bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
		<div class="container-fluid" id = "contact">
			<div class="row">
				<div class="col-md-offset-1 col-md-10 col-sm-12 text-center">
					<h1 class = "header">Contact Us</h1>
				</div>
				<div class="col-md-offset-1 col-md-10 col-sm-12 wow fadeIn" data-wow-delay="0.3s">
					<form action="mailto:emilyyu1030@gmail.com" method="post" enctype="text/plain">
						<div class="col-md-6 col-sm-6">
							<input name="name" type="text" class="form-control" id="name" placeholder="Name"/>
					  </div>
						<div class="col-md-6 col-sm-6">
							<input name="email" type="email" class="form-control" id="email" placeholder="Email"/>
					  </div>
						<div class="col-md-12 col-sm-12">
							<textarea name="message" rows="8" class="form-control" id="message" placeholder="Message"></textarea>
						</div>
						<div class="col-md-offset-3 col-md-6 col-sm-offset-3 col-sm-6">
							<input name="submit" type="submit" class="form-control" id="submit" value="send"/>
						</div>
					</form>
				</div>
				<div class="col-md-2 col-sm-1"></div>
			</div>
		</div>
    );
  }
}

export default App;
