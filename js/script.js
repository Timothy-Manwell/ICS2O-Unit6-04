// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

function start() {
  const params = new URLSearchParams(document.location.search)
  const radius = params.get('r')

  document.getElementById("radius").innerHTML =
    "The radius is: " + radius + " cm."

  const volume = (4.0 * Math.PI * radius ** 3) / 3.0
  document.getElementById("volume-of-sphere").innerHTML =
    "The volume of the sphere is: " + volume.toFixed(2) + " cm³."


}



