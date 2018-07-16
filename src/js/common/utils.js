"use strict";

define(['lodash'], function (_) {

    function number(x) {
        return x === null ? NaN : +x;
    }

    function quantile(arr, p) {
        if (!Array.isArray(arr)) {
            throw new TypeError('Invalid input argument. First argument must be an array.');
        }
        if (typeof p !== 'number' || p !== p) {
            throw new TypeError('Invalid input argument. Quantile probability must be numeric.');
        }
        if (p < 0 || p > 1) {
            throw new TypeError('Invalid input argument. Quantile probability must be on the interval [0,1].');
        }
        let len = arr.length,
            id;

        arr.sort();

        if (p === 0.0) {
            return arr[0];
        }
        if (p === 1.0) {
            return arr[len - 1];
        }
        // Calculate the vector index marking the quantile:
        id = ( len * p ) - 1;

        // Is the index an integer?
        if (id === Math.floor(id)) {
            // Value is the average between the value at id and id+1:
            return ( arr[id] + arr[id + 1] ) / 2.0;
        }
        // Round up to the next index:
        id = Math.ceil(id);
        return arr[id];
    }

    function getBoxValues(items) {
        return {
            low: quantile(items, 0),
            q1: quantile(items, 0.25),
            q2: quantile(items, 0.5),
            q3: quantile(items, 0.75),
            high: quantile(items, 1),
        };
    }

    function isNumber(value) {
        return typeof value === 'number' && isFinite(value);
    }

    function groupBy(data, group) {
        return _.groupBy(data, group);
    }

    return {

        convertType: function (value) {
            try {
                return (new Function("return " + value + ";"))();
            } catch (e) {
                return value;
            }
        },

        formatScatterSeries: function (inputData, xAxisColumnName, yAxisColumnName, cluster) {
            return _.map(groupBy(inputData, cluster),
                (data, groupName) => ({
                    name: groupName,
                    items: _.map(data, data => ({x: data[xAxisColumnName], y: data[yAxisColumnName]}))
                }));
        },

        getArraySeries: function (inputData, columnName, cluster) {
            return _.map(groupBy(inputData, cluster),
                (data, groupName) => ({
                    name: groupName,
                    items: _.map(data, data => data[columnName])
                }));
        },

        formatBoxPlotSeries: function (inputData, yAxisColumnName, cluster) {
            return _.map(groupBy(inputData, cluster),
                (data, groupName) => {
                    return {
                        name: groupName,
                        items: [getBoxValues(_.map(data, d => d[yAxisColumnName]))]
                    }
                });
        },

        isNull: function (v) {
            return (v === undefined || v === null || v === "null" || isNaN(v));
        },

        isNumber: function (v) {
            return isNumber(v);
        },

        getNumericColumns: function (columns, row) {
            return _.map(columns).filter(column => isNumber(+row[column]));
        },

        difference: function (array, values) {
            return _.difference(array, values);
        },

        convertToLabelValue: function (array) {
            return _.map(array, v => ({label: v, value: v}));
        },

        constructMessage: function (severity, summary, detail, autoTimeout) {
            return {
                severity,
                summary,
                detail,
                autoTimeout: autoTimeout || 5000
            };
        }
    }
});