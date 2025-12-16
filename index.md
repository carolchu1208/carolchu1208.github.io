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
    <div class="skill-col expandable">
        <h4>Analytics <span class="toggle-arrow">▼</span></h4>
        <div class="skill-details">
            <p><strong>Programming:</strong> Python, R, SQL, PySpark</p>
            <p><strong>Data Pipelines:</strong> Databricks, ETL</p>
        </div>
    </div>
    <div class="skill-col expandable">
        <h4>LLM <span class="toggle-arrow">▼</span></h4>
        <div class="skill-details">
            <p>NLP, NLTK, Regex, SciPy, Tokenization, TF-IDF</p>
        </div>
    </div>
    <div class="skill-col expandable">
        <h4>ML <span class="toggle-arrow">▼</span></h4>
        <div class="skill-details">
            <p>Feature Engineering, Class Imbalance, Supervised/Unsupervised Models</p>
        </div>
    </div>
    <div class="skill-col expandable">
        <h4>Gen-AI <span class="toggle-arrow">▼</span></h4>
        <div class="skill-details">
            <p>Prompt Engineering, Multi-Agent Simulation, GenAI Workflow Automation</p>
        </div>
    </div>
    <div class="skill-col expandable">
        <h4>Dashboarding <span class="toggle-arrow">▼</span></h4>
        <div class="skill-details">
            <p>Google Analytics 360, Tableau, Looker Studio, PowerBI</p>
        </div>
    </div>
    <div class="skill-col expandable">
        <h4>Business <span class="toggle-arrow">▼</span></h4>
        <div class="skill-details">
            <p>Marketing, PR, Strategy</p>
        </div>
    </div>
</div>

## Applied Industrial Project

<div class="project-filters">
    <button class="filter-button active" data-filter="all">All</button>
    <button class="filter-button" data-filter="ai-llm">AI & LLM</button>
    <button class="filter-button" data-filter="marketing">Marketing</button>
    <button class="filter-button" data-filter="healthcare">Healthcare</button>
</div>

<div class="project-card" data-category="ai-llm">
    <div class="card-content">
        <p class="card-highlight gold">Flagship Research</p>
        <h3 class="card-title">LLM-Based Multi-Agent Consumer Behavior Simulation</h3>
        <p class="card-intro">Pre-deployment marketing strategy testing is expensive and resource-intensive. This project uses an LLM-based multi-agent sandbox to simulate consumer behavior and decision-making at scale. Published on arXiv as first author.</p>
        <p class="card-tags">Prompt Engineering · Multi-Agent Simulation · Consumer Behavior · Word-of-Mouth · Marketing Science</p>
        <div class="card-buttons">
            <a href="/projects/llm-simulation/" class="btn btn-primary">Learn More</a>
            <a href="https://arxiv.org/abs/2510.18155" class="btn btn-outline" target="_blank">Read Paper</a>
        </div>
    </div>
    <div class="card-image-box">
        <img src="assets/images/llm-agents-preview.png" alt="LLM Multi-Agent Simulation">
    </div>
</div>

<div class="project-card" data-category="healthcare">
    <div class="card-content">
        <p class="card-highlight gold">Award Winner</p>
        <h3 class="card-title">Prostate Cancer Prediction - ML Clinical Diagnosis Support</h3>
        <p class="card-intro">Unnecessary prostate biopsies cost the US healthcare system $12B annually and put healthy patients at risk. This project built a machine learning model to pre-screen 73,530 patients and reduce unnecessary biopsies by 20-30%. Bronze Prize at Clark University Analytics Competition.</p>
        <p class="card-tags">Healthcare ML · Clinical Decision Support · Random Forest · SMOTE · Class Imbalance</p>
        <div class="card-buttons">
            <a href="/projects/prostate-cancer/" class="btn btn-primary">Learn More</a>
            <a href="https://github.com/carolchu1208/ML_ProstateCancerPrediction" class="btn btn-outline" target="_blank">GitHub</a>
        </div>
    </div>
    <div class="card-image-box">
        <img src="assets/images/prostate-cancer-preview.jpg" alt="Prostate Cancer Prediction">
    </div>
</div>

<div class="project-card" data-category="marketing">
    <div class="card-content">
        <p class="card-highlight gold">TechAd ML Optimization</p>
        <h3 class="card-title">Ad Click Prediction - ML Model Optimization on Incomplete Data</h3>
        <p class="card-intro">Real-world marketing data is messy—48% missing values make accurate ad targeting difficult and wasteful. This project built a click prediction model that handles incomplete data and identifies which customers to target, when, and where. Achieved 81% F1-score with 60% improvement over baseline.</p>
        <p class="card-tags">Marketing Analytics · PySpark ML · Feature Engineering · Missing Data · A/B Testing</p>
        <div class="card-buttons">
            <a href="/projects/ad-click-prediction/" class="btn btn-primary">Learn More</a>
            <a href="https://github.com/carolchu1208/AdClickPrediction_ML_PySpark" class="btn btn-outline" target="_blank">GitHub</a>
        </div>
    </div>
    <div class="card-image-box">
        <img src="assets/images/ad-click-preview.png" alt="Ad Click Prediction">
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // Project filter functionality
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

    // Expandable skills functionality
    const skillCols = document.querySelectorAll('.skill-col.expandable');
    skillCols.forEach(col => {
        const header = col.querySelector('h4');
        header.addEventListener('click', function() {
            col.classList.toggle('expanded');
        });
    });
});
</script>
