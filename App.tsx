
import React, { useState, useEffect } from 'react';
import { ITINERARY } from './constants';
import { Activity, Comment } from './types';

// Icons
const ClockIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChatIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const ParkingIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15h2a2 2 0 100-4H9v4z" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /></svg>;
const WalletIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const CopyIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>;

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
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 mb-6">
      <div className="relative h-56 sm:h-64">
        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-black text-indigo-600 shadow-md flex items-center gap-1.5">
          <ClockIcon /> {activity.time}
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          {activity.cost && (
            <button onClick={() => setIsCostOpen(!isCostOpen)} className={`p-3 rounded-full shadow-lg transition-all ${isCostOpen ? 'bg-emerald-500 text-white' : 'bg-white/90 text-slate-700'}`}><WalletIcon /></button>
          )}
          {activity.parking && (
            <button onClick={() => setIsParkingOpen(!isParkingOpen)} className={`p-3 rounded-full shadow-lg transition-all ${isParkingOpen ? 'bg-amber-500 text-white' : 'bg-white/90 text-slate-700'}`}><ParkingIcon /></button>
          )}
          <button onClick={() => setIsChatOpen(!isChatOpen)} className={`p-3 rounded-full shadow-lg transition-all ${isChatOpen ? 'bg-indigo-600 text-white' : 'bg-white/90 text-slate-700'}`}><ChatIcon /></button>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-slate-900 mb-2">{activity.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{activity.description}</p>
        
        {isCostOpen && activity.cost && (
          <div className="mb-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="text-xs font-black text-emerald-700 mb-1">💰 예상 비용: {activity.cost.total}</p>
            <p className="text-[10px] text-emerald-600">{activity.cost.breakdown.join(' / ')}</p>
          </div>
        )}

        {isParkingOpen && activity.parking && (
          <div className="mb-4 p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <p className="text-xs font-black text-amber-700 mb-1">🅿️ 주차: {activity.parking.location}</p>
            <p className="text-[10px] text-amber-600">{activity.parking.tip}</p>
          </div>
        )}

        {isChatOpen && (
          <div className="mt-4 pt-4 border-t border-slate-50 space-y-3">
            <div className="max-h-40 overflow-y-auto space-y-2 scrollbar-hide">
              {comments.map(c => (
                <div key={c.id} className={`flex ${c.author === '나' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`px-3 py-2 rounded-2xl text-xs ${c.author === '나' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                    {c.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input value={inputText} onChange={e => setInputText(e.target.value)} className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs" placeholder="의견 남기기..." />
              <button className="bg-indigo-600 text-white px-3 py-2 rounded-xl text-xs font-bold">전송</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [allComments, setAllComments] = useState<Record<string, Comment[]>>({});

  useEffect(() => {
    const saved = localStorage.getItem('jecheon-comments');
    if (saved) setAllComments(JSON.parse(saved));
  }, []);

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
    let summary = "📋 [제천/경주/봉화/원주] 가족 여행 최종 일정표\n";
    summary += "━━━━━━━━━━━━━━━━━━━━\n";

    ITINERARY.forEach(day => {
      summary += `\n📅 [Day ${day.day}] ${day.region}: ${day.title}\n`;
      summary += `📍 코스: ${day.route}\n`;
      
      day.activities.forEach(act => {
        summary += `\n⏰ ${act.time} - ${act.title}\n`;
        summary += `   ${act.description}\n`;
        if (act.cost) summary += `   💰 비용: ${act.cost.total}\n`;
        if (act.parking) summary += `   🅿️ 주차: ${act.parking.location}\n`;
      });
      summary += "\n------------------------------------\n";
    });

    summary += "\n✨ 즐거운 여행 되세요! ✨";

    try {
      await navigator.clipboard.writeText(summary);
      alert("전체 일정이 텍스트로 복사되었습니다! 🚀\n카톡창에 '붙여넣기' 하시면 됩니다.\n(링크가 404가 떠도 텍스트만으로 모든 확인이 가능합니다)");
    } catch (err) {
      alert("복사 실패. 브라우저 설정을 확인해주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="relative h-64 sm:h-80 flex items-center justify-center bg-slate-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-50 animate-pulse-slow" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl font-black text-white mb-2 leading-tight">힙 & 액티브<br/><span className="text-indigo-400">제천 가족여행</span></h1>
          <p className="text-slate-300 text-xs font-bold">중고생 아이들과 함께하는 액티브 로드맵</p>
        </div>
      </header>

      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="flex justify-center p-2 gap-2">
          {[1, 2, 3].map(day => (
            <button key={day} onClick={() => setActiveDay(day)} className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${activeDay === day ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-100 text-slate-500'}`}>Day {day}</button>
          ))}
        </div>
      </div>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 pb-32">
        <div className="mb-8">
          <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md mb-2 inline-block uppercase tracking-wider">{currentPlan.region} 코스</span>
          <h2 className="text-3xl font-black text-slate-900 mb-1">{currentPlan.title}</h2>
          <p className="text-slate-400 text-sm font-medium">{currentPlan.subtitle}</p>
          <div className="mt-3 p-3 bg-slate-100 rounded-xl border border-dashed border-slate-300">
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tighter">이동 경로</p>
            <p className="text-xs text-slate-700">{currentPlan.route}</p>
          </div>
        </div>

        <div className="space-y-6">
          {currentPlan.activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} comments={allComments[activity.id] || []} onAddComment={addComment} />
          ))}
        </div>
      </main>

      {/* Floating Action Button - 단일화하여 가시성 높임 */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full px-6 max-w-2xl z-[100]">
        <button 
          onClick={copyFullItineraryToText} 
          className="w-full bg-indigo-600 text-white py-4 rounded-2xl shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all border-4 border-white font-black text-lg"
        >
          <CopyIcon /> 전체 일정 텍스트로 복사하기
        </button>
      </div>
    </div>
  );
};

export default App;
