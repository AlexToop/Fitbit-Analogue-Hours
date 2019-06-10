import clock from "clock";
import document from "document";
import {preferences} from "user-settings";
import * as util from "../common/utils";
import {display} from "display";
import {battery} from "power";
import {today} from 'user-activity';
import {HeartRateSensor} from "heart-rate";
import {vibration} from "haptics";
import * as messaging from "messaging";

const dateText = document.getElementById('date');
const statsText1 = document.getElementById('js-stats1');
const statsText2 = document.getElementById('js-stats2');
const statsDivi = document.getElementById('js-bat-division');
const hoursBar = document.getElementById('hours');
const minutesBar = document.getElementById('minutes');
const backTile = document.getElementById('back');

const inv1 = document.getElementById('inv1');
const inv2 = document.getElementById('inv2');
const background = document.getElementById('background');
const no1 = document.getElementById('no1');
const no2 = document.getElementById('no2');
const no3 = document.getElementById('no3');
const no4 = document.getElementById('no4');
const no5 = document.getElementById('no5');
const no6 = document.getElementById('no6');
const no7 = document.getElementById('no7');
const no8 = document.getElementById('no8');
const no9 = document.getElementById('no9');
const no10 = document.getElementById('no10');
const no11 = document.getElementById('no11');
const no12 = document.getElementById('no12');
// for battery saving
const sensors = [];
var noBatteryDots = 5;
clock.granularity = "minutes";

clock.ontick = (evt) => {
  let date = evt.date;
  let hours = date.getHours() % 12;
  let minutes = date.getMinutes();

  hoursBar.groupTransform.rotate.angle = (hours + minutes / 60) * 30;
  minutesBar.groupTransform.rotate.angle = minutes * 6;
  backTile.groupTransform.rotate.angle = minutes * 6;

  // todo add day gui update
  var day = util.getDay(date.getDay());
  dateText.text = date.getDate();

  updateBattery(battery);
  updateActivity(today);
};


if (HeartRateSensor) {
  const hrm = new HeartRateSensor({frequency: 1});
  statsText2.text = "NA HR";
  hrm.addEventListener("reading", () => {
    statsText2.text = hrm.heartRate + " HR";
  });
  sensors.push(hrm);
  hrm.start();
}


display.addEventListener("change", () => {
  if (display.on) {
    // Have sensors running when screen is on.
    sensors.map(sensor => sensor.start());
    updateBattery(battery);
    updateActivity(today);
  } else {
    // Have sensors off when screen is off.
    sensors.map(sensor => sensor.stop());
  }
});


// Message is received
messaging.peerSocket.onmessage = evt => {
  if (evt.data.key === "leftColour" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    inv1.style.fill = color;
    inv2.style.fill = color;
  }
  if (evt.data.key === "rightColour" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    background.style.fill = color;
  }
  if (evt.data.key === "timeActivitiesColour" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    no1.style.fill = color;
    no2.style.fill = color;
    no3.style.fill = color;
    no4.style.fill = color;
    no5.style.fill = color;
    no6.style.fill = color;
    no7.style.fill = color;
    no8.style.fill = color;
    no9.style.fill = color;
    no10.style.fill = color;
    no11.style.fill = color;
    no12.style.fill = color;

    statsText1.style.fill = color;
    statsDivi.style.fill = color;
    statsText2.style.fill = color;
    dateText.style.fill = color;
  }
};


function updateBattery(battery) {
  noBatteryDots = parseInt(battery.chargeLevel/20) + 1;
  var batteryText = ".";
  for (var i = 1; i < noBatteryDots; i++){
    batteryText += "  .";
  }
  statsDivi.text = batteryText;
}


function updateActivity(today) {
  statsText1.text = today.adjusted.steps + " ST";
}