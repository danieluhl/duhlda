
// curry



// map



// join



// to lower case



// split



// pipe



// tap



// slugify
const slugify = (str) => str.split('').reverse().join('').toLowerCase().replace(/\s/g, '-');

// to slug a string (lowercase, dash delimiter, reverse)

const str = 'I Love Curry';
const slug = slugify(str);





