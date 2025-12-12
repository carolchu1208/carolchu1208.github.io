---
layout: home
title: Home
---

# Hi, I'm Carol Chu 👋

<div class="competency-badges">
    <span class="badge">AI-Driven Analytics Specialist</span>
    <span class="badge">M.S. in Business Analytics</span>
    <span class="badge">LLM & Agentic AI Researcher</span>
</div>

With a **brand strategist background** and expertise in **cutting-edge LLM-based agentic systems**, I bring a unique perspective to solving complex business challenges. I've delivered **healthcare data ML projects**, collaborated with **Big Tech teams**, and managed **large-scale data pipelines** using PySpark and cloud technologies. My work leverages **agentic workflows and multi-agent AI simulation** to transform decision-making and drive measurable business impact through data science.

---

## Featured Projects

<div class="featured-projects">

{% for project in site.projects %}
  <div class="project-card">
    <a href="{{ project.url }}" class="project-link">
      {% if project.url contains 'llm-simulation' %}
        <img src="assets/images/llm-agents-preview.png" alt="{{ project.title }}" class="project-image">
      {% elsif project.url contains 'prostate' %}
        <img src="assets/images/prostate-cancer-preview.jpg" alt="{{ project.title }}" class="project-image">
      {% elsif project.url contains 'ad-click' %}
        <img src="assets/images/ad-click-preview.png" alt="{{ project.title }}" class="project-image">
      {% endif %}
    </a>

    <div class="card-content">
      <h3>{{ project.title }}</h3>

      <div class="project-tags">
        {% for tag in project.tags limit:2 %}
          <span class="tag-label">{{ tag }}</span>
        {% endfor %}
      </div>

      <p>{{ project.summary }}</p>

      <p class="tech-stack-list">
        <strong>Tech Stack:</strong> {{ project.tech_stack | join: ', ' }}
      </p>

      <div class="card-actions">
        <a href="{{ project.url }}" class="button primary-button">View Case Study</a>
        <a href="{{ project.github_repo }}" target="_blank" class="button secondary-button">Code (GitHub)</a>
      </div>
    </div>
  </div>
{% endfor %}

</div>

---

## About Me

I'm a **data analyst** with a unique blend of technical expertise and business acumen. With an M.S. in Business Analytics from Clark University and professional experience partnering with Fortune 500 brands on marketing strategy and analytics, I bring both technical depth and business context to data problems.

**What I Do:**
- **LLM & Agentic AI:** Build multi-agent systems for consumer behavior simulation and marketing optimization
- **Machine Learning & Predictive Analytics:** Develop production-ready models for healthcare, marketing, and business intelligence
- **Large-Scale Data Engineering:** Design PySpark pipelines, handle missing data at scale, optimize model performance
- **Business Strategy:** Translate complex data insights into actionable business recommendations

**Technical Skills:**
- **Languages:** Python, R, SQL
- **ML/AI:** Scikit-learn, PySpark ML, LLM APIs (DeepSeek), Agent-based Modeling, Multi-threading
- **Methods:** Supervised Learning, SMOTE, Cross-Validation, Feature Engineering, Hyperparameter Tuning
- **Tools:** Git, Jupyter, Virtual Environments, GridSearchCV

---

## Get in Touch

I'm always open to connecting with fellow data professionals, researchers, and teams working on impactful data problems.

📧 **Email:** [manlin.chu1998@gmail.com](mailto:manlin.chu1998@gmail.com)
💼 **LinkedIn:** [linkedin.com/in/manlinchu](https://www.linkedin.com/in/manlinchu/)
💻 **GitHub:** [github.com/carolchu1208](https://github.com/carolchu1208)

---

<p class="footer-note">Built with Jekyll & GitHub Pages | © 2024 Carol Chu</p>
