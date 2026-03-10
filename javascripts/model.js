import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'
import { GLTFLoader } from 'GLTFLoader'
import { RectAreaLightUniformsLib } from 'RectAreaLightUniformsLib'

document.addEventListener('DOMContentLoaded', () => {
    initThree()
})

function initThree() {
  // html-контейнер
  const model = document.querySelector('.ram3D')

  // сцена
  const scene = new THREE.Scene()
  scene.background = null

  // камера
  const camera = new THREE.PerspectiveCamera(
    // for
    60,
    // aspect
    window.innerWidth / window.innerHeight,
    // near
    0.1,
    // far
    3000
  )
  // set это все координаты вместе, то есть x,y,z
  camera.position.set(0, 0, 180) // ближе к центру
  camera.lookAt(0, 0, 0) // смотрим в центр сцены

  // визуализатор
  const renderer = new THREE.WebGLRenderer({ antialias: true,
    alpha: true
   })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  model.appendChild(renderer.domElement)

  // Инициализация размера рендерера на основе контейнера
  function updateRendererSize() {
    const containerRect = model.getBoundingClientRect()
    renderer.setSize(containerRect.width, containerRect.height)
    camera.aspect = containerRect.width / containerRect.height
    camera.updateProjectionMatrix()
  }

  updateRendererSize()

  window.addEventListener('resize', updateRendererSize)

  // подключение модели
  {
    const loader = new GLTFLoader()
    loader.load(
      './3d-model/ramFigure.gltf',
      function (gltf) {
        scene.add(gltf.scene)
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      function (error) {
        console.error('Ошибка загрузки модели:', error)
      }
    )
  }

  // базовый свет
  {
    const light = new THREE.AmbientLight(0xeeeeee)
    scene.add(light)
  }

  // управление моделькой
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.autoRotate = true

  function animate() {
    requestAnimationFrame(animate)
    controls.update()
    renderer.render(scene, camera)
  }
  animate()
}

