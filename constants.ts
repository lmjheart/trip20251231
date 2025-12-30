
import { DayPlan } from './types';

export const ITINERARY: DayPlan[] = [
  {
    day: 1,
    region: "경주",
    title: "경주: 감성과 스릴",
    subtitle: "역사보다는 트렌디한 감성과 짜릿한 액티비티",
    route: "서울 ➔ 경주 ➔ 제천 숙소",
    activities: [
      {
        id: "gj-1",
        time: "13:00",
        title: "황리단길 & 힙한 런치",
        description: "MZ세대의 성지! 교복 대여나 셀프 스튜디오에서 가족 인생샷을 남기고 개성 있는 소품샵을 구경하세요.",
        highlight: "아이들이 직접 고른 식당에서 식사하기!",
        image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1200",
        tags: ["인생샷", "소품샵", "MZ감성"],
        parking: {
          location: "대릉원 공영주차장",
          tip: "황리단길 내부 진입은 피하세요! 대릉원 주차장에 대고 천천히 걷는 것이 정신건강에 좋습니다.",
          fee: "시간당 약 1,000원"
        },
        cost: {
          total: "약 3~4만원 (인당)",
          breakdown: ["식비: 1.5만원", "카페: 1만원", "소품/체험: 1만원"]
        },
        link: {
          label: "황리단길 핫플 지도",
          url: "https://search.naver.com/search.naver?query=%ED%99%A9%EB%A6%AC%EB%8B%A8%EA%B8%B8+%EB%A7%9B%EC%A7%91"
        }
      },
      {
        id: "gj-2",
        time: "15:00",
        title: "경주월드 드라켄",
        description: "수직 낙하 드라켄을 타거나 360도 회전하는 크라크를 경험해보세요. 고학년 아이들의 스트레스가 풀리는 코스입니다.",
        highlight: "드라켄(Draken)은 국내 스릴 끝판왕!",
        image: "https://images.unsplash.com/photo-1513889959013-c51750074eda?auto=format&fit=crop&q=80&w=1200",
        tags: ["스릴", "놀이공원", "자유이용권"],
        parking: {
          location: "경주월드 전용 주차장",
          tip: "입구 앞 1주차장은 유료(카카오T 할인), 건너편 주차장은 무료 셔틀이 운행됩니다.",
          fee: "무료~유료"
        },
        cost: {
          total: "약 4~5만원 (인당)",
          breakdown: ["자유이용권(제휴할인): 3만원대", "간식: 1만원"]
        },
        link: {
          label: "경주월드 공식홈 (예매)",
          url: "https://www.gjw.co.kr/"
        }
      },
      {
        id: "gj-3",
        time: "18:00",
        title: "동궁과 월지 야경",
        description: "밤이 되면 더욱 화려해지는 조명 아래서 가족사진을 남기세요. 역사 공부보다는 '조명 맛집' 투어로!",
        highlight: "신라 왕궁의 화려한 밤",
        image: "https://images.unsplash.com/photo-1621235123906-8969f647040d?auto=format&fit=crop&q=80&w=1200",
        tags: ["야경", "포토존", "산책"],
        parking: {
          location: "전용 무료 주차장",
          tip: "저녁 시간에는 주차가 매우 힘듭니다. 근처 '박물관 주차장'을 이용하고 걷는 것도 팁!",
          fee: "무료"
        },
        cost: {
          total: "3,000원 (성인)",
          breakdown: ["성인: 3,000원", "청소년: 2,000원"]
        },
        link: {
          label: "야경 관람 정보",
          url: "https://search.naver.com/search.naver?query=%EB%8F%99%EA%B6%81%EA%B3%BC+%EC%9B%94%EC%A7%80+%EC%95%BC%EA%B2%BD"
        }
      }
    ]
  },
  {
    day: 2,
    region: "봉화",
    title: "봉화: 호랑이와 협곡",
    subtitle: "진짜 호랑이와 사방이 유리인 기차 여행",
    route: "제천 ➔ 봉화 ➔ 제천 귀환",
    activities: [
      {
        id: "bh-1",
        time: "10:30",
        title: "백두대간 수목원",
        description: "셔틀 트램을 타고 올라가 백두산 호랑이를 만나보세요. 숲속 산책이 아이들에게 의외의 힐링이 됩니다.",
        highlight: "아시아 최대 규모, 진짜 호랑이",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&q=80&w=1200",
        tags: ["호랑이숲", "트램", "대자연"],
        parking: {
          location: "정문 야외 주차장",
          tip: "매표소와 가까운 위쪽 주차장에 자리가 있다면 먼저 선점하세요.",
          fee: "무료"
        },
        cost: {
          total: "약 1만원 (인당)",
          breakdown: ["입장료: 5,000원", "트램: 1,500원", "음료: 4,000원"]
        },
        link: {
          label: "백두대간 수목원 가이드",
          url: "https://www.bdna.or.kr/"
        }
      },
      {
        id: "bh-2",
        time: "13:30",
        title: "V-Train 협곡열차",
        description: "분천역 산타마을에서 출발! 전면 유리 협곡 열차를 타고 오지 절경을 감상하세요.",
        highlight: "레트로 감성과 힐링 절경",
        image: "https://images.unsplash.com/photo-1515165597734-92c43f9a97ec?auto=format&fit=crop&q=80&w=1200",
        tags: ["협곡열차", "이색체험", "산타마을"],
        parking: {
          location: "분천역 인근 공터",
          tip: "마을 입구 무료 주차장이 넓습니다. 기차 출발 30분 전 도착 권장!",
          fee: "무료"
        },
        cost: {
          total: "8,400원 (편도)",
          breakdown: ["승차권: 8,400원", "산타마을 간식: 5,000원"]
        },
        link: {
          label: "V-Train 예매/정보",
          url: "https://www.letskorail.com/ebizprd/EbizPrdTicketSpecialList.do"
        }
      },
      {
        id: "bh-3",
        time: "19:00",
        title: "제천 등갈비 & 시장투어",
        description: "제천의 명물 두꺼비식당 등갈비와 중앙시장의 주전부리를 즐기며 오늘 하루를 마감하세요.",
        highlight: "매콤한 등갈비와 메밀배추전",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
        tags: ["제천맛집", "중앙시장", "체력보충"],
        parking: {
          location: "중앙시장 공영주차장",
          tip: "식당 전용 주차장은 협소하니 중앙시장 주차장에 대고 3분만 걸으세요.",
          fee: "시장 이용시 할인"
        },
        cost: {
          total: "약 2만원 (인당)",
          breakdown: ["등갈비찜: 1.4만원", "곤드레밥: 0.5만원"]
        },
        link: {
          label: "제천 맛집 네이버 지도",
          url: "https://map.naver.com/v5/search/%EC%A0%9C%EC%B2%9C+%EB%91%90%EA%BA%BC%EB%B9%84%EC%8B%9D%EB%8B%B9"
        }
      }
    ]
  },
  {
    day: 3,
    region: "원주",
    title: "원주: 스릴과 예술",
    subtitle: "절벽 위를 걷는 소금산과 평온한 예술 공간",
    route: "제천 ➔ 원주 ➔ 서울",
    activities: [
      {
        id: "wj-1",
        time: "10:30",
        title: "소금산 그랜드밸리",
        description: "출렁다리와 울렁다리, 소금잔도를 따라 아찔한 절벽 산책을 즐기세요. 체력이 꽤 소모되니 아이들에게 도전 의식을!",
        highlight: "높이 100m의 짜릿한 스릴",
        image: "https://images.unsplash.com/photo-1508179106121-da0394747971?auto=format&fit=crop&q=80&w=1200",
        tags: ["출렁다리", "울렁다리", "액티비티"],
        parking: {
          location: "간현관광지 제1주차장",
          tip: "입구에서 매표소까지 꽤 멉니다. 운동화는 선택이 아닌 필수입니다.",
          fee: "무료"
        },
        cost: {
          total: "9,000원 (성인)",
          breakdown: ["통합 이용권: 9,000원 (원주사랑상품권 3,000원 환급)"]
        },
        link: {
          label: "소금산 관람 가이드",
          url: "https://www.wonju.go.kr/tour/contents.do?key=1018"
        }
      },
      {
        id: "wj-2",
        time: "14:00",
        title: "뮤지엄 산",
        description: "안도 타다오의 건축 예술! 고요한 분위기 속에서 가족들과 이번 여행의 마지막 대화를 나누기 좋습니다.",
        highlight: "예술과 건축의 힐링 공간",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200",
        tags: ["안도타다오", "미술관", "힐링"],
        parking: {
          location: "뮤지엄 산 야외 주차장",
          tip: "관람객은 주차 무료. 야외 테라스 자리는 대기가 길 수 있으니 참고하세요.",
          fee: "무료"
        },
        cost: {
          total: "약 3만원 (인당)",
          breakdown: ["입장료: 1.9만원", "카페/디저트: 1만원"]
        },
        link: {
          label: "뮤지엄 산 예약 정보",
          url: "http://www.museumsan.org/"
        }
      },
      {
        id: "wj-3",
        time: "17:00",
        title: "여행 피날레 & 안전 귀가",
        description: "원주에서 서울은 가깝습니다. 집으로 돌아가는 길, 휴게소 간식 대결로 여행을 마무리하세요.",
        highlight: "행복한 가족 여행 완료",
        image: "https://images.unsplash.com/photo-1506012733851-bb97ac367464?auto=format&fit=crop&q=80&w=1200",
        tags: ["안전운전", "여행완료"],
        parking: {
          location: "우리 집",
          tip: "광주-원주 고속도로는 일요일 오후 매우 막힙니다. 티맵/카카오내비 필수!",
          fee: "톨비 약 1만원"
        }
      }
    ]
  }
];
