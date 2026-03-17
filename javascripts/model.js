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
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
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

  // Загрузка текстуры
  const textureLoader = new THREE.TextureLoader()
  const bakedTextureEye1 = textureLoader.load('./3d-model/eye1.png')
  const bakedTextureEye2 = textureLoader.load('./3d-model/eye2.png')
  const bakedTextureEye3 = textureLoader.load('./3d-model/eye3.png')
  const bakedTextureShoulder1 = textureLoader.load('./3d-model/shoulder1.png')
  const bakedTextureShoulder2 = textureLoader.load('./3d-model/shoulder2.png')
  const bakedTextureStomach = textureLoader.load('./3d-model/stomach.png')

  // подключение модели
  {
    const loader = new GLTFLoader()
    loader.load(
      './3d-model/ramFigure2.gltf',
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

  // Фоновое освещение
  scene.add(new THREE.AmbientLight(0x404040, 0.3))

  // Основной источник света
  const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
  mainLight.position.set(10, 20, 15)
  mainLight.castShadow = true
  scene.add(mainLight)

  // Заполняющий свет
  const fillLight = new THREE.DirectionalLight(0xffffff, 1)
  fillLight.position.set(-10, -20, -15)
  scene.add(fillLight)

  // Подсветка снизу
  const backLight = new THREE.DirectionalLight(0xffffff, 0.5)
  backLight.position.set(0, -10, 0)
  scene.add(backLight)

  // свечение
  const material = new THREE.MeshStandardMaterial({
    color: 0x222222, // основной цвет
    emissive: 0xff0000, // цвет свечения
    emissiveIntensity: 10, // интенсивность свечения
    metalness: 0.8,
    roughness: 0.2
  })

  const geometry = new THREE.SphereGeometry(5, 32, 32)
  const sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)

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