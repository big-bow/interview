// 开始定义someFunction函数
let someFunction = (item_a, item_b) => {
    let choose = []     //设置结果容器
    let item_container  //设置遍历元素容器
    let chooseFunction = (item_a, item_b, name_container) => {//第三个参数为判断是否为嵌套的对象元素
        for (let item in item_a) {
            item_container = item_a[item]
            if (typeof (item_container) != 'object' && typeof (item_container) != 'function' && item_container.toString().includes(item_b))
                //判断此时的对象元素是一个值还是一个对象，并用includes判断目标字符是否出现,去除function的情况
                if (name_container == null)
                    choose.push(item)
                // 存入数组，非嵌套
                else
                    choose.push(name_container + '.' + item)
            // 存入数组，嵌套
            else if (typeof (item_container) == 'object' && Array.isArray(item_container) == false) {
                //判断是否为嵌套对象，并且不能为数组
                if (name_container == null)
                    chooseFunction(item_container, item_b, item)//调用函数本身--一次嵌套
                else
                    chooseFunction(item_container, item_b, name_container + '.' + item)//调用函数本身--多次嵌套
            }
        }
    }
    if (typeof (item_a) == 'object' && Array.isArray(item_container) == false && (typeof (item_b) == 'string' || typeof (item_b) == 'number'))
        chooseFunction(item_a, item_b)
    return choose
}

// 普通调用
let test = someFunction(
    {
        name: 'wangyi',
        age: '20',
        address: {
            city: 'beiji',
            country: 'china',
            item: {
                home: 'i1-11'
            }
        }
    },
    'i'
);
console.log(test)
// 普通调用

// 测试用例
// 1.  item_a: 空
// item_b: 空
// 2.  item_a: 非数组对象
// item_b: 空
// 3.  item_a: 非数组对象
// item_b: 字符串或数字
// 4.  item_a: 数组对象
// item_b: 字符串或数字
// 5.  item_a: 函数
// item_b: 字符串或数字
// 6.  item_a: 非数组对象
// item_b: 非字符串或数字

// 7.  item_a: 非数组对象，嵌套数组
// item_b: 非字符串或数字
// 8.  item_a: 非数组对象，嵌套函数
// item_b: 非字符串或数字
// 9.  item_a: 数组对象
// item_b: 非字符串或数字








