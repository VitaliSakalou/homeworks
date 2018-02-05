"use strict";

const COUNTER_BUTTON_CREATE='COUNTER_BUTTON_CREATE';
const COUNTER_BUTTON_ADD='COUNTER_BUTTON_ADD';
const COUNTER_BUTTON_MULTIPLY='COUNTER_BUTTON_MULTIPLY';
const COUNTER_BUTTON_DIVIDIR='COUNTER_BUTTON_DIVIDIR';

const counterButton_create=function(counterid) {
  return {
    type: COUNTER_BUTTON_CREATE,
    counterid:counterid,
  };
}

const counterButton_add=function(counterid,addvalue) {
  return {
    type: COUNTER_BUTTON_ADD,
    counterid:counterid,
    addvalue:addvalue,
  };
}

const counterButton_multiply=function(counterid,addvalue) {
    return {
      type: COUNTER_BUTTON_MULTIPLY,
      counterid:counterid,
      addvalue:addvalue,
    };
  }

  const counterButton_dividir=function(counterid,addvalue) {
    return {
      type: COUNTER_BUTTON_DIVIDIR,
      counterid:counterid,
      addvalue:addvalue,
    };
  }

export {
  counterButton_create,COUNTER_BUTTON_CREATE,
  counterButton_add,COUNTER_BUTTON_ADD,
  counterButton_multiply,COUNTER_BUTTON_MULTIPLY,
  counterButton_dividir,COUNTER_BUTTON_DIVIDIR,
}
