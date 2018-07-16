'use strict';

define(
    ['knockout', 'lodash', 'common/utils', 'ojs/ojchart', 'ojs/ojselectcombobox'], function (ko, _, utils) {

        function BarChartModel(params) {
            const self = this;

            self.barSeriesValue = ko.observableArray([]);

            self.yAxis = ko.observable().extend({rateLimit: {method: 'notifyWhenChangesStop'}});
            self.clusterValue = ko.observable().extend({rateLimit: {method: 'notifyWhenChangesStop'}});

            self.update = function() {
                self.barSeriesValue(utils.getArraySeries(params.data(), self.yAxis(), self.clusterValue()))
            };

            self.yAxis.subscribe(self.update);
            self.clusterValue.subscribe(self.update);
            params.data.subscribe(self.update);

            params.seriesNames.subscribe(function () {
                self.yAxis(params.seriesNames()[0].value);
            });

            params.groupsNames.subscribe(function () {
                self.clusterValue(params.groupsNames()[0].value);
            });
        }
        
        return BarChartModel;
    });