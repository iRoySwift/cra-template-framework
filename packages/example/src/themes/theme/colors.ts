import {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    grey,
    blueGrey
} from "@mui/material/colors";

const colors = {
    red,
    pink,
    purple,
    deepPurple,
    indigo,
    blue,
    lightBlue,
    cyan,
    teal,
    green,
    lightGreen,
    lime,
    yellow,
    amber,
    orange,
    deepOrange,
    brown,
    grey,
    blueGrey
};

let No = [100, 200, 300, 400, 500, 600, 700, 800, 900, "A100", "A200", "A400", "A700"] as const;

type iColors = keyof typeof colors;
type iColorsNo = (typeof No)[number];

export type iPalette = {
    [k in iColors]: {
        [k in iColorsNo]: string;
    };
} & {
    common: {
        black: string;
        white: string;
    };
};

// interface iPalette {
//   [k in iColors]?: {
//     [k in iColorsNo]?: string;
//   };
// }

// interface iP extends iPalette {}

export const light: () => iPalette | {} = () => {
    let obj = {};
    Object.keys(colors).forEach(item => {
        No.forEach(el => {
            obj[item] = {
                ...obj[item],
                [el]: colors[item][el]
            };
        });
    });
    return obj;
};

export const dark: () => iPalette | {} = () => {
    let obj = {};
    Object.keys(colors).forEach(item => {
        No.forEach((el, i) => {
            obj[item] = {
                ...obj[item],
                [el]: colors[item][No[No.length - i - 1]]
            };
        });
    });
    return obj;
};
