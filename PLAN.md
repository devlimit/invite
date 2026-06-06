# 모바일 청첩장 개발 계획

## 프로젝트 구조

```
invitaion/
├── src/
│   ├── components/
│   │   ├── Intro.jsx          # 인트로 애니메이션
│   │   ├── Navigation.jsx     # 오른쪽 상단 메뉴
│   │   ├── Hero.jsx           # 메인 사진 + 꽃잎
│   │   ├── Greeting.jsx       # 인사말
│   │   ├── Couple.jsx         # 소개 (신랑/신부)
│   │   ├── Calendar.jsx       # 달력
│   │   ├── Dday.jsx           # 디데이 카운트다운
│   │   ├── Gallery.jsx        # 갤러리 (thumb/full 분리)
│   │   ├── Location.jsx       # 오시는길 (네이버지도)
│   │   ├── Account.jsx        # 계좌번호 (환경변수)
│   │   ├── Petals.jsx         # 꽃잎 날리기 효과
│   │   └── MusicPlayer.jsx    # 배경 음악 플레이어
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── gallery/
│   │   ├── full/              # 1200px 리사이즈본 (모달용)
│   │   └── thumb/             # 400px 리사이즈본 (그리드용)
│   ├── cherryblossom.png      # 꽃잎 이미지
│   └── ...
└── index.html
```

## 화면 흐름

| 순서 | 섹션 | 설명 |
|------|------|------|
| 1 | Intro | 인트로 애니메이션 |
| 2 | Hero | 메인 사진 + 꽃잎 효과 |
| 3 | Greeting | 인사말 |
| 4 | Couple | 신랑/신부 소개 |
| 5 | Calendar | 예식 날짜 달력 |
| 6 | Dday | D-day 카운트다운 |
| 7 | Gallery | 사진 갤러리 |
| 8 | Location | 오시는길 (네이버지도) |
| 9 | Account | 축의금 계좌번호 |

## 기술 스택

- **프레임워크**: React + Vite
- **스타일링**: CSS
- **호스팅**: GitHub Pages (GitHub Actions 자동 배포)
- **환경변수**: `.env` + GitHub Actions Secrets

## 완료된 작업

### 환경변수 분리
- 계좌번호, 전화번호 등 민감 정보를 `.env`로 분리
- `Account.jsx`에서 `import.meta.env`로 참조
- GitHub Actions `deploy.yml`에 secrets 주입 설정 (20개 변수)

### 갤러리 최적화
- 원본 사진(최대 28MB) → `full/` 1200px + `thumb/` 400px 분리
- 그리드: thumb 사용 (빠른 로딩)
- 모달: full 사용 (고화질)
- gallery_09 → 보정본(3).jpg 교체

### 꽃잎 효과
- CSS 도형 → `cherryblossom.png` 이미지로 교체
- 크기: 20~35px
- 생성 간격: 600ms

## 배포

```
https://devlimit.github.io/invite
```

### GitHub Secrets 등록 필요 목록
```
VITE_GROOM_NAME / VITE_GROOM_PHONE / VITE_GROOM_BANK / VITE_GROOM_ACCOUNT
VITE_GROOM_FATHER_NAME / VITE_GROOM_FATHER_BANK / VITE_GROOM_FATHER_ACCOUNT
VITE_GROOM_MOTHER_NAME / VITE_GROOM_MOTHER_BANK / VITE_GROOM_MOTHER_ACCOUNT
VITE_BRIDE_NAME / VITE_BRIDE_PHONE / VITE_BRIDE_BANK / VITE_BRIDE_ACCOUNT
VITE_BRIDE_FATHER_NAME / VITE_BRIDE_FATHER_BANK / VITE_BRIDE_FATHER_ACCOUNT
VITE_BRIDE_MOTHER_NAME / VITE_BRIDE_MOTHER_BANK / VITE_BRIDE_MOTHER_ACCOUNT
```