// desc: debounce function to limit the number of times a function is called
// params: func - function to be called
//         delay - time in ms to wait before calling function
// returns: function

// example: const debounceQueryAPI = debounce(funcQueryAPI, 500);
//          debounceQueryAPI('search term');


function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

