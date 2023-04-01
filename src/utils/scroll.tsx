function smoothScroll(target: string) {
    const element = document.getElementById(target);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

}