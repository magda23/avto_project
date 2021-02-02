function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}

function Hide() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none"
    }
}

$(".click").click(function () {
    $('html,body').animate({
            scrollTop: $("#myDIV").offset().top
        },
        'slow');
});

var Alert_error_field = "Please fill in this field";
var Alert_error_value = "Please select value";
var Alert_error_email = "Please enter an Email";
var Alert_error_number = "Please enter a Number";
var Alert_error_image = "Please upload Photo";

var Alert_error_Class = "Alert_error_Class";

var ProgrammeSection_error_count;
var PersonalSection_error_count = 9;
var AcademicYear_error_count = 1;


function checkProgrammeSection() {
    let ProgrammeSection_Year = document.getElementById('selectYear').value;
    let ProgrammeSection_Term = document.getElementById('selectTerm').value;
    let ProgrammeSection_programmes = document.getElementById('selectProgrammes').value;

    ProgrammeSection_error_count = 3;

    if (ProgrammeSection_Year == "") {
        document.getElementById("validator_Year").innerHTML = Alert_error_field;
        document.getElementById("selectYear").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Year").innerHTML = "";
        document.getElementById("selectYear").classList.remove(Alert_error_Class);
        ProgrammeSection_error_count -= 1;
    }

    if (ProgrammeSection_Term == "") {
        document.getElementById("validator_Term").innerHTML = Alert_error_field;
        document.getElementById("selectTerm").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Term").innerHTML = "";
        document.getElementById("selectTerm").classList.remove(Alert_error_Class);
        ProgrammeSection_error_count -= 1;
    }

    if (ProgrammeSection_programmes == "") {
        document.getElementById("validator_Programmes").innerHTML = Alert_error_field;
        document.getElementById("selectProgrammes").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Programmes").innerHTML = "";
        document.getElementById("selectProgrammes").classList.remove(Alert_error_Class);
        ProgrammeSection_error_count -= 1;
    }

    console.log(ProgrammeSection_error_count);

    if (ProgrammeSection_error_count <= 0) {
        document.getElementById("collapseOne").classList.remove("show");
        document.getElementById("collapseTwo").classList.add("show");
    }
}

function checkUnMembers() {

    let checkMembers = document.getElementById("UnMembers")

    if (checkMembers.checked != false) {
        let UnMemebrsInput = `<div class="form-group text-left">
				<label class="label-item mb-1">Registration Number <span span="" class="span-color">*</span></label>
				<div class="d-flex align-items-center">
				<input type="text" name="" class="form-control form-control-sm" placeholder="" value="" id="selectName">
				<button class="btn-next ml-3" type="button">Check</button>
				</div>
</div>`;
        document.getElementById('validatorMembers').innerHTML += UnMemebrsInput;
    } else {
        document.getElementById('validatorMembers').innerHTML = "";
    }
}

function checkPersonalSection() {
    let PersonalSection_Name = document.getElementById('selectName').value;
    let PersonalSection_LastName = document.getElementById('selectLastName').value;
    let PersonalSection_Birthday = document.getElementById('selectBirthDay').value;
    let PersonalSection_Gender = document.getElementById('selectGender').value;
    let PersonalSection_Email = document.getElementById('insertEmail').value;
    let PersonalSection_Number = document.getElementById('insertNumber').value;
    let PersonalSection_Nationality = document.getElementById('selectNationality').value;
    let PersonalSection_Residence = document.getElementById('selectResidence').value;
    let PersonalSection_Image = document.getElementById('selectImage').value;


    if (PersonalSection_Name == "") {
        document.getElementById("validator_Name").innerHTML = Alert_error_field;
        document.getElementById("selectName").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Name").innerHTML = "";
        document.getElementById("selectName").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_LastName == "") {
        document.getElementById("validator_LastName").innerHTML = Alert_error_field;
        document.getElementById("selectLastName").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_LastName").innerHTML = "";
        document.getElementById("selectLastName").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Birthday == "") {
        document.getElementById("validator_BirthDay").innerHTML = Alert_error_field;
        document.getElementById("selectBirthDay").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_BirthDay").innerHTML = "";
        document.getElementById("selectBirthDay").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Gender == "") {
        document.getElementById("validator_Gender").innerHTML = Alert_error_value;
        document.getElementById("selectGender").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Gender").innerHTML = "";
        document.getElementById("selectGender").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Email == "") {
        document.getElementById("validator_Email").innerHTML = Alert_error_email;
        document.getElementById("insertEmail").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Email").innerHTML = "";
        document.getElementById("insertEmail").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Number == "") {
        document.getElementById("validator_Number").innerHTML = Alert_error_number;
        document.getElementById("insertNumber").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Number").innerHTML = "";
        document.getElementById("insertNumber").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Nationality == "") {
        document.getElementById("validator_Nationality").innerHTML = Alert_error_value;
        document.getElementById("selectNationality").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Nationality").innerHTML = "";
        document.getElementById("selectNationality").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Residence == "") {
        document.getElementById("validator_Residence").innerHTML = Alert_error_value;
        document.getElementById("selectResidence").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Residence").innerHTML = "";
        document.getElementById("selectResidence").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    if (PersonalSection_Image == "") {
        document.getElementById("validator_Image").innerHTML = Alert_error_image;
        document.getElementById("upload-file").classList.add(Alert_error_Class);
    } else {
        document.getElementById("validator_Image").innerHTML = "";
        document.getElementById("upload-file").classList.remove(Alert_error_Class);
        PersonalSection_error_count -= 1;
    }
    return true;
}

function checkAcademicYear() {
    let AcademicYear = document.getElementById("selectAcademicYear").value;


    if (AcademicYear == "") {
        document.getElementById("validator_AcademicYear").innerHTML = Alert_error_value;
    } else {
        document.getElementById("validator_AcademicYear").innerHTML = "";
        document.getElementById("selectAcademicYear").classList.remove(Alert_error_Class);
        AcademicYear_error_count -= 1;
    }
    return true;

}

function AppFormSubmit() {

    ProgrammeSection_error_count;
    PersonalSection_error_count;
    AcademicYear_error_count;

    if (ProgrammeSection_error_count != 0) {
        alert('error_form_1');
        return true;
    }
    if (PersonalSection_error_count != 0) {
        alert('error_form_2');
        return true;
    }
    if (AcademicYear_error_count != 0) {
        alert('error_form_3');
        return true;
    }


    // let error_number = AcademicYear_error_count + PersonalSection_error_count + ProgrammeSection_error_count;

    // alert(error_number);
}

function selectPayment(){
	document.getElementById('payment-Montly-select').style.backgroundColor = "#fac38f";
}

function BankPayment(){
	document.getElementById("choose_bank").style.display ="block";
}
