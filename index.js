function generateDices(nb, dest) {
  var target = dest === "fixes" ? "changeants" : "fixes";
  for (let i = 0; i < nb; i++) {
    val = Math.floor(Math.random() * 6) + 1;
    $("#" + dest).append(`<img src="img/${val}.png" class="${val}"/>`);
  }
  $("#" + target).each(function () {
    var image = $(this).children("img");
    image.remove();
  });
}

function getScore() {
  const des = [];
  $("img").each(function () {
    var myClasses = this.classList;
    des.push(myClasses[0]);
  });

  // console.log(des);
  calculatePoints(des);
}

var roll = 0;
var eyes = 0;
var i;

function calculatePoints(allEyes) {
  calculateOnes(allEyes);
  calculateTwos(allEyes);
  calculateThrees(allEyes);
  calculateFours(allEyes);
  calculateFives(allEyes);
  calculateSixes(allEyes);

  calculateThreeOfAKind(allEyes);
  calculateFourOfAKind(allEyes);
  calculateFullHouse(allEyes);
  calculateSmallStraight(allEyes);
  calculateLargeStraight(allEyes);
  calculateYahtzee(allEyes);
  calculateChance(allEyes);

  calculateAll();
}

function calculateOnes(allEyes) {
  if (!$("#res1").hasClass("frozen")) {
    var sumOnes = 0;
    for (i = 0; i < allEyes.length; i++) {
      if (allEyes[i] == 1) {
        sumOnes += 1;
      }
    }
    $("#res1").text(sumOnes);
  }
}

function calculateTwos(allEyes) {
  if (!$("#res2").hasClass("frozen")) {
    var sumTwos = 0;
    for (i = 0; i < allEyes.length; i++) {
      if (allEyes[i] == 2) {
        sumTwos += 2;
      }
    }
    $("#res2").text(sumTwos);
  }
}

function calculateThrees(allEyes) {
  if (!$("#res3").hasClass("frozen")) {
    var sumThrees = 0;
    for (i = 0; i < allEyes.length; i++) {
      if (allEyes[i] == 3) {
        sumThrees += 3;
      }
    }
    $("#res3").text(sumThrees);
  }
}

function calculateFours(allEyes) {
  if (!$("#res4").hasClass("frozen")) {
    var sumFours = 0;
    for (i = 0; i < allEyes.length; i++) {
      if (allEyes[i] == 4) {
        sumFours += 4;
      }
    }
    $("#res4").text(sumFours);
  }
}

function calculateFives(allEyes) {
  if (!$("#res5").hasClass("frozen")) {
    var sumFives = 0;
    for (i = 0; i < allEyes.length; i++) {
      if (allEyes[i] == 5) {
        sumFives += 5;
      }
    }
    $("#res5").text(sumFives);
  }
}

function calculateSixes(allEyes) {
  if (!$("#res6").hasClass("frozen")) {
    var sumSixes = 0;
    for (i = 0; i < allEyes.length; i++) {
      if (allEyes[i] == 6) {
        sumSixes += 6;
      }
    }
    $("#res6").text(sumSixes);
  }
}

function calculateThreeOfAKind(allEyes) {
  if (!$("#resBre").hasClass("frozen")) {
    var sumThreeOfAKind = 0;
    if (
      count(allEyes, 1) >= 3 ||
      count(allEyes, 2) >= 3 ||
      count(allEyes, 3) >= 3 ||
      count(allEyes, 4) >= 3 ||
      count(allEyes, 5) >= 3 ||
      count(allEyes, 6) >= 3
    ) {
      var sumThreeOfAKind = 0;
      for (i = 0; i < allEyes.length; i++) {
        sumThreeOfAKind += allEyes[i];
      }
    }
    $("#resBre").text(sumThreeOfAKind);
  }
}
function calculateFourOfAKind(allEyes) {
  if (!$("#resCar").hasClass("frozen")) {
    var sumFourOfAKind = 0;
    if (
      count(allEyes, 1) >= 4 ||
      count(allEyes, 2) >= 4 ||
      count(allEyes, 3) >= 4 ||
      count(allEyes, 4) >= 4 ||
      count(allEyes, 5) >= 4 ||
      count(allEyes, 6) >= 4
    ) {
      for (i = 0; i < allEyes.length; i++) {
        sumFourOfAKind += allEyes[i];
      }
    }
    $("#resCar").text(sumFourOfAKind);
  }
}
function calculateFullHouse(allEyes) {
  if (!$("#resFul").hasClass("frozen")) {
    var sumFullHouse = 0;
    if (
      (count(allEyes, 1) == 3 ||
        count(allEyes, 2) == 3 ||
        count(allEyes, 3) == 3 ||
        count(allEyes, 4) == 3 ||
        count(allEyes, 5) == 3 ||
        count(allEyes, 6) == 3) &&
      (count(allEyes, 1) == 2 ||
        count(allEyes, 2) == 2 ||
        count(allEyes, 3) == 2 ||
        count(allEyes, 4) == 2 ||
        count(allEyes, 5) == 2 ||
        count(allEyes, 6) == 2)
    ) {
      for (i = 0; i < allEyes.length; i++) {
        sumFullHouse += allEyes[i];
      }
    }
    $("#resFul").text(sumFullHouse);
  }
}
function calculateSmallStraight(allEyes) {
  if (!$("#resSui1").hasClass("frozen")) {
    var sumSmall = 0;

    allEyes.sort();

    /*var arr1 = [1,2,3,4];
		var arr2 = [2,3,4,5];
		var arr3 = [3,4,5,6];*/

    if (
      jQuery.inArray(3, allEyes) !== -1 &&
      jQuery.inArray(4, allEyes) !== -1 &&
      ((jQuery.inArray(1, allEyes) !== -1 && jQuery.inArray(2, allEyes) !== -1) ||
        (jQuery.inArray(2, allEyes) !== -1 && jQuery.inArray(5, allEyes) !== -1) ||
        (jQuery.inArray(5, allEyes) !== -1 && jQuery.inArray(6, allEyes) !== -1))
    ) {
      sumSmall = 30;
    }

    $("#resSui1").text(sumSmall);
  }
}
function calculateLargeStraight(allEyes) {
  if (!$("#resSui2").hasClass("frozen")) {
    var sumLarge = 0;

    allEyes.sort();

    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [2, 3, 4, 5, 6];

    if (
      ($(allEyes).not(arr1).length == 0 && $(arr1).not(allEyes).length == 0 && allEyes.length == arr1.length) ||
      ($(allEyes).not(arr2).length == 0 && $(arr2).not(allEyes).length == 0 && allEyes.length == arr2.length)
    ) {
      sumLarge = 40;
    }

    $("#resSui2").text(sumLarge);
  }
}
function calculateYahtzee(allEyes) {
  if (!$("#resYah").hasClass("frozen")) {
    var yahtzee = true;
    var sumYahtzee = 0;

    for (i = 1; i < allEyes.length; i++) {
      if (allEyes[i] != allEyes[i - 1]) {
        yahtzee = false;
        return false;
      }
    }

    if (yahtzee == true) {
      sumYahtzee = 50;
    }

    $("#resYah").text(sumYahtzee);
  }
}
function calculateChance(allEyes) {
  if (!$("#resCha").hasClass("frozen")) {
    var sumChance = 0;
    for (i = 0; i < allEyes.length; i++) {
      sumChance += parseInt(allEyes[i]);
    }
    $("#resCha").text(sumChance);
  }
}

function calculateAll() {
  var allPoints = 0;

  $(".winField").each(function () {
    if ($(this).hasClass("freeze") || $(this).hasClass("frozen")) {
      allPoints += parseInt($(this).find("span").text());
    }
  });

  $("#resSup1").text(
    parseInt($("#res1").text()) +
      parseInt($("#res2").text()) +
      parseInt($("#res3").text()) +
      parseInt($("#res4").text()) +
      parseInt($("#res5").text()) +
      parseInt($("#res6").text())
  );
  if (parseInt($("#resSup1").text()) > 63) {
    $("#resSurBon").text(35);
  }
  $("#resSup").text(parseInt($("#resSup1").text()) + parseInt($("#resSurBon").text()));
  $("#resInf").text(
    parseInt($("#resBre").text()) +
      parseInt($("#resCar").text()) +
      parseInt($("#resFul").text()) +
      parseInt($("#resSui1").text()) +
      parseInt($("#resSui2").text()) +
      parseInt($("#resYah").text()) +
      parseInt($("#resCha").text()) +
      parseInt($("#res").text())
  );
  $("#resTot").text(parseInt($("#resSup").text()) + parseInt($("#resInf").text()));
}

function count(array, value) {
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      counter++;
    }
  }
  return counter;
}

$(document).ready(function ($) {
  $("button").on("click", function () {
    $(this).text(function (i, text) {
      return text === "Lancer" ? "Relancer" : "Lancer";
    });
    if ($(this).text() !== "Lancer") {
      generateDices(5, "changeants");
    } else {
      generateDices($("#changeants img").length, "fixes");
      getScore();
      $("tr td:not(:first-child)").on("click", function () {
        $(this).addClass("frozen");
        $("tr td:not(:first-child)").off("click");
      });    
    }
  });


  $(document).on("click", "#changeants img", function () {
    var image = $(this);
    image.remove();
    $("#fixes").append(image);
  });
});
