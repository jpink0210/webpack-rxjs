
const defaultList = {
    list : [
        {
            name: 'dog',
            img: '/assets/images/dog.png',
            left: 155,
            top: 313
        },
        {
            name: 'cat',
            img: '/assets/images/cat.png',
            left: 300,
            top: 370
        },
        {
            name: 'whale',
            img: '/assets/images/whale.png',
            left: 417,
            top: 239
        },
        {
            name: 'eagle',
            img: '/assets/images/eagle.png',
            left: 592,
            top: 490
        },
        {
            name: 'giraffe',
            img: '/assets/images/giraffe.png',
            left: 871,
            top: 381
        },
        {
            name: 'kangaroo',
            img: '/assets/images/kangaroo.png',
            left: 1045,
            top: 258
        },
        
        {
            name: 'fox',
            img: '/assets/images/fox.png',
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