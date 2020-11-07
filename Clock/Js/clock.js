// Updates Clock in HTML
export function update_clock() {
    let time_now = new Date(Date.now());

    write_numbers(time_now.getHours(), "hours");
    write_numbers(time_now.getMinutes(), "minutes");
    write_numbers(time_now.getSeconds(), "seconds");
    write_numbers(time_now.getMilliseconds(), "milliseconds");
}

/** Cuts the number to array
 * 
 * @param {Number} number 
 * 
 * @returns {Array} 23  =>  [2, 3] | 9   =>  [0, 9]
 */
function cut_number(number) {
    let result = [];

    // 09, 01, 00, ...
    if(number.toString().length < 2)
        return [0, number];

    // push in array each number
    for(const el of number.toString())
        result.push(parseInt(el));

    return result;
}

/** Writes numbers in HTML
 * 
 * @param {Number} number   23|4|44|34
 * @param {String} where    only: minutes|hours
 */
function write_numbers(number, where) {
    // get array of digits
    let numbers_arr = cut_number(number)

    // init class name
    let $clock_part = $(`.${where}`);

    // write digits
    for (let i = 0; i < numbers_arr.length; i++)
        write_digit($clock_part, numbers_arr[i], i);
}

/** Write digit in HTML
 * 
 * @param {JQuery} $clock_part  clock part JQuery element
 * @param {Number} digit        digit value
 * @param {Number} order        digit order in clock half
 */
function write_digit($clock_part, digit, order) {
    // get the $number element
    let $number = $clock_part.children(".number")[order];

    // write text in $number's child
    $($number).children("span").text(digit);
}