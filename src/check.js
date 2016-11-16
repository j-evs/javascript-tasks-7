'use strict';

exports.init = function () {

    function isFunction(testArg) {
        return typeof testArg === 'function';
    }

    Object.prototype.checkHasKeys = Array.prototype.checkHasKeys = function (testKeys) {
        if (isFunction(this)) {
            return;
        }
        let objectKeys = Object.keys(this);
        return testKeys.every(testKey => {
            return objectKeys.includes(testKey);
        });
    };

    Object.prototype.checkHasValueType =
    Array.prototype.checkHasValueType = function (value, TypeConstructor) {
        if (isFunction(this)) {
            return;
        }
        return typeof this[value] === TypeConstructor.name.toLowerCase();
    };

    Object.prototype.checkContainsValues =
    Array.prototype.checkContainsValues = function (testValues) {
        if (isFunction(this)) {
            return;
        }
        return testValues.every(value => {
            return Object.values(this).includes(value);
        });
    };

    Function.prototype.checkHasParamsCount = function (testParams) {
        return this.length === testParams;
    };

    Array.prototype.checkHasLength = String.prototype.checkHasLength = function (testLength) {
        return this.length === testLength;
    };

    String.prototype.checkHasWordsCount = function (wordCount) {
        return this.split(' ').length === wordCount;
    };
};
