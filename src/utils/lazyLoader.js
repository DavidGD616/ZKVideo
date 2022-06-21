const lazyLoader = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log({ entry });
    if (entry.isIntersecting ) {
        const url = entry.target.getAttribute("data-img");
        entry.target.setAttribute("src", url);
    } 
  });
});

export default lazyLoader;
