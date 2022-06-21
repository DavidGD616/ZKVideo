const lazyLoader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting ) {
        const url = entry.target.getAttribute("data-img");
        entry.target.setAttribute("src", url);
        // console.log(entry.target);
    } 
  });
});

export default lazyLoader;
