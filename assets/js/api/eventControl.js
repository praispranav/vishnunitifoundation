$.get('https://cervical.praispranav.com/day-template/get-events', function (events) {
    const baseImageURL = 'https://cervical.praispranav.com/uploads/';
    const eventContainer = $('#event4');

    eventContainer.trigger('destroy.owl.carousel');
    eventContainer.html(''); 

    events.forEach(event => {
        const eventDate = new Date(event.eventDate);
        const month = eventDate.toLocaleString('default', { month: 'short' });
        const day = eventDate.getDate();
        const year = eventDate.getFullYear();
        const time = eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const eventHTML = `
            <div class="vl-single-event4">
                <div class="thumb">
             <img class="w-100" src="https://cervical.praispranav.com/static/${event.image}" ...>
</div>
                <div class="content" style="height: 440px;">
                    <div class="icon-flex">
                        <div class="icon">
                            <span><img src="assets/img/icons/vl-event-clock4.1.svg" alt=""></span>
                        </div>
                        <div class="text">
                            <a href="#" class="date">${month} ${day}, ${year}</a> <br>
                            <span>( ${time} )</span>
                        </div>
                    </div>
                    <a href="event-single.html" class="title">${event.heading}</a>
                    <p class="para">${event.subHeading}</p>
                    <a href="event-single.html" class="details">Events Details <span><i class="fa-solid fa-arrow-right"></i></span></a>
                </div>
            </div>
        `;
        eventContainer.append(eventHTML);
    });

    eventContainer.owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });
});
