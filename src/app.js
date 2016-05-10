import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class App {
	constructor(http) {
        // Set up our API calls
		http.configure(config => {
	      config
	        .useStandardConfiguration()
	        .withBaseUrl('http://localhost:3000/');
	    });
	}

	configureRouter(config, router) {
	    config.title = "Users";
	    config.map([
	        {
	        	route: "",
	        	name: 'home',
	        	moduleId: "users/dashboard",
	        	title: "Dashboard",
	        	nav: true,
	        	settings: {
	        		icon: "home"
	        	}
	        },

	        {
	        	route: "signup",
	        	name: 'signup',
	        	moduleId: "users/signup",
	        	title: "Signup",
	        	nav: true,
	        	settings: {
	        		icon: "user-plus"
	        	}
	        },

	        {
	        	route: "login",
	        	name: 'login',
	        	moduleId: "users/login",
	        	title: "Login",
	        	nav: true,
	        	settings: {
	        		icon: "user"
	        	}
	        }
	    ]);

	    this.router = router;
	}
}
