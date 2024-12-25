const lang = document.documentElement.lang;
const element = document.getElementById("banner-next-event");

if (typeof OSMCal !== "undefined" && element !== null) {
  const widget = new OSMCal.WidgetList(element, {
    limit: 1,
    filter: { in: "Belgium" },
    locales: lang,
    hideCancelled: true,
  });

  widget.setTemplate(
    "{{ name }} &bull; {{ date.human }} &bull; {{ location.short }}",
  );

  widget.display();
}
