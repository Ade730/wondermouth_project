
  const spinnerWrapperEl =document.querySelector('.spinner-wrapper')

  window.addEventListener('load',() =>{
    spinnerWrapperEl.style.opacity = '0';
    
  setTimeout(() =>{
    spinnerWrapperEl.style.display ='none'
  },1000)

  })
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });


  $(document).ready(function () {
    const openButton1 = document.getElementById('openButton1');
    const openButton2 = document.getElementById('openButton2');

    openButton1.addEventListener('click', function () {
        // Replace "path/to/your/file1.pdf" with the actual path to your first PDF file
        const filePath1 = '/WMC FOOD MENU.pdf';

        // Open the first PDF file in a new browser tab
        window.open(filePath1, '_blank');
    });

    openButton2.addEventListener('click', function () {
        // Replace "path/to/your/file2.pdf" with the actual path to your second PDF file
        const filePath2 = '/WMC DRINK MENU.pdf';

        // Open the second PDF file in a new browser tab
        window.open(filePath2, '_blank');
    });
});