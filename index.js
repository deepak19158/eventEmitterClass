const time = require("./getTime");
const model = require("./model");
const add = require("./addlog");

class EmitterEvent {
  event = {};

  //ON EVENT OF CLASS
  on = (eventName, callback) => {
    if (this.event[eventName]) {
      this.event[eventName].push(callback); //adding function to the dictinary with eventanme
    } else {
      this.event[eventName] = [callback];
    }
  };

  //trigger event of class
  trigger = async (eventName) => {
    if (this.event[eventName]) {
      this.event[eventName].forEach(async (callback) => {
        const ts = time();

        let res = model({ name: eventName, timestamp: ts }); //using moongoose model
        await res.save();
        add(`${eventName} --> ${ts}\n`); //ading into log file

        callback.apply(); //running callback function
      });
    }
  };

  off = async (eventName) => {
    const ts = time();

    let res = model({ name: eventName, timestamp: ts });
    await res.save();
    add(`${eventName} --> ${ts}\n`);

    delete this.event[eventName]; //deleting all the associated callback function
  };
}

const ee = new EmitterEvent(); //instantiating the class

ee.on("clicked", () => {
  console.log("this button is clicked");
});
ee.on("print", () => {
  console.log("How are you?");
});

ee.trigger("clicked");
ee.trigger("print");

ee.off("clicked");

//function to clear all the data of database
const clear = async () => {
  let res = await model.find({}).deleteMany();
  console.log(res);
};
// clear();
