
const defaultList = {
    list : [
        {
            name: 'dog',
            img: '/src/images/dog.png',
            left: 155,
            top: 313
        },
        {
            name: 'cat',
            img: '/src/images/cat.png',
            left: 300,
            top: 370
        },
        {
            name: 'whale',
            img: '/src/images/whale.png',
            left: 417,
            top: 239
        },
        {
            name: 'eagle',
            img: '/src/images/eagle.png',
            left: 592,
            top: 490
        },
        {
            name: 'giraffe',
            img: '/src/images/giraffe.png',
            left: 871,
            top: 381
        },
        {
            name: 'kangaroo',
            img: '/src/images/kangaroo.png',
            left: 1045,
            top: 258
        },
        
        {
            name: 'fox',
            img: '/src/images/fox.png',
            left: 723,
            top: 323
        },
    ],
    imgZIndex: 5
};

const DragList = (state = defaultList, action) => {
    switch (action.type) {
        case "ADD_ZINDEX":
            const znow = state.imgZIndex;
            return {...state, imgZIndex: znow+1};
        default:
            return {...state};
    }
  };
  
  export default DragList;