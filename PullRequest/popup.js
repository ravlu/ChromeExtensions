// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * This class wraps the popup's form, and performs the proper clearing of data
 * based on the user's selections. It depends on the form containing a single
 * select element with an id of 'timeframe', and a single button with an id of
 * 'button'. When you write actual code you should probably be a little more
 * accepting of variance, but this is just a sample app. :)
 *
 * Most of this is boilerplate binding the controller to the UI. The bits that
 * specifically will be useful when using the BrowsingData API are contained in
 * `parseMilliseconds_`, `handleCallback_`, and `handleClick_`.
 *
 * @constructor
 */
var PopupController = function () {
  this.button_ = document.getElementById('button');
  this.timeframe_ = document.getElementById('timeframe');
  this.addListeners_();
};

PopupController.prototype = {
  /**
   * A cached reference to the button element.
   *
   * @type {Element}
   * @private
   */
  button_: null,

  /**
   * A cached reference to the select element.
   *
   * @type {Element}
   * @private
   */
  timeframe_: null,

  /**
   * Adds event listeners to the button in order to capture a user's click, and
   * perform some action in response.
   *
   * @private
   */
  addListeners_: function () {
    this.button_.addEventListener('click', this.handleClick_.bind(this));
  },

  /**
   * When a user clicks the button, this method is called: it reads the current
   * state of `timeframe_` in order to pull a timeframe, then calls the clearing
   * method with appropriate arguments.
   *
   * @private
   */
  handleClick_: function () {
      var jobValue = document.getElementById('txtquerynum').value;
      var lstrurl = "https://"+"your url here"+"/pullrequest/" + jobValue + "/";
     
			   
	chrome.tabs.create({
		
     url: lstrurl
});
window.close();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  window.PC = new PopupController();
});
