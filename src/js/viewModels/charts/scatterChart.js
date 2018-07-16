'use strict';

define(
    ['knockout', 'lodash', 'common/constants', 'common/utils', 'ojs/ojchart', 'ojs/ojselectcombobox'],
    function (ko, _, constants, utils) {

        function ScatterChartModel(params) {
            const self = this;
            let rootViewModel = ko.dataFor(document.getElementById('mainContent'));

            self.scatterData = ko.observableArray([]);
            self.xAxis = ko.observable().extend({rateLimit: {method: 'notifyWhenChangesStop'}});
            self.yAxis = ko.observable().extend({rateLimit: {method: 'notifyWhenChangesStop'}});
            self.clusterValue = ko.observable().extend({rateLimit: {method: 'notifyWhenChangesStop'}});

            self.update = function () {
                if (self.xAxis() && (self.xAxis() === self.yAxis())) {
                    rootViewModel.messages([utils.constructMessage(constants.WARNING, "Please choose different values for X-Axis and Y-Axis")]);
                }
                self.scatterData(utils.formatScatterSeries(params.data(), self.xAxis(), self.yAxis(), self.clusterValue()))
            };

            self.xAxis.subscribe(self.update);
            self.yAxis.subscribe(self.update);
            self.clusterValue.subscribe(self.update);
            params.data.subscribe(self.update);

            params.seriesNames.subscribe(function () {
                self.xAxis(params.seriesNames()[0].value);
                self.yAxis(params.seriesNames()[1].value);
            });

            params.groupsNames.subscribe(function () {
                self.clusterValue(params.groupsNames()[0].value);
            });
        }
        
        return ScatterChartModel;
    });