'use strict';

let news = [
    {
        header: 'Новость 1',
        author: 'Автор 1',
        date: '30-11-2020',
        time: '22:30',
        status: false
    },
    {
        header: 'Новость 2',
        author: 'Автор 2',
        date: '01-12-2020',
        time: '22:50',
        status: false
    },
    {
        header: 'Новость 3',
        author: 'Автор 3',
        date: '02-12-2020',
        time: '23:30',
        status: false
    }
];
let $icon = document.querySelector('.fa-newspaper');
let $strip = document.querySelector('#strip');

function render(messages, parent){
    let $p_monitor = document.querySelector('#monitor-mess');
    let counter = messages.length;
    let textStatus;
    let template = '';
    if (counter === 0) {
        $p_monitor.textContent = 'Нет новостей';
    } else {
        $p_monitor.textContent = '+' + counter;
        $p_monitor.classList.add('red');
        messages.forEach(function(item) {
            if(item.status === false){
                textStatus = 'Не просмотрена';
            }
            template += `
                <div class="new">
                    <h3 class="header-new">${item.header}</h3>
                    <a href="#" class="author">${item.author}</a><br />
                    <span class="date">${item.date} в ${item.time}</span><br />
                    <a href="#" class="link-detail">Подробнее <i class="fas fa-long-arrow-alt-right"></i></a><br />
                    <span class="status">${textStatus}</span>
                </div>
            `

            parent.innerHTML = template;
        });
    }
}

render(news, $strip);

$icon.addEventListener('click', function(){
    $strip.classList.remove('hidden');
    $strip.classList.add('flex');
});

$strip.addEventListener('click', function(event){
    event.preventDefault();

    if (event.target.classList.contains('link-detail')) {
        let $parent = event.target.parentNode;
        let $status = $parent.querySelector('.status');

        $status.textContent = 'Просмотрена';
    }
});