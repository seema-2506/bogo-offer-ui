
      function selectOption( unit, id ) {
        console.log(`Selected unit: ${unit}, ID: ${id}`);
        document
          .querySelectorAll(".option")
          .forEach((el) => {
            if (el.id !== id) {
              el.classList.remove("divactive");
            }
          });

        document.getElementById(id)?.classList.add("divactive");
        

        document.getElementById(`radio${unit}`).checked = true;

        const prices = [0, 10, 18, 24];
        document.getElementById(
          "totalPrice"
        ).innerText = `Total: $${prices[unit]}.00 USD`;

        for (let i = 1; i <= 3; i++) {
          document.getElementById(`select${i}`).style.display =
            i === unit ? "block" : "none";
        }
      }

      // Initialize default
      selectOption(1);
  