document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");

    function displayImage(iconnumber) {
        let imgSrc;
        switch (iconnumber) {
            case 1:
                imgSrc = "https://www.ftskins.com/img/thumbs/venom.jpg";
                break;
            case 2:
                imgSrc = "https://www.ftskins.com/img/thumbs/captain%20america.jpg";
                break;
            case 3:
                imgSrc = "https://www.ftskins.com/img/thumbs/spiderman.jpg";
                break;
            case 4:
                imgSrc = "https://www.ftskins.com/img/thumbs/ironman.jpg";
                break;
            case 5:
                imgSrc = "https://www.ftskins.com/img/thumbs/hulk.jpg";
                break;
            case 6:
                imgSrc = "https://www.ftskins.com/img/thumbs/thor.jpg";
                break;
            default:
                imgSrc = "";
        }
        document.getElementById("processingStep2").innerHTML = `<img src="${imgSrc}" style="width:200px">`;
        document.getElementById("selectedCard").src = imgSrc;
    }

    function confirmname() {
        var name = document.getElementById("fname").value;
        if (name === "") {
            document.getElementById("fname").style.borderColor = "#fdba00";
        } else {
            document.getElementById("step2").style.display = "none";
            document.getElementById("step3").style.display = "block";
            document.getElementById("processingStep3").innerHTML = `<img src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1605280536b49e31e02760c3920702f1a0bd7fc89c.png" style="width:50px"> ${name}`;
        }
    }

    function setVisibility(step1Visible, step2Visible) {
        document.getElementById("step1").style.display = step1Visible ? "block" : "none";
        document.getElementById("step2").style.display = step2Visible ? "block" : "none";
    }

    displayImage(1);  // مثال على استدعاء الدالة

    function openLocker() {
        document.getElementById("locker").classList.remove("hidden");
    }

    function closeLocker() {
        document.getElementById("locker").classList.add("hidden");
    }

    window.confirmname = confirmname;
    window.openLocker = openLocker;
    window.closeLocker = closeLocker;
});
