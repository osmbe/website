$(document).ready(function() {
    fetch("https://proxy.sulliops.co/index.php?http://maptime.io/belgium/feed.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (let i = 0; i < data.items.length; i++) {
                const event = data.items[i];
                const { id: link, title, date_published } = event;
                const date = new Date(date_published);
                const now = new Date();

                const li = document.createElement("li");
                const a = document.createElement("a");

                $(a).attr({
                        href: link,
                        target: "_blank"
                    })
                    .html(`<span class="text-info">${date.toLocaleDateString()}</span> ${title}`);
                $(li).append(a);

                if (date >= now) {
                    $("#calendar-future").append(li);
                } else {
                    $(a).addClass("text-muted");
                    $("#calendar-past").append(li);
                }
            }
        });
});
