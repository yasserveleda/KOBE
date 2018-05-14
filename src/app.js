import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.css';
import './public/assets/css/scrolling-nav.css';
import './public/assets/vendor/bootstrap/css/bootstrap.min.css';
import './public/assets/vendor/jquery/jquery.min.js';
import './public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './app/home';

angular.module('app', [uirouter, home])
  .config(routing);