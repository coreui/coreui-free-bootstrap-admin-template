$(function (){

  $("#range_01").ionRangeSlider();

  $("#range_02").ionRangeSlider({
    min: 100,
    max: 1000,
    from: 550
  });

  $("#range_03").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
  });

  $("#range_04").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500
  });

  $("#range_05").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500,
    step: 250
  });

  $("#range_06").ionRangeSlider({
    type: "double",
    grid: true,
    min: -12.8,
    max: 12.8,
    from: -3.2,
    to: 3.2,
    step: 0.1
  });

  $("#range_07").ionRangeSlider({
    type: "double",
    grid: true,
    from: 1,
    to: 5,
    values: [0, 10, 100, 1000, 10000, 100000, 1000000]
  });

  $("#range_08").ionRangeSlider({
    grid: true,
    from: 5,
    values: [
      "zero", "one",
      "two", "three",
      "four", "five",
      "six", "seven",
      "eight", "nine",
      "ten"
    ]
  });


  $("#range_09").ionRangeSlider({
    grid: true,
    from: 3,
    values: [
      "January", "February", "March",
      "April", "May", "June",
      "July", "August", "September",
      "October", "November", "December"
    ]
  });

  $("#range_10").ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 100000,
    step: 1000,
    prettify_enabled: false
  });


  $("#range_11").ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 200000,
    step: 1000,
    prettify_enabled: true
  });

  $("#range_12").ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 300000,
    step: 1000,
    prettify_enabled: true,
    prettify_separator: "."
  });

  $("#range_13").ionRangeSlider({
    grid: true,
    min: 1000,
    max: 1000000,
    from: 400000,
    step: 1000,
    prettify_enabled: true,
    prettify: function (num) {
      return (Math.random() * num).toFixed(0);
    }
  });

  $("#range_14").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 10000,
    from: 1000,
    step: 9000,
    prefix: "$"
  });

  $("#range_15").ionRangeSlider({
    type: "single",
    grid: true,
    min: -90,
    max: 90,
    from: 0,
    postfix: "°"
  });

  $("#range_16").ionRangeSlider({
    grid: true,
    min: 18,
    max: 70,
    from: 30,
    prefix: "Age ",
    max_postfix: "+"
  });

  $("#range_17").ionRangeSlider({
    type: "double",
    min: 100,
    max: 200,
    from: 145,
    to: 155,
    prefix: "Weight: ",
    postfix: " million pounds",
    decorate_both: true
  });

  $("#range_18").ionRangeSlider({
    type: "double",
    min: 100,
    max: 200,
    from: 145,
    to: 155,
    prefix: "Weight: ",
    postfix: " million pounds",
    decorate_both: false
  });

  $("#range_19").ionRangeSlider({
    type: "double",
    min: 100,
    max: 200,
    from: 148,
    to: 152,
    prefix: "Weight: ",
    postfix: " million pounds",
    values_separator: " → "
  });

  $("#range_20").ionRangeSlider({
    type: "double",
    min: 100,
    max: 200,
    from: 148,
    to: 152,
    prefix: "Range: ",
    postfix: " light years",
    decorate_both: false,
    values_separator: " to "
  });

  $("#range_21").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 2000,
    from: 1200,
    to: 1800,
    hide_min_max: true,
    hide_from_to: true,
    grid: false
  });

  $("#range_22").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 2000,
    from: 1200,
    to: 1800,
    hide_min_max: true,
    hide_from_to: true,
    grid: false
  });

  $("#range_23").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 2000,
    from: 1200,
    to: 1800,
    hide_min_max: false,
    hide_from_to: true,
    grid: false
  });

  $("#range_24").ionRangeSlider({
    type: "double",
    min: 1000,
    max: 2000,
    from: 1200,
    to: 1800,
    hide_min_max: true,
    hide_from_to: false,
    grid: false
  });

})
