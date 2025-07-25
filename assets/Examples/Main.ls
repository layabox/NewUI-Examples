{
  "_$ver": 1,
  "_$id": "00u9176x",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "width": 1136,
  "height": 640,
  "_$comp": [
    {
      "_$type": "432d6819-0928-4035-a7af-fe5629da815e",
      "scriptPath": "Examples/scripts/Main.bp",
      "_bp_data": {
        "container": {
          "_$ref": "15sjtobw"
        },
        "backButton": {
          "_$ref": "5pra4k4u"
        }
      }
    }
  ],
  "_$child": [
    {
      "_$id": "ta9dezti",
      "_$type": "GWidget",
      "name": "top",
      "width": 1136,
      "height": 70,
      "blendMode": 0,
      "background": {
        "_$type": "DrawRectCmd",
        "lineWidth": 1,
        "lineColor": "#000000",
        "fillColor": "#006699"
      },
      "relations": [
        {
          "_$type": "Relation",
          "target": {
            "_$ref": "00u9176x"
          },
          "data": [
            1,
            0
          ]
        }
      ]
    },
    {
      "_$id": "hlo2c9a4",
      "_$type": "GTextField",
      "name": "txt",
      "x": 18,
      "y": 15,
      "width": 315,
      "height": 40,
      "blendMode": 0,
      "text": "UI Examples",
      "fontSize": 35,
      "color": "#ff9900",
      "bold": true
    },
    {
      "_$id": "5pra4k4u",
      "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
      "name": "Button",
      "active": true,
      "x": 969,
      "y": 1,
      "visible": false,
      "relations": [
        {
          "_$type": "Relation",
          "target": {
            "_$ref": "00u9176x"
          },
          "data": [
            5,
            0
          ]
        }
      ],
      "title": "<<Back"
    },
    {
      "_$id": "6vbmlezi",
      "_$type": "GBox",
      "name": "box",
      "x": 28,
      "y": 87,
      "width": 1091,
      "height": 524,
      "blendMode": 0,
      "gears": [
        {
          "_$type": "GearDisplay",
          "controller": {
            "_$ref": "15sjtobw",
            "_$ctrl": "c1"
          },
          "pages": [
            0
          ]
        },
        {
          "_$type": "GearNumber",
          "controller": {
            "_$ref": "15sjtobw",
            "_$ctrl": "c1"
          },
          "propPath": "x",
          "tween": {
            "_$type": "GearTweenConfig"
          },
          "values": {
            "0": 28,
            "1": 1159,
            "_$type": "Record"
          }
        }
      ],
      "relations": [
        {
          "_$type": "Relation",
          "target": {
            "_$ref": "00u9176x"
          },
          "data": [
            1,
            0
          ]
        }
      ],
      "layout": {
        "type": 3,
        "columns": 6,
        "rowGap": 20,
        "columnGap": 20
      },
      "_$child": [
        {
          "_$id": "n6h4dxzp",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Graph",
          "active": true,
          "x": 0,
          "y": 0,
          "visible": true,
          "title": "Graphics",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://e129455a-0418-44f8-923f-cffcd913e404"
              }
            }
          ]
        },
        {
          "_$id": "wxsb9j8v",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Image",
          "active": true,
          "x": 183,
          "y": 0,
          "visible": true,
          "title": "Image",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://a7e75bb8-6c51-4fa2-94c5-83e35d8c608d"
              }
            }
          ]
        },
        {
          "_$id": "v0kr8zhc",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_MovieClip",
          "active": true,
          "x": 366,
          "y": 0,
          "visible": true,
          "title": "MovieClip",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://becf3b7e-e62e-4d1f-a391-68c59c7e8a6b"
              }
            }
          ]
        },
        {
          "_$id": "gbmw7535",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Text",
          "active": true,
          "x": 549,
          "y": 0,
          "visible": true,
          "title": "Text",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://f19c5694-14f7-46a7-9437-4241492073d4"
              }
            }
          ]
        },
        {
          "_$id": "rrqjkh58",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Loader",
          "active": true,
          "x": 732,
          "y": 0,
          "visible": true,
          "title": "Loader",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://9da57b8c-7771-44d6-ab4e-0b69d2fac6a7"
              }
            }
          ]
        },
        {
          "_$id": "ynybltnn",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_List",
          "active": true,
          "x": 915,
          "y": 0,
          "visible": true,
          "title": "List",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://710ec448-48c4-4c57-aa68-fc068a2921ed"
              }
            }
          ]
        },
        {
          "_$id": "43tlmenj",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Grid",
          "active": true,
          "x": 0,
          "y": 89,
          "visible": true,
          "title": "Grid",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://c068db7a-84a5-40b9-ba7a-e03d82d74627"
              }
            }
          ]
        },
        {
          "_$id": "lz85dfj1",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Controller",
          "active": true,
          "x": 183,
          "y": 89,
          "visible": true,
          "title": "Controller",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://47d13bae-814e-41e6-b436-f687745afc90"
              }
            }
          ]
        },
        {
          "_$id": "3tygsgkt",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Relation",
          "active": true,
          "x": 366,
          "y": 89,
          "visible": true,
          "title": "Relation",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://92338918-2298-4bbe-8e97-bf9f5000b710"
              }
            }
          ]
        },
        {
          "_$id": "fivwqtlb",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Clip&Scroll",
          "active": true,
          "x": 549,
          "y": 89,
          "visible": true,
          "title": "Clip&Scroll",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://071e9645-387d-4fa8-a21e-2a6f180d8de9"
              }
            }
          ]
        },
        {
          "_$id": "dpze7xm1",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Box",
          "active": true,
          "x": 732,
          "y": 89,
          "visible": true,
          "title": "Box",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://6e8f453a-c1c4-4d4b-a263-8f421d7540a2"
              }
            }
          ]
        },
        {
          "_$id": "wyui9oba",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Label",
          "active": true,
          "x": 915,
          "y": 89,
          "visible": true,
          "title": "Label",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://6335a1f3-f6fc-46a6-bb4e-496fcb529108"
              }
            }
          ]
        },
        {
          "_$id": "jwn7ets0",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Button",
          "active": true,
          "x": 0,
          "y": 178,
          "visible": true,
          "title": "Button",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://e1f23637-5963-4d3a-9efc-3ad230a69536"
              }
            }
          ]
        },
        {
          "_$id": "pz0mrgyq",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_ComboBox",
          "active": true,
          "x": 183,
          "y": 178,
          "visible": true,
          "title": "ComboBox",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://53f2b9c8-3f23-487a-bcb2-c25658178e27"
              }
            }
          ]
        },
        {
          "_$id": "nk9ccejl",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Slider",
          "active": true,
          "x": 366,
          "y": 178,
          "visible": true,
          "title": "Slider",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://c10be42e-4e33-4bbe-832e-8a8f7f8b8173"
              }
            }
          ]
        },
        {
          "_$id": "v9wau55b",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_ProgressBar",
          "active": true,
          "x": 549,
          "y": 178,
          "visible": true,
          "title": "ProgressBar",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://dfae0ef3-cb7d-48a1-8b46-c64cdad779c9"
              }
            }
          ]
        },
        {
          "_$id": "6hm9khzg",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Popup",
          "active": true,
          "x": 732,
          "y": 178,
          "visible": true,
          "title": "Popup",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://b3e391db-9ac9-433e-a4e9-ed561f450720"
              }
            }
          ]
        },
        {
          "_$id": "zt6efzqq",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Window",
          "active": true,
          "x": 915,
          "y": 178,
          "visible": true,
          "title": "Window",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://ed047dca-7013-47d7-b640-5c0dbc19eb15"
              }
            }
          ]
        },
        {
          "_$id": "251537ad",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Depth",
          "active": true,
          "x": 0,
          "y": 267,
          "visible": true,
          "title": "Depth",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://feb1573c-b7e6-4d1c-9799-ab0a59537eae"
              }
            }
          ]
        },
        {
          "_$id": "t1q01ibq",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_DragDrop",
          "active": true,
          "x": 183,
          "y": 267,
          "visible": true,
          "title": "DragDrop",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://673959af-f0bf-4adb-bcff-edbe433337fb"
              }
            }
          ]
        },
        {
          "_$id": "0z6iw0q1",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Chat",
          "active": true,
          "x": 366,
          "y": 267,
          "visible": true,
          "title": "Chat",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://0d97a3a9-8429-40c7-9f61-2908a0e26b77"
              }
            }
          ]
        },
        {
          "_$id": "4kt5kfle",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Guide",
          "active": true,
          "x": 549,
          "y": 267,
          "visible": true,
          "title": "Guide",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://7921b9e1-b7a4-4732-a70d-7f0b5bde9fdb"
              }
            }
          ]
        },
        {
          "_$id": "xdrx0deq",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_HitTest",
          "active": true,
          "x": 732,
          "y": 267,
          "visible": true,
          "title": "HitTest",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://ffb0d5fc-277a-47db-9e56-f31eff7754c1"
              }
            }
          ]
        },
        {
          "_$id": "g93jw4yh",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Joystick",
          "active": true,
          "x": 915,
          "y": 267,
          "visible": true,
          "title": "Joystick",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://9474fc52-c684-422c-b3d5-e98c9b6b089e"
              }
            }
          ]
        },
        {
          "_$id": "cp0kzzl3",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_ModalWait",
          "active": true,
          "x": 0,
          "y": 356,
          "visible": true,
          "title": "ModalWait",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://d8d7b5a6-357e-437c-b11a-95a54c5bc55d"
              }
            }
          ]
        },
        {
          "_$id": "8pg4qx02",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_VirtualList",
          "active": true,
          "x": 183,
          "y": 356,
          "visible": true,
          "title": "VirtualList",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://c8ad97f1-4f60-45ff-9a05-a5f574ebb910"
              }
            }
          ]
        },
        {
          "_$id": "13z2jdwj",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_LoopList",
          "active": true,
          "x": 366,
          "y": 356,
          "visible": true,
          "title": "LoopList",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://822a30a3-28e0-4063-82ac-d54bd60afff7"
              }
            }
          ]
        },
        {
          "_$id": "iwfecasw",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Tree",
          "active": true,
          "x": 549,
          "y": 356,
          "visible": true,
          "title": "Tree",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://142c8074-57f8-49a8-8449-59a906922461"
              }
            }
          ]
        },
        {
          "_$id": "7mhfe88r",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_PullToRefresh",
          "active": true,
          "x": 732,
          "y": 356,
          "visible": true,
          "title": "PullToRefresh",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://9259fa55-0162-45b7-a602-e40c329f3994"
              }
            }
          ]
        },
        {
          "_$id": "lk30hg9e",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_DualScroll",
          "active": true,
          "x": 915,
          "y": 356,
          "visible": true,
          "title": "DualScroll",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://10251f6c-fc9f-40a7-b275-e08cbf466388"
              }
            }
          ]
        },
        {
          "_$id": "acvecll4",
          "_$prefab": "d6b285ae-bb1b-42f4-a907-2886b2df54c2",
          "name": "btn_Bag",
          "active": true,
          "x": 0,
          "y": 445,
          "visible": true,
          "title": "Bag",
          "_$comp": [
            {
              "_$type": "4b4a4106-ea7d-4a2f-b57b-56bd91f74d2e",
              "scriptPath": "Examples/scripts/MainStartButton.bp",
              "_bp_data": {
                "PageRes": "res://02886658-776d-4107-a457-4a1bb3c8c5a4"
              }
            }
          ]
        }
      ]
    },
    {
      "_$id": "15sjtobw",
      "_$type": "GWidget",
      "name": "container",
      "x": -1143,
      "y": 70,
      "width": 1136,
      "height": 570,
      "blendMode": 0,
      "controllers": {
        "_$type": "Record",
        "c1": {
          "_$type": "Controller",
          "pages": [
            "",
            ""
          ]
        }
      },
      "gears": [
        {
          "_$type": "GearDisplay",
          "controller": {
            "_$ref": "15sjtobw",
            "_$ctrl": "c1"
          },
          "pages": [
            1
          ]
        },
        {
          "_$type": "GearNumber",
          "controller": {
            "_$ref": "15sjtobw",
            "_$ctrl": "c1"
          },
          "propPath": "x",
          "tween": {
            "_$type": "GearTweenConfig"
          },
          "values": {
            "0": -1143,
            "1": 0,
            "_$type": "Record"
          }
        }
      ],
      "relations": [
        {
          "_$type": "Relation",
          "target": {
            "_$ref": "00u9176x"
          },
          "data": [
            1,
            0,
            2,
            0
          ]
        }
      ]
    }
  ]
}