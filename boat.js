let a = document.getElementById("personscount");
// console.log(typeof a);
let b = document.getElementById("boattype");
let c = document.getElementById("hours");
let msg = document.getElementById("message");

//---------------------------------------------------------------

function getBoatCount() {
  for (i = 0; i < b.length; i++) {
    if (b[i].selected === true) {
      seat = JSON.parse(b[i].value).seats;
      noPersons = parseInt(a.value);
      break;
    }
  }
  boatcount = parseInt(noPersons / seat);
  if (noPersons % seat > 0) {
    // parseInt(noPersons / seat);
    boatcount += 1;
  }
  return boatcount;
}
//----------------------------------------------------------------
function getBoatPrice() {
  for (i = 0; i < b.length; i++) {
    if (b[i].selected === true) {
      amount = JSON.parse(b[i].value).charges;
      boatprice = boatcount * amount;
      break;
    }
  }
  return boatprice;
}
//----------------------------------------------------------------
function calculateBill() {
  time = parseInt(c.value);
  totalprice = time * boatprice;
  return totalprice;
}
//-----------------------------------------------------
function bookRide() {
  event.preventDefault();
  getBoatCount();
  getBoatPrice();
  calculateBill();
  msg.innerHTML = `You need to pay Rs.${totalprice}`;
}
//--------------------------------------------------------------------

// let num = parseInt(a.value);

// // console.log(typeof num);

// let type = b.value;
// console.log(type);

// let time = parseInt(c.value);
// console.log(typeof time);

// let boatprice = 0;
// let totalprice = 0;
// //----------------------------------------
// function getBoatCount() {
//   count = 0;
//   count1 = 0;

//   if (type == "2 seater boat") {
//     count1 = num / 2;
//     count = num % 2;
//     if (count > 0) {
//       count = count1 + 1;
//       boatprice = count * 240;
//     } else {
//       boatprice = count1 * 240;
//     }
//     return boatprice;
//   }
//   //--------------------------------
//   else if (type == "4 seater boat") {
//     count1 = num / 4;
//     count = num % 4;
//     if (count > 0) {
//       count = count1 + 1;
//       boatprice = count * 260;
//     } else {
//       boatprice = count1 * 260;
//     }
//     return boatprice;
//   }
//   //-----------------------------------
//   else if (type == "8 seater boat") {
//     count1 = num / 8;
//     count = num % 8;
//     if (count > 0) {
//       count = count1 + 1;
//       boatprice = count * 540;
//     } else {
//       boatprice = count1 * 540;
//     }
//     return boatprice;
//   }
//   //-----------------
//   else if (type == "15 seater boat") {
//     count1 = num / 15;
//     count = num % 15;
//     if (count > 0) {
//       count = count1 + 1;
//       boatprice = count * 990;
//     } else {
//       boatprice = count1 * 990;
//     }
//     return boatprice;
//   }
// }
// //--------------------------------------------------
// // function getBoatPrice() {
// //   count = getBoatCount();
// //   boatprice = 0;
// //   if (type == "2 seater boat") {
// //     boatprice = count * 240;
// //   } else if (type == "4 seater boat") {
// //     boatprice = count * 260;
// //   } else if (type == "8 seater boat") {
// //     boatprice = count * 560;
// //   } else if (type == "15 seater boat") {
// //     boatprice = count * 990;
// //   }
// //   return boatprice;
// // }
// //------------------------------------------------------------------
// function calculateBill() {
//   totalprice = boatprice * time;
//   return totalprice;
// }
//-------------------------------------------

function bookRide() {
  event.preventDefault();
  getBoatCount();
  getBoatPrice();
  calculateBill();
  msg.innerHTML = `You need to pay Rs.${totalprice}`;
}
