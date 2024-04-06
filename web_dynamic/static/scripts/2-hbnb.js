$(function() {
  $.get('http://0.0.0.0:5001/api/v1/status/', (resp, status) => {
    if (status === "success") {
      $("div#api_status").addClass("available");
      // $("div#api_status").html(`<h1>${Object.values(resp)}</h1>`);
      // console.log(resp);
    } else {
      $("div#api_status").removeClass("available");
    }
    });
  const checked = {};
  $('input[type="checkbox"]').change(() => {
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