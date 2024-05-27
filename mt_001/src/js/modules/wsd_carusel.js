'strong'
// wsd_carusel.js

class WSDCarusel{
    gal = null
    itemsWrappser = null
    items = []
    animationMSec = 500
    item = {
        width: 0,
        height: 0,
        length: 0,
        gap: 20,
    }
    constructor(galId){
        this.galId = galId
        console.log(galId)
        this.build()
    }
    build(){
        console.log(this.galId)
        // document.querySelector()
        this.gal = document.getElementById(this.galId)
        if(!this.gal) {
            this.gal = document.querySelector(this.galId)
        }
        if(this.gal) {
            if(this.gal.dataset.during) this.animationMSec = parseInt(this.gal.dataset.during,10)
            console.log('animationMSec :', this.animationMSec)
            console.log('gal.dataset.during :', this.gal.dataset.during,this.gal.dataset.during?'ok':'no')
        }
        if(this.gal) this.itemsWrappser = this.gal.querySelector('.gal-items')
        if(this.itemsWrappser) this.items = this.itemsWrappser.querySelectorAll('.gal-item')

        // this.items = this.gal.getElementById('cast-gal-items'),
        this.btnl = document.getElementById('gal-btn-left'),
        this.btnr = document.getElementById('gal-btn-right');
        // this.items=document.getElementById('cast-gal-items'),
        // btnl = document.getElementById('gal-btn-left'),
        // btnr = document.getElementById('gal-btn-rght');

        if(this.items.length) {
            this.initItems()
            this.calcItem(this.items[0])
            this.initWrapp()

            if(this.btnl) this.btnl.addEventListener('click', this.galLeft.bind(this), false)
            if(this.btnr) this.btnr.addEventListener('click', this.galRight.bind(this), false)
        }

        this.info()
    }
    info(){
        console.log('==================', 'WSD Gaalary Carusel Info')
        console.log('galId:', this.galId)
        console.log('gal:', this.gal)
        console.log('itemsWrappser:', this.itemsWrappser)
        console.log('items:', this.items)
        console.log('items count:', this.items.length)
        console.log('item :', this.item)
        console.log('animationMSec :', this.animationMSec)
        console.log('==================', 'WSDCarusel Info End')
    }
    initItems(){
        this.itemsWrappser.innerHTML = ''
        console.log('itemsWrappser count:', this.itemsWrappser.item)
        console.log('items count:', this.items.length)
        this.items.forEach(this.addGalItem.bind(this))
    }
    addGalItem(item){
        this.itemsWrappser.appendChild(item)
    }
    calcItem(item){
        this.item.width = item.clientWidth
        this.item.height = item.clientHeight
        this.item.length = this.items.length
    }
    initWrapp(){
        this.gal.style.position = 'relative'
        this.itemsWrappser.style.position = 'relative'
        let left = (this.item.width + this.item.gap) * -1
        console.log('wrapp left', `${left} px`)
        this.itemsWrappser.style.left = `${left}px`
    }
    doStart(){
        // this.itemsWrappser.classList.add('wsdc-do')
        this.itemsWrappser.style.transition = `${this.animationMSec}ms`
    }
    doStop(){
        this.itemsWrappser.classList.remove('wsdc-do')
        this.itemsWrappser.style.transition = '0ms'
    }
    doEnd(){
        this.itemsWrappser.classList.remove('wsdc-do')
        this.itemsWrappser.style.transition = '0ms'
    }
    galMoveRight(){
    }
    galMoveLeft(){
        this.doStart()
        // console.log('this.itemsWrappser.style 1',this.itemsWrappser.style)

        let left = parseInt(this.itemsWrappser.style.left, 10)
        left = left - ( this.item.width + this.item.gap )
        this.itemsWrappser.style.left = `${left}px`

        // console.log('this.itemsWrappser.style 2',this.itemsWrappser.style)
        setTimeout(this.galMoveLeftEnd.bind(this), this.animationMSec)
        // console.log('animationMSec :', this.animationMSec)
        // this.doStop()
        // this.doEnd()
    }
    galMoveLeftEnd(){
        this.itemsWrappser.appendChild(this.itemsWrappser.firstChild);
        this.doStop()
        let left = parseInt(this.itemsWrappser.style.left, 10)
        left = left + ( this.item.width + this.item.gap )
        this.itemsWrappser.style.left = `${left}px`
        this.doEnd()
    }
    galRight(){
        this.doStart()
        let left = parseInt(this.itemsWrappser.style.left, 10)
        left = left + ( this.item.width + this.item.gap )
        this.itemsWrappser.style.left = `${left}px`
        setTimeout(this.galMoveRightEnd.bind(this), this.animationMSec)
    }
    galMoveRightEnd(){
        // this.itemsWrappser.appendChild(this.itemsWrappser.firstChild);
        this.itemsWrappser.insertBefore(this.itemsWrappser.lastChild,this.itemsWrappser.firstChild);
        this.doStop()
        let left = parseInt(this.itemsWrappser.style.left, 10)
        left = left - ( this.item.width + this.item.gap )
        this.itemsWrappser.style.left = `${left}px`
        this.doEnd()
    }
    galLeft(){
        console.log([this.gal])
        console.log(this.itemsWrappser.firstChild)
                // firstChild
        // let f = gal.firstChild.remove()
        this.galMoveLeft()
        // this.itemsWrappser.appendChild(this.itemsWrappser.firstChild);
    }
}
var carusel = new WSDCarusel('wsd-gal')