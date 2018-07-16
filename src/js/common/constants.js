"use strict";

define(function () {

    return {

        ERROR: "error",
        WARNING: "warning",
        CONFIRMATION: "confirmation",
        INFO: "info",

        IGNORE_ROWS: "ignoreRows",
        REPLACE_WITH_ZERO: "replaceWithZero",

        SAMPLEDATA: 'Sepal length\\tSepal width\\tPetal length\\tPetal Width\\tSpecies\\n5.1\\t3.5\\t1.4\\t0.2\\tsetosa\\n4.9\\t3.0' +
        '\\t1.4\\t0.2\\tsetosa\\n4.7\\t3.2\\t1.3\\t0.2\\tsetosa\\n4.6\\t3.1\\t1.5\\t0.2\\tsetosa\\n5.0\\t3.6\\t1.4\\t0.2\\tsetosa\\n5.4\\t3.9\\t' +
        '1.7\\t0.4\\tsetosa\\n4.6\\t3.4\\t1.4\\t0.3\\tsetosa\\n5.0\\t3.4\\t1.5\\t0.2\\tsetosa\\n4.4\\t2.9\\t1.4\\t0.2\\tsetosa\\n4.9\\t3.1\\t' +
        '1.5\\t0.1\\tsetosa\\n5.4\\t3.7\\t1.5\\t0.2\\tsetosa\\n4.8\\t3.4\\t1.6\\t0.2\\tsetosa\\n4.8\\t3.0\\t1.4\\t0.1\\tsetosa\\n4.3\\t3.0\\t' +
        '1.1\\t0.1\\tsetosa\\n5.8\\t4.0\\t1.2\\t0.2\\tsetosa\\n5.7\\t4.4\\t1.5\\t0.4\\tsetosa\\n5.4\\t3.9\\t1.3\\t0.4\\tsetosa\\n5.1\\t3.5\\t' +
        '1.4\\t0.3\\tsetosa\\n5.7\\t3.8\\t1.7\\t0.3\\tsetosa\\n5.1\\t3.8\\t1.5\\t0.3\\tsetosa\\n5.4\\t3.4\\t1.7\\t0.2\\tsetosa\\n5.1\\t3.7\\t' +
        '1.5\\t0.4\\tsetosa\\n4.6\\t3.6\\t1.0\\t0.2\\tsetosa\\n5.1\\t3.3\\t1.7\\t0.5\\tsetosa\\n4.8\\t3.4\\t1.9\\t0.2\\tsetosa\\n5.0\\t3.0\\t' +
        '1.6\\t0.2\\tsetosa\\n5.0\\t3.4\\t1.6\\t0.4\\tsetosa\\n5.2\\t3.5\\t1.5\\t0.2\\tsetosa\\n5.2\\t3.4\\t1.4\\t0.2\\tsetosa\\n4.7\\t3.2\\t' +
        '1.6\\t0.2\\tsetosa\\n4.8\\t3.1\\t1.6\\t0.2\\tsetosa\\n5.4\\t3.4\\t1.5\\t0.4\\tsetosa\\n5.2\\t4.1\\t1.5\\t0.1\\tsetosa\\n5.5\\t4.2\\t' +
        '1.4\\t0.2\\tsetosa\\n4.9\\t3.1\\t1.5\\t0.1\\tsetosa\\n5.0\\t3.2\\t1.2\\t0.2\\tsetosa\\n5.5\\t3.5\\t1.3\\t0.2\\tsetosa\\n4.9\\t3.1\\t' +
        '1.5\\t0.1\\tsetosa\\n4.4\\t3.0\\t1.3\\t0.2\\tsetosa\\n5.1\\t3.4\\t1.5\\t0.2\\tsetosa\\n5.0\\t3.5\\t1.3\\t0.3\\tsetosa\\n4.5\\t2.3\\t' +
        '1.3\\t0.3\\tsetosa\\n4.4\\t3.2\\t1.3\\t0.2\\tsetosa\\n5.0\\t3.5\\t1.6\\t0.6\\tsetosa\\n5.1\\t3.8\\t1.9\\t0.4\\tsetosa\\n4.8\\t3.0\\t' +
        '1.4\\t0.3\\tsetosa\\n5.1\\t3.8\\t1.6\\t0.2\\tsetosa\\n4.6\\t3.2\\t1.4\\t0.2\\tsetosa\\n5.3\\t3.7\\t1.5\\t0.2\\tsetosa\\n5.0\\t3.3\\t' +
        '1.4\\t0.2\\tsetosa\\n7.0\\t3.2\\t4.7\\t1.4\\tversicolor\\n6.4\\t3.2\\t4.5\\t1.5\\tversicolor\\n6.9\\t3.1\\t4.9\\t1.5\\tversicolor' +
        '\\n5.5\\t2.3\\t4.0\\t1.3\\tversicolor\\n6.5\\t2.8\\t4.6\\t1.5\\tversicolor\\n5.7\\t2.8\\t4.5\\t1.3\\tversicolor\\n6.3\\t3.3\\t4.7\\t' +
        '1.6\\tversicolor\\n4.9\\t2.4\\t3.3\\t1.0\\tversicolor\\n6.6\\t2.9\\t4.6\\t1.3\\tversicolor\\n5.2\\t2.7\\t3.9\\t1.4\\tversicolor\\n' +
        '5.0\\t2.0\\t3.5\\t1.0\\tversicolor\\n5.9\\t3.0\\t4.2\\t1.5\\tversicolor\\n6.0\\t2.2\\t4.0\\t1.0\\tversicolor\\n6.1\\t2.9\\t4.7\\t' +
        '1.4\\tversicolor\\n5.6\\t2.9\\t3.6\\t1.3\\tversicolor\\n6.7\\t3.1\\t4.4\\t1.4\\tversicolor\\n5.6\\t3.0\\t4.5\\t1.5\\tversicolor\\n' +
        '5.8\\t2.7\\t4.1\\t1.0\\tversicolor\\n6.2\\t2.2\\t4.5\\t1.5\\tversicolor\\n5.6\\t2.5\\t3.9\\t1.1\\tversicolor\\n5.9\\t3.2\\t4.8\\t1.8' +
        '\\tversicolor\\n6.1\\t2.8\\t4.0\\t1.3\\tversicolor\\n6.3\\t2.5\\t4.9\\t1.5\\tversicolor\\n6.1\\t2.8\\t4.7\\t1.2\\tversicolor\\n6.4' +
        '\\t2.9\\t4.3\\t1.3\\tversicolor\\n6.6\\t3.0\\t4.4\\t1.4\\tversicolor\\n6.8\\t2.8\\t4.8\\t1.4\\tversicolor\\n6.7\\t3.0\\t5.0\\t1.7' +
        '\\tversicolor\\n6.0\\t2.9\\t4.5\\t1.5\\tversicolor\\n5.7\\t2.6\\t3.5\\t1.0\\tversicolor\\n5.5\\t2.4\\t3.8\\t1.1\\tversicolor\\n5.5' +
        '\\t2.4\\t3.7\\t1.0\\tversicolor\\n5.8\\t2.7\\t3.9\\t1.2\\tversicolor\\n6.0\\t2.7\\t5.1\\t1.6\\tversicolor\\n5.4\\t3.0\\t4.5\\t1.5\\t' +
        'versicolor\\n6.0\\t3.4\\t4.5\\t1.6\\tversicolor\\n6.7\\t3.1\\t4.7\\t1.5\\tversicolor\\n6.3\\t2.3\\t4.4\\t1.3\\tversicolor\\n5.6\\t' +
        '3.0\\t4.1\\t1.3\\tversicolor\\n5.5\\t2.5\\t4.0\\t1.3\\tversicolor\\n5.5\\t2.6\\t4.4\\t1.2\\tversicolor\\n6.1\\t3.0\\t4.6\\t1.4\\t' +
        'versicolor\\n5.8\\t2.6\\t4.0\\t1.2\\tversicolor\\n5.0\\t2.3\\t3.3\\t1.0\\tversicolor\\n5.6\\t2.7\\t4.2\\t1.3\\tversicolor\\n5.7\\t' +
        '3.0\\t4.2\\t1.2\\tversicolor\\n5.7\\t2.9\\t4.2\\t1.3\\tversicolor\\n6.2\\t2.9\\t4.3\\t1.3\\tversicolor\\n5.1\\t2.5\\t3.0\\t1.1\\t' +
        'versicolor\\n5.7\\t2.8\\t4.1\\t1.3\\tversicolor\\n6.3\\t3.3\\t6.0\\t2.5\\tvirginica\\n5.8\\t2.7\\t5.1\\t1.9\\tvirginica\\n7.1\\t' +
        '3.0\\t5.9\\t2.1\\tvirginica\\n6.3\\t2.9\\t5.6\\t1.8\\tvirginica\\n6.5\\t3.0\\t5.8\\t2.2\\tvirginica\\n7.6\\t3.0\\t6.6\\t2.1\\tvirginica' +
        '\\n4.9\\t2.5\\t4.5\\t1.7\\tvirginica\\n7.3\\t2.9\\t6.3\\t1.8\\tvirginica\\n6.7\\t2.5\\t5.8\\t1.8\\tvirginica\\n7.2\\t3.6\\t6.1\\t' +
        '2.5\\tvirginica\\n6.5\\t3.2\\t5.1\\t2.0\\tvirginica\\n6.4\\t2.7\\t5.3\\t1.9\\tvirginica\\n6.8\\t3.0\\t5.5\\t2.1\\tvirginica\\n' +
        '5.7\\t2.5\\t5.0\\t2.0\\tvirginica\\n5.8\\t2.8\\t5.1\\t2.4\\tvirginica\\n6.4\\t3.2\\t5.3\\t2.3\\tvirginica\\n6.5\\t3.0\\t5.5\\t1.8\\t' +
        'virginica\\n7.7\\t3.8\\t6.7\\t2.2\\tvirginica\\n7.7\\t2.6\\t6.9\\t2.3\\tvirginica\\n6.0\\t2.2\\t5.0\\t1.5\\tvirginica\\n' +
        '6.9\\t3.2\\t5.7\\t2.3\\tvirginica\\n5.6\\t2.8\\t4.9\\t2.0\\tvirginica\\n7.7\\t2.8\\t6.7\\t2.0\\tvirginica\\n6.3\\t2.7\\t4.9\\t1.8\\t' +
        'virginica\\n6.7\\t3.3\\t5.7\\t2.1\\tvirginica\\n7.2\\t3.2\\t6.0\\t1.8\\tvirginica\\n6.2\\t2.8\\t4.8\\t1.8\\tvirginica\\n6.1\\t3.0\\t' +
        '4.9\\t1.8\\tvirginica\\n6.4\\t2.8\\t5.6\\t2.1\\tvirginica\\n7.2\\t3.0\\t5.8\\t1.6\\tvirginica\\n7.4\\t2.8\\t6.1\\t1.9\\tvirginica\\n' +
        '7.9\\t3.8\\t6.4\\t2.0\\tvirginica\\n6.4\\t2.8\\t5.6\\t2.2\\tvirginica\\n6.3\\t2.8\\t5.1\\t1.5\\tvirginica\\n6.1\\t2.6\\t5.6\\t1.4\\t' +
        'virginica\\n7.7\\t3.0\\t6.1\\t2.3\\tvirginica\\n6.3\\t3.4\\t5.6\\t2.4\\tvirginica\\n6.4\\t3.1\\t5.5\\t1.8\\tvirginica\\n6.0\\t3.0\\t' +
        '4.8\\t1.8\\tvirginica\\n6.9\\t3.1\\t5.4\\t2.1\\tvirginica\\n6.7\\t3.1\\t5.6\\t2.4\\tvirginica\\n6.9\\t3.1\\t5.1\\t2.3\\tvirginica\\n' +
        '5.8\\t2.7\\t5.1\\t1.9\\tvirginica\\n6.8\\t3.2\\t5.9\\t2.3\\tvirginica\\n6.7\\t3.3\\t5.7\\t2.5\\tvirginica\\n6.7\\t3.0\\t5.2\\t2.3\\t' +
        'virginica\\n6.3\\t2.5\\t5.0\\t1.9\\tvirginica\\n6.5\\t3.0\\t5.2\\t2.0\\tvirginica\\n6.2\\t3.4\\t5.4\\t2.3\\tvirginica\\n5.9\\t3.0\\t5.1\\t1.8\\tvirginica'

    }
});