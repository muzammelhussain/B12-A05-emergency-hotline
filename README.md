
    1- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    In JavaScript, getElementById selects a single element by its unique ID, while getElementsByClassName selects all elements with a given class and returns a live HTMLCollection. querySelector returns the first element matching a CSS selector, and querySelectorAll returns all matching elements as a static NodeList. The key differences are in selector type, number of elements returned, and whether the collection updates automatically.
    2- How do you create and insert a new element into the DOM?
    We can create and insert a new element into the DOM in JavaScript using document.createElement() to create it, and then append or insert it into an existing element using methods like .appendChild() or .insertBefore().
    3- What is Event Bubbling and how does it work?
    Event Bubbling in JavaScript is the process where an event triggered on a child element propagates upward through its parent elements in the DOM tree, all the way up to the document. It’s the default behavior of most DOM events.
    4- What is Event Delegation in JavaScript? Why is it useful?
    Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements. The parent handles events for its children using event bubbling.
    5- What is the difference between preventDefault() and stopPropagation() methods?
    In JavaScript, preventDefault() stops the browser’s default action for an event, like navigating a link or submitting a form, while stopPropagation() prevents the event from bubbling up to parent elements. preventDefault() controls behavior, and stopPropagation() controls event flow.
