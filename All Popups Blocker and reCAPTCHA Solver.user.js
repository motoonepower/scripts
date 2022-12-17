// ==UserScript==
// @name        All Popups Blocker and reCAPTCHA Solver
// @updateURL https://github.com/motoonepower/scripts/raw/main/All%20Popups%20Blocker%20and%20reCAPTCHA%20Solver.user.js
// @downloadURL https://github.com/motoonepower/scripts/raw/main/All%20Popups%20Blocker%20and%20reCAPTCHA%20Solver.user.js
// @namespace   Violentmonkey Scripts
// @include     /^(https?:\/\/)(.+)?(shortzon|coinadfly|bclikeqt|fc-lc|claimclicks)(\.com)(\/.*)/
// @include     /^(https?:\/\/)(.+)?(downfile|promo-visits)(\.site)(\/.*)/
// @include     /^(https?:\/\/)(.+)?(bcvc|satoshi-win)(\.xyz)(\/.*)/
// @include     /^(https?:\/\/)(1dogecoin|faucet)(\.work)(\/.*)/
// @match       *://*.filesearch.link/*
// @match       *://*.trangchu.news/*
// @match       *://*.bitcoinly.in/*
// @match       *://*.vshort.link/*
// @match       *://*.linka.click/*
// @match       *://*.linkres.in/*
// @match       *://*.yocto.link/*
// @match       *://*.cashurl.in/*
// @match       *://*.linkad.in/*
// @match       *://*.cuturl.in/*
// @match       *://*.mitly.us/*
// @match       *://*.aii.sh/*
// @match       *://*.iir.ai/*
// @match       *://*/adguardteam.github.io/*
// @version     4.4
// @author      Blogger Pemula
// @run-at      document-start
// @license     GPL-3.0-or-later
// @grant       GM_xmlhttpRequest
// @require     https://code.jquery.com/jquery-3.6.0.min.js
// @require     https://greasyfork.org/scripts/444872-7-recaptcha-solver-backup/code/7_Recaptcha%20Solver%20(BackUp).user.js#bypass=true
// @description This Script will Block All Popups Sites in the Lists , and Auto Solving Google reCAPTCHA
// ==/UserScript==
/*jslint evil: true */

var blockonclick = new Function("console.log('Blocked By BloggerPemula')");

function BlockPopup(e){return 1;}
parent.open=BlockPopup; this.open=BlockPopup; window.open=BlockPopup; onload=BlockPopup;
window.open = function(){ return;};
onload = function(){ return;};
this.open = function(){ return;};
parent.open = function(){ return;};
unsafeWindow.open = function(){};
