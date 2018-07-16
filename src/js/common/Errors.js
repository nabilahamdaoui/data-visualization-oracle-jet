"use strict";

class ValidationError extends Error {
    constructor(code, severity, message) {
        super(message);
        this.name = "ValidationError";
        this.code = code;
        this.severity = severity;
    }
}

define(function () {
    return {
        ValidationError: function (code, severity, message) {
            return new ValidationError(code, severity, message);
        }
    }
});

