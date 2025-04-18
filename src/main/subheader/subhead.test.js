async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const dateList = [
        {
            id: 20250320, 
            date: "20th",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20250321, 
            date: "21st",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20250322, 
            date: "22nd",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20250323, 
            date: "23rd",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20250327, 
            date: "27th",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20250328, 
            date: "28th",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20250329, 
            date: "29th",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20250330, 
            date: "30th",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20250405, 
            date: "5th",
            day: "SAT",
            month: "APR"
        },
        {
            id: 20250407, 
            date: "7th",
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