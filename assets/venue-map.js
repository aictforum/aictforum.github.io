// 카카오 지도 JavaScript 키. 카카오 개발자 사이트에서 받은 키를 따옴표 안에 넣으면
// 오시는 길 지도가 카카오 지도로 바뀝니다. 비워 두면 index.html에 있는 구글 지도가 그대로 보입니다.
// 이 키는 등록한 사이트 주소에서만 동작하므로 공개되어도 괜찮습니다.
const KAKAO_MAP_KEY = "";

// 과학기술컨벤션센터(ST Center) 위치. 카카오맵 장소 정보 기준
const VENUE = { lat: 37.50071569321741, lng: 127.0307380520871, label: "과학기술컨벤션센터" };

(function loadKakaoMap() {
  const box = document.getElementById("venue-map");
  if (!KAKAO_MAP_KEY || !box) return;

  const script = document.createElement("script");
  script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_KEY}&autoload=false`;
  // 키나 도메인 설정이 틀려 불러오지 못하면 구글 지도를 그대로 둔다
  script.onload = () => {
    kakao.maps.load(() => {
      box.replaceChildren();
      const center = new kakao.maps.LatLng(VENUE.lat, VENUE.lng);
      const map = new kakao.maps.Map(box, { center, level: 3 });
      map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
      new kakao.maps.Marker({ map, position: center });

      const label = document.createElement("div");
      label.className = "venue-map-label";
      label.textContent = VENUE.label;
      new kakao.maps.CustomOverlay({ map, position: center, content: label, yAnchor: 1 });
    });
  };
  document.head.append(script);
})();
