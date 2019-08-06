$(function () {
    // Short Document Ready


    // Your web app's Firebase configuration
    let config = {
        apiKey: "AIzaSyA3PjGaY7DmgWoCVUqmALb0smnWARF7oHU",
        authDomain: "totally-original-projectname.firebaseapp.com",
        databaseURL: "https://totally-original-projectname.firebaseio.com",
        projectId: "totally-original-projectname",
        // storageBucket: "totally-original-projectname.appspot.com",
        messagingSenderId: "289352078248",
        appId: "1:289352078248:web:c38ef51abecf8464"
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

    $("#addEmployeeForm").submit(function (event) {
        event.preventDefault();
        console.log("submitted!");

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
        $("#addEmployeeForm")[0].reset();

    });
    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function (snapshot) {

        // Log everything that's coming out of snapshot
        console.log(snapshot.val());
        console.log(snapshot.val().employee);
        console.log(snapshot.val().role);
        // console.log(snapshot.val().startDate);
        // console.log(snapshot.val().monWorked);
        // console.log(snapshot.val().monBill);
        // console.log(snapshot.val().totalBilled);

        // Change the HTML to reflect
        // $("#name-display").text(snapshot.val().name);



        // Handle the errors
    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });



});