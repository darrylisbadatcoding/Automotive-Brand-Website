function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('hide', 'hidden');
    sidebar.style.display = 'flex'; 
    //document.body.classList.add('scrolllock');
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('hide');

    sidebar.addEventListener('animationend', function handleAnimationEnd() {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('hide');
        sidebar.style.display = 'none';
        //document.body.classList.remove('scrolllock');
        sidebar.removeEventListener('animationend', handleAnimationEnd);
    });
}
function showUserOption(){
    const userOption = document.querySelector('.userOption')
    if(userOption.style.display === 'flex'){
        userOption.classList.add('hide');
        document.body.classList.remove('scrolllock');

        userOption.addEventListener('animationend', function handleAnimationEnd() {
            userOption.style.display = 'none';
            userOption.classList.remove('hide');
            userOption.removeEventListener('animationend', handleAnimationEnd);
        });
    } else {
         userOption.style.display = 'flex';
         userOption.classList.add('slide-in-top');
         document.body.classList.add('scrolllock');

         userOption.addEventListener('animationend', function handleSlideInEnd() {
            userOption.classList.remove('slide-in-top');
            userOption.removeEventListener('animationend', handleSlideInEnd);
        });
    }
}
