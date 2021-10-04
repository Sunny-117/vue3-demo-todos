const LOCAL_KEY = "todomvc";
// 生成一个任务的唯一编号，时间戳+4位随机数
export function generateId() {
    return Date.now() + Math.random().toString(16).substr(2, 4)
}

export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY);
    if (result) {
        return JSON.parse(result)
    } else {
        return [];
    }
}

export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}