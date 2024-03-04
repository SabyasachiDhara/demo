function sendEmail(){
          var checkedmsz = document.getElementById('inpt4').checked ? 'Yes' : 'No';
          Email.send({
            SecureToken : "6e493252-2270-4537-9400-2a3902ff9380",
            To : "popz@mail.com",
            From : "demo68593@gmail.com",
            Subject : "New Contact Form from " + document.getElementById("inpt1").value,
            Body : "Name : " + document.getElementById("inpt1").value
                    +"<br> Email : " + document.getElementById("inpt2").value
                    +"<br> Message : " + document.getElementById("inpt3").value
                    +"<br> Liked : " + checkedmsz
          }).then(
          message => alert("Message send succesfully")
          );
        }