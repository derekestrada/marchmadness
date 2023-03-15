async function test() {

    const dateList = [
        {
            id: 20230316, 
            date: "16th",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20230317, 
            date: "17th",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20230318, 
            date: "18th",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20230319, 
            date: "19th",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20230323, 
            date: "23rd",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20230324, 
            date: "24th",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20230325, 
            date: "25th",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20230326, 
            date: "26th",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20230401, 
            date: "1st",
            day: "SAT",
            month: "APR"
        },
        {
            id: 20230403, 
            date: "3rd",
            day: "MON",
            month: "APR"
        },
    ];
    const dateSelect = document.getElementById("dateSelect");
    let dateStr = "";
    dateList.forEach(function(e) {
        let eachDate = `
            <li class="listdate" data-id="${e.id}">
                <span class="day">${e.day}</span>
                <span class="date">${e.month} ${e.date}</span>
            </li>
        `;
        dateStr += eachDate;
    });
    dateSelect.innerHTML = dateStr;

    let date = new Date()
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth()+1).padStart(2, "0");
    let year = date.getFullYear();
    let todaysDate = parseInt(year + month + day);

    const calendarDates = document.querySelectorAll(".listdate");

    for(let i=0; i < calendarDates.length; i++) {
        let listDate = parseInt(calendarDates[i].dataset.id); 
        if (todaysDate === listDate) {
            calendarDates[i].classList.add("today");
        }
    }

    calendarDates.forEach((e) => {
        let listDate = parseInt(e.dataset.id); 
        if (todaysDate === listDate) {
            e.classList.add("today");
        };
            e.addEventListener("click", () => {
                calendarDates.forEach((e) => {
                    e.classList.remove("today");
                });
                e.classList.add("today");

                const dateResults = document.querySelectorAll(".Results");
                dateResults.forEach(function(e) {
                    let listResults = parseInt(e.id); 
                    e.classList.remove("today");
                    if (listDate === listResults) {
                        e.classList.add("today");
                    }
                })
            });
    });               
}
test();