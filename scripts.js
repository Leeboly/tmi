

document.getElementById('shareButton').addEventListener('click', shareContent);

function shareContent() {
  if (navigator.share) {
    navigator.share({
      title: 'WebShare API Example',
      text: 'Check out this web site!',
      url: window.location.href
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  } else {
    // 공유 API를 지원하지 않는 경우의 대체 처리
    console.log('Web Share API is not supported in your browser.');
  }
}

function flipCard(selectedCard) {
    // 모든 카드를 선택
    const allCards = document.querySelectorAll('.card');
  
    // 모든 카드를 뒤집지 않은 상태로 초기화
    allCards.forEach(card => {
      if (card !== selectedCard) {
        card.classList.remove('flipped');
      }
    });
  
    // 선택된 카드의 flipped 클래스 토글
    selectedCard.classList.toggle('flipped');
  }
