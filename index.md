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
        <h4>Programming</h4>
        <p>Python, R, SQL, PySpark</p>
    </div>
    <div class="skill-col">
        <h4>ML & AI</h4>
        <p>Prompt Engineering, NLP, Fine-Tuning, Multi-Agent Simulation</p>
    </div>
    <div class="skill-col">
        <h4>Dashboarding</h4>
        <p>Google Analytics 360, Tableau, Looker Studio</p>
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
    <p class="card-highlight gold">Flagship Research</p>
    <h3 class="card-title">LLM-Based Multi-Agent Consumer Behavior Simulation</h3>
    <p class="card-intro">Built a virtual sandbox environment using LLM-powered autonomous agents to simulate consumer behavior and social dynamics. Agents make realistic purchase decisions, share word-of-mouth reviews, and respond to marketing interventions. Enables pre-testing marketing strategies before real-world deployment, reducing cost and risk. Published on arXiv as first author.</p>
    <div class="card-image-box">
        <img src="assets/images/llm-agents-preview.png" alt="LLM Multi-Agent Simulation">
    </div>
    <div class="card-buttons">
        <a href="/projects/llm-simulation/" class="btn btn-primary">Learn More</a>
        <a href="https://arxiv.org/abs/2510.18155" class="btn btn-outline" target="_blank">Read Paper</a>
    </div>
</div>

<div class="project-card" data-category="healthcare">
    <p class="card-highlight gold">Award Winner</p>
    <h3 class="card-title">Prostate Cancer Prediction - ML Clinical Decision Support</h3>
    <p class="card-intro">Developed a Random Forest classifier with SMOTE oversampling to predict prostate cancer risk from clinical data. Achieved 87% recall on 73,530 patient records while maintaining clinical safety standards. Model helps physicians reduce unnecessary biopsies by 20-30%, potentially saving $150-300M annually in US healthcare costs. Bronze Prize at Clark University Analytics Competition.</p>
    <div class="card-image-box">
        <img src="assets/images/prostate-cancer-preview.jpg" alt="Prostate Cancer Prediction">
    </div>
    <div class="card-buttons">
        <a href="/projects/prostate-cancer/" class="btn btn-primary">Learn More</a>
        <a href="https://github.com/carolchu1208/ML_ProstateCancerPrediction" class="btn btn-outline" target="_blank">GitHub</a>
    </div>
</div>

<div class="project-card" data-category="marketing">
    <p class="card-highlight gold">TechAd ML Optimization</p>
    <h3 class="card-title">Ad Click Prediction - ML Model Optimization on Incomplete Data</h3>
    <p class="card-intro">Built a Gradient Boosted Trees model using PySpark ML to predict ad click behavior from 10,000 customer interactions with 48% missing data. Applied median imputation, missing-value indicators, and cross-validated hyperparameter tuning. Achieved 81% F1-score with 60% performance improvement over baseline. Provides actionable insights for mobile-first, time-based ad targeting strategies.</p>
    <div class="card-image-box">
        <img src="assets/images/ad-click-preview.png" alt="Ad Click Prediction">
    </div>
    <div class="card-buttons">
        <a href="/projects/ad-click-prediction/" class="btn btn-primary">Learn More</a>
        <a href="https://github.com/carolchu1208/AdClickPrediction_ML_PySpark" class="btn btn-outline" target="_blank">GitHub</a>
    </div>
</div>

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
