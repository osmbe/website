let fuse; // holds our search engine

fetch("index.json")
  .then((response) => response.json())
  .then((json) => {
    fuse = new Fuse(json, {
      keys: ["title", "tags", "categories", "content", "summary"],
      includeScore: true,
      ignoreLocation: true,
    });
  });

document
  .querySelectorAll("#search-input")
  .forEach((input) => {
    var lang = document.documentElement.lang;

    var ulResults = document.querySelector("#search-results > ul");

    input.addEventListener("input", () => {
      if (input.value.trim().length === 0) {
        ulResults.innerHTML = "";
      } else {
        var results = fuse
          .search(input.value.trim(), { limit: 5 });

        console.log(input.value, results);

        ulResults.innerHTML = "";

        if (results.length > 0) {
          results.forEach((result) => {
            var li = document.createElement("li");
            li.className = "relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6";
            var div1 = document.createElement("div");
            div1.className = "flex min-w-0 gap-x-4";
            var div2 = document.createElement("div");
            div2.className = "min-w-0 flex-auto";
            var p1 = document.createElement("p");
            p1.className = "text-sm/6 font-semibold text-gray-900";
            var a = document.createElement("a");
            a.href = result.item.permalink;
            a.innerText = result.item.title;
            p1.append(a);
            var p2 = document.createElement("p");
            p2.className = "mt-1 flex text-xs/5 text-gray-500 gap-x-2";
            var time = document.createElement("time");
            time.dateTime = result.item.datetime;
            time.innerText = new Date(
              result.item.datetime,
            ).toLocaleDateString(lang, {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            p2.append(time);
            div2.append(p1);
            div2.append(p2);
            div1.append(div2);
            var div3 = document.createElement("div");
            div3.className = "flex shrink-0 items-center gap-x-4";
            var svg = document.createElement("svg");
            svg.className = "size-5 flex-none text-gray-400";
            svg.setAttribute("viewBox", "0 0 20 20");
            svg.setAttribute("fill", "currentColor");
            svg.setAttribute("aria-hidden", "true");
            svg.setAttribute("data-slot", "icon");
            var path = document.createElement("path");
            path.setAttribute("fill-rule", "evenodd");
            path.setAttribute("d", "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z");
            path.setAttribute("clip-rule", "evenodd");
            svg.append(path);
            div3.append(svg);
            li.append(div1);
            li.append(div3);
            
            ulResults.append(li);
          });
        }
      }
    });
  });