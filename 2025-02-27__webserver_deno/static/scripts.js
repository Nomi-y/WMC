function primeChecker3000() {
    var n
    n = parseFloat(document.getElementById('numberIn').value)
    if (!Number.isInteger(n) || n < 2) {
        showOverlay('invalid', n)
        return
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            showOverlay('no', n)
            return
        }
    }
    showOverlay('yes', n)
}

function showOverlay(caseType, num) {
    const overlay = document.getElementById("overlay");
    const overlayText = document.getElementById("overlay-text");
    switch (caseType) {
        case 'yes':
            overlayText.textContent = "YES, " + num + " IS A PRIME NUMBER"
            overlay.className = "overlay success"
            break
        case 'no':
            overlayText.textContent = "NO, " + num + " IS NOT A PRIME NUMBER"
            overlay.className = "overlay failure"
            break
        case 'invalid':
            overlayText.textContent = "WHAT THE HECK IS " + num + " SUPPOSED TO BE, YOU CAN ONLY DETERMINE PRIMES FOR INTEGERS"
            overlay.className = "overlay unknown"
            break
    }
    setTimeout(() => overlay.classList.remove("hidden"), 10);
    setTimeout(() => overlay.classList.add("hidden"), 3000);
}
