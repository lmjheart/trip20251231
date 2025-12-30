
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
        description: "교복 대여나 셀프 스튜디오에서 인생샷을 남기고 소품샵을 구경하세요.",
        highlight: "아이들이 직접 고른 식당에서 식사하기!",
        image: "https://images.unsplash.com/photo-1578135260655-66774e11e0ca?auto=format&fit=crop&q=80&w=1200",
        tags: ["인생샷", "소품샵", "MZ감성"],
        parking: {
          location: "대릉원 공영주차장",
          tip: "주말에는 황리단길 안쪽은 헬입니다. 대릉원 주차장에 대고 천천히 걸어가세요.",
          fee: "시간당 약 1,000원"
        },
        cost: {
          total: "약 3~4만원 (인당)",
          breakdown: ["식비: 1.5만원", "카페: 1만원", "소품/체험: 1만원"]
        },
        link: {
          label: "황리단길 실시간 핫플 보기",
          url: "https://search.naver.com/search.naver?query=%ED%99%A9%EB%A6%AC%EB%8B%A8%EA%B8%B8+%EB%A7%9B%EC%A7%91"
        }
      },
      {
        id: "gj-2",
        time: "15:00",
        title: "경주월드 드라켄",
        description: "수직 낙하 드라켄을 타거나 90도 낙하 크라크를 경험해보세요.",
        highlight: "드라켄(Draken)은 국내 스릴 끝판왕!",
        image: "https://images.unsplash.com/photo-1545129139-1beb780cf337?auto=format&fit=crop&q=80&w=1200",
        tags: ["스릴", "놀이공원", "자유이용권"],
        parking: {
          location: "경주월드 주차장",
          tip: "입구 앞 1주차장은 유료지만 카카오T 결제시 저렴합니다. 3주차장은 무료 셔틀이 있어요.",
          fee: "무료~유료"
        },
        cost: {
          total: "약 4~5만원 (인당)",
          breakdown: ["자유이용권(제휴할인): 3만원대", "간식: 1만원"]
        },
        link: {
          label: "경주월드 공식 홈페이지",
          url: "https://www.gjw.co.kr/"
        }
      },
      {
        id: "gj-3",
        time: "18:00",
        title: "동궁과 월지 야경",
        description: "밤이 되면 더욱 화려해지는 조명 아래서 가족사진을 남기세요.",
        highlight: "신라 왕궁의 화려한 밤",
        image: "https://images.unsplash.com/photo-1621235123906-8969f647040d?auto=format&fit=crop&q=80&w=1200",
        tags: ["야경", "포토존", "산책"],
        parking: {
          location: "동궁과 월지 전용 주차장",
          tip: "입구 주차장은 늘 붐빕니다. 대릉원 쪽에서 산책하듯 걸어오는 것도 방법!",
          fee: "무료"
        },
        cost: {
          total: "3,000원 (성인)",
          breakdown: ["입장료: 3,000원", "청소년: 2,000원"]
        },
        link: {
          label: "경주 문화관광 가이드",
          url: "https://www.gyeongju.go.kr/tour/page.do?menuNo=2202"
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
        description: "셔틀 트램을 타고 올라가 진짜 백두산 호랑이를 만나보세요.",
        highlight: "아시아 최대 규모, 호랑이 6마리 거주",
        image: "https://images.unsplash.com/photo-1504194091394-5154378f4f6e?auto=format&fit=crop&q=80&w=1200",
        tags: ["호랑이숲", "트램", "대자연"],
        parking: {
          location: "수목원 정문 주차장",
          tip: "주차장은 충분히 넓습니다. 입구 근처 트램 매표소와 가까운 곳에 주차하세요.",
          fee: "무료"
        },
        cost: {
          total: "약 1만원 (인당)",
          breakdown: ["입장료: 5,000원", "트램 이용료: 1,500원", "음료: 4,000원"]
        },
        link: {
          label: "국립백두대간수목원 공식",
          url: "https://www.bdna.or.kr/"
        }
      },
      {
        id: "bh-2",
        time: "13:30",
        title: "V-Train 협곡열차",
        description: "분천역 산타마을에서 출발하는 전면 유리 협곡 열차를 체험합니다.",
        highlight: "레트로 감성과 협곡의 절경",
        image: "https://images.unsplash.com/photo-1533991410191-2300f2e0573b?auto=format&fit=crop&q=80&w=1200",
        tags: ["협곡열차", "이색체험", "산타마을"],
        parking: {
          location: "분천역 무료 주차장",
          tip: "마을 입구에 넓은 공터 주차장이 있습니다. 기차 시간은 엄수해야 해요!",
          fee: "무료"
        },
        cost: {
          total: "8,400원 (편도)",
          breakdown: ["승차권: 8,400원", "산타마을 간식: 5,000원"]
        },
        link: {
          label: "V-Train 기차 여행 정보",
          url: "https://www.letskorail.com/ebizprd/EbizPrdTicketSpecialList.do"
        }
      },
      {
        id: "bh-3",
        time: "19:00",
        title: "제천 등갈비 & 야식",
        description: "제천 시내의 명물 두꺼비식당 등갈비로 하루를 마무리하세요.",
        highlight: "매콤한 등갈비와 곤드레밥의 조화",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
        tags: ["제천맛집", "먹방", "체력보충"],
        parking: {
          location: "가게 전용 주차장 또는 인근 공영",
          tip: "두꺼비식당 앞 주차장은 작으니 주변 '중앙시장 공영주차장'을 이용하세요.",
          fee: "가게 이용시 무료"
        },
        cost: {
          total: "약 2만원 (인당)",
          breakdown: ["등갈비찜: 1.4만원", "곤드레밥: 0.5만원"]
        },
        link: {
          label: "제천 맛집 지도 보기",
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
        description: "출렁다리와 울렁다리, 소금잔도를 따라 아찔한 산책을 즐기세요.",
        highlight: "높이 100m, 길이 200m의 스릴",
        image: "https://images.unsplash.com/photo-1508179106121-da0394747971?auto=format&fit=crop&q=80&w=1200",
        tags: ["출렁다리", "울렁다리", "액티비티"],
        parking: {
          location: "간현관광지 제1주차장",
          tip: "주차장에서 매표소까지 15분 정도 걸어야 합니다. 편한 신발 필수!",
          fee: "무료"
        },
        cost: {
          total: "9,000원 (성인)",
          breakdown: ["통합 이용권: 9,000원 (원주사랑상품권 3,000원 환급)"]
        },
        link: {
          label: "원주 문화관광 홈페이지",
          url: "https://www.wonju.go.kr/tour/contents.do?key=1018"
        }
      },
      {
        id: "wj-2",
        time: "14:00",
        title: "뮤지엄 산",
        description: "안도 타다오의 건축과 제임스 터렐의 빛을 경험하는 힐링 코스.",
        highlight: "예술과 건축이 어우러진 산속 미술관",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200",
        tags: ["안도타다오", "예술", "인생샷"],
        parking: {
          location: "뮤지엄 산 야외 주차장",
          tip: "관람객은 주차 무료입니다. 테라스 카페 자리는 일찍 선점하세요!",
          fee: "무료"
        },
        cost: {
          total: "약 2~4만원 (인당)",
          breakdown: ["기본 입장료: 1.9만원", "제임스터렐관 포함: 3.5만원", "카페: 1만원"]
        },
        link: {
          label: "뮤지엄 산 공식 사이트",
          url: "http://www.museumsan.org/"
        }
      },
      {
        id: "wj-3",
        time: "17:00",
        title: "여행 마무리 & 귀가",
        description: "원주에서 서울은 가깝습니다. 휴게소 맛집을 들러 집으로!",
        highlight: "즐거운 가족 여행 끝!",
        image: "https://images.unsplash.com/photo-1506012733851-bb97ac367464?auto=format&fit=crop&q=80&w=1200",
        tags: ["안전운전", "여행완료"],
        parking: {
          location: "서울 내 집",
          tip: "오는 길 광주-원주 고속도로는 주말 오후 상습 정체니 실시간 네비 필수.",
          fee: "톨비 약 1만원"
        }
      }
    ]
  }
];