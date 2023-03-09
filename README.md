# react-model-viewer-3d

![Suzanne Model](https://imgs.search.brave.com/KohmbqLTxnQosIFfph7TeZAc4nSXlKGBkp5sHDJniPw/rs:fit:1200:800:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudHVyYm9zcXVp/ZC5jb20vUHJldmll/dy8yMDE0LzA3LzA4/X18wOV8wNF8wMC9P/cGVuR0xGYWNlcy5w/bmczNmI4ZmI0ZS00/MjE2LTQyNDItYmQ5/ZC05M2FmZmZkNWMy/YjBPcmlnaW5hbC5q/cGc)

npm package for adding interactive glTF models directly into your react application

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Usage
```cli
npm i react-model-viewer-3d
```

```jsx
import ModelViewer from 'react-model-viewer-3d'
```

```jsx
<ModelViewer
    gltf={'./example.gltf'}
    scale={2} // Defaults to 1
    rotation={[0, Math.PI /2, 0]} // Defaults to [0, 0, 0]
    height={'300px'} // Defaults to 300px
    width={'30vw'} // Defaults to 300px
/>
```

## Dependencies
- React
- Threejs
- react-three/fiber & react-three/drei (Shout out to the PMNDRS)

## Author
JackYouk
- Email: jackyoukstetter1@gmail.com
- Github: [JackYouk](https://github.com/JackYouk)

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
