function fire({
    duty = '京东某研发中心',
    cause = '加班',
    place = '我以前办公室',
    seen = '几台笔记本在工位上',
    people = '不带电脑回家的工程师',
    supports = '回家继续工作',
    job = '工程师',
    badPart = '全台式机',
    level = '培训班外包公司'
} = {}) {
    return `朋友负责${duty}，有次${cause}后半夜去${place}聊天，看到${seen}就说，${people}就开了吧。虽然我并不鼓励${supports}，但我认为这是${job}的基本修养。后来我见过一个几乎${badPart}的团队，不用问技术细节，产品一看就${level}的水准。`;
}

module.exports = fire;
