const { Queue, display, isEmpty, peek } = require('./queue')

class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let catQueue = new Queue();
catQueue.enqueue({
    imageURL:'https://registeredbengals.com/uploads/3/4/9/2/34928118/screen-shot-2019-06-01-at-10-01-37_orig.png', 
    imageDescription: 'Brown bengal cat with lepard pattern sitting and posing for the camera.',
    name: 'Steve',
    sex: 'Male',
    age: 4,
    breed: 'Bengal',
    story: 'Thrown on the street'
});
catQueue.enqueue({
    imageURL:'https://www.bravotv.com/sites/bravo/files/styles/blog-post-embedded--mobile/public/field_blog_image/2016/11/unleashed-plume.jpg?itok=drjte67H', 
    imageDescription: 'Himalayan cat waiting to be adopted',
    name: 'Grey',
    sex: 'Female',
    age: 3,
    breed: 'Himalayan',
    story: 'Rescued from an abusive home'
});
catQueue.enqueue({
    imageURL:'http://metaphoricalplatypus.com/wp-content/uploads/2012/12/american-shorthair-cat.jpg', 
    imageDescription: 'LaPerm cat lounging at the shelter, keeping workers company',
    name: 'Elvis',
    sex: 'Female',
    age: 2,
    breed: 'American Shorthair',
    story: 'Thrown on the street'
});
catQueue.enqueue({
    imageURL:'https://www.shelterluv.com/sites/default/files/animal_pics/13324/2019/10/20/13/20191020130620.png', 
    imageDescription: 'LaPerm cat lounging at the shelter, keeping workers company.',
    name: 'Corn',
    sex: 'Male',
    age: 4,
    breed: 'LaPerm',
    story: 'Rescue from an abusive home'
});
catQueue.enqueue({
    imageURL:'https://www.animalleague.org/wp-content/uploads/2019/08/email-header-free-feline-weekend-082919-v2.jpg', 
    imageDescription: 'American Curl with all white body in a cage',
    name: 'Missy',
    sex: 'Female',
    age: 2,
    breed: 'American Curl',
    story: 'Thrown on the street'
});
// console.log(peek(q));