$(function() {
    opt = {
        url : "http://0.0.0.0:5001/api/v1/places_search",
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: "{}"
    }

    $.ajax(opt)
    .done((places) => {
        seachplaces(places);
    })
    .fail((jqXHR, testStatus, errorThrown) => {
        console.log('Error:', errorThrown);
    });

    seachplaces = (places) => {
        $("div.head_title h1").text("Places");
        $.each(places, (idx, place) => {
            article = $("<article></article>").html(`<div class="price_title">
            <div class="article_head">
                <h2>${place.name}</h2>
            </div>
            <div class="price_by_night">
                <div class="price">
                    <h2>${place.price_by_night}</h2>
                </div>
            </div>
        </div>
        <div class="information">
            <div class="max_guest">
                <div class="guest_icon">
                </div>
                <div class="guest_no">
                    <h2>${place.max_guest}</h2>
                </div>
            </div>
            <div class="number_rooms">
                <div class="bed_icon">
                </div>
                <div class="bed_no">
                    <h2>${place.number_rooms}</h2>
                </div>
            </div>
            <div class="number_bathrooms">
                <div class="bath_icon">
                </div>
                <div class="bath_no">
                    <h2>${place.number_bathrooms}</h2>
                </div>
            </div>
        </div>
        <div>
            <div class="user">
                <b>Owner:</b> ${place.user.first_name + " " + place.user.last_name}
            </div>
        </div>
        <div class="description">
          ${place.description}
        </div>`);
            $('div.articles').append(article);
        });
        
    }

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