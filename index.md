---
layout: home
title: ""
---

<div class="hero-visual">
    <h1 class="hero-title">Carol Chu</h1>
    <p class="hero-role">Marketing Science Professional</p>
    <p class="hero-tagline">Applying Data Analytics, Machine Learning and AI into actionable business insight.</p>
</div>

<div class="skills-section">
    <div class="skill-col">
        <h4>Analytics</h4>
        <p>Python, R, SQL</p>
    </div>
    <div class="skill-col">
        <h4>ML & AI</h4>
        <p>PySpark, LLM Systems</p>
    </div>
    <div class="skill-col">
        <h4>Business</h4>
        <p>Marketing, PR, Strategy</p>
    </div>
</div>

## Projects

<div class="project-filters">
    <button class="filter-button active" data-filter="all">All</button>
    <button class="filter-button" data-filter="ai-llm">AI & LLM</button>
    <button class="filter-button" data-filter="marketing">Marketing</button>
    <button class="filter-button" data-filter="healthcare">Healthcare</button>
</div>

<div class="project-card" data-category="ai-llm">
    <div class="card-image-side">
        <img src="assets/images/llm-agents-preview.png" alt="LLM Multi-Agent Simulation">
    </div>
    <div class="card-content-side">
        <p class="card-label">Flagship Research</p>
        <h3 class="card-title">LLM-Based Multi-Agent Consumer Behavior Simulation</h3>
        <p class="card-description">Published research modeling complex consumer decisions and social dynamics using LLM-powered generative agents to pre-evaluate marketing strategies.</p>
        <p class="card-tech">Tech Stack: Python, DeepSeek API, Multi-threading, Agent-based Modeling</p>
        <div class="card-buttons">
            <a href="/projects/llm-simulation/" class="card-link">Learn More →</a>
            <a href="https://arxiv.org/abs/2510.18155" class="card-link" target="_blank">Read Paper →</a>
        </div>
    </div>
</div>

<div class="project-card" data-category="healthcare">
    <div class="card-image-side">
        <img src="assets/images/prostate-cancer-preview.jpg" alt="Prostate Cancer Prediction">
    </div>
    <div class="card-content-side">
        <p class="card-label highlight">Award Winner</p>
        <h3 class="card-title">Prostate Cancer Prediction - ML Clinical Decision Support</h3>
        <p class="card-description">Award-winning ML model achieving 87% recall on 73,530 patients to reduce unnecessary biopsies while maintaining clinical safety standards.</p>
        <p class="card-tech">Tech Stack: Python, Scikit-learn, Random Forest, SMOTE, GridSearchCV</p>
        <div class="card-buttons">
            <a href="/projects/prostate-cancer/" class="card-link">Learn More →</a>
            <a href="https://github.com/carolchu1208/ML_ProstateCancerPrediction" class="card-link" target="_blank">Code →</a>
        </div>
    </div>
</div>

<div class="project-card" data-category="marketing">
    <div class="card-image-side">
        <img src="assets/images/ad-click-preview.png" alt="Ad Click Prediction">
    </div>
    <div class="card-content-side">
        <h3 class="card-title">Ad Click Prediction - ML Model Optimization on Incomplete Data</h3>
        <p class="card-description">Optimized ML model achieving 81% F1-score despite 48% missing data, demonstrating 60% performance improvement through advanced PySpark ML techniques.</p>
        <p class="card-tech">Tech Stack: PySpark ML, Gradient Boosted Trees, Feature Engineering, Cross-Validation</p>
        <div class="card-buttons">
            <a href="/projects/ad-click-prediction/" class="card-link">Learn More →</a>
            <a href="https://github.com/carolchu1208/AdClickPrediction_ML_PySpark" class="card-link" target="_blank">Code →</a>
        </div>
    </div>
</div>

<p class="footer-note">© 2025 Carol Chu</p>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});
</script>
