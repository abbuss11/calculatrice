
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll("button");
    const specialChars = ["%", "*", "/", "-", "+", "="];
    let output = "";

    // definir la fontion.
    const calculate = (btnValue) => {
      display.focus();
      if (btnValue === "=" && output !== "") {
        // calcul en pourcentage si la sortie est % alors de faire /100.
        output = eval(output.replace("%", "/100"));
      } else if (btnValue === "AC") {
        output = "";
      } else if (btnValue === "DEL") {
        //fonction du button delete.
        output = output.toString().slice(0, -1);
      } else {
        //fonction si sortie est vide
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
      }
      display.value = output;
    };

    // ajout des fonction sur les button, calculer() .
    buttons.forEach((button) => {
      //fontion si boutton est cliqué fonction .
      button.addEventListener("click", (e) => calculate(e.target.dataset.value));
  });