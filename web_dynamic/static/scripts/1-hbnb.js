$(function() {
  const checked = {};
  $('input[type="checkbox"]').change(function() {
    const amenitId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');
    console.log($(this));
    if ($(this).is(':checked')) {
      checked[amenitId] = amenityName;
      //console.log(amenityName);
    } else {
      delete checked[amenitId];
    }
    if($.isEmptyObject(checked)) {
      $("div.amenities h4").html("&nbsp;");
    } else {
      const amenities = Object.values(checked);
     // console.log(amenities);
      $("div.amenities h4").text(amenities.join(", "));
    }
    });
});