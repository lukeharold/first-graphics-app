// Main javascript entry point
// Should handle bootstrapping/starting application
'use strict';

import "core-js";
import "regenerator-runtime/runtime";
import $ from "jquery";
import { Link } from "../_modules/link/link";
import "./_charts";
import "./_map";
import * as L from "leaflet";
import MiniMap from "leaflet-minimap";
import homicides from "../_data/harvard_park_homicides.json";

var map = L.map('map', {
    scrollWheelZoom: false
});
var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
    minZoom: 9
});
sat.addTo(map);
map.setView([33.983265, -118.306799], 18);

homicides.forEach(obj => {
    L.circleMarker([obj.latitude,  obj.longitude])
      .addTo(map)
      .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
});

var sat2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
    maxZoom: 8
});
var mini = new L.Control.MiniMap(sat2);
mini.addTo(map);

$(function () {
    new Link(); // Activate Link modules logic
    console.log('Welcome to Yeogurt!');
});