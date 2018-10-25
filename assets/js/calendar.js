$(document).ready(() => {
    fetch("https://proxy.sulliops.co/index.php?http://maptime.io/belgium/feed.json")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.items.length; i++) {
                const event = data.items[i];
                const { id: link, title, date_published } = event;
                const time = new Date(date_published);
                const date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
                const now = new Date();
                const today = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();

                const li = document.createElement("li");
                const a = document.createElement("a");

                $(a)
                    .attr({
                        href: link,
                        target: "_blank"
                    })
                    .html(`<span class="text-info">${date.toLocaleDateString()}</span> ${title}`);
                $(li).append(a);

                if (date >= today) {
                    $("#calendar-future").append(li);
                } else {
                    $(a).addClass("text-muted");
                    $("#calendar-past").append(li);
                }
            }
        });
});
