/*=============== COUNTDOWN ONE ===============*/
(function () {
    const second_one = 1000,
          minute_one = second_one * 60,
          hour_one = minute_one * 60,
          day_one = hour_one * 24;
  
    let birthday = "August 20, 2023 00:00:00",
        countDownOne = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let nowOne = new Date().getTime(),
              distanceOne = countDownOne - nowOne;
  
          document.getElementById("days_one").innerText = Math.floor(distanceOne / (day_one)),
            document.getElementById("hours_one").innerText = Math.floor((distanceOne % (day_one)) / (hour_one)),
            document.getElementById("minutes_one").innerText = Math.floor((distanceOne % (hour_one)) / (minute_one)),
            document.getElementById("seconds_one").innerText = Math.floor((distanceOne % (minute_one)) / second_one);
  
          //do something later when date is reached
          // if (distance < 0) {
          //   let headline = document.getElementById("headline"),
          //       countdown = document.getElementById("countdown"),
          //       content = document.getElementById("content");
  
          //   headline.innerText = "It's my birthday!";
          //   countdown.style.display = "none";
          //   content.style.display = "block";
  
          //   clearInterval(x);
          // }
          //seconds
        }, 0)
    }());

/*=============== COUNTDOWN TWO ===============*/
(function () {
  const second_two = 1000,
        minute_two = second_two * 60,
        hour_two = minute_two * 60,
        day_two = hour_two * 24;

  let birthday = "August 30, 2023 00:00:00",
      countDownTwo = new Date(birthday).getTime(),
      x = setInterval(function() {    

        let nowTwo = new Date().getTime(),
            distanceTwo = countDownTwo - nowTwo;

        document.getElementById("days_two").innerText = Math.floor(distanceTwo / (day_two)),
          document.getElementById("hours_two").innerText = Math.floor((distanceTwo % (day_two)) / (hour_two)),
          document.getElementById("minutes_two").innerText = Math.floor((distanceTwo % (hour_two)) / (minute_two)),
          document.getElementById("seconds_two").innerText = Math.floor((distanceTwo % (minute_two)) / second_two);

        //do something later when date is reached
        // if (distance < 0) {
        //   let headline = document.getElementById("headline"),
        //       countdown = document.getElementById("countdown"),
        //       content = document.getElementById("content");

        //   headline.innerText = "It's my birthday!";
        //   countdown.style.display = "none";
        //   content.style.display = "block";

        //   clearInterval(x);
        // }
        //seconds
      }, 0)
  }());