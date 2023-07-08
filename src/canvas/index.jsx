import { Center, Environment } from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'


const CanvasModel = () => {
  return (
    <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <CameraRig>
            {/* <Backdrop/> */}
            <Center>
                <Shirt/>
            </Center>
        </CameraRig>
    </Canvas>
  )
}

export default CanvasModel