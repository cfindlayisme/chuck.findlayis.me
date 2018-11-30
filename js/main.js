function viewHome() {
    $('#content').html('<ul class="lead list-group">\
        <li class="list-group-item list-group-item-secondary">Broadcast Engineer in Fort McMurray, Alberta</li>\
        <li class="list-group-item list-group-item-secondary">Hobbiest programmer & sysadmin</li>\
    </ul>\
    <br>\
    <p class="lead">\
        <a href="#" class="btn btn-lg btn-secondary" onclick="viewContact();">Contact</a>\
    </p>');
}

function viewContact() {
    $('#content').html('<ul class="lead list-group">\
        <li class="list-group-item list-group-item-secondary">chuck@findlayis.me</li>\
    </ul>');
}

function navSelected(selected) {
    $('.nav-link').each(function() {
        $(this).removeClass('active');
    });
    $(selected).addClass('active');
}