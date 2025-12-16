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
    <p class="card-label">Flagship Research</p>
    <div class="card-image-box">
        <img src="assets/images/llm-agents-preview.png" alt="LLM Multi-Agent Simulation">
    </div>
    <h3 class="card-title">LLM-Based Multi-Agent Consumer Behavior Simulation</h3>
    <p class="card-tagline">Published research modeling consumer decisions using LLM-powered generative agents.</p>
    <p class="card-meta">Published October 2025 on arXiv</p>
    <div class="card-buttons">
        <a href="/projects/llm-simulation/" class="btn btn-primary">Learn More</a>
        <a href="https://arxiv.org/abs/2510.18155" class="btn btn-outline" target="_blank">Read Paper</a>
    </div>
</div>

<div class="project-card" data-category="healthcare">
    <p class="card-label highlight">Award Winner</p>
    <div class="card-image-box">
        <img src="assets/images/prostate-cancer-preview.jpg" alt="Prostate Cancer Prediction">
    </div>
    <h3 class="card-title">Cancer Prediction</h3>
    <p class="card-tagline">ML clinical decision support. 87% recall.</p>
    <p class="card-meta">Bronze Prize - Clark University Analytics Competition 2024</p>
    <div class="card-buttons">
        <a href="/projects/prostate-cancer/" class="btn btn-primary">Learn More</a>
        <a href="https://github.com/carolchu1208/ML_ProstateCancerPrediction" class="btn btn-outline" target="_blank">GitHub</a>
    </div>
</div>

<div class="project-card" data-category="marketing">
    <p class="card-label">Marketing Analytics</p>
    <div class="card-image-box">
        <img src="assets/images/ad-click-preview.png" alt="Ad Click Prediction">
    </div>
    <h3 class="card-title">Ad Click Prediction</h3>
    <p class="card-tagline">ML model optimization on incomplete data. 81% F1-score.</p>
    <p class="card-meta">Production-Ready Model 2024</p>
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
