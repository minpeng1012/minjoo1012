const jobs = {
  mafia: [
    { name: '마피아', description: '매일 밤 한 명을 죽일 수 있습니다.' },
    { name: '스파이', description: '마피아의 채팅을 엿들을 수 있습니다.' },
    { name: '짐승인간', description: '마피아가 모두 죽으면 혼자서 사람을 죽일 수 있습니다.' },
    { name: '마담', description: '매일 밤 한 명을 유혹하여 능력을 사용하지 못하게 합니다.' },
  ],
  citizen: [
    { name: '의사', description: '매일 밤 한 명을 치료하여 마피아의 공격으로부터 보호합니다.' },
    { name: '경찰', description: '매일 밤 한 명을 조사하여 마피아인지 확인할 수 있습니다.' },
    { name: '군인', description: '마피아의 공격을 한 번 방어할 수 있습니다.' },
    { name: '영매', description: '죽은 사람의 직업을 알 수 있습니다.' },
  ],
  special: [
    { name: '교주', description: '매일 밤 한 명을 포교하여 자신의 편으로 만들 수 있습니다.' },
    { name: '연인', description: '다른 연인과 함께 살아남아야 합니다.' },
    { name: '마술사', description: '매일 밤 한 명을 다른 사람으로 바꿀 수 있습니다.' },
  ],
};

const recommendBtn = document.getElementById('recommend-btn');
const jobNameEl = document.getElementById('job-name');
const jobDescriptionEl = document.getElementById('job-description');

recommendBtn.addEventListener('click', () => {
  const selectedRoles = [...document.querySelectorAll('input[name="role"]:checked')].map(el => el.value);

  if (selectedRoles.length === 0) {
    alert('하나 이상의 역할을 선택해주세요.');
    return;
  }

  const recommendedJobs = selectedRoles.flatMap(role => jobs[role]);

  const randomIndex = Math.floor(Math.random() * recommendedJobs.length);
  const recommendedJob = recommendedJobs[randomIndex];

  jobNameEl.textContent = recommendedJob.name;
  jobDescriptionEl.textContent = recommendedJob.description;
});

// 테마 변경 기능
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 초기 테마 설정 (로컬 스토리지 확인)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '다크 모드';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '다크 모드';
  } else {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '화이트 모드';
  }
});
