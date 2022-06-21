const $content = document.getElementById('content');
const $button  = document.querySelector('.button');

$button.addEventListener('click', ()=> {
    $content.classList.toggle('active');
    $content.textContent = 'for instance like this!';
    if($content.classList.contains('active')){
        $content.textContent = 'any text may be here...';
    }


});