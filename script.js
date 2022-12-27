import data from './els.json' assert {type:'json'};
import fs from 'fs'
// console.log(data)
const ChangeText = (val) => {
  if (val === "W") {
    return "Ə";
  } else if (val === "i") {
    return "İ";
  } else if (val === "s") {
    return "Ş";
  } else if (val === "g") {
    return "Ğ";
  } else if (val === "o") {
    return "Ö";
  } else if (val === "c") {
    return "Ç";
  } else if (val === "u") {
    return "Ü";
  } else {
    return val;
  }
};
const RepairString = (text) => {
  const arr = [];
  for (let i of String(text)) {
    arr.push(i);
  }
  const neww = arr.map((val) => ChangeText(val));
  return neww.join("");
};

const RepairData = (data) => {
  const values = Object.values(data);
  const keys = Object.keys(data);

  const neww = values.map((val) => RepairString(val));
  for (let i = 0; i < values.length; i++) {
    data[`${keys[i]}`] = neww[i];
    // console.log(keys[i], neww[i]);
  }
  return data;
};
const RepairAllData = (alldata) => {
  for (let i of alldata) {
    RepairData(i);
  }
  return alldata;
};
// console.log(RepairAllData(data));
const jsonString = JSON.stringify(RepairAllData(data))
fs.writeFile('./newCustomer.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})