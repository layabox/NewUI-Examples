{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "width": 1136,
  "height": 640,
  "_$child": [
    {
      "_$id": "95x1gzle",
      "_$type": "Scene3D",
      "name": "Scene3D",
      "skyRenderer": {
        "meshType": "dome"
      },
      "ambientColor": {
        "_$type": "Color",
        "r": 0.212,
        "g": 0.227,
        "b": 0.259
      },
      "_$child": [
        {
          "_$id": "60m2o8x8",
          "_$type": "Sprite3D",
          "name": "Particle",
          "_$comp": [
            {
              "_$type": "ShurikenParticleRenderer",
              "lightmapScaleOffset": {
                "_$type": "Vector4"
              },
              "sharedMaterials": [
                {
                  "_$uuid": "db42ad88-9d69-48e5-8c97-901e33356b69",
                  "_$type": "Material"
                }
              ],
              "_particleSystem": {
                "_isPlaying": true,
                "startSizeConstant": 0.5,
                "startSizeConstantSeparate": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                },
                "startSizeConstantMinSeparate": {
                  "_$type": "Vector3"
                },
                "startSizeConstantMaxSeparate": {
                  "_$type": "Vector3",
                  "x": 1,
                  "y": 1,
                  "z": 1
                },
                "startRotationConstantSeparate": {
                  "_$type": "Vector3"
                },
                "startRotationConstantSeparate2": {
                  "_$type": "Vector3"
                },
                "startRotationConstantMinSeparate": {
                  "_$type": "Vector3"
                },
                "startRotationConstantMaxSeparate": {
                  "_$type": "Vector3"
                },
                "startColorConstant": {
                  "_$type": "Vector4",
                  "x": 1,
                  "y": 1,
                  "z": 1,
                  "w": 1
                },
                "startColorConstantMin": {
                  "_$type": "Vector4"
                },
                "startColorConstantMax": {
                  "_$type": "Vector4",
                  "x": 1,
                  "y": 1,
                  "z": 1,
                  "w": 1
                },
                "maxParticles": 100,
                "randomSeed": {
                  "_$type": "Uint32Array",
                  "value": [
                    0
                  ]
                },
                "shape": {
                  "_$type": "SphereShape"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "_$id": "wg5a3v6k",
      "_$prefab": "47d13bae-814e-41e6-b436-f687745afc90",
      "name": "Demo_Controller",
      "active": true,
      "x": 2,
      "y": 1,
      "visible": true
    },
    {
      "_$id": "sk6owzbe",
      "_$type": "Sprite",
      "name": "Sprite",
      "x": 518,
      "y": 267,
      "width": 100,
      "height": 100,
      "_mouseState": 2,
      "_gcmds": [
        {
          "_$type": "DrawRectCmd",
          "fillColor": "#ffffff"
        }
      ],
      "_$comp": [
        {
          "_$id": "2dfd",
          "_$type": "StaticCollider",
          "shapes": []
        },
        {
          "_$type": "7bad1742-6eed-4d8d-81c0-501dc5bf03d6",
          "scriptPath": "../src/Main.ts"
        }
      ]
    }
  ]
}