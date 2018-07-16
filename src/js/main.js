/**
 Copyright (c) 2015, 2018, Oracle and/or its affiliates.
 The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */
/* eslint-disable quote-props */

requirejs.config(
    {
        baseUrl: 'js',

        // Path mappings for the logical module names
        // Update the main-release-paths.json for release mode when updating the mappings
        paths: //injector:mainReleasePaths
            {
                'knockout': 'libs/knockout/knockout-3.4.2.debug',
                'jquery': 'libs/jquery/jquery-3.3.1',
                'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
                'promise': 'libs/es6-promise/es6-promise',
                'hammerjs': 'libs/hammer/hammer-2.0.8',
                'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
                'ojs': 'libs/oj/v5.1.0/debug',
                'ojL10n': 'libs/oj/v5.1.0/ojL10n',
                'ojtranslations': 'libs/oj/v5.1.0/resources',
                'text': 'libs/require/text',
                'signals': 'libs/js-signals/signals',
                'customElements': 'libs/webcomponents/custom-elements.min',
                'proj4': 'libs/proj4js/dist/proj4-src',
                'css': 'libs/require-css/css'
            }
        //endinjector
        ,

        // Shim configurations for modules that do not expose AMD
        shim: {
            'jquery': {
                exports: ['jQuery', '$']
            }
        }
    }
);

require(['ojs/ojcore', 'knockout', 'common/constants', 'common/utils', 'common/dataParser', 'ojs/ojknockout', 'ojs/ojmessage',
        'ojs/ojmessages', 'ojs/ojmodule', 'ojs/ojinputtext', 'ojs/ojpopup', 'ojs/ojbutton', 'ojs/ojradioset'],
    function (oj, ko, constants, utils, dataParser) {

        function RootViewModel() {
            const self = this;

            self.inputData = ko.observable(constants.SAMPLEDATA);
            self.missingDataRule = ko.observable();
            self.messages = ko.observable([]);
            self.chartData = ko.observableArray([]);
            self.seriesNames = ko.observableArray([]);
            self.groupsNames = ko.observableArray([]);

            // Parse input data and configure charts
            self.visualize = function () {
                try {
                    const parsedData = dataParser.parseTsv(this.inputData().trim(), self.missingDataRule());
                    const seriesNames = utils.getNumericColumns(parsedData.columns, parsedData.result[0]);
                    const groupsNames = utils.difference(parsedData.columns, seriesNames);

                    self.chartData(parsedData.result);
                    self.seriesNames(utils.convertToLabelValue(seriesNames));
                    self.groupsNames(utils.convertToLabelValue(groupsNames));
                } catch (error) {
                    if (error.code === '003') {
                        const popup = $('#decisionsPopup')[0];
                        popup.open();
                    } else {
                        self.messages([utils.constructMessage(error.severity || constants.ERROR, error.message)]);
                    }
                }

            };

            // Missing data Rule popup
            self.showDecisionsPopup = function (data, event) {
                const ui = event.detail;
                if (!$(event.target).is("#decisionsPopup"))
                    return;

                if ("open" === ui.action) {
                    event.preventDefault();
                    const options = {"direction": "top"};
                    oj.AnimationUtils.slideIn(ui.element, options).then(ui.endCallback);
                }
                else if ("close" === ui.action) {
                    event.preventDefault();
                    ui.endCallback();
                    self.visualize();
                }
            };

        }

        $(
            function () {
                ko.applyBindings(new RootViewModel(), document.getElementById('mainContent'));
            }
        );
    });


