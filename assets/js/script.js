function checkAge() {
    var age = document.getElementById('ageInput').value;

    if (age >= 18) {
        document.getElementById('adultSection').style.display = 'block';
        document.getElementById('childSection').style.display = 'none';
    } else {
        document.getElementById('childSection').style.display = 'block';
        document.getElementById('adultSection').style.display = 'none';
    }
}