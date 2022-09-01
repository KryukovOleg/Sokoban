
import * as THREE from 'three'
const root = document.querySelector('html')

/*-------------------------------------- wrapper*/
const wrapper = document.querySelector('.wrapper')
wrapper.style.setProperty('height', `${document.documentElement.clientHeight}px`)
wrapper.style.setProperty('width', `${document.documentElement.clientWidth}px`)

/*-------------------------------------- header*/
const menu_item = document.querySelectorAll('.menu__item')
for (let i=0; i<menu_item.length; i++){
   menu_item[i].addEventListener('mouseover', function(){
      menu_item[i].classList.add('menu__item-hover')
   })
   menu_item[i].addEventListener('mouseout', function(){
      menu_item[i].classList.remove('menu__item-hover')
   })
}

/*-------------------------------------- main*/
const settings__item = document.querySelectorAll('.settings__item')
for (let i=0; i<settings__item.length; i++){
   settings__item[i].addEventListener('mouseover', function(){
      settings__item[i].classList.add('menu__item-hover')
   })
   settings__item[i].addEventListener('mouseout', function(){
      settings__item[i].classList.remove('menu__item-hover')
   })
}

/*-------------------------------------- THREE*/
const information = document.querySelector('.information')

const light = new THREE.AmbientLight(0xffffff, 50)

const radiusCanvas = 5
const camera = new THREE.OrthographicCamera( -radiusCanvas, radiusCanvas, radiusCanvas, -radiusCanvas, 1, 1000 );
camera.position.z = 1000

const scene = new THREE.Scene()
// scene.background = new THREE.Color(getComputedStyle(root).getPropertyValue('--color-menu'))
scene.background = new THREE.TextureLoader().load('../kenney_sokobanpack/bi.png', function(texture){
   const material = new THREE.MeshBasicMaterial({map:texture})
   const geometry = new THREE.PlaneGeometry(radiusCanvas*2,radiusCanvas*2)
   const m = new THREE.Mesh(geometry,material)
})

scene.add(light)

const loader = new THREE.TextureLoader()
let x = 0
let y = 0
var step = 1
let radiusNeg = -3
var radiusPos = 3
//-------------------------------------- hero
loader.load('../kenney_sokobanpack/PNG/Default size/Player/player_01.png', function(texture){
   const material = new THREE.MeshBasicMaterial({map:texture, transparent: true})
   const geometry = new THREE.PlaneGeometry(1,1)
   const m = new THREE.Mesh(geometry, material)
   m.position.z = 4
   scene.add(m)
   window.addEventListener('keydown', function(event){
      if(event.code == 'ArrowUp' && y<radiusPos){
         console.log(y)
         y += step
         m.position.y = y
      }else if(event.code == 'ArrowRight' && x<radiusPos){
         x += step
         m.position.x = x
      }else if(event.code == 'ArrowDown' && y>radiusNeg){
         y -= step
         m.position.y = y
      }else if(event.code == 'ArrowLeft'&& x>radiusNeg){
         x -= step
         m.position.x = x
      }else{
         console.log("ТУПИК")
      }
   })
})
//-------------------------------------- grass
loader.load('../kenney_sokobanpack/PNG/Default size/Ground/ground_05.png', function(texture){
   const material = new THREE.MeshBasicMaterial({map:texture, transparent: true})
   const geometry = new THREE.PlaneGeometry(1,1)
   for (let i=0; i<(radiusCanvas+1); i++){
      // top
      const m1 = new THREE.Mesh(geometry,material)
      m1.position.set(0+i,radiusCanvas,3)
      const m2 = new THREE.Mesh(geometry,material)
      m2.position.set(0-i,radiusCanvas,3)
      // bottom
      const m3 = new THREE.Mesh(geometry,material)
      m3.position.set(0+i,-radiusCanvas,3)
      const m4 = new THREE.Mesh(geometry,material)
      m4.position.set(0-i,-radiusCanvas,3)
      // right
      const m5 = new THREE.Mesh(geometry,material)
      m5.position.set(radiusCanvas,0+i,3)
      const m6 = new THREE.Mesh(geometry,material)
      m6.position.set(radiusCanvas,0-i,3)
      // left
      const m7 = new THREE.Mesh(geometry,material)
      m7.position.set(-radiusCanvas,0+i,3)
      const m8 = new THREE.Mesh(geometry,material)
      m8.position.set(-radiusCanvas,0-i,3)
      scene.add(m1,m2,m3,m4,m5,m6,m7,m8)
   }
})
//-------------------------------------- building
loader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_11.png',function(texture){
   const material = new THREE.MeshBasicMaterial({map:texture, transparent:true})
   const geometry = new THREE.PlaneGeometry(1,1)
   for (let i=0; i<radiusCanvas; i++){
      // top
      const m1 = new THREE.Mesh(geometry, material)
      m1.position.set(0+i,radiusCanvas-1,3)
      const m2 = new THREE.Mesh(geometry, material)
      m2.position.set(0-i,radiusCanvas-1,3)
      // bottom
      const m3 = new THREE.Mesh(geometry, material)
      m3.position.set(0+i,-(radiusCanvas-1),3)
      const m4 = new THREE.Mesh(geometry, material)
      m4.position.set(0-i,-(radiusCanvas-1),3)
      // right
      const m5 = new THREE.Mesh(geometry, material)
      m5.position.set(radiusCanvas-1,0+i,3)
      const m6 = new THREE.Mesh(geometry, material)
      m6.position.set(radiusCanvas-1,0-i,3)
      // left
      const m7 = new THREE.Mesh(geometry, material)
      m7.position.set(-(radiusCanvas-1),0+i,3)
      const m8 = new THREE.Mesh(geometry, material)
      m8.position.set(-(radiusCanvas-1),0-i,3)
      scene.add(m1,m2,m3,m4,m5,m6,m7,m8)
   }
})
//-------------------------------------- floor
loader.load('../kenney_sokobanpack/PNG/Default size/Ground/ground_01.png', function(texture){
   const material = new THREE.MeshBasicMaterial({map: texture, transparent: true})
   const geometry = new THREE.PlaneGeometry(1,1)
   for (let i=0; i<radiusCanvas-1; i++){
      // top
      for (let f=0; f<((radiusCanvas-1)*2)-1; f++){
         const m1 = new THREE.Mesh(geometry, material)
         m1.position.set(0+i,radiusCanvas-2-f,3)
         const m2 = new THREE.Mesh(geometry, material)
         m2.position.set(0-i,radiusCanvas-2-f,3)
         scene.add(m1,m2)
      }
   }
})
//-------------------------------------- spawn
const spawn = []
if (x==0 && y==0){
   loader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_29.png', function(texture){
      const material = new THREE.MeshBasicMaterial({map: texture, transparent: true})
      const geometry = new THREE.PlaneGeometry(1,1)
      const m = new THREE.Mesh(geometry, material)
      m.position.set(0,0,3)
      spawn.push(m.position)
      scene.add(m)
   })
}
//-------------------------------------- boxes
loader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_44.png', function(texture){
   const material = new THREE.MeshBasicMaterial({map:texture, transparent:true})
   const geometry = new THREE.PlaneGeometry(1/1)
   const m1 = new THREE.Mesh(geometry,material)
   m1.position.set(0,radiusCanvas-3,4)
   const m2 = new THREE.Mesh(geometry,material)
   m2.position.set(radiusCanvas-3,0,4)
   const m3 = new THREE.Mesh(geometry,material)
   m3.position.set(0-radiusCanvas+3,0,4)
   scene.add(m1,m2,m3)
})
//-------------------------------------- level-1
//-------------------------------------- walls
loader.load('../kenney_sokobanpack/PNG/Default size/Crates/crate_01.png', function(texture){
   let boxes = [2,2,4]
   const material = new THREE.MeshBasicMaterial({map:texture, transparent:true})
   const geometry = new THREE.PlaneGeometry(1/1)
   //top-right
   const m1 = new THREE.Mesh(geometry,material)
   m1.position.set(radiusCanvas-3,radiusCanvas-3,4)
   const m2 = new THREE.Mesh(geometry,material)
   m2.position.set(radiusCanvas-4,radiusCanvas-3,4)
   const m3 = new THREE.Mesh(geometry,material)
   m3.position.set(radiusCanvas-3,radiusCanvas-4,4)
   //top-left
   const m4 = new THREE.Mesh(geometry,material)
   m4.position.set(0-radiusCanvas+3,radiusCanvas-3,4)
   const m5 = new THREE.Mesh(geometry,material)
   m5.position.set(0-radiusCanvas+4,radiusCanvas-3,4)
   const m6 = new THREE.Mesh(geometry,material)
   m6.position.set(0-radiusCanvas+3,radiusCanvas-4,4)
   scene.add(m1,m2,m3,m4,m5,m6)
   //bottom-right
   const m7 = new THREE.Mesh(geometry,material)
   m7.position.set(radiusCanvas-3,0-radiusCanvas+3,4)
   const m8 = new THREE.Mesh(geometry,material)
   m8.position.set(radiusCanvas-4,0-radiusCanvas+3,4)
   const m9 = new THREE.Mesh(geometry,material)
   m9.position.set(radiusCanvas-3,0-radiusCanvas+4,4)
   //bottom-right
   const m10 = new THREE.Mesh(geometry,material)
   m10.position.set(0-radiusCanvas+3,0-radiusCanvas+3,4)
   const m11 = new THREE.Mesh(geometry,material)
   m11.position.set(0-radiusCanvas+4,0-radiusCanvas+3,4)
   const m12 = new THREE.Mesh(geometry,material)
   m12.position.set(0-radiusCanvas+3,0-radiusCanvas+4,4)
   scene.add(m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12)
})






const renderer = new THREE.WebGLRenderer()
renderer.setSize(information.getBoundingClientRect().width , information.getBoundingClientRect().height)
document.querySelector('.game').appendChild(renderer.domElement)

const canvas = document.querySelector('canvas')
canvas.classList.add('canvas')



function animate(){
   requestAnimationFrame(animate)
   renderer.render(scene, camera)
}
animate()


window.addEventListener('resize', windowResize)
function windowResize(){
   wrapper.style.setProperty('height', `${document.documentElement.clientHeight}px`)
   wrapper.style.setProperty('width', `${document.documentElement.clientWidth}px`)

   renderer.setSize(information.getBoundingClientRect().width , information.getBoundingClientRect().height)
}
