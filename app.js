$(() => {
  console.log(anime.easings);
  $('.btn').click(() => {
    anime({
      targets: ['.btn'],
      translateX: '10rem',
      rotate: {
        value: 360,
        duration: 1500,
        easing: 'easeInBounce'
      },
      scale: {
        value: 2,
        delay: 150,
        duration: 1850,
        easing: 'easeInBounce',
      },
      direction: 'alternate',
      loop: false,
    });
  });

  anime({
    targets: 'h1',
    translateX: '2rem',
    rotate: {
      value: 10,
      duration: 2000,
      easing: 'easeOutBack'
    },
    direction: 'alternate'
  });

  anime({
    targets: 'div',
    translateX: '0rem',
    rotate: {
      value: 180,
      duration: 1000,
      easing: 'easeOutInQuart'
    },
    scale: {
      value: 1,
      delay: 1000,
      duration: 2000,
    },
    direction: 'alternate',
    loop: true
  });

});
