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
        localStorage.setItem("profilePic", user.profilePic);
        window.location.href = user.url;
    } else {
        document.getElementById("errorMessage").textContent = "اطلاعات وارد شده معتبر نیست!";
    }
});
