$(document).ready(() => {
    fetch("/events.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.items.length; i++) {
                let event = data.items[i];
                let { id: link, title, date_published } = event;
                let date = new Date(date_published);
                let now = new Date();
                now.setUTCHours(0, 0, 0, 0);

                let li = document.createElement("li");
                let a = document.createElement("a");

                $(a)
                    .attr({
                        href: link,
                        target: "_blank"
                    })
                    .html(`<span class="text-info">${date.toLocaleDateString()}</span> ${title}`)
                    .appendTo(li);

                if (date >= now) {
                    $("#calendar-future").append(li);
                } else {
                    $(a).addClass("text-muted");
                    $("#calendar-past").append(li);
                }
            }
        });
});
