function changeOpacity(e) {
  const list = e.target.classList;
  console.log(e.target.classList[1]);

  if (list[1] == 'seen') {
    e.target.classList.remove('seen');
    e.target.classList.add('unseen');
  } else if (list[1] == 'unseen') {
    e.target.classList.remove('unseen');
    e.target.classList.add('seen');
  }
}