document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fullName = document.getElementById("firstNameLastName").value.trim();
    let birthDate = document.getElementById("birthDate").value.trim();
    let nationalCode = document.getElementById("nationalCode").value.trim();
    let password = document.getElementById("password").value.trim();

    const users = [
        // دانش آموزان
        { 
            name: "سید محمد احسان هاشمی کلاگری",
            birth: "1392/01/21",
            code: "0374352216",
            pass: "0374352216",
            teacher: "آقای رسولی",
            grade: "ششم",
            className: "دانش پژوهان ۲",
            sth11: "ریاضی",
            sth12: "فارسی",
            sth13: "فارسی",
            sth14: "قرآن",
            sth15: "ورزش",
            sth21: "ریاضی",
            sth22: "فارسی",
            sth23: "علوم",
            sth24: "مطالعات اجتماعی",
            sth25: "هنر",
            sth31: "کار و فناوری",
            sth32: "فارسی + نگارش",
            sth33: "تفکر و پژوهش",
            sth34: "مطالعات اجتماعی",
            sth35: "قرآن",
            sth41: "ریاضی",
            sth42: "هدیه های آسمان",
            sth43: "مطالعات اجتماعی",
            sth44: "ورزش",
            sth45: "هنر",
            sth51: "ریاضی",
            sth52: "علوم",
            sth53: "املا + نگارش",
            sth54: "هنر",
            sth55: "قرآن",
            url: "../dashbord/student/"
        },

        { 
            name: "حسن ملاعلی",
            birth: "0000/00/02",
            code: "0000000000",
            pass: "75438",
            url: "../dashbord/student/"
        },

        // معلمان
        { 
            name: "حسن ملاعلی",
            birth: "0000/00/01",
            code: "0000000000",
            pass: "75438",
            grade: "ششم",
            className: "دانش پژوهان ۲",
            url: "../dashbord/teacher/"
        },

        // مدیران
        { 
            name: "حسن ملاعلی",
            birth: "0000/00/00",
            code: "0000000000",
            pass: "75438",
            className: "مدیر مدرسه",
            url: "../admin"
        },
    ];

    let user = users.find(u => u.name === fullName && u.birth === birthDate && u.code === nationalCode && u.pass === password);

    if (user) {
        localStorage.setItem("username", user.name);
        localStorage.setItem("teacher", user.teacher);
        localStorage.setItem("grade", user.grade);
        localStorage.setItem("className", user.className);
        localStorage.setItem("birthDate", user.birth);
        localStorage.setItem("nationalCode", user.code);
        localStorage.setItem("pass", user.pass);
        localStorage.setItem("sth11s", user.sth11);
        localStorage.setItem("sth12", user.sth12);
        localStorage.setItem("sth13", user.sth13);
        localStorage.setItem("sth14", user.sth14);
        localStorage.setItem("sth15", user.sth15);
        localStorage.setItem("sth21", user.sth21);
        localStorage.setItem("sth22", user.sth22);
        localStorage.setItem("sth23", user.sth23);
        localStorage.setItem("sth24", user.sth24);
        localStorage.setItem("sth25", user.sth25);
        localStorage.setItem("sth31", user.sth31);
        localStorage.setItem("sth32", user.sth32);
        localStorage.setItem("sth33", user.sth33);
        localStorage.setItem("sth34", user.sth34);
        localStorage.setItem("sth35", user.sth35);
        localStorage.setItem("sth41", user.sth41);
        localStorage.setItem("sth42", user.sth42);
        localStorage.setItem("sth43", user.sth43);
        localStorage.setItem("sth44", user.sth44);
        localStorage.setItem("sth45", user.sth45);
        localStorage.setItem("sth51", user.sth51);
        localStorage.setItem("sth52", user.sth52);
        localStorage.setItem("sth53", user.sth53);
        localStorage.setItem("sth54", user.sth54);
        localStorage.setItem("sth55", user.sth55);
        localStorage.setItem("profilePic", user.profilePic);
        window.location.href = user.url;
    } else {
        document.getElementById("errorMessage").textContent = "اطلاعات وارد شده معتبر نیست!";
    }
});
