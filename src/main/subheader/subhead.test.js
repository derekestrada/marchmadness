async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const dateList = [
        {
            id: 20230302, 
            date: "2nd",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20230303, 
            date: "3rd",
            day: "FRI",
            month: "Mar"
        },
        {
            id: 20230304, 
            date: "4th",
            day: "SAT",
            month: "Mar"
        },
        {
            id: 20230305, 
            date: "5th",
            day: "SUN",
            month: "Mar"
        },
        {
            id: 20230306, 
            date: "6th",
            day: "MON",
            month: "Mar"
        },
        {
            id: 20230307, 
            date: "7th",
            day: "TUE",
            month: "Mar"
        },
        {
            id: 20230308, 
            date: "8th",
            day: "WED",
            month: "Mar"
        },
        {
            id: 20230309, 
            date: "9th",
            day: "THU",
            month: "Mar"
        },
        {
            id: 20230310, 
            date: "10th",
            day: "FRI",
            month: "Mar"
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