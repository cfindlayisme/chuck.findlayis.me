function viewHome() {
    $('#content').html('<ul class="lead list-group">\
        <li class="list-group-item list-group-item-secondary">Broadcast Engineer in Alberta</li>\
        <li class="list-group-item list-group-item-secondary">Hobbiest Programmer & Sysadmin</li>\
    </ul>');
}

function viewContact() {
    $('#content').html('<ul class="lead list-group">\
        <li class="list-group-item list-group-item-secondary">Email: chuck@findlayis.me</li>\
    </ul>');
}

function navSelected(selected) {
    $('.nav-link').each(function() {
        $(this).removeClass('active');
    });
    $(selected).addClass('active');
}