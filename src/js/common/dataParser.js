"use strict";

define(['lodash', 'common/utils', 'common/constants', 'common/Errors'], function (_, utils, constants, errors) {

    return {

        //Validate TSV data and convert it to an array of object
        parseTsv: function (input, missingDataRule) {
            const lines = input.split("\\n");
            const columns = _.map(lines[0].split("\\t"), value => utils.convertType(value));

            //Check if the data contains a valid header
            _.filter(columns, value => {
                if (utils.isNumber(value) || !value) {
                    throw errors.ValidationError("001", constants.ERROR, "Column names shouldn't be empty, null or numeric values.");
                }
            });

            let result = [];

            for (let i = 1; i < lines.length; i++) {

                let obj = {};
                let currentLine = lines[i].split("\\t");

                for (let j = 0; j < columns.length; j++) {
                    let currentValue = utils.convertType(currentLine[j]);
                    if (currentValue === undefined) {
                        throw errors.ValidationError('002', constants.ERROR, `The row ${i} is incomplete. Please submit a complete dataset.`);
                    }

                    if (currentValue === null) {
                        if (!missingDataRule) {
                            throw errors.ValidationError('003', constants.ERROR, 'Dataset contains null values. Missing data rules: ignore row that contain null values, replace null by 0, display nothing');
                        } else if (missingDataRule === constants.IGNORE_ROWS) {
                            obj = {};
                            break;
                        } else if (missingDataRule === constants.REPLACE_WITH_ZERO) {
                            currentValue = 0;
                        }
                    }
                    obj[columns[j]] = currentValue;
                }

                if (!_.isEmpty(obj)) {
                    result.push(obj);
                }

            }

            return {result, columns};
        },


        //TODO: Add other parsers. Example: CsvParser
    }
});