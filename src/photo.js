import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";

const photos = [
    {
        src:"https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/59244100_1210569819111661_7784539391191416832_o.jpg?_nc_cat=102&_nc_ht=scontent-hkg3-1.xx&oh=5279a951f7de1ddadf894e6acd795448&oe=5D372605",
        width:1,
        height:1
    },
    {
        src:"https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-9/58622692_1210569402445036_285859343750922240_o.jpg?_nc_cat=104&_nc_ht=scontent-hkg3-1.xx&oh=49073590d25075c0fa2a265ad9ffe7d1&oe=5D723CF6",
        width:3,
        height:4
    },
    {
        src:"https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-0/q90/c50.0.200.200a/p200x200/59380274_1210564609112182_4427657342787518464_n.jpg?_nc_cat=100&_nc_ht=scontent-hkg3-1.xx&oh=d69e58b39fb6075a79c24579828ec2da&oe=5D6B34E8",
        width:3,
        height:4
    }
];

const BasicRows = () => <Gallery photos={photos} />;
render(<BasicRows />, document.getElementById("app"));
