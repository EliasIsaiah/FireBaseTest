$(function () {
    // Short Document Ready


    // Your web app's Firebase configuration
    let config = {
        apiKey: "AIzaSyCjlTNJo1copvkQ-qSuzLayk5VApwHIGYs",
        authDomain: "operationcaffeine.firebaseapp.com",
        databaseURL: "https://operationcaffeine.firebaseio.com",
        projectId: "operationcaffeine",
        // storageBucket: "",
        messagingSenderId: "714734586576",
        appId: "1:714734586576:web:1c6bf78a7f05551a"
    };
    // Initialize Firebase
    firebase.initializeApp(config);
    let database = firebase.database();

    // Initial Values
    let employee = "";
    let role = "";
    let startDate = 0;
    let monWorked = 0;
    let monBill = 0;
    let totalBilled = 0;

    $("#addEmployee").submit(function (event) {
        event.preventDefault();

        employee = $("#employeeInput").val().trim();
        role = $("#roleInput").val().trim();
        startDate = $("#startDateInput").val().trim();
        // monWorked = $("#monthsWorked").val().trim();
        monBill = $("#monthlyRateInput").val().trim();
        // totalBilled = $("#totalBilled").val().trim();

        database.ref().push({
            employee: employee,
            role: role,
            startDate: startDate,
            monWorked: monWorked,
            monBill: monBill,
            totalBilled: totalBilled
        });


    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function (snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
        console.log(snapshot.val().employee);
        console.log(snapshot.val().role);
        console.log(snapshot.val().startDate);
        console.log(snapshot.val().monWorked);
        console.log(snapshot.val().monBill);
        console.log(snapshot.val().totalBilled);

        // Change the HTML to reflect
        $("#name-display").text(snapshot.val().name);



        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });



});