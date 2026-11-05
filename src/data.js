// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Pavithra Rajindra',
  short: 'Pavithra',
  role: 'AI & Data Science Engineer',
  tagline: 'AI & Data Science · Class of 2027',
  location: 'Chennai, India',
  email: 'pavithra.rajindra01@gmail.com',
  resume: '/resume.pdf', // drop your PDF into /public/resume.pdf
  openTo: 'Data Scientist · AI / ML Engineer roles',
  about:
    "Hi! I'm Pavithra — a final-year AI & Data Science student who also studies Data Science at IIT Madras. I fine-tune LLMs, build RAG systems, and train vision, speech and NLP models, and I like starting from the research before writing a line of code.",
  bio: [
    'Final-year B.Tech student in AI & Data Science at Shiv Nadar University Chennai, with a parallel BS in Data Science and Applications from IIT Madras.',
    'My hands-on work spans LLM fine-tuning, deep learning, computer vision, speech and NLP — built through an AI engineering internship at Hexaware, research work, hackathons and Kaggle competitions.',
    'I work from research and structured thinking, and I have led teams and technical events end to end.',
  ],
  links: {
    linkedin: 'https://linkedin.com/in/pavithra-rajindra/',
    github: 'https://github.com/PavithraRajindra',
    leetcode: 'https://leetcode.com/u/Pavithra-Rajindra/',
    kaggle: 'https://www.kaggle.com/pavirajindra',
    kaggleIITM: 'https://www.kaggle.com/pavithrar24f1000305',
  },
};

// Featured projects (big cards). `terminal` lines are shown in the card's visual panel.
export const featured = [
  {
    title: 'Telecom RAG Assistant',
    meta: 'Agentic RAG · LLM Systems · 2026',
    desc: 'An agentic retrieval-augmented generation system with a tool-calling agent that decides when to retrieve context or call a calculator, rather than following a fixed pipeline.',
    stats: [
      ['Retrieval', 'FAISS + rerank'],
      ['Eval harness', '3 metrics'],
      ['Shipped as', 'Docker'],
    ],
    tech: ['LangChain', 'FastAPI', 'FAISS', 'Gemini API', 'Docker'],
    terminal: [
      '$ POST /ask "why is my bill higher?"',
      '› chunk → embed → faiss.search(k)',
      '› cross-encoder rerank → top passages',
      '› agent: retrieve ✓  calculator ✓',
      '› scored: relevance · groundedness · latency',
    ],
    hue: 'blue',
  },
  {
    title: 'Video Dialogue Finder',
    meta: 'Speech · Search · 2026',
    desc: 'Finds the exact frame where a line of dialogue is spoken. Qwen3-ASR transcribes overlapping audio chunks with word-level timestamps; hybrid embeddings + fuzzy matching handle typos and paraphrases.',
    stats: [
      ['ASR model', '1.7B params'],
      ['Timestamps', 'word · ms'],
      ['Test suite', '6 modules'],
    ],
    tech: ['PyTorch', 'Qwen3-ASR', 'Sentence-Transformers', 'RapidFuzz', 'OpenCV', 'FFmpeg'],
    link: 'https://github.com/PavithraRajindra/Video-Dialogue-Finder',
    terminal: [
      '$ vdf find movie.mp4 "we need a bigger boat"',
      '› asr: overlapping chunks, word-level ts',
      '› match: MiniLM ⊕ RapidFuzz',
      '› frame extracted via OpenCV',
      '{ "timestamp": "…", "frame": …, "conf": … }',
    ],
    hue: 'peach',
  },
  {
    title: 'XenMart Discovery Engine',
    meta: 'Cloud · NLP Search · 2026',
    desc: 'A cloud-native e-commerce search engine on AWS that turns natural-language queries into structured intent (product + budget), generates SQL on the fly and re-ranks candidates with dependency parsing.',
    stats: [
      ['Availability zones', '2'],
      ['Candidates re-ranked', '~600'],
      ['AWS services', '5'],
    ],
    tech: ['AWS VPC · EC2 · RDS · S3 · Route 53', 'FastAPI', 'MySQL', 'spaCy'],
    terminal: [
      '$ search "running shoes under 3000"',
      '› intent: {term: "running shoes", max: 3000}',
      '› sql generated → rds.catalog',
      '› dependency-parse rerank (~600 rows)',
      '› images ← s3 · served via ec2',
    ],
    hue: 'mint',
  },
  {
    title: 'Violence Detection in Video',
    meta: 'Computer Vision · Ensembles · 2025',
    desc: 'Benchmarked a custom CNN against frozen-backbone MobileNetV2 and ResNet50 for frame-level violent vs. non-violent classification, then ensembled the best pair.',
    stats: [
      ['Ensemble accuracy', '96.5%'],
      ['F1 score', '0.966'],
      ['Configs compared', '4'],
    ],
    tech: ['TensorFlow / Keras', 'OpenCV', 'MobileNetV2', 'ResNet50'],
    link: 'https://www.kaggle.com/code/pavirajindra/violence-video-classification-deep-learning',
    terminal: [
      '$ python ensemble.py --models cnn,mobilenetv2',
      '› cnn          acc 94.1%',
      '› mobilenetv2  acc 94.8%',
      '› ensemble     acc 96.5%  f1 0.966',
    ],
    hue: 'lilac',
  },
  {
    title: 'Smart MCQ Solver',
    meta: 'Deep Learning · Kaggle (IIT Madras) · 2026',
    desc: 'A from-scratch CNN + BiGRU benchmarked against a fine-tuned DeBERTa for multiple-choice QA — and a W&B-logged investigation into why the lighter model generalised better.',
    stats: [
      ['Ensemble MAP@3', '~0.757'],
      ['From-scratch model', '0.758'],
      ['Fine-tuned DeBERTa', '0.608'],
    ],
    tech: ['PyTorch', 'CNN + BiGRU', 'DeBERTa', 'Weights & Biases'],
    terminal: [
      '$ wandb sweep mcq.yaml',
      '› cnn+bigru      map@3 0.758',
      '› deberta (ft)   map@3 0.608',
      '› ensemble       map@3 ~0.757',
      '› note: bias–variance › model size',
    ],
    hue: 'yellow',
  },
  {
    title: 'Engage2Value',
    meta: 'Predictive Modeling · 2025',
    desc: 'Conversion-value prediction on a heavily imbalanced dataset (~80% zero-purchase rows) using a two-stage classifier → regressor pipeline with class and sample weighting.',
    stats: [
      ['R² lifted', '0.13 → 0.70'],
      ['Algorithms benchmarked', '10+'],
      ['Improvement', '>5×'],
    ],
    tech: ['XGBoost', 'LightGBM', 'Scikit-learn', 'Pandas'],
    terminal: [
      '$ python train.py --two-stage',
      '› stage 1: will they convert? (classifier)',
      '› stage 2: how much? (regressor)',
      '› RandomizedSearchCV …',
      '› R² 0.13 → 0.70',
    ],
    hue: 'blue',
  },
  {
    title: 'XenLearn',
    meta: 'Hackathon · 2nd of 130+ teams · 2025',
    desc: 'An AI learning platform built in 8 hours: real-time object detection, AI-generated lessons, an LLM doubt-clearing chatbot, gamification and a reward shop.',
    stats: [
      ['Placed', '2nd / 130+'],
      ['Build time', '8 hrs'],
      ['Team', '4'],
    ],
    tech: ['PyTorch', 'Faster R-CNN', 'Gemini API', 'Firebase', 'Streamlit'],
    link: 'https://github.com/PavithraRajindra/Null-Pointers_PS3_XenLearn',
    terminal: [
      '$ streamlit run xenlearn.py',
      '› detect: faster-rcnn → "potted plant"',
      '› lesson generated for "potted plant"',
      '› chatbot online · rewards +10',
    ],
    hue: 'peach',
  },
];

// Everything else — shown in the file-explorer "archive" window.
export const archive = [
  { name: 'Sketch-to-Product Image Generation', date: '2026', tech: 'Stable Diffusion v1.5, T5, CLIP, PyTorch', note: 'Four-stage latent-diffusion pipeline with a ~4M-param structure adapter', link: 'https://drive.google.com/file/d/1tQmY2enKB9-21-zEZEO9Us0GZ11-RLk3/view?usp=sharing' },
  { name: 'CryptiQ — AI Digital Forensics (SIH 2025)', date: '2025', tech: 'FastAPI, React, Gemini API', note: 'Natural-language querying + anomaly detection over UFDR reports', link: 'https://github.com/PavithraRajindra/CryptiQ' },
  { name: 'Image Denoising with Conv Autoencoders', date: '2025', tech: 'TensorFlow/Keras', note: '27.90 dB PSNR / 0.907 SSIM best ensemble of 11', link: 'https://github.com/PavithraRajindra/image-denoising-dl-lab' },
  { name: 'Volatility Clustering & Mean Reversion', date: '2026', tech: 'SciPy, statsmodels, ARIMA, GARCH', note: 'GARCH(1,1) fit via manual MLE; out-of-sample rolling validation' },
  { name: 'NIDHI — Household Expense Tracker', date: '2026', tech: 'Vue 3, Pinia, Flask, JWT, SQLite', note: 'Budgets, alerts at 80%, household sharing via invite codes', link: 'https://github.com/PavithraRajindra/NIDHI' },
  { name: 'Academic Grade & CGPA Tracker', date: '2026', tech: 'Next.js 14, Firestore, Recharts, Vercel', note: 'Credit-weighted SGPA/CGPA across a 57-course curriculum' },
  { name: 'GradeBook v2.0', date: '2026', tech: 'Vue 3, Tailwind, Flask, Chart.js', note: 'Flask API + Vue SPA with trend and comparison views', link: 'https://github.com/PavithraRajindra/grade-book-v2.0' },
  { name: 'Speaker Diarization', date: '2025', tech: 'Librosa, PyTorch, Scikit-learn', note: 'Segmentation, features and unsupervised speaker clustering', link: 'https://github.com/PavithraRajindra/speaker-diarization' },
  { name: 'ML Math Problem Set', date: '2026', tech: 'Python, NumPy', note: 'Numerically stable L2 norm, cosine similarity and more from scratch', link: 'https://github.com/PavithraRajindra/ML-problems' },
  { name: 'Image & Video Processing Lab', date: '2026', tech: 'OpenCV, scikit-image, SciPy', note: 'Nine experiments incl. a from-scratch HOG extractor', link: 'https://github.com/PavithraRajindra/ivp-lab' },
  { name: 'House Price Prediction — ML Demo', date: '2026', tech: 'Scikit-learn, XGBoost', note: 'Workshop project forked 20 times', link: 'https://github.com/PavithraRajindra/cc-ml-demo' },
  { name: 'Predictive Maintenance Code Challenge', date: '2025', tech: 'XGBoost, Git/GitHub', note: '16 seeded bugs for a fork-branch-PR challenge; forked 9 times', link: 'https://github.com/PavithraRajindra/cc-github-challenge' },
  { name: 'Quiz Master — Exam Prep App', date: '2025', tech: 'Flask, SQLAlchemy, Chart.js', note: 'Admin + user dashboards with performance analytics', link: 'https://github.com/PavithraRajindra/exam-prep-app' },
  { name: 'Ctrl+Escape — Invente ’24 Web App', date: '2024', tech: 'React, Tailwind, Firebase', note: 'Real-time competition app for 10+ teams', link: 'https://invente-24-ctrl-escape.vercel.app/' },
  { name: 'Cache Simulator for a 16-bit CPU', date: '2024', tech: 'C/C++, Python, Tkinter', note: 'Two-level cache with a memory-access visualiser', link: 'https://github.com/PavithraRajindra/Cache_Simulator' },
  { name: 'Algorithms · OS · ML Labs', date: '2024–25', tech: 'Python, C, Java', note: 'DAA, OS, MLT and OOP lab implementations', link: 'https://github.com/PavithraRajindra?tab=repositories' },
];

export const experience = [
  {
    org: 'Hexaware Technologies',
    role: 'AI Engineering Intern',
    short: 'AI Engineering Intern',
    dates: 'May 2025 – Oct 2025',
    years: '2025',
    where: 'Hi-Tech & Professional Services',
    points: [
      ['Fine-tuned LLMs for the enterprise:', 'developed LLM-based solutions and internal AI tooling for use cases across two business verticals, focused on applied model customisation.'],
      ['Measured against the business:', 'evaluated model performance against requirements and iterated on fine-tuning configurations.'],
      ['Wrote it up:', 'ran architectural analysis and fine-tuning experiments, documenting findings and recommendations in a formal report for cross-team knowledge sharing.'],
    ],
  },
  {
    org: 'HCL Research Project',
    role: 'Speech Data & Content',
    short: 'Research Contributor',
    dates: 'Jan 2025 – Mar 2025',
    years: '2025',
    where: 'Frequency Importance Functions — Tamil & Hindi',
    points: [
      ['Speech data collection:', 'recorded speech data and created sample texts for recording sessions.'],
      ['Research-grade content:', 'wrote natural-language content to keep samples accurate and clear.'],
    ],
  },
  {
    org: "Invente '26 — ModelWars",
    role: 'Event Head',
    short: 'Event Head',
    dates: 'Sep 2026',
    years: '2026',
    where: 'Technical Fest, SNU Chennai',
    points: [
      ['Led a 12-member committee:', 'end-to-end planning and execution of a gamified ML challenge.'],
      ['Owned the competition:', 'drove competition design, technical coordination and collaborative problem-solving.'],
      ['Before that (’25):', 'on the organising committee — dataset selection, challenge design and benchmarking models to set the right difficulty.'],
    ],
  },
  {
    org: 'Coding Club, SNU Chennai',
    role: 'ML Vertical Head',
    short: 'ML Vertical Head',
    dates: 'Dec 2025 – Jan 2026',
    years: '2025–26',
    where: 'GitHub × Machine Learning event',
    points: [
      ['Organised the workshop:', 'event planning, task delegation and challenge design for hands-on GitHub workflows in ML projects.'],
      ['Mentored juniors:', 'repository setup, pull-request workflows and debugging through an open-source-style ML challenge.'],
      ['Also:', 'Student Editor on the SiNEWS college newsletter.'],
    ],
  },
];

export const education = [
  { school: 'Shiv Nadar University Chennai', degree: 'B.Tech, CSE (AI & Data Science)', years: '2023 – 2027', score: 'CGPA 8.77' },
  { school: 'IIT Madras', degree: 'BS, Data Science & Applications (online)', years: '2024 – 2028', score: 'CGPA 8.19' },
  { school: 'Chettinad Vidyashram', degree: 'Class 12 & 10, CBSE', years: '2021 – 2023', score: '479 & 484 / 500' },
];

export const achievements = [
  ['2nd place', 'SNUC Hacks Spring 2025 — 130+ teams'],
  ['Smart India Hackathon', '2025 & 2023 participant'],
  ['6 Kaggle competitions', 'IIT Madras-organised, 2025–26'],
  ['Gold Medal', '100% in Class 10 Mathematics — school topper'],
];

export const skills = {
  'GenAI & LLMs': ['LLM fine-tuning', 'RAG', 'Agentic tool-calling', 'Prompt engineering', 'LangChain', 'FAISS', 'Hugging Face', 'Gemini API', 'Diffusion models', 'Embeddings', 'ASR'],
  'ML & Data': ['Scikit-learn', 'XGBoost', 'LightGBM', 'Pandas', 'NumPy', 'SciPy', 'statsmodels', 'Feature engineering', 'Ensembles', 'ARIMA / GARCH'],
  'DL & Vision': ['PyTorch', 'TensorFlow', 'Keras', 'OpenCV', 'CNNs', 'Transformers', 'Transfer learning', 'Autoencoders', 'Faster R-CNN'],
  'NLP & Speech': ['spaCy', 'Dependency parsing', 'Librosa', 'MFCC', 'Speaker diarization', 'RapidFuzz'],
  'Build & Ship': ['Python', 'SQL', 'C/C++', 'Java', 'JavaScript', 'FastAPI', 'Flask', 'React', 'Next.js', 'Vue 3', 'AWS', 'Docker', 'Git', 'W&B', 'Vercel'],
};

export const languages = ['English', 'Hindi', 'Tamil', 'Malayalam'];
