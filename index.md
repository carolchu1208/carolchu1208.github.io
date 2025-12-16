---
layout: home
title: ""
---

<div class="hero-visual">
    <h1 class="hero-title">Data Analytics</h1>
    <p class="hero-tagline">Turning data and AI into marketing insight.</p>
</div>

<div class="focus-section">
    <div class="focus-list">
        <span class="focus-tag">Consumer Behavior</span>
        <span class="focus-tag">Marketing Strategy</span>
        <span class="focus-tag">AI Simulation</span>
        <span class="focus-tag">Business Analytics</span>
    </div>
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

<div class="flagship-section" data-category="ai-llm marketing">
    <p class="section-label">Flagship Research</p>
    <h2 class="flagship-title">LLM Agent Sandbox</h2>
    <p class="flagship-tagline">Test marketing strategies before execution.</p>
    <div class="flagship-buttons">
        <a href="/projects/llm-simulation/" class="button primary-button">Learn More</a>
        <a href="https://arxiv.org/abs/2510.18155" class="button secondary-button" target="_blank">Read Paper</a>
    </div>
    <div class="flagship-image-container">
        <img src="assets/images/llm-agents-preview.png" alt="LLM Agent Sandbox" class="flagship-image">
    </div>
    <p class="flagship-meta">Published October 2025 on arXiv</p>
</div>

<div class="products-grid">
    <div class="product-card" data-category="healthcare">
        <div class="product-image-container">
            <a href="/projects/prostate-cancer/">
                <img src="assets/images/prostate-cancer-preview.jpg" alt="Prostate Cancer Prediction" class="product-image">
            </a>
        </div>
        <h3 class="product-title">Cancer Prediction</h3>
        <p class="product-tagline">ML clinical decision support.<br>87% recall. Award-winning.</p>
        <div class="product-buttons">
            <a href="/projects/prostate-cancer/" class="button primary-button">Learn More</a>
            <a href="https://github.com/carolchu1208/ML_ProstateCancerPrediction" class="button secondary-button" target="_blank">GitHub</a>
        </div>
    </div>

    <div class="product-card" data-category="marketing">
        <div class="product-image-container">
            <a href="/projects/ad-click-prediction/">
                <img src="assets/images/ad-click-preview.png" alt="Ad Click Prediction" class="product-image">
            </a>
        </div>
        <h3 class="product-title">Ad Click Prediction</h3>
        <p class="product-tagline">Marketing analytics at scale.<br>81% F1-score with PySpark.</p>
        <div class="product-buttons">
            <a href="/projects/ad-click-prediction/" class="button primary-button">Learn More</a>
            <a href="https://github.com/carolchu1208/AdClickPrediction_ML_PySpark" class="button secondary-button" target="_blank">GitHub</a>
        </div>
    </div>
</div>

<p class="footer-note">© 2025 Carol Chu</p>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const flagship = document.querySelector('.flagship-section');
    const projectCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter flagship
            if (filter === 'all' || flagship.getAttribute('data-category').includes(filter)) {
                flagship.classList.remove('hidden');
            } else {
                flagship.classList.add('hidden');
            }

            // Filter cards
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
