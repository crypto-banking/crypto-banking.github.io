function multiply() {
            var kol = document.getElementById("kol").value;
            var result = parseFloat(kol) * 75;
            if (!isNaN(result)) {
                document.getElementById("uku").value = result;
            }
        }