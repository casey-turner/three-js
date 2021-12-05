/*------------------------------
  Imports
------------------------------*/
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'


/*------------------------------
  Model 
------------------------------*/
class Model {
  constructor (obj) {
    //console.log(obj)
    this.name = obj.name
    this.file = obj.file
    this.scene = obj.scene    
    this.loader = new GLTFLoader()
    this.dracoLoader = new DRACOLoader()
    this.dracoLoader.setDecoderPath('./draco/')
    this.loader.setDRACOLoader(this.dracoLoader)
    this.init()
  }
  /*------------------------------
   Init 
  ------------------------------*/
  init() {
    this.loader.load(this.file, (response) =>{
      //console.log(response)
      /*------------------------------
      Mesh
      ------------------------------*/
      this.mesh = response.scene.children[0]

      /*------------------------------
      Material Mesh
      ------------------------------*/
      this.material = new THREE.MeshBasicMaterial({
        color: 'red',
        wireframe: true
      })
      this.mesh.material = this.material 

      /*------------------------------
      Geometry Mesh
      ------------------------------*/
      this.geometry = this.mesh.geometry 
      
      /*------------------------------
      Particles Materials
      ------------------------------*/
      this.particlesMaterial = new THREE.PointsMaterial({
        color: 'blue',
        size: 0.2
      })

      /*------------------------------
      Particles
      ------------------------------*/  
      this.particles = new THREE.Points(this.geometry, this.particlesMaterial)



      /*------------------------------
      example
      ------------------------------*/

      this.scene.add(this.particles)

    })
  }
}

export default Model