$(function() {
  const checked = {};
  $('input[type="checkbox"]').change(function() {
    const amenitId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');
    if ($(this).is(':checked')) {
      checked[amenitId] = amenityName;
    } else {
      delete checked[amenitId];
    }
    if($.isEmptyObject(checked)) {
      $("div.amenities h4").html("&nbsp;");
    } else {
      const amenities = Object.values(checked);
      $("div.amenities h4").text(amenities.join(", "));
    }
    });
})