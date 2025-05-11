fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

  fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });

  fetch('header.html')
            .then(res => res.text())
            .then(data => {

                document.getElementById('header-container').innerHTML = data;

                document.getElementById('menuToggle').addEventListener('click', function () {
                    const mainMenu = document.getElementById('mainMenu');
                    mainMenu.classList.toggle('active');
                });
            });
