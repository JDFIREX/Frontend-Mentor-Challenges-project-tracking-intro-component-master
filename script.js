let navHamb = document.querySelector('.nav_hamb');
let open = false;
navHamb.addEventListener('click', (e) => nav(e));

function nav(e){
    let HambImg = document.querySelector('.hamb_img')
    let navList = document.querySelector('.nav_list')
    let navItems = document.querySelectorAll('.nav_item')
    let imgs = ['images/icon-hamburger.svg',"images/icon-close.svg"]
    open == false? navOpen(navList,navItems,imgs,HambImg) : navClose(navList,navItems,imgs,HambImg);
}

function navOpen(nl,ni,i,h){
    open = true;
    changeImg(i[1],h);
    let showNav = ["17rem","visible","0rem"]
    OpenNavList(nl,ni,showNav)
}
function navClose(nl,ni,i,h){
    open = false;
    changeImg(i[0],h);
    let showNav = ["0","hidden","-3rem"]
    CloseNavList(nl,ni,showNav)
}
function changeImg(i,h){
    console.log(h.src)
    h.style.opacity = 0;
    setTimeout(() => {
        h.src = i;
    }, 300);
    setTimeout(() => {
        h.style.opacity = 1;
    }, 400);
}
function OpenNavList(list,items,detail){
    list.style.height = detail[0];
    setTimeout(() => {
        items.forEach(i => i.style.visibility = detail[1]);
    }, 300);
}
function CloseNavList(list,items,detail){
    items.forEach(i => i.style.visibility = detail[1]);
    setTimeout(() => {
        list.style.height = detail[0];
    }, 100);
}