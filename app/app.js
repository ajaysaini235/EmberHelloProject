import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

        //web-sockets setup in ember 

// http://www.programwitherik.com/getting-started-with-web-sockets-and-ember/


        //sass setup in ember 

//http://stackoverflow.com/questions/28952836/ember-cli-sass-settings


        //node server setup in ember 

//http://www.programwitherik.com/setup-your-ember-project-with-node/
