$(document).ready(function () {
  
  // Load emailjs script
  var emailjsScript = document.createElement('script');
emailjsScript.src = "https://cdn.emailjs.com/dist/email.min.js";
document.head.appendChild(emailjsScript);

// Initialize EmailJS
emailjsScript.onload = function() {
  emailjs.init("BcP6kwfuySzNqm_zD");
};

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }

    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  var typed = new Typed(".typing", {
    strings: ["Full Stack Developer", "React.Js Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["Full Stack Developer", "React.Js Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  //emailjs
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    emailjs.send("service_ihpr2de", "template_lup6ejh", templateParams)
      .then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
      }, function(error) {
        console.error("Error sending email:", error);
        alert("Message failed to send!");
      });
  });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  var name = document.querySelector('[name="name"]').value;
  var email = document.querySelector('[name="email"]').value;
  var subject = document.querySelector('[name="subject"]').value;
  var description = document.querySelector('[name="description"]').value;

  var emailBody = "Name: " + name + "\nEmail: " + email + "\n\nDescription: " + description;
  
  // Construct the mailto link
  var link = "mailto:aswinvanc@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
  
  // Open the link to open the email client
  window.location.href = link;
});

