
export interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: number;
  reactions: string[];
}

export interface ParkingInfo {
  location: string;
  tip: string;
  fee?: string;
}

export interface CostInfo {
  total: string;
  breakdown: string[];
}

export interface LinkInfo {
  label: string;
  url: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  highlight?: string;
  image: string;
  tags: string[];
  comments?: Comment[];
  parking?: ParkingInfo;
  cost?: CostInfo; // 예상 비용 추가
  link?: LinkInfo; // 외부 링크 추가
}

export interface DayPlan {
  day: number;
  region: string;
  title: string;
  subtitle: string;
  route: string;
  activities: Activity[];
}