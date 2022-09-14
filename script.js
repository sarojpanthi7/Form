function check()
      {
        var a = document.forms['form']["fname"].value;
        var b = document.forms['form']['femail'].value;
        var c = document.forms['form']['fpass'].value;
        var d = document.forms['form']['fcpass'].value;
        if(a=="")
          {
            alert("Invalid name.");
          }
          if(b=="")
           {
            alert("Invalid email.")
           }
          if(a.length<4)
            {
                alert("Name is too short.");
            }
            if(c.length<8)
             {
                alert("Password must be fo 8 characters.");
             }
             if(c!=d)
              {
                alert("Password and confirm password must be same.");
              }
      }