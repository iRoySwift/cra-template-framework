/**
 * 通用js方法封装处理
 * Copyright (c) 2019 ruoyi
 */

/**
 * 日期格式化
 * @param time
 * @param pattern parseTime(time, "{y}-{m}-{d} {h}:{i}:{s}")
 * @returns
 */
/**
 * @param time
 */
export function parseTime(time, pattern) {
    if (arguments.length === 0 || !time) {
        return null;
    }
    const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
    let date;
    if (typeof time === "object") {
        date = time;
    } else {
        if (typeof time === "string" && /^[0-9]+$/.test(time)) {
            time = parseInt(time);
        } else if (typeof time === "string") {
            time = time
                .replace(new RegExp(/-/gm), "/")
                .replace("T", " ")
                .replace(new RegExp(/\.[\d]{3}/gm), "");
        }
        if (typeof time === "number" && time.toString().length === 10) {
            time = time * 1000;
        }
        date = new Date(time);
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay(),
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key];
        // Note: getDay() returns 0 on Sunday
        if (key === "a") {
            return [
                "星期日",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
            ][value];
        }
        if (result.length > 0 && value < 10) {
            value = "0" + value;
        }
        return value || 0;
    });
    return time_str;
}

/**
 * table转excel
 * let js = '<script type="text/javascript" src="https://unpkg.com/xlsx@0.15.1/dist/xlsx.full.min.js"></script>'
 * $('body').append(js)
 */
// const toExcel = id => {
//     var elt = document.getElementById("tbl_exporttable_to_xls");
//     var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
//     return dl
//         ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
//         : XLSX.writeFile(wb, fn || "MySheetName." + (type || "xlsx"));
// };
