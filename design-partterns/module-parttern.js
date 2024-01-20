// Module parttern
const myModule = (() => {
    const userName = 'Trung';
    const passWord = '123456';
    const privateMethod = () => {
        console.log(`private method: ${userName} - ${passWord}`)
    }

    return {
        publicMethod: () => {
            privateMethod()
        }
    }
})();

module.exports = myModule;