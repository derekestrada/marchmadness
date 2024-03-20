async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const dateList = [
        {
            id: 20240321, 
            date: "21st",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20240322, 
            date: "22nd",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20240323, 
            date: "23rd",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20240324, 
            date: "24th",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20240328, 
            date: "28th",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20240329, 
            date: "29th",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20240330, 
            date: "30th",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20240331, 
            date: "31st",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20240406, 
            date: "6th",
            day: "SAT",
            month: "APR"
        },
        {
            id: 20240408, 
            date: "8th",
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