/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule ProgressBarWindows
 * @flow
 */
'use strict';

var PropTypes = require('prop-types');
var React = require('React');
var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var ViewPropTypes = require('ViewPropTypes');

var ColorPropType = require('ColorPropType');

var requireNativeComponent = require('requireNativeComponent');

/**
 * React component that wraps the Windows-only `ProgressBar`. This component is used to indicate
 * that the app is loading or there is some activity in the app.
 */
var ProgressBarWindows = React.createClass({
  propTypes: {
    ...ViewPropTypes,
    
    /**
     * If the progress bar will show indeterminate progress.
     */
    indeterminate: PropTypes.bool,
    /**
     * The progress value (between 0 and 100).
     */
    progress: PropTypes.number,
    /**
     * Color of the progress bar.
     */
    color: ColorPropType,
  },
  
  getDefaultProps: function() {
    return {
      indeterminate: true
    };
  },
  
  render: function() {
    return <WindowsProgressBar {...this.props}/> ;
  },
});

var WindowsProgressBar = requireNativeComponent('WindowsProgressBar', ProgressBarWindows);

module.exports = ProgressBarWindows;
