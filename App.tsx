
import React, { useState, useEffect } from 'react';
import { ITINERARY } from './constants';
import { Activity, Comment } from './types';

// Icons
const ClockIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChatIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const ParkingIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15h2a2 2 0 100-4H9v4z" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>;
const WalletIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const CopyIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>;
const SettingsIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ExternalLinkIcon = () => <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;

const ActivityCard: React.FC<{ 
  activity: Activity, 
  comments: Comment[], 
  onAddComment: (activityId: string, text: string) => void 
}> = ({ activity, comments, onAddComment }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isParkingOpen, setIsParkingOpen] = useState(false);
  const [isCostOpen, setIsCostOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onAddComment(activity.id, inputText);
      setInputText('');
    }
  };

  return (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-md border border-slate-100 mb-8 transition-transform hover:scale-[1.01]">
      <div className="relative h-60 sm:h-72 bg-slate-200">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black text-indigo-600 shadow-md flex items-center gap-1.5">
          <ClockIcon /> {activity.time}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {activity.cost && (
            <button onClick={() => setIsCostOpen(!isCostOpen)} className={`p-3 rounded-full shadow-lg transition-all ${isCostOpen ? 'bg-emerald-500 text-white scale-110' : 'bg-white/90 text-slate-700 hover:bg-white'}`}><WalletIcon /></button>
          )}
          {activity.parking && (
            <button onClick={() => setIsParkingOpen(!isParkingOpen)} className={`p-3 rounded-full shadow-lg transition-all ${isParkingOpen ? 'bg-amber-500 text-white scale-110' : 'bg-white/90 text-slate-700 hover:bg-white'}`}><ParkingIcon /></button>
          )}
          <button onClick={() => setIsChatOpen(!isChatOpen)} className={`p-3 rounded-full shadow-lg transition-all ${isChatOpen ? 'bg-indigo-600 text-white scale-110' : 'bg-white/90 text-slate-700 hover:bg-white'}`}><ChatIcon /></button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-2xl font-black text-slate-900 leading-tight">{activity.title}</h3>
          {activity.link && (
            <a 
              href={activity.link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="shrink-0 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-3 py-1.5 rounded-full text-[11px] font-black transition-all active:scale-95 shadow-sm border border-indigo-100"
            >
              상세보기 <ExternalLinkIcon />
            </a>
          )}
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">{activity.description}</p>
        
        {/* Info Panels */}
        <div className="space-y-3">
          {isCostOpen && activity.cost && (
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1.5 bg-emerald-500 rounded-lg text-white"><WalletIcon /></div>
                <span className="text-xs font-black text-emerald-700">예상 비용: {activity.cost.total}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 ml-8">
                {activity.cost.breakdown.map((item, idx) => (
                  <span key={idx} className="text-[10px] bg-white px-2 py-0.5 rounded-md text-emerald-600 border border-emerald-100">{item}</span>
                ))}
              </div>
            </div>
          )}

          {isParkingOpen && activity.parking && (
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1.5 bg-amber-500 rounded-lg text-white"><ParkingIcon /></div>
                <span className="text-xs font-black text-amber-700">주차: {activity.parking.location}</span>
              </div>
              <p className="text-[10px] text-amber-600 ml-8 font-medium">💡 {activity.parking.tip}</p>
            </div>
          )}

          {isChatOpen && (
            <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
              <div className="max-h-40 overflow-y-auto space-y-2 mb-4 pr-1 scrollbar-hide">
                {comments.length === 0 ? (
                  <p className="text-center py-4 text-slate-400 text-[10px] font-bold uppercase tracking-wider">아직 의견이 없습니다</p>
                ) : (
                  comments.map(c => (
                    <div key={c.id} className={`flex ${c.author === '나' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-xs font-medium shadow-sm ${c.author === '나' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'}`}>
                        {c.text}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  value={inputText} 
                  onChange={e => setInputText(e.target.value)} 
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:ring-2 focus:ring-indigo-400 outline-none transition-all" 
                  placeholder="가족과 상의할 내용을 남겨주세요..." 
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-black hover:bg-indigo-700 active:scale-95 transition-all">전송</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [allComments, setAllComments] = useState<Record<string, Comment[]>>({});
  const [liveUrl, setLiveUrl] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const savedComments = localStorage.getItem('jecheon-comments');
    if (savedComments) setAllComments(JSON.parse(savedComments));
    
    const savedUrl = localStorage.getItem('family-trip-url');
    if (savedUrl) setLiveUrl(savedUrl);
  }, []);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setLiveUrl(url);
    localStorage.setItem('family-trip-url', url);
  };

  const addComment = (activityId: string, text: string) => {
    const newComment = { id: Date.now().toString(), author: '나', text, timestamp: Date.now(), reactions: [] };
    setAllComments(prev => {
      const updated = { ...prev, [activityId]: [...(prev[activityId] || []), newComment] };
      localStorage.setItem('jecheon-comments', JSON.stringify(updated));
      return updated;
    });
  };

  const currentPlan = ITINERARY.find(p => p.day === activeDay) || ITINERARY[0];

  const copyFullItineraryToText = async () => {
    let summary = "📋 [가족 여행 2박 3일 최종 일정표]\n";
    summary += "━━━━━━━━━━━━━━━━━━━━\n";

    ITINERARY.forEach(day => {
      summary += `\n📅 [Day ${day.day}] ${day.region}: ${day.title}\n`;
      day.activities.forEach(act => {
        summary += `\n⏰ ${act.time} - ${act.title}\n`;
        if (act.cost) summary += `   💰 예상비용: ${act.cost.total}\n`;
        if (act.parking) summary += `   🅿️ 주차정보: ${act.parking.location}\n`;
        if (act.link) summary += `   🔗 상세/참고: ${act.link.url}\n`;
      });
      summary += "\n------------------------------------\n";
    });

    if (liveUrl) {
      summary += `\n📍 앱으로 사진/상세보기: ${liveUrl}\n`;
    }

    summary += "\n✨ 우리 가족 즐거운 여행 되길! ✨";

    try {
      await navigator.clipboard.writeText(summary);
      alert("전체 일정이 텍스트로 복사되었습니다! 🚀\n카톡방에 붙여넣어 공유하세요.");
    } catch (err) {
      alert("복사 실패");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Pretendard']">
      <header className="relative h-72 sm:h-96 flex items-center justify-center bg-slate-900 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 animate-pulse-slow" 
          alt="Travel Header"
        />
        <div className="relative text-center px-6 z-10">
          <div className="inline-block bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-full mb-4 uppercase tracking-[0.2em] shadow-lg">Family Trip 2024</div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-3 leading-tight drop-shadow-2xl">
            힙 & 액티브<br/><span className="text-indigo-400">제천 가족로드</span>
          </h1>
          <p className="text-slate-200 text-sm font-bold opacity-90 drop-shadow-md">중고생 아이들도 만족하는 다이나믹 일정표</p>
        </div>
      </header>

      {/* Navigation & Settings bar */}
      <div className="sticky top-0 z-[60] bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4">
        <div className="max-w-2xl mx-auto flex items-center py-3">
          <div className="flex gap-2 flex-1">
            {[1, 2, 3].map(day => (
              <button 
                key={day} 
                onClick={() => setActiveDay(day)} 
                className={`flex-1 py-3 rounded-2xl text-[13px] font-black transition-all duration-300 ${activeDay === day ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                Day {day}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setShowSettings(!showSettings)} 
            className={`p-3.5 rounded-2xl ml-3 transition-all active:rotate-45 ${showSettings ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}
            title="공유 링크 설정"
          >
            <SettingsIcon />
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="max-w-2xl mx-auto w-full px-4 animate-in slide-in-from-top duration-300 z-50">
          <div className="bg-indigo-600 rounded-3xl p-6 mt-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <label className="block text-[11px] font-black text-indigo-100 mb-2 uppercase tracking-widest">본인의 깃허브 주소를 입력하세요</label>
            <div className="flex gap-2">
              <input 
                type="text" 
                value={liveUrl} 
                onChange={handleUrlChange} 
                placeholder="https://아이디.github.io/저장소명/"
                className="flex-1 bg-white border-0 rounded-2xl px-4 py-3 text-sm text-slate-900 outline-none focus:ring-4 focus:ring-indigo-300 transition-all font-bold"
              />
            </div>
            <p className="text-[10px] text-indigo-200 mt-3 font-medium flex items-center gap-1.5">
              💡 주소를 입력하면 가족 톡방 공유 시 웹 링크가 자동으로 포함됩니다.
            </p>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10 pb-44">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-[11px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block uppercase tracking-widest border border-indigo-100 shadow-sm">{currentPlan.region} 코스</span>
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{currentPlan.title}</h2>
          <p className="text-slate-500 text-base font-bold italic opacity-80">{currentPlan.subtitle}</p>
        </div>

        <div className="space-y-4">
          {currentPlan.activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} comments={allComments[activity.id] || []} onAddComment={addComment} />
          ))}
        </div>
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full px-6 max-w-2xl z-[100]">
        <button 
          onClick={copyFullItineraryToText} 
          className="w-full bg-slate-900 text-white py-5 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all border-[3px] border-white font-black text-xl hover:bg-black group"
        >
          <div className="p-1 bg-indigo-500 rounded-lg group-hover:rotate-12 transition-transform">
            <CopyIcon />
          </div>
          카톡 공유용 일정 복사
        </button>
      </div>
    </div>
  );
};

export default App;
