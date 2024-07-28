import { addNumbers, heroObject } from "./moduleImport.js";
import { minusNumbers } from "./moduleImport.js";
import * as utils from "./utils.js";
import _ from "lodash";
import axios from "axios";

const result = addNumbers(5, 10);
// console.log(result);

// console.log(heroObject);

const minusResult = minusNumbers(50, 12);
// console.log(minusResult);

const useUtilOne = utils.PI * 10;
// console.log(useUtilOne);
const useUtilTwo = utils.squareIt(5);
// console.log(useUtilTwo);

// ? now we will use lodash to do some operations
const resultNumbers = _.sum([1, 2, 3]);
// console.log(resultNumbers);

axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
