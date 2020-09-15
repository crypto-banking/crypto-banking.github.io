function multiply() {
            var kol = document.getElementById("kol").value;
            var result = parseFloat(kol) * 0.35;
            if (!isNaN(result)) {
                document.getElementById("uku").value = result;
            }
        }