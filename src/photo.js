import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
//import Test1 from './images/1-by-1.png';

// https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react
/*
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, '/\.(png|jpe?g|svg)$/'));
*/

const photos = [
    {
        src:"https://i.imgur.com/ZcOqzJs.png",
        width:589,
        height:1064
    },
    {
        src:"https://i.imgur.com/tzgtYRD.png",
        width:1358,
        height:885
    },
    {
        src:"https://i.imgur.com/GJI0Ob1.png",
        width:1300,
        height:885
    },
    {
        src:"https://i.imgur.com/yDS61Nq.png",
        width:766,
        height:708
    },
    {
        src:"https://i.imgur.com/gXcmfGn.png",
        width:1533,
        height:885
    },
    {
        src:"https://i.imgur.com/m97LE24.png",
        width:710,
        height:708
    },
    {
        src:"https://i.imgur.com/m1ISSUu.png",
        width:885,
        height:885
    },
    {
        src:"https://i.imgur.com/2sjKb0D.png",
        width:1241,
        height:708
    },
    {
        src:"https://i.imgur.com/tzHndL7.png",
        width:1181,
        height:1179
    },
    {
        src:"https://i.imgur.com/jrpZlLQ.png",
        width:1062,
        height:1062
    },
    {
        src:"https://i.imgur.com/G9KQMjK.png",
        width:1241,
        height:708
    },
    {
        src:"https://i.imgur.com/t00gBh8.png",
        width:1239,
        height:766
    },
    {
        src:"https://i.imgur.com/675zS27.png",
        width:1479,
        height:885
    }
];

const BasicRows = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("root"));
